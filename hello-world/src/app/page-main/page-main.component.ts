import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'page_main',
  templateUrl: './page-main.component.html',
  styleUrls: ['./page-main.component.css'],
})
export class PageMainComponent implements OnInit {
  constructor() {}

  ngOnInit(): void {}

  title = 'hello-world';

  setTitle(title: string) {
    this.title = title;
  }
}
