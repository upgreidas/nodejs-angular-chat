import { Component, OnInit, ViewChild, ElementRef, AfterViewInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { FormGroup, Validators, FormControl } from '@angular/forms';
import { Message } from '../../../interfaces/message';

@Component({
  selector: 'chat-chat-page',
  templateUrl: './chat-page.component.html',
  styleUrls: ['./chat-page.component.scss']
})
export class ChatPageComponent implements OnInit, AfterViewInit {

  messageForm = new FormGroup({
    channel: new FormControl('', Validators.required),
    body: new FormControl('', Validators.required),
  });

  currentChannel: string;

  messages: Message[] = [
    {author: '1', body: 'Test Message', timestamp: new Date().toISOString()},
    {author: '1', body: 'Test Message 2', timestamp: new Date().toISOString()},
    {author: '1', body: 'Test Message 3', timestamp: new Date().toISOString()},
    {author: '1', body: 'Test Message 4', timestamp: new Date().toISOString()},
  ];

  scrollRemaining = 0;

  @ViewChild('messagesList', {static: true}) messagesList: ElementRef;

  constructor(private route: ActivatedRoute) {
    this.route.params.subscribe(params => {
      this.currentChannel = params.slug;

      this.messageForm.patchValue({channel: this.currentChannel});

      if(this.messagesList) {
        this.scrollTo(0);
      }
    });
  }

  ngOnInit(): void {
    window.addEventListener('scroll', (e: Event) => {
      this.calculateScrollRemaining();
    });
  }

  ngAfterViewInit(): void {
    this.scrollTo(0);
  }

  calculateScrollRemaining() {
    this.scrollRemaining = this.messagesList.nativeElement.scrollHeight - (this.messagesList.nativeElement.scrollTop + this.messagesList.nativeElement.offsetHeight);
  }

  sendMessage() {
    if(this.messageForm.invalid) {
      return;
    }
    
    this.addMessage({
      author: '1',
      body: this.messageForm.value.body,
      timestamp: new Date().toISOString(),
    });

    this.messageForm.patchValue({body: ''});

    this.scrollTo(0);
  }

  addMessage(message: Message) {
    this.messages.push(message);
  }

  onInputResize(event: any) {
    this.scrollTo(this.scrollRemaining);

    this.calculateScrollRemaining();
  }

  scrollTo(value: number) {
    const maxScroll = this.messagesList.nativeElement.scrollHeight - this.messagesList.nativeElement.offsetHeight;

    this.messagesList.nativeElement.scroll(0, maxScroll - value);

    this.calculateScrollRemaining();
  }

}
