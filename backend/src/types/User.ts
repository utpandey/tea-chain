import { Document } from 'mongoose';

export interface IUser extends Document {
  email: string,
  password: string,
  type: string,
  // eslint-disable-next-line no-unused-vars
  comparePassword(password: string): Promise<Partial<IUser>>;
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
