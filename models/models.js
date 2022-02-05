const mongoose = require('mongoose')

const UserSchema = new mongoose.Schema({
    username: {
      type: String,
      trim: true,
      required: 'Username is required',
      unique: 'Username already exists'
    },
    email: {
      type: String,
      trim: true,
      unique: 'Email already exists',
      match: [/.+\@.+\..+/, 'Please fill a valid email address'],
      required: 'Email is required'
    },
    hashed_password: {
      type: String,
      required: "Password is required"
    },
    created: {
      type: Date,
      default: Date.now
    },
    posts: {
        type: [{ type: Schema.Types.ObjectId, ref: 'Blog' }]
    }
  })

  const BlogSchema = new mongoose.Schema({
      title: {
        type: String,
        required: 'Title is required!',
        minlength: 10,
        maxlength: 75
      },
      body: {
          type: String,
          required: 'Body is required!',
          minlength: 750,
          maxlength: 3000,

      },
      author: { type: Schema.Types.ObjectId, ref: 'User' },
      likes: {
          type: Number
      },
      created: {
          type: Date,
          default: Date.now()
      }
  })

  const User = mongoose.model('User', UserSchema);
  const Blog = mongoose.model('Blog', BlogSchema);

  module.exports = {
      User,
      Blog
  }