import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-left-nav',
  templateUrl: './left-nav.component.html',
  styleUrls: ['./left-nav.component.css']
})
export class LeftNavComponent implements OnInit {

  public links: string[] = [];

  constructor() {
    for (let i = 0; i < 30; i++) {
      this.links.push("link " + i);
    }
  }

  ngOnInit() {
  }

}
