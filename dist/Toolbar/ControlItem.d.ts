declare type ControlItemProps = {
    title?: string;
    active?: boolean;
    disable?: boolean;
    onClickItem?: () => void;
    onClick?: () => void;
    children?: any;
};
export declare const ControlItem: ({ title, active, disable, onClickItem, onClick, children }: ControlItemProps) => any;
export {};
