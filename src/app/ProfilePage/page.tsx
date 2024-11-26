import React from 'react'
import Navbar from '../components/Navbar/page';
import Profile from '../components/Profile/page';
import Tabs from '../components/Tabs/page';
import '../styles/globals.css';

const PorfilePage = () => {
  return (
    <div className="container">
      <div className="sidebar">
        <Navbar />
      </div>
      <div className="mainContent">
        <h1 className="title">Profil</h1>
        <div className="content">
          <Profile />
          <Tabs />
        </div>
      </div>
    </div>
  )
}

export default PorfilePage