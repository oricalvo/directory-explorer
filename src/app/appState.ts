export interface AppState {
  dir1: Directory;
  dir2: Directory;
}

export interface File {
  name: string;
  path?: string;
}

export type Item = File | Directory;

export interface Directory {
  name: string;
  path?: string;
  items: Item[];
}

