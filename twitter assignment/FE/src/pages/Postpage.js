import Sidebar from "../components/Sidebar";
import Twittes from "../components/Twittes";
import Trends from "../components/Trends";
import React from 'react';

const Postpage = () => {
  return (
    <div className="twitter">
    <Sidebar />
    <Twittes />
    <Trends />
  </div>
  )
}

export default Postpage ;