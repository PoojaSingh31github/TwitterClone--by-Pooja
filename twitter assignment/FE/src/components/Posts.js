import React, { useEffect, useState } from "react";
import {
  FaRegCheckCircle,
  FaComment,
  FaRegChartBar,
  FaHeart,
  FaLeaf,
} from "react-icons/fa";
import { API_BASE_URL } from "../config";
import axios from "axios";

const Posts = () => {
  const [like, setlike] = useState(0);
  const [isLiked, setIsLiked] = useState(false);
  const [reply, setreply] = useState(0);
  const [isReply, setIsReply] = useState(false);
  const [replyDescription, setReplyDescription] = useState("");
  const [getTweet, setGetTweet] = useState([]);

  const config = {
    headers: {
      'Content-Type': 'application/json',
      'Authorization': 'Bearer ' + localStorage.getItem('token'),
    },
  };

  // like handling
  // const handleLike = async (id) => {
  //   try {
  //     const resp = await axios.post(`${API_BASE_URL}/post/LikeTweet/${id}`, {}, config);
  //     setlike(like + 1);
  //     setIsLiked(true)
  //     console.log(resp);
  //   } catch (error) {
  //     console.log(error)
  //   }
  // }
  // // dislike handling

  // const handleDisLike = async (id) => {
  //   try {
  //     const resp = await axios.post(`${API_BASE_URL}/post/disLikeTweet/${id}`, {}, config);
  //     setlike(like - 1);
  //     setIsLiked(false)
  //     console.log(resp);
  //   } catch (error) {
  //     console.log(error)
  //   }
  // }

  // // reply handling
  // const handleReply = async (id) => {
  //   try {
  //     const resp = await axios.post(`${API_BASE_URL}/post/replyTweet/${id}`,
  //       { description: replyDescription }, config);
  //      setreply(reply + 1);
  //     setIsReply(false);
  //     console.log(resp);
  //   } catch (error) {
  //     console.log(error);
  //   }
  // };

  useEffect(() => {
    const GetAllTwittes = async () => {
      try {
        const response = await axios.get(`${API_BASE_URL}/post/getAllTweet`, config);
        console.log(response.data);
        setGetTweet(response.data.result[0]);
      } catch (error) {
        console.error(error);
      }
    };
    GetAllTwittes();
  }, []);

  
  return (
    <div className="postss">
      {getTweet &&
      getTweet.map((tweet , index) => (
        <div key={index}>
          <div className="postss__first">
            <div className="posts__first__img">
              <img src="/images/profile.jfif" alt="profile img" />
            </div>
            <div className="posts__first__name">
              <strong>{tweet.name}</strong> <FaRegCheckCircle className="verify" />
            </div>
            <div className="posts__first__username">
              @{tweet.username} <span>{tweet.timestamp}</span>
            </div>
          </div>
          <div className="postss__details">
            <div className="postss__details__msg">
              <p>{tweet.description}</p>
            </div>
            <div className="postss__details__img">
              <img src={tweet.imageURL} alt="post" />
            </div>
          </div>
          {/* <div className="reactions">
          <span onClick={()=>handleReply(id)}>
            <FaComment className="re" /> {reply}
          </span>
          <span>
            <FaRegChartBar className="re" /> 4
          </span>
          <span onClick={() => handleLike(id)} style={{ color: isLiked ? 'red' : 'black' }}>
            <FaHeart className="re" /> {like}
          </span>
          <span>
            <FaLeaf className="re" /> 234
          </span>
        </div> */}
        </div>
      ))}
    </div>
  );
};

export default Posts;
