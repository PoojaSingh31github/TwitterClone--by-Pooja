const Router= require('express').Router();
const { CreateTweet, LikeTweet, disLikeTweet, replyTweet, ReTweet , GetTweetByID, DeleteTweet, getAllTweet, } = require('../controller/post_c');
const auth = require('../middleware/protectiveRoutes');

Router.post("/CreateTweet",auth, CreateTweet);
Router.put("/LikeTweet/:id", auth, LikeTweet );
Router.put("/disLikeTweet/:id", auth, disLikeTweet );
Router.post("/replyTweet/:id", auth, replyTweet );
Router.put("/ReTweet/:id", auth, ReTweet );
Router.get("/getAllTweet", getAllTweet );
Router.get("/GetTweetByID/:id", GetTweetByID );
Router.delete("/DeleteTweet/:id",auth, DeleteTweet );

module.exports = Router;