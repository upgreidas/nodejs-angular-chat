import { Request, Response, NextFunction } from 'express';

import AuthenticationService from '../services/authentication.service';
import UserService from '../services/user.service';

export default async (req: Request, res: Response, next: NextFunction) => {
  const authorizationHeader = req.headers['authorization'] as string;

  if (!authorizationHeader) {
    return next();
  }

  const bearer = authorizationHeader.split(' ');
  const bearerToken = bearer[1];
  
  if(!bearerToken) {
    return next();
  }

  const payload = AuthenticationService.decodeToken(bearerToken);
    
  if(!payload) {
    return next();
  }

  const user = await UserService.findUserByID(payload['id']);

  if(user) {
    req['user'] = user;
  }
  
  next();
}