import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-multiauth-amon',
  templateUrl: './multiauth-amon.component.html',
  styleUrls: ['./multiauth-amon.component.css']
})
export class MultiauthAmonComponent implements OnInit {

  test = true;
  multilevelExpanded = false;
  messageMenuExpanded = false;
  userMenuExpanded = false;
  sidebarExpanded = false;

  onClick() {
    this.test = !this.test;
  }

  expandMultilevel() {
    this.multilevelExpanded = !this.multilevelExpanded;
  }

  expandMessageMenu() {
    this.messageMenuExpanded = !this.messageMenuExpanded;
  }

  expandUserMenu() {
    this.userMenuExpanded = !this.userMenuExpanded;
  }

  expandSideBar() {
    this.sidebarExpanded = !this.sidebarExpanded;
  }

  constructor() { }

  ngOnInit() {
  }

}
