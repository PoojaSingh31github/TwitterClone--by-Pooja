import React from "react";
import "./App.css";
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Postpage from "./pages/Postpage";
import Login from './components/login';
import Register from './components/register';
import ProfilePage from './pages/Profilepage';

function App() {
  return (
    <>
      <Router>
        <Routes>
          <Route exact path="/login" element={<Login/>} ></Route>
          <Route exact path="/register" element={<Register/>} ></Route>
          <Route exact path="/post" element={<Postpage/>} ></Route>
          <Route exact path="/profile" element={<ProfilePage/>} ></Route>
        </Routes>
      </Router>
    </>
  );
}

export default App;
