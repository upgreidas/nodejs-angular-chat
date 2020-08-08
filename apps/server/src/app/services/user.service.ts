import DB from './database.service';

import { User } from '../entities/user.entity';

interface CreateUserDTO {
  name: string;
  email: string;
  password: string;
  avatarPath?: string;
}

class UserService {

  static findUserByID(id: number) {
    return UserService.repository
      .findOne({id});
  }

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

  static async createUser({name, email, password, avatarPath}: CreateUserDTO) {
    if(!name) {
      throw new Error('Missing name property.');
    }
    
    if(!email) {
      throw new Error('Missing email property.');
    }
    
    if(!password) {
      throw new Error('Missing password property.');
    }
    
    const emailIsUnique = await UserService.emailIsUnique(email);

    if(!emailIsUnique) {
      throw new Error(`Email ${email} is already taken.`);
    }

    const createdAt = Date.now();
    
    const user = UserService.repository
      .create({
        name,
        email,
        password,
        avatarPath,
        createdAt,
      });

    return UserService.repository
      .save(user);
  }

  static get repository() {
    return DB.getRepository(User);
  }

}

export default UserService;