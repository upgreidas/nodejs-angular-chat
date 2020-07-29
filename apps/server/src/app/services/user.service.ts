import DB from './database.service';

import { User } from '../entities/user.entity';

class UserService {

  static findUserByEmail(email: string) {
    return UserService.repository
      .findOne({email});
  }

  static emailIsUnique(email: string) {
    return new Promise(async (resolve, reject) => {
      const result = await UserService.repository
        .count({email});
        
      resolve(!Boolean(result));
    });
  }

  static async createUser(data: any) {
    if(!data.name) {
      throw new Error('Missing name property.');
    }
    
    if(!data.email) {
      throw new Error('Missing email property.');
    }
    
    if(!data.password) {
      throw new Error('Missing password property.');
    }
    
    const emailIsUnique = await UserService.emailIsUnique(data.email);

    if(!emailIsUnique) {
      throw new Error(`Email ${data.email} is already taken.`);
    }
    
    const user = UserService.repository
      .create(data);

    return UserService.repository
      .save(user);
  }

  static get repository() {
    return DB.getRepository(User);
  }

}

export default UserService;