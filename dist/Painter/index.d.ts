/// <reference types="node" />
import EventEmitter from "events";
import { EventMap, PainterOption, RelativePosition } from "./types";
export default class Painter {
    private canvas;
    private ctx;
    private drawOn;
    private isDrawing;
    private strokeColor;
    private thickness;
    private positions;
    private figures;
    private emitter;
    private removeDrawEvent;
    constructor({ color, thickness }: PainterOption);
    setTarget(canvas: HTMLCanvasElement): void;
    on(name: "drawStart" | "draw" | "drawEnd" | "figures", listener: (...args: any[]) => void): EventEmitter;
    add<Event extends keyof EventMap<HTMLCanvasElement>>(name: Event, callback: (event: EventMap<HTMLCanvasElement>[Event]) => void): () => void;
    drawStart(): void;
    draw(position: RelativePosition, redraw?: boolean): void;
    drawEnd(): void;
    redraw(): void;
    setOptions({ color, thickness }: PainterOption): void;
    getFigures(): void;
    setFigures(): void;
    addDrawEvent(): void;
    clear(): void;
    destroy(): void;
}
