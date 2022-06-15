import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  isHome = false;
  isBoard = true;
  isMyPage = false;

  goHome() {
    this.isHome = true;
    this.isBoard = false;
    this.isMyPage = false;
  }
  goBoard() {
    this.isHome = false;
    this.isBoard = true;
    this.isMyPage = false;
  }
  goMyPage() {
    this.isHome = false;
    this.isBoard = false;
    this.isMyPage = true;
  }
}
