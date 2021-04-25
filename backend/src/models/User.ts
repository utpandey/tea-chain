import mongoose from 'mongoose';
import bcrypt from 'bcrypt';
import { IUser } from '../types/User';

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
    website: String,
    picture: String,
  },
}, { timestamps: true });

/* eslint-disable consistent-return */
UserSchema.pre<IUser>('save', function save(this: IUser, next) {
  const user = this;
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

const User = mongoose.model<IUser>('User', UserSchema);

export default User;
