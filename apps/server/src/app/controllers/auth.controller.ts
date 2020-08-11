import { Request, Response, NextFunction } from 'express';
import { check } from 'express-validator';

import { Controller } from '../controller';
import AuthenticationService from '../services/authentication.service';
import { validate } from '../../helpers';
import ChannelService from '../services/channel.service';

const loginRules = [
  check('email').notEmpty().withMessage('Email is missing.'),
  check('password').notEmpty().withMessage('Password is missing.'),
];

export class AuthController extends Controller {
  
  routes() {
    return this.router
      .post('/login', loginRules, validate, this.login)
      .get('/bootstrap', this.bootstrap);
  }

  login = async (req: Request, res: Response, next: NextFunction) => {
    try {
      const user = await AuthenticationService.login(req.body.email, req.body.password);
      const token = AuthenticationService.signToken(user);
      
      res.send({token});
    } catch(e) {
      next(e);
    }
  }

  bootstrap = async (req: Request, res: Response, next: NextFunction) => {
    try {
      const user = req['user'];
      const channels = await ChannelService.listChannels();

      res.send({user, channels});
    } catch(e) {
      next(e);
    }
  }

}