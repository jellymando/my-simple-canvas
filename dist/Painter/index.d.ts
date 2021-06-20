/// <reference types="node" />
import EventEmitter from "events";
import { EventMap, PainterOption, RelativePosition } from "./types";
export declare class Painter {
    private canvas;
    private ctx;
    private drawOn;
    private isDrawing;
    private strokeColor;
    private thickness;
    private paintBrush;
    private positions;
    private figures;
    private emitter;
    private removeDrawEvent;
    constructor();
    on(name: "drawStart" | "draw" | "drawEnd" | "figures", listener: (...args: any[]) => void): EventEmitter;
    add<Event extends keyof EventMap<HTMLCanvasElement>>(name: Event, callback: (event: EventMap<HTMLCanvasElement>[Event]) => void): () => void;
    drawStart(painterOption?: PainterOption): void;
    draw(position: RelativePosition, redraw?: boolean): void;
    drawEnd(redraw?: boolean): void;
    redraw(): void;
    setTarget(canvas: HTMLCanvasElement): void;
    setOptions({ color, thickness, paintBrush }: PainterOption): void;
    setCursor(): void;
    getFigures(): void;
    setFigures(): void;
    addDrawEvent(): void;
    clear(): void;
    destroy(): void;
}
