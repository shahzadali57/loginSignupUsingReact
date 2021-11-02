const mongoose = require('mongoose');
const { number } = require('yup');
const PostSchema = new mongoose.Schema(
    {
        name: String,
        email: String,
        number:Number,
        password:String,
    }
);

const postModel = mongoose.model('user', PostSchema)

module.exports = postModel;