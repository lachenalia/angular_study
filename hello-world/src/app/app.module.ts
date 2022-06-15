import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { TestComponent } from './test/test.component';
import { PageMainComponent } from './page-main/page-main.component';
import { PageBoardComponent } from './page-board/page-board.component';
import { PageMyComponent } from './page-my/page-my.component';

@NgModule({
  declarations: [
    AppComponent,
    TestComponent,
    PageMainComponent,
    PageBoardComponent,
    PageMyComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
