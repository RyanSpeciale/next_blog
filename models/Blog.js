import mongoose from 'mongoose'


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
    author: {type: mongoose.Schema.ObjectId, ref: 'User'},
    created: {
        type: Date,
        default: Date.now()
    }
})

module.exports = mongoose.models.Blog || mongoose.model('Blog', BlogSchema)