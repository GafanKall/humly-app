import React, { useRef } from 'react';
import Form from '../components/FormsHome/page';
import Thread1 from '../components/ExampleThreads1/page';
import Thread2 from '../components/ExampleThreads2/page';
import Navbar from '../components/Navbar/page';
import styles from './homePage.module.css';
import '../styles/globals.css';

const HomePage = () => {


  return (
    <div className="container">
      <div className="sidebar">
        <Navbar />
      </div>
      <div className="mainContent">
        <div className={styles.title}>
          <h1>Untuk Anda</h1>
          <i className='bx bx-chevron-down'></i>
        </div>
        <div className="content">
          <Form />
          <Thread1 />
          <Thread2 />
          <Thread1 />
          <Thread2 />
        </div>
      </div>
    </div>
  );
};

export default HomePage;
