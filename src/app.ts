import express, { Application, NextFunction, Request, Response } from 'express';
import cors from 'cors';
import globalErrorHandler from './app/middlewares/globalErrorHandler';
import router from './app/routes';

const app: Application = express();

// parser
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// Application routes
app.use('/api/v1/', router);

// testing api
app.get('/', (req: Request, res: Response, next: NextFunction) => {
  throw new Error('Test request');
});

// global error handler
app.use(globalErrorHandler);

export default app;

// start form 14.1
