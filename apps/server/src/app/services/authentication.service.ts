import * as jwt from 'jsonwebtoken';
import * as bcrypt from 'bcrypt';

import UserService from './user.service';
import { User } from '../entities/user.entity';
import { HttpError } from '../http-error';

class AuthenticationService {

  static async login(email: string, password: string) {
    const user = await UserService.findUserByEmail(email) as User;

    if(!user) {
      throw new HttpError('Email not found.', 401);
    }

    const match = AuthenticationService.compareHash(password, user.password);

    if(!match) {
      throw new HttpError('Invalid password.', 401);
    }

    return user;
  }

  static createHash(password: string, saltRounds: number = 10) {
    return bcrypt.hashSync(password, saltRounds);
  }

  static compareHash(password: string, hash: string) {
    return bcrypt.compareSync(password, hash);
  }

  static signToken({id, email}) {
    return jwt.sign({id, email}, process.env.APP_SECRET || 'secret');
  }

  static decodeToken(token: string) {
    return jwt.decode(token);
  }

}

export default AuthenticationService;