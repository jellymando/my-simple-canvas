import { EventMap, PainterOption, FigureData, RelativePosition } from "./types";
import { storage, getDrawOn, getFigures } from "lib/storage";
import paintBrush from "images/paint-brush.png";

export class Painter {
  private $canvas: null | HTMLCanvasElement;
  private ctx: null | CanvasRenderingContext2D;
  private drawOn: boolean;
  private isDrawing: boolean;
  private strokeColor: string | CanvasGradient | CanvasPattern;
  private thickness: number;
  private paintBrush: boolean;
  private positions: RelativePosition[];
  private figures: FigureData[];
  private removeDrawEvent: () => void;

  constructor() {
    this.$canvas = null;
    this.ctx = null;
    this.drawOn = getDrawOn();
    this.isDrawing = false;
    this.strokeColor = "red";
    this.thickness = 3;
    this.paintBrush = true;
    this.positions = [];
    this.figures = getFigures();
    this.removeDrawEvent = () => {};
  }

  add<Event extends keyof EventMap<HTMLCanvasElement>>(
    name: Event,
    callback: (event: EventMap<HTMLCanvasElement>[Event]) => void
  ) {
    if (!this.$canvas) return;
    this.$canvas.addEventListener(name, callback);

    return () => {
      this.$canvas!.removeEventListener(name, callback);
    };
  }

  drawStart(painterOption?: PainterOption) {
    if (!painterOption)
      painterOption = { color: this.strokeColor, thickness: this.thickness };
    this.isDrawing = true;
    this.setOptions(painterOption);
  }

  draw(position: RelativePosition, redraw = false) {
    if (!this.ctx) return;

    const drawX = position!.x;
    const drawY = position!.y;

    if (!this.isDrawing) {
      this.ctx.beginPath();
    } else {
      this.ctx.lineTo(drawX, drawY);
      this.ctx.stroke();
    }
    if (!redraw) {
      this.positions.push(position);
    }
  }

  drawEnd(redraw = false) {
    this.isDrawing = false;
    this.ctx!.beginPath();
    if (!redraw) {
      this.setFigures();
    }
  }

  redraw() {
    for (const figure of this.figures) {
      this.drawStart(figure.painterOption);
      figure.positions.forEach((position) => {
        this.draw(position, true);
      });
      this.drawEnd(true);
    }
  }

  setTarget(canvas: HTMLCanvasElement) {
    if (!canvas) return;
    this.$canvas = canvas;
    this.ctx = canvas.getContext("2d");
    this.setCursor();
    this.addDrawEvent();
    if (this.drawOn && this.figures.length > 0) this.redraw();
  }

  setOptions({ color, thickness, paintBrush }: PainterOption) {
    if (!this.ctx) return;
    if (color) {
      this.strokeColor = color;
      this.ctx.strokeStyle = color;
    }
    if (thickness) {
      this.thickness = thickness;
      this.ctx.lineWidth = thickness;
    }
    if (paintBrush) {
      this.paintBrush = paintBrush;
      this.setCursor();
    }
  }

  setCursor() {
    if (this.paintBrush) this.$canvas.style.cursor = `url(${paintBrush}), auto`;
  }
  
  getFigures() {
    this.figures = getFigures();
  }

  setFigures() {
    this.figures.push({
      painterOption: { color: this.strokeColor, thickness: this.thickness },
      positions: this.positions,
    });
    storage.set("figures", this.figures);
    this.positions = [];
  }

  addDrawEvent() {
    if (!this.$canvas) return;

    const handleMouseMove = (e: MouseEvent) => {
      const position = {
        x: e.offsetX,
        y: e.offsetY + (this.paintBrush && 56),
      };
      this.draw(position);
    };

    const handleTouchMove = (e: TouchEvent) => {
      if (e.target === this.$canvas) {
        e.preventDefault();
      }
      const rect = this.$canvas!.getBoundingClientRect();
      const position = {
        x: e.touches[0].clientX - rect.left,
        y: e.touches[0].clientY - rect.top,
      };
      this.draw(position);
    };

    const canvasEvents = [
      this.add("mousedown", () => this.drawStart()),
      this.add("mousemove", (e) => handleMouseMove(e)),
      this.add("mouseup", () => this.drawEnd()),
      this.add("mouseleave", () => this.drawEnd()),
      this.add("touchstart", () => this.drawStart()),
      this.add("touchmove", (e) => handleTouchMove(e)),
      this.add("touchend", () => this.drawEnd()),
    ];

    this.removeDrawEvent = () => canvasEvents.forEach((off) => off!());
  }

  save() {
    const image = this.$canvas.toDataURL("image/jpeg");
    const link = document.createElement("a");
    link.href = image;
    link.download = "your_paint";
    link.click();
  }

  clear() {
    this.ctx!.clearRect(
      0,
      0,
      this.$canvas!.clientWidth,
      this.$canvas!.clientHeight
    );
  }

  destroy() {
    this.removeDrawEvent();
    storage.remove("figures");
  }
}
