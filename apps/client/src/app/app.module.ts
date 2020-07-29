import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule }   from '@angular/forms';
import { AutosizeModule } from 'ngx-autosize';

import { AppComponent } from './app.component';
import { LoginPageComponent } from './components/pages/login-page/login-page.component';
import { ChatPageComponent } from './components/pages/chat-page/chat-page.component';
import { AppRoutingModule } from './app-routing.module';
import { SidebarComponent } from './components/sidebar/sidebar.component';
import { MessageFormComponent } from './components/message-form/message-form.component';
import { MessageComponent } from './components/message/message.component';
import { UserListComponent } from './components/user-list/user-list.component';

@NgModule({
  declarations: [
    AppComponent, 
    LoginPageComponent, 
    ChatPageComponent, 
    SidebarComponent, 
    MessageFormComponent, 
    MessageComponent, 
    UserListComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    AutosizeModule
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule { }
