import { User } from './user.model'
import { IUser } from './user.interface'

const createUser = async (user: IUser): Promise<IUser | null> => {
  const createdUser = await User.create(user)
  if (!createUser) {
    throw new Error('Failed to database error')
  }
  return createdUser
}

module.exports = {
  createUser,
}
