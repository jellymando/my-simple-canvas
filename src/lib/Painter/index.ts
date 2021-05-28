import EventEmitter, { Listener } from './EventEmitter';
import {
    EventMap,
    DrawType,
    DrawThickness,
    DrawColor,
    DrawOption,
    Figure,
    FigureData,
    RelativePosition,
    DrawingEvent,
} from './types';

export interface DrawOptions {
    touch?: Touch | MouseEvent;
    position?: RelativePosition;
}

export interface PainterOptions {
    color?: string | CanvasGradient | CanvasPattern;
    thickness?: number;
}

export interface CanvasSize {
    width: number;
    height: number;
}

export default class Painter {
    private canvas: null | HTMLCanvasElement;
    private ctx: null | CanvasRenderingContext2D;
    private isDrawing: boolean;
    private strokeColor: string | CanvasGradient | CanvasPattern;
    private thickness: number;
    private emitter: EventEmitter;
    private removeDrawEvent: () => void;

    constructor({ color, thickness }: PainterOptions) {
        this.canvas = null;
        this.ctx = null;
        this.isDrawing = false;
        this.strokeColor = color || 'red';
        this.thickness = thickness || 3;
        this.emitter = new EventEmitter();
        this.removeDrawEvent = () => {};

        this.addDrawEvent();
    }

    setTarget(canvas: HTMLCanvasElement) {
        this.canvas = canvas;
        this.ctx = canvas.getContext('2d');
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
        return () => this.canvas!.removeEventListener(name, callback);
    }

    drawStart() {
        this.isDrawing = true;
        this.setOptions({ color: this.strokeColor, thickness: this.thickness });
    }

    draw(position: RelativePosition) {
        const drawX = position!.x;
        const drawY = position!.y;
        if (!this.isDrawing) {
            this.ctx!.beginPath();
        } else {
            this.ctx!.lineTo(drawX, drawY);
            this.ctx!.stroke();
        }
    }

    drawEnd() {
        this.isDrawing = false;
        this.ctx!.beginPath();
    }

    setOptions({ color, thickness }: DrawOption) {
        this.ctx!.strokeStyle = color;
        this.ctx!.lineWidth = thickness;
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
            const position = { x: e.touches[0].clientX, y: e.touches[0].clientY - rect.top };
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
    }
}
