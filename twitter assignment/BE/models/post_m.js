const mongoose = require('mongoose');
const PostSchema = new mongoose.Schema({
    description: {
        type: String,
        required: true
    },
    
    replyingTo: {
        type : mongoose.Schema.Types.ObjectId,
        ref: "UserModel"
    },
    likes: [
        {
            type: mongoose.Schema.Types.ObjectId,
            ref: "UserModel"
        }
    ],
    reply: [
        {
            commentText: String,
            tweetBy: { type:mongoose.Schema.Types.ObjectId, ref: "UserModel" }
        }
    ],
    retweetedBy:[ {
        type : mongoose.Schema.Types.ObjectId,
        ref : "UserModel"
    }],
    image: {
        type: String,
        default: null
    },
    author: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "UserModel"
    }
}, {timestamps: true});


const postModel = mongoose.model("postModel", PostSchema)
module.exports=postModel;