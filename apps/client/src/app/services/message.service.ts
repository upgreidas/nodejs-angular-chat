import { Injectable } from '@angular/core';
import { WebsocketService } from './websocket.service';
import { Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class MessageService {

  onMessage = new Subject();

  constructor(
    private websocketService: WebsocketService,
  ) {
    this.websocketService.socket.on('message', (message) => {
      this.onMessage.next(message);
    });
  }

  sendMessage(room: string, body: string) {
    this.websocketService.socket.emit('message', {room, body});
  }

}
