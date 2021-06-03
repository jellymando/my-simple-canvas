import EventEmitter, { Listener } from './EventEmitter';
import { EventMap, PainterOption, FigureData, RelativePosition } from './types';
import { storage, getDrawingOn, getFigures } from '../storage';

export default class Painter {
    private canvas: null | HTMLCanvasElement;
    private ctx: null | CanvasRenderingContext2D;
    private isDrawing: boolean;
    private strokeColor: string | CanvasGradient | CanvasPattern;
    private thickness: number;
    private positions: RelativePosition[];
    private figures: FigureData[];
    private emitter: EventEmitter;
    private removeDrawEvent: () => void;

    constructor({ color, thickness }: PainterOption) {
        this.canvas = null;
        this.ctx = null;
        this.isDrawing = getDrawingOn();
        this.strokeColor = color || 'red';
        this.thickness = thickness || 3;
        this.positions = [];
        this.figures = getFigures();
        this.emitter = new EventEmitter();
        this.removeDrawEvent = () => {};
    }

    setTarget(canvas: HTMLCanvasElement) {
        this.canvas = canvas;
        this.ctx = canvas.getContext('2d');
        this.addDrawEvent();
        if (this.isDrawing && this.figures.length > 0) this.redraw();
    }

    on(name: 'drawStart' | 'draw' | 'drawEnd' | 'figures', listener: Listener) {
        return this.emitter.on(name, listener);
    }

    add<Event extends keyof EventMap<HTMLCanvasElement>>(
        name: Event,
        callback: (event: EventMap<HTMLCanvasElement>[Event]) => void
    ) {
        if (!this.canvas) return;
        this.canvas.addEventListener(name, callback);

        return () => {
            this.canvas!.removeEventListener(name, callback);
        };
    }

    drawStart() {
        this.isDrawing = true;
        this.setOptions({ color: this.strokeColor, thickness: this.thickness });
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
            this.emitter.emit('draw', position);
        }
    }

    drawEnd() {
        this.isDrawing = false;
        this.ctx!.beginPath();
        this.setFigures();
        this.emitter.emit('drawEnd');
    }

    redraw() {
        for (const figure of this.figures) {
            this.setOptions(figure.painterOption);
            figure.positions.forEach((position) => {
                this.draw(position, true);
            });
            this.ctx!.beginPath();
        }
    }

    setOptions({ color, thickness }: PainterOption) {
        if (!this.ctx) return;
        this.ctx.strokeStyle = color;
        this.ctx.lineWidth = thickness;
    }

    getFigures() {
        this.figures = getFigures();
    }

    setFigures() {
        this.figures.push({
            painterOption: { color: this.strokeColor, thickness: this.thickness },
            positions: this.positions,
        });
        storage.set('figures', this.figures);
        this.positions = [];
        this.emitter.emit('figures');
    }

    addDrawEvent() {
        if (!this.canvas) return;

        const handleMouseMove = (e: MouseEvent) => {
            const position = { x: e.clientX, y: e.clientY };
            this.draw(position);
        };

        const handleTouchMove = (e: TouchEvent) => {
            if (e.target === this.canvas) {
                e.preventDefault();
            }
            const rect = this.canvas!.getBoundingClientRect();
            const position = { x: e.touches[0].clientX - rect.left, y: e.touches[0].clientY - rect.top };
            this.draw(position);
        };

        const canvasEvents = [
            this.add('mousedown', (e) => handleMouseMove(e)),
            this.add('mousedown', () => this.drawStart()),
            this.add('mouseup', () => this.drawEnd()),
            this.add('mouseleave', () => this.drawEnd()),
            this.add('touchstart', () => this.drawStart()),
            this.add('touchmove', (e) => handleTouchMove(e)),
            this.add('touchend', () => this.drawEnd()),
        ];

        this.removeDrawEvent = () => canvasEvents.forEach((off) => off!());
    }

    clear() {
        this.ctx!.clearRect(0, 0, this.canvas!.clientWidth, this.canvas!.clientHeight);
    }

    destroy() {
        this.removeDrawEvent();
        this.emitter.allOff();
        storage.remove('figures');
    }
}
