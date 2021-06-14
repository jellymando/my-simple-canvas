export type EventMap<Element = HTMLElement> = Element extends Document
  ? DocumentEventMap
  : HTMLElementEventMap;
export type RelativePosition = { x: number; y: number };

export interface PainterOption {
  color: string | CanvasGradient | CanvasPattern;
  thickness: number;
  canvas?: HTMLCanvasElement;
}

export interface CanvasSize {
  width: number;
  height: number;
}

export interface DrawingEvent {
  originalEvent: MouseEvent | TouchEvent;
  relativePosition: RelativePosition;
}

export interface FigureData {
  painterOption: PainterOption;
  positions: RelativePosition[];
}
