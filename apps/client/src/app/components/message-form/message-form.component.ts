import { Component, OnInit, Input } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'chat-message-form',
  templateUrl: './message-form.component.html',
  styleUrls: ['./message-form.component.scss']
})
export class MessageFormComponent implements OnInit {

  messageForm = new FormGroup({
    channel: new FormControl('', Validators.required),
    body: new FormControl('', Validators.required),
  });

  scrollRemaining = 0;

  messagesContainer: HTMLElement;

  constructor() { }

  ngOnInit(): void {
  }


  @Input()
  set channel(channel: string) {
    this.messageForm.patchValue({channel});
  }

}
