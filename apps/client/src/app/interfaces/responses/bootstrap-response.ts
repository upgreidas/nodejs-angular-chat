import { User } from './../user';
import { Channel } from '../channel';

export interface BootstrapResponse {
  user?: User;
  channels?: Channel[];
}