import { Painter } from "./Painter";
declare type SimpleCanvasProps = {
    width?: number;
    height?: number;
};
declare type SimpleCanvasToolbarProps = {
    painter: Painter;
    useThickness?: boolean;
    minTickness?: number;
    maxTickness?: number;
    useColor?: boolean;
    colors?: object;
};
export declare const SimpleCanvas: ({ width, height }: SimpleCanvasProps) => any;
export declare const SimpleToolbar: (props: SimpleCanvasToolbarProps) => any;
export {};
