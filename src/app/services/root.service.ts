import { Injectable } from '@angular/core';
import {AppStore, ServiceStore} from "t-rex";
import {AppState} from "../appState";

export const appStore = new AppStore<AppState>();

@Injectable()
export class RootService {
  store = ServiceStore.create<AppState>("/", {
    dir1: {
      name: "c",
      path: "/c",
      items: [{
        name: "1.txt",
        path: "/c/1.txt"
      }],
    },

    dir2: {
      name: "c",
      path: "/c",
      items: [],
    },
  });

  constructor() {
    appStore.init([
      this
    ]);
  }

  get state() {
    return this.store.getState();
  }
}
