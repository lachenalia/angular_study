import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'page_board',
  templateUrl: './page-board.component.html',
  styleUrls: ['./page-board.component.css'],
})
export class PageBoardComponent implements OnInit {
  constructor() {}
  writeVisible = false;

  ngOnInit(): void {}
  activeWrite() {
    this.writeVisible = true;
  }

  write() {
    this.writeVisible = false;
  }
}
