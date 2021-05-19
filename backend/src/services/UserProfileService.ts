import User from '../models/User';
import { UserSignup, UserSignin, ForgotPassword } from '../types/User';

const verifyUser = async (verificationToken: string) => {
  const user = await User.findOneAndUpdate(
    { emailVerificationToken: verificationToken }, { emailVerified: true }, { new: true },
  );
  if (user) {
    return user;
  }
  throw new Error('Invalid registration link');
};

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
        type: res.type,
        profile: res.profile,
      };
    })
    .catch((err) => {
      throw err;
    });
};

const forgotPassword = async (params: ForgotPassword) => {
  const result = await User.findOne({ email: params.email });
  if (result) {
    return result.generatePasswordResetToken(params.email);
  }
  throw new Error('User doesn\'t exist');
};

const updatePassword = async (params: ForgotPassword) => {
  const result = await User.findOne({ email: params.email });
  if (!result) {
    throw new Error('User doesn\'t exist');
  }
  return result.updatePassword(params.resetToken, params.password).then((res) => ({
    type: res.type,
  })).catch((err) => {
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

export default {
  verifyUser, sendRegistrationLink, createUser, forgotPassword, updatePassword, login,
};
