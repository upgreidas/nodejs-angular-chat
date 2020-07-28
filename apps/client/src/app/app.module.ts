import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { LoginPageComponent } from './components/pages/login-page/login-page.component';
import { ChatPageComponent } from './components/pages/chat-page/chat-page.component';

@NgModule({
  declarations: [AppComponent, LoginPageComponent, ChatPageComponent],
  imports: [BrowserModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
