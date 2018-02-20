import { Injectable } from '@angular/core';
import {AppStore, ServiceStore} from "t-rex";
import {AppState} from "../appState";

export const appStore = new AppStore<AppState>();

@Injectable()
export class RootService {
  store = ServiceStore.create<AppState>("/", {
    dir1: {
      name: "c",
      items: [
        {
          name: "Program Files",
          items: [],
        },
        {
          name: "Program Files x86",
          items: [],
        },
        {
          name: "1.txt",
        },
        {
          name: "2.txt",
        },
      ],
    },

    dir2: {
      name: "c",
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
