import React from 'react'
import Navbar from '../components/Navbar/page';
import Notif1 from '../components/ExampleNotification1/page';
import Notif2 from '../components/ExampleNotification2/page';
import '../styles/globals.css';

const ActivityPage = () => {
  return (
    <div className="container">
      <div className="sidebar">
        <Navbar />
      </div>
      <div className="mainContent">
        <h1 className="title">Notification</h1>
        <div className="content">
          <Notif1 />
          <Notif2 />
          <Notif1 />
          <Notif2 />
          <Notif1 />
          <Notif2 />
        </div>
      </div>
    </div>
  )
}

export default ActivityPage