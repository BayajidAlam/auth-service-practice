import { User } from './user.model';
import { IUser } from './user.interface';
import config from '../../../config';
import { generateStudentId } from './user.utils';
import ApiError from '../../../errors/ApiError';

const createUser = async (user: IUser): Promise<IUser | null> => {
  const academicSemester = {
    code: '01',
    year: '2030',
  };

  const id = await generateStudentId(academicSemester);
  user.id = id;

  // default password
  if (!user.password) {
    user.password = config.default_users_pass as string;
  }

  const createdUser = await User.create(user);

  if (!createdUser) {
    throw new ApiError(400, 'failed to create user');
  }
  return createdUser;
};

export const UserService = {
  createUser,
};
