"use client";
import React, { useRef, useState } from "react";
import styles from "./home.module.css";
import Thread1 from "../../components/ExampleThreads1/page";
import Thread2 from "../../components/ExampleThreads2/page";
import Navbar from "../../components/Navbar/page";
import DropdownFilter from "../../components/DropdownFilter/page";
import '../../styles/globals.css';

const HomePage = () => {
  const [selectedFilter, setSelectedFilter] = useState("Untuk Anda");

  const handleFilterChange = (filter: React.SetStateAction<string>) => {
    setSelectedFilter(filter);
  };

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
        <DropdownFilter
          options={["Untuk Anda", "Diikuti"]}
          defaultOption="Untuk Anda"
          onSelect={handleFilterChange}
        />
        <div className="content">
          {selectedFilter === "Untuk Anda" ? (
            <>
              <div className={styles.headerContent}>
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
                </div>
                {/* Tombol Aksi */}
                <div className={styles.inputButton}>
                  <button type="submit" className={styles.imageButton}>
                    <i className='bx bxs-image'></i>
                  </button>
                  <button type="submit" className={styles.submitButton}>
                    <i className='bx bxs-paper-plane'></i>
                  </button>
                </div>
              </div>
              {/* Threads Container */}
              <div className={styles.threadContainer}>
                <Thread1 />
                <Thread2 />
                <Thread1 />
                <Thread2 />
              </div>
            </>
          ) : (
            <div className={styles.threadContainer}>
              <Thread2 />
              <Thread1 />
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default HomePage;
