import { Component, OnInit } from '@angular/core';

@Component({
  selector: '.app_test',
  templateUrl: './test.component.html',
  styleUrls: ['./test.component.css'],
})
export class TestComponent implements OnInit {
  testName = 'Selena';

  public name = 'Selena';
  public myId = 'lachenalia';
  public isdisabled = false;
  public text_success = 'text-success';
  public main_component = 'app-test';
  public greeting = '';

  constructor() {}

  ngOnInit(): void {}

  onClick() {
    console.log('hello world!');
    this.greeting = 'welcome to angular';
  }
}
