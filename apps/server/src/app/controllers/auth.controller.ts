import { Request, Response } from 'express';

import { Controller } from '../controller';
import AuthenticationService from '../services/authentication.service';

export class AuthController extends Controller {
  
  routes() {
    return this.router
      .post('/login', this.login);
  }

  login = async (req: Request, res: Response) => {
    const user = await AuthenticationService.login(req.body.email, req.body.password);
    const token = AuthenticationService.signToken(user);
    
    res.send({token});
  }

}