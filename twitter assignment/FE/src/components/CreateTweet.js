import React, { useState } from "react";
import {
  FaRegImage,
  FaRegListAlt,
  FaRegSmile,
  FaCalendarCheck,
} from "react-icons/fa";
import axios from "axios";
import { API_BASE_URL } from "../config";

const CreateTweet = () => {
  const [description, setDescription] = useState("");
  const [image, setImage] = useState("");

  const config = {
    headers: {
      'Content-Type': 'application/json',
      'Authorization': 'Bearer ' + localStorage.getItem('token'),
    },
  };

  const handleCreateTweet = async () => {
    try {
      const response = await axios.post(`${API_BASE_URL}/user/CreateTweet`, { description, image }, config);
      console.log(response.data);
      setDescription("");
      setImage("");
    } catch (error) {
      console.error(error);
    }
  };
  return (
    <div className="create">
      <form onClick={handleCreateTweet}>
      <div className="create__first">
        <div className="create__img">
          <img src="/images/profile.jfif" alt="profile img" />
        </div>
          
        <div className="create__input">
          <input
            type="text"
            className="create__control"
            placeholder="What's happing?"
            value={description}
            onChange={(e) => setDescription(e.target.value)}
          />
          <input
           type="file"
           name="file"
            placeholder="Add an image"
            className="create__control"
            value={image}
            onChange={(e) => setImage(e.target.value)}
          />
        </div>
      </div>
      <div className="create__second">
        <div className="create__icons">
          <FaRegImage className="ic" />
          <FaRegListAlt className="ic" />
          <FaRegSmile className="ic" />
          <FaCalendarCheck className="ic" />
        </div>
        <button className="create__btn" type="submit"> Tweet</button>
      </div>
        </form>
    </div>
  );
};

export default CreateTweet;
