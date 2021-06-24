import { Painter } from 'Painter';
declare type ToolbarProps = {
    painter: Painter;
    useThickness?: boolean;
    minTickness?: number;
    maxTickness?: number;
    useColor?: boolean;
    colors?: object;
};
export declare const Toolbar: ({ painter, useThickness, minTickness, maxTickness, useColor, colors, }: ToolbarProps) => any;
export {};
