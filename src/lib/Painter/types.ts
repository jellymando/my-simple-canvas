export type EventMap<Element = HTMLElement> = Element extends Document ? DocumentEventMap : HTMLElementEventMap;
export type RelativePosition = { x: number; y: number };
export type DrawType = 'freeLine' | 'straightLine' | 'rectangle' | 'ellipse' | 'arrow';
export type DrawThickness = number;
export type DrawColor = string | CanvasGradient | CanvasPattern;
export type DrawingListener = (e: DrawingEvent) => void;
export type DrawingEventSource = AsyncGenerator<DrawingEvent>;

export interface DrawOption {
    color: DrawColor;
    thickness: DrawThickness;
}

export interface DrawingEvent {
    originalEvent: MouseEvent | TouchEvent;
    relativePosition: RelativePosition;
}

export interface FigureData {
    drawOption: DrawOption;
    positions: RelativePosition[];
}

export interface Figure {
    readonly data: FigureData;
    drawing(ctx: CanvasRenderingContext2D, events: DrawingEventSource): void;
    render(ctx: CanvasRenderingContext2D): void;
}
