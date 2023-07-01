import express, { Application, NextFunction, Request, Response } from 'express';
import cors from 'cors';
import globalErrorHandler from './app/middlewares/globalErrorHandler';
import router from './app/routes';
import httpStatus from 'http-status';
import { generateStudentId } from './app/modules/user/user.utils';

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

// handle not found
app.use((req: Request, res: Response, next: NextFunction) => {
  res.status(httpStatus.NOT_FOUND).json({
    success: false,
    message: 'Not found',
    errorMessage: [
      {
        path: req.originalUrl,
        message: 'Api not found',
      },
    ],
  });
  next();
});

export default app;

// const academicSemester = {
//   code: '01',
//   year: '2024',
// };

// const studentId = async () => {
//   const testId = await generateStudentId(academicSemester);
//   console.log(testId);
// };

// studentId();
