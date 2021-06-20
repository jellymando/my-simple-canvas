import { ReactElement } from "react";
declare type ControlItemProps = {
    icon?: string;
    title?: string;
    text?: string;
    active?: boolean;
    disable?: boolean;
    dropdown?: ReactElement;
    activeDropdown?: boolean;
    hidden?: boolean;
    palette?: string;
    color?: string;
    onSelectItem?: (item: string) => void;
    onClick?: () => void;
};
export declare const ControlItem: ({ icon, title, text, active, disable, dropdown, activeDropdown, hidden, palette, color, onSelectItem, onClick, }: ControlItemProps) => any;
export {};
