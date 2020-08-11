import DB from './database.service';

import { Channel } from '../entities/channel.entity';
import { HttpError } from '../http-error';

interface CreateChannelDTO {
  slug: string;
  name: string;
}

class ChannelService {
  static async createChannel({slug, name}: CreateChannelDTO) {
    const createdAt = Date.now();

    const count = await ChannelService.repository
      .count({slug});

    if(count > 0) {
      throw new HttpError(`Slug ${slug} is already in use.`, 400);
    }

    const channel = ChannelService.repository
      .create({
        slug,
        name,
        createdAt,
      });

    return ChannelService.repository
      .save(channel);
  }

  static listChannels() {
    return ChannelService.repository
      .createQueryBuilder()
      .getMany();
  }

  static get repository() {
    return DB.getRepository(Channel);
  }
}

export default ChannelService;