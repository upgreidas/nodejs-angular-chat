import { Request, Response, NextFunction } from 'express';

import { HttpError } from '../http-error';
import { UserRole } from '../entities/user.entity';

export default (req: Request, res: Response, next: NextFunction) => {
  if(!req['user'] || req['user'].role !== UserRole.ADMIN) {
    throw new HttpError('Access denied.', 403);
  }
  
  next();
}