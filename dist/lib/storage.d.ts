import { FigureData } from "../Painter/types";
declare class Storage<T> {
    private _items;
    constructor();
    get<K extends keyof T>(key: K): T[K];
    all(): T;
    set<K extends keyof T>(key: K, value: T[K]): void;
    remove(key: keyof T): void;
    private _save;
    clear(): void;
}
export declare const storage: Storage<{
    drawOn?: boolean;
    figures?: FigureData[];
}>;
export declare const getDrawOn: () => boolean;
export declare const getFigures: () => FigureData[];
export {};
