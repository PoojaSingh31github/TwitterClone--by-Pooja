const postModel = require("../models/post_m");

exports.CreateTweet = async (req, res) => {
   try {
      const { description, image } = req.body;
      if (!description) {
         return res.status(400).json({ message: "Description is required" });
      }
      const post = new postModel({ description: description, image: image, author: req.user });
      await post.save();
      return res.status(201).json({ result: post, message: "tweet created successfully" });
   } catch (error) {
      console.log(error,)
      return res.status(500).json({ error: "Server Error" });
   }

}

exports.LikeTweet = async (req, res) => {
   try {
      const postID = req.params.id
      console.log(postID)
      const result = await postModel.findByIdAndUpdate({ _id: postID },
         { $push: { likes: req.user } },
         { new: true })
         .populate('author', '_id name')
         .exec();

      res.json(result);
   } catch (error) {
      console.error('Error updating post with like:', error);
      res.status(400).json({ error: 'Error in updating post with like' });
   }
}

exports.disLikeTweet = async (req, res) => {
   try {
      const postID = req.params.id
      console.log(postID)
      const result = await postModel.findByIdAndUpdate({ _id: postID },
         { $pull: { likes: req.user._id } },
         { new: true })
         .populate('author', '_id name')
         .exec();

      res.json(result);
   } catch (error) {
      console.error('Error updating post with dislike:', error);
      res.status(400).json({ error: 'Error in updating post with dislike' });
   }
}

exports.replyTweet = async (req, res) => {
   try {
      const postID = req.params.id
      const { description, image } = req.body;
      if (!description) {
         return res.status(400).json({ message: "Description is required" });
      }
      const post = new postModel({ description: description, image: image, replyingTo: req.user });
      await post.save();

      const result = await postModel.findByIdAndUpdate({_id: postID },
         { $push: { reply: post._id } }, { new: true })
      res.status(201).json({ message: "reply of tweet added", result: result })
   } catch (error) {
      console.log(error);
      return res.status(500).json({ error: "Server Error" });
   }
}

exports.ReTweet = async (req, res) => {
   try {
      const postId = req.params.id
      const userId = req.user
      console.log(postId, userId)
      const post = await postModel.findById({_id : postId});
      if (!post) {
         return res.status(404).json({ error: 'Post not found' });
      }
      if (post.retweetedBy.includes(userId)) {
         return res.status(400).json({ error: 'User already retweeted this post' });
      }
      post.retweetedBy.push(userId);
      const updatedPost = await post.save();
      return res.status(200).json({ result: updatedPost, message: 'Retweet successfully done' });
   } catch (error) {
      console.error(error);
      return res.status(500).json({ error: "Server Error" });
   }
}

exports.getAllTweet = async (req, res) => {
   try {
      const result = await postModel.find();
      return res.status(500).json({ message: "all tweets", result: result });
   } catch (error) {
      console.log(error);
      return res.status(500).json({ error: "Server Error" });
   }
}

exports.GetTweetByID = async (req, res) => {
   try {
      const user = req.params.id
      const result = await postModel.findById({ _id: user });
      if (!result) {
         return res.status(404).json({ message: "tweet not found" });
      }
      return res.status(200).json({ message: "Tweet found by ID successfully", result: result });
   } catch (error) {
      console.error(error);
      return res.status(500).json({ message: 'Internal Server Error' });
   }
}

exports.DeleteTweet = async (req, res) => {
   try {
      const result = await postModel.findByIdAndDelete(req.params.id);
      if (!result) {
         return res.status(404).json({ message: "tweet not found" });
      }
      return res.status(200).json({ message: "tweet deleted successfully" });
   } catch (error) {
      console.error(error);
      return res.status(500).json({ message: 'Internal Server Error' });
   }
}

