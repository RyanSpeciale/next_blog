import mongoose from 'mongoose';
import bcrypt from 'bcrypt';

const UserSchema = new mongoose.Schema({
    username: {
      type: String,
      trim: true,
      required: 'Username is required',
      unique: 'Username already exists',
      minlength: 6,
      maxlength: 26
    },
    email: {
      type: String,
      trim: true,
      unique: 'Email already exists',
      match: [/.+\@.+\..+/, 'Please fill a valid email address'],
      required: 'Email is required'
    },
    password: {
      type: String,
      required: "Password is required"
    },
    created: {
      type: Date,
      default: Date.now
    },
  })

UserSchema.pre('save', function(next) {
  let user = this;
  let rounds = 11;

  if (!user.isModified('password')) return next();

  bcrypt.genSalt(rounds, function(err, salt) {
    if (err) return next(err);
    bcrypt.hash(user.password, salt, function(err, hash) {
      if (err) return next(err);
      user.password = hash
      next();
    })
  })
})




module.exports = mongoose.models.User || mongoose.model('User', UserSchema)