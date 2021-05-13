import mongoose from 'mongoose';
import bcrypt from 'bcrypt';
import crypto from 'crypto';
import EmailServices from '../services/EmailServices';
import serverConfig from '../config';
import { IUser } from '../types/User';
import logger from '../config/logger';

const UserSchema = new mongoose.Schema<IUser>({
  email: { type: String, unique: true },
  password: String,
  type: String,
  passwordResetToken: String,
  passwordResetExpires: Date,
  emailVerificationToken: String,
  emailVerified: Boolean,
  profile: {
    name: String,
    gender: String,
    location: String,
    picture: String,
  },
}, { timestamps: true });

/* eslint-disable consistent-return */
UserSchema.pre<IUser>('save', function save(this: IUser, next) {
  const user = this;
  user.emailVerified = false;
  user.emailVerificationToken = crypto.randomBytes(20).toString('hex');
  if (!user.isModified('password')) { return next(); }
  bcrypt.genSalt(10, (saltErr, salt) => {
    if (saltErr) { return next(saltErr); }
    bcrypt.hash(user.password, salt, (hashErr, hash) => {
      if (hashErr) { return next(hashErr); }
      user.password = hash;
      next();
    });
  });
});

UserSchema.method('comparePassword', function comparePassword(password: string): Promise<Partial<IUser>> {
  const hashedPassword = this.password;
  return new Promise((resolve, reject) => {
    bcrypt.compare(password, hashedPassword, (err, isMatch) => {
      if (err) {
        return reject(err);
      }
      if (isMatch) {
        return resolve({
          email: this.email,
          type: this.type,
        });
      }
      return resolve({});
    });
  });
});

UserSchema.method('generatePasswordResetToken', function generatePasswordResetToken(): boolean {
  this.passwordResetToken = crypto.randomBytes(20).toString('hex');
  this.passwordResetExpires = new Date(new Date().getTime() + (30 * 60 * 1000));
  const data = {
    updatePasswordLink: `${serverConfig.baseURL}/${this.passwordResetToken}`,
  };
  EmailServices.sendEmail(this.email, 'Password Reset Link', 'Forgot Password', data);
  return true;
});

UserSchema.method('updatePassword', function updatePassword(resetCode: string, updatedPassword: string): Promise<Partial<IUser>> {
  return new Promise((resolve, reject) => {
    logger.info('RESET', 'resetPassword', { a: resetCode, b: this.passwordResetToken });
    if (
      resetCode === this.passwordResetToken
      && new Date().getTime() < this.passwordResetExpires.getTime()
    ) {
      this.password = updatedPassword;
      return resolve({
        email: this.email,
        type: this.type,
      });
    } if (resetCode === this.passwordResetToken) {
      return reject(
        new Error('Expired token'),
      );
    }
    return reject(
      new Error('Invalid token'),
    );
  });
});

UserSchema.method('sendRegistrationMail', function sendRegistrationMail(): void {
  const data = {
    verificationLink: `${serverConfig.baseURL}/${this.emailVerificationToken}`,
  };
  EmailServices.sendEmail(this.email, 'Registration Link', 'Registration', data);
});

const User = mongoose.model<IUser>('User', UserSchema);

export default User;
