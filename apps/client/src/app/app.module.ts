import { BrowserModule } from '@angular/platform-browser';
import { NgModule, APP_INITIALIZER } from '@angular/core';
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
import { AuthenticationService } from './services/authentication.service';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { TokenInterceptor } from './token.interceptor';
import { BootstrapService } from './services/bootstrap.service';
import { WebsocketService } from './services/websocket.service';
import { MessageService } from './services/message.service';

export function initApp(bootstrapService: BootstrapService) {
  return () => { 
    return new Promise((resolve, reject) => {
      bootstrapService.load()
        .subscribe(res => {
          resolve();
        }, err => {
          resolve();
        });
    });
  }
}

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
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
    AutosizeModule
  ],
  providers: [
    AuthenticationService,
    BootstrapService,
    { provide: HTTP_INTERCEPTORS, useClass: TokenInterceptor, multi: true },
    { provide: APP_INITIALIZER, useFactory: initApp, deps: [BootstrapService], multi: true },
    WebsocketService,
    MessageService,
  ],
  bootstrap: [AppComponent],
})
export class AppModule { }
