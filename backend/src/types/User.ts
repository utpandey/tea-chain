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

export interface ErrorMessage {
  [key: string]: string,
}
