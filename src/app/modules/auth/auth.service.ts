import httpStatus from 'http-status';
import ApiError from '../../../errors/ApiError';
import { User } from '../user/user.model';
import {
  ILogInResponse,
  ILoginUser,
  IRefreshTokenResponse,
} from './auth.interface';
import config from '../../../config';
import { jwtHelpers } from '../../../helpers/jwtHelpers';
import { Secret } from 'jsonwebtoken';
import jwt from 'jsonwebtoken';

const loginUser = async (payload: ILoginUser): Promise<ILogInResponse> => {
  const { id, password } = payload;

  // creating instanceof user
  // const user = new User();
  // accessing instance methods
  // const isUserExist = await user.isUserExist(id);

  // using statics
  const isUserExist = await User.isUserExist(id);

  if (!isUserExist) {
    throw new ApiError(httpStatus.NOT_FOUND, 'User does not exist');
  }

  // Match password
  // accessing instance methods
  if (
    isUserExist.password &&
    !(await User.isPasswordMatch(password, isUserExist?.password))
  ) {
    throw new ApiError(httpStatus.UNAUTHORIZED, 'Password is incorrect');
  }

  // create access token
  const { id: userId, role, needsPasswordChange } = isUserExist;
  const accessToken = jwtHelpers.createToken(
    { userId, role },
    config.jwt.secret as Secret,
    config.jwt.expires_in as string
  );

  // creating refresh token
  const refreshToken = jwtHelpers.createToken(
    { userId, role },
    config.jwt.refresh_secret as Secret,
    config.jwt.refresh_expires_in as string
  );

  console.log(
    { accessToken, refreshToken, needsPasswordChange },
    'All Token Changes'
  );
  return {
    accessToken,
    refreshToken,
    needsPasswordChange,
  };
};

const refreshToken = async (token: string): Promise<IRefreshTokenResponse> => {
  let verifiedToken;
  // verify token
  try {
    verifiedToken = jwtHelpers.verifyToken(
      token,
      config.jwt.refresh_secret as Secret
    );
  } catch (error) {
    throw new ApiError(httpStatus.FORBIDDEN, 'Invalid Refresh Token !');
  }

  // check weather user exist or not
  const { userId } = verifiedToken;
  const isUserExist = await User.isUserExist(userId);
  // if user not found
  if (!isUserExist) {
    throw new ApiError(httpStatus.NOT_FOUND, 'user does not exist');
  }
  //if user found user,generate new token
  const newAccessToken = jwtHelpers.createToken(
    {
      id: isUserExist?.id,
      role: isUserExist?.role,
    },
    config.jwt.secret as Secret,
    config.jwt.expires_in as string
  );

  return {
    accessToken: newAccessToken,
  };
};

export const AuthService = {
  loginUser,
  refreshToken,
};
