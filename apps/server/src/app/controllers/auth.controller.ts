import { Request, Response } from 'express';
import { check } from 'express-validator';

import { Controller } from '../controller';
import AuthenticationService from '../services/authentication.service';
import { validate } from '../../helpers';

const loginRules = [
  check('email').notEmpty().withMessage('Email is missing.'),
  check('password').notEmpty().withMessage('Password is missing.'),
];

export class AuthController extends Controller {
  
  routes() {
    return this.router
      .post('/login', loginRules, validate, this.login);
  }

  login = async (req: Request, res: Response) => {
    const user = await AuthenticationService.login(req.body.email, req.body.password);
    const token = AuthenticationService.signToken(user);
    
    res.send({token});
  }

}