import DB from './database.service';

import { Message } from '../entities/message.entity';

interface StoreMessageDTO {
  userId: number;
  room: string;
  body: string;
}

class MessageService {
  static async storeMessage({userId, room, body}: StoreMessageDTO) {
    const timestamp = Date.now();
    
    const message = MessageService.repository
      .create({
        userId,
        room,
        body,
        timestamp,
      });

    return MessageService.repository
      .save(message);
  }

  static get repository() {
    return DB.getRepository(Message);
  }
}

export default UserService;