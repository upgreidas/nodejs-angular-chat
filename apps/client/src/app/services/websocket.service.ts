import { environment } from './../../environments/environment';
import { Injectable } from '@angular/core';
import io from 'socket.io-client';
import { AuthenticationService } from './authentication.service';

@Injectable({
  providedIn: 'root'
})
export class WebsocketService {

  socket;

  constructor(
    private authenticationService: AuthenticationService,
  ) { }

  connect() {
    this.socket = io(environment.webSocketUrl, {
      query: {
        token: this.authenticationService.token,
      }
    });
  }

}
