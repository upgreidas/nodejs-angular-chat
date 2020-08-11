import { Request, Response, NextFunction } from 'express';
import { check } from 'express-validator';

import { Controller } from '../controller';
import { validate } from '../../helpers';
import ChannelService from '../services/channel.service';
import isAdminMiddleware from '../middleware/isAdmin.middleware';

const createRules = [
  check('name').notEmpty().withMessage('Name is missing.'),
  check('slug').notEmpty().withMessage('Slug is missing.'),
];

export class ChannelController extends Controller {
  
  routes() {
    return this.router
      .post('/', isAdminMiddleware, createRules, validate, this.createChannel);
  }

  createChannel = async (req: Request, res: Response, next: NextFunction) => {
    try {
      const channel = await ChannelService.createChannel(req.body);
      
      res.send({channel});
    } catch(e) {
      next(e);
    }
  }

}