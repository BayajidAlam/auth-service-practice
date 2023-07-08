import { Request, Response } from 'express';
import httpStatus from 'http-status';
import catchAsync from '../../../shared/catchAsync';
import sendResponse from '../../../shared/sendResponse';
import { AuthService } from './auth.service';
import { ILogInResponse } from './auth.interface';

const loginUser = catchAsync(async (req: Request, res: Response) => {
  const { ...loginData } = req.body;
  const result = await AuthService.loginUser(loginData);

  sendResponse<ILogInResponse>(res, {
    statusCode: httpStatus.OK,
    success: true,
    message: 'Auth fetched successfully !',
    data: result,
  });
});

export const AuthController = {
  loginUser,
};
