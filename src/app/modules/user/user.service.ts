import { User } from './user.model'
import { IUser } from './user.interface'

const createUser = async (user: IUser): Promise<IUser | null> => {
  const createdUser = await User.create(user)
  if (createdUser) {
    throw new Error('failed to create user')
  }
  return createdUser
}

export default {
  createUser,
}
