import {Component, Input, OnInit} from '@angular/core';
import {Directory} from "../appState";

@Component({
  selector: 'de-directory-explorer',
  templateUrl: './directory-explorer.component.html',
  styleUrls: ['./directory-explorer.component.css']
})
export class DirectoryExplorerComponent implements OnInit {
  @Input() directory: Directory;

  constructor() { }

  ngOnInit() {
  }

}
