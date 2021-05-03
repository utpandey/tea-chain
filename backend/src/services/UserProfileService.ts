import User from '../models/User';
import { UserSignup, UserSignin } from '../types/User';

const sendRegistrationLink = async (params: Partial<UserSignin>) => {
  const result = await User.findOne({ email: params.email });
  if (result) {
    result.sendRegistrationMail();
  }
  return true;
};

const createUser = async (params: UserSignup) => {
  const result = await User.findOne({ email: params.email });
  if (result) {
    throw new Error('User exists');
  }

  return User.create(params)
    .then((res) => {
      res.sendRegistrationMail();
      return {
        email: res.email,
        type: res.type,
      };
    })
    .catch((err) => {
      throw err;
    });
};

const login = async (params: UserSignin) => {
  const result = await User.findOne({ email: params.email });
  if (result) {
    return result.comparePassword(params.password);
  }

  throw new Error('User not found');
};

export default { sendRegistrationLink, createUser, login };
