import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-multiauth-amon',
  templateUrl: './multiauth-amon.component.html',
  styleUrls: ['./multiauth-amon.component.css']
})
export class MultiauthAmonComponent implements OnInit {

  test = "nimic";
  onClick() {
    this.test = "altceva";
  }
  constructor() { }

  ngOnInit() {
  }

}
