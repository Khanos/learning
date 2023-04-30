import { Router, Request, NextFunction, Response } from 'express';
import {insertUser, getUser} from './controller/user.controller';

class IndexRouter {
  public router: Router = Router();
  constructor() {
    this.initMiddleware();
    this.initRoutes();
  }
  private initMiddleware() {
    // Middleware
    this.router.use((req: Request, res: Response, next: NextFunction) => {
      next();
    })
  }
  private initRoutes() {
    // User routes
    this.router.get('/user/:email', getUser);
    this.router.post('/user', insertUser);
  }
}

const indexRoutes = new IndexRouter();

export default indexRoutes.router;