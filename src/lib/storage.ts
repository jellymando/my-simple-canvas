import { FigureData } from "../Painter/types";

const ROOT_KEY = <const>"painter";

class Storage<T> {
  private _items: T;

  constructor() {
    this._items = JSON.parse(
      sessionStorage.getItem(ROOT_KEY) || JSON.stringify({ log: [] })
    );
  }

  get<K extends keyof T>(key: K): T[K] {
    return this._items[key];
  }

  all(): T {
    return this._items;
  }

  set<K extends keyof T>(key: K, value: T[K]): void {
    this._items[key] = value;
    this._save();
  }

  remove(key: keyof T): void {
    delete this._items[key];
    this._save();
  }

  private _save(): void {
    sessionStorage.setItem(ROOT_KEY, JSON.stringify(this._items));
  }

  clear(): void {
    this._items = { log: [] } as any;
    this._save();
  }
}

export const storage = new Storage<{
  drawOn?: boolean;
  figures?: FigureData[];
}>();

export const getDrawOn = () => {
  return storage.get("drawOn") || false;
};

export const getFigures = () => {
  return storage.get("figures") || [];
};
