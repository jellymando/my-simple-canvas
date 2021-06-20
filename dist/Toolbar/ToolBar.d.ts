import { Painter } from 'Painter';
declare type ToolBarProps = {
    painter: Painter;
    useThickness?: boolean;
    minTickness?: number;
    maxTickness?: number;
    useColor?: boolean;
    colors?: object;
};
export declare const ToolBar: ({ painter, useThickness, minTickness, maxTickness, useColor, colors, }: ToolBarProps) => any;
export {};
