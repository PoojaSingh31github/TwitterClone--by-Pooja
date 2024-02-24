import React, { useState, useEffect } from "react";
import axios from "axios";
import { API_BASE_URL } from '../config';

const AllUsers = () => {
  const [users, setUsers] = useState([]);
  
  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(`${API_BASE_URL}/user/GetallUser`); 
        setUsers(response.data); 
      } catch (error) {
        console.error(error);
      }
    };
    fetchData();
  }, []); 

  return (
    <div className="keywords">
      <div className="key">
        <div className="keyword__heading">
          <h4>Users</h4>
        </div>
        {users.map((user) => (
          <div key={user._id}>
            <div className="country">{user.username}</div>
            <div className="keyword__name">
              <strong>{user.name}</strong>
            </div>
            <div className="keyword__tweets">{user.description}</div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default AllUsers;
