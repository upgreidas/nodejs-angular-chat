import { Request, Response, NextFunction } from 'express';

import { HttpError } from '../http-error';

export default (req: Request, res: Response, next: NextFunction) => {
  if(!req['user']) {
    throw new HttpError('You are not logged in.', 401);
  }
  
  next();
}