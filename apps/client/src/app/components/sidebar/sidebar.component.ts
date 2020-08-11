import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ChannelService } from '../../services/channel.service';

@Component({
  selector: 'chat-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.scss']
})
export class SidebarComponent implements OnInit {

  channels = [
    {name: 'Main Channel', slug: 'main'},
    {name: 'Extra Channel', slug: 'extra'},
    {name: 'Secret Channel', slug: 'secret'},
  ];
  
  currentChannel: string;

  constructor(
    public channelService: ChannelService,
    private route: ActivatedRoute,
  ) {
    this.route.params.subscribe(params => {
      this.currentChannel = params.slug;
    });
  }

  ngOnInit(): void {
  }

}
