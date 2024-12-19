"use client";
import React, { useRef } from "react";
import Navbar from '../../components/Navbar/page';
import styles from './detail.module.css';
import '../../styles/globals.css';
import ExampleThreads2 from '@/app/components/ExampleThreads2/page';

const DetailThreads = () => {

  const textareaRef = useRef<HTMLTextAreaElement | null>(null);

  const handleInput = () => {
    const textarea = textareaRef.current;
    if (textarea) { // Periksa apakah textarea tidak null
      textarea.style.height = 'auto'; // Reset height ke auto
      textarea.style.height = `${textarea.scrollHeight}px`; // Sesuaikan height berdasarkan scrollHeight
    }
  };

  return (
    <div className="container">
      <div className="sidebar">
        <Navbar />
      </div>
      <div className="mainContent">
        <h1 className="title">Threads</h1>
        <div className="content">
          <ExampleThreads2 />
          <div className={styles.inputGroup}>
            {/* Avatar */}
            <div className={styles.avatar}>
              <img src="/images/gomp.jpeg" alt="Avatar" />
            </div>
            {/* Container untuk textarea */}
            <div className={styles.textareaContainer}>
              <textarea
                ref={textareaRef} // hubungkan textarea ke ref
                placeholder="Apa yang jadi highlight hari kalian?"
                onInput={handleInput} // Panggil handleInput pas ada perubahan
              />
            </div>
            <button type="button" className={styles.imageButton}>
              <i className="bx bxs-image"></i>
            </button>
            <button type="submit" className={styles.submitButton}>
              <i className='bx bxs-paper-plane'></i>
            </button>
          </div>
        </div>
      </div>
    </div>
  )
}

export default DetailThreads