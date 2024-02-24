import Sidebar from "../components/Sidebar";
import Trends from "../components/Trends";
import React from 'react';
import UserProfile from './../components/UserProfile';

const ProfilePage = () => {
  return (
    <div className="twitter">
    <Sidebar />
    <UserProfile/>
    <Trends />
  </div>
  )
}

export default ProfilePage ;