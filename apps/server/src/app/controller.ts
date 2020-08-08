import { Router } from 'express';


export abstract class Controller {

  protected router = Router();

  abstract routes(): Router;

}