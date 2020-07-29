import { Component, OnInit, Input } from '@angular/core';
import { Message } from '../../interfaces/message';

@Component({
  selector: 'chat-message',
  templateUrl: './message.component.html',
  styleUrls: ['./message.component.scss']
})
export class MessageComponent implements OnInit {

  @Input() message: Message;

  constructor() { }

  ngOnInit(): void {
  }

}
