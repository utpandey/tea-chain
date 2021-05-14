import { Document } from 'mongoose';

export interface IUser extends Document {
  email: string,
  password: string,
  type: string,
  passwordResetToken: string,
  passwordResetExpires: Date,
  emailVerificationToken: string,
  emailVerified: boolean,
  // eslint-disable-next-line no-unused-vars
  comparePassword(password: string): Promise<Partial<IUser>>;
  // eslint-disable-next-line no-unused-vars
  generatePasswordResetToken(email: string): Promise<IUser>;
  // eslint-disable-next-line no-unused-vars
  updatePassword(resetToken: string, updatedPassword: string): Promise<IUser>;
  sendRegistrationMail(): void;
}

export interface UserSignup {
  email: string,
  password: string,
  type: string,
}

export interface UserSignin {
  email: string,
  password: string,
}

export interface ForgotPassword {
  email: string,
  resetToken: string,
  password: string,
}

export interface ErrorMessage {
  [key: string]: string,
}
