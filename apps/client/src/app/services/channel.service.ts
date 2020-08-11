import { Injectable } from '@angular/core';
import { Channel } from '../interfaces/channel';

@Injectable({
  providedIn: 'root'
})
export class ChannelService {

  private _channels: Channel[] = [];

  constructor() { }

  setChannels(channels: Channel[]) {
    this._channels = channels;
  }

  get channels() {
    return this._channels;
  }
}
