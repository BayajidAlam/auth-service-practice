import httpStatus from 'http-status';
import ApiError from '../../../errors/ApiError';
import { User } from '../user/user.model';
import { ILoginUser } from './auth.interface';
import jwt from 'jsonwebtoken';

const loginUser = async (payload: ILoginUser) => {
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

  // create access token and refresh token
  const accessToken = jwt.sign({
    id: isUserExist?.id,
    role: isUserExist?.role,
  });

  return {};
};

export const AuthService = {
  loginUser,
};
