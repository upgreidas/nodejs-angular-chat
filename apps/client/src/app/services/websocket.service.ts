import { environment } from './../../environments/environment';
import { Injectable } from '@angular/core';
import io from 'socket.io-client';

@Injectable({
  providedIn: 'root'
})
export class WebsocketService {

  socket;

  constructor() { }

  connect() {
    this.socket = io(environment.webSocketUrl);
  }

}
