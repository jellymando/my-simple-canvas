declare type SimpleCanvasProps = {
    width?: number;
    height?: number;
    onDraw?: (params: any) => void;
};
declare type SimpleCanvasToolbarProps = {
    useThickness?: boolean;
    minTickness?: number;
    maxTickness?: number;
    useColor?: boolean;
    colors?: string | string[];
};
export declare const SimpleCanvas: ({ width, height, onDraw }: SimpleCanvasProps) => any;
export declare const SimpleToolbar: (props: SimpleCanvasToolbarProps) => any;
export {};
