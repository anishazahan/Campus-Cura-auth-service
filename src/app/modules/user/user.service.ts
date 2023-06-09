import { User } from './user.model'
import { IUser } from './user.interface'
import config from '../../../Config/index'
import { generateUserId } from './user.utils'

const createUser = async (user: IUser): Promise<IUser | null> => {
  // auto generated increement id
  const id = await generateUserId()
  user.id = id
  // default password
  if (!user.password) {
    user.password = config.default_user_password as string
  }

  const createdUser = await User.create(user)
  if (!createUser) {
    throw new Error('Failed to database error')
  }
  return createdUser
}

export default {
  createUser,
}
