import { Component, OnInit } from '@angular/core';
import {RootService} from "../services/root.service";
import {AppState} from "../appState";

@Component({
  selector: 'de-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  constructor(private rootService: RootService) {
  }

  ngOnInit() {
  }

  get state(): AppState {
    return this.rootService.state;
  }

}
