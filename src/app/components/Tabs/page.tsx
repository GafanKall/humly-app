"use client";
import React, { useState, useRef } from "react";
import Threads1 from "../ExampleThreads1/page";
import Threads2 from "../ExampleThreads2/page";
import styles from "./tabs.module.css";

const Tabs = () => {
  const [activeTab, setActiveTab] = useState("utas");
  const contentRef = useRef(null);

  // Data yang ditampilkan berdasarkan tab aktif
  const renderContent = () => {
    switch (activeTab) {
      case "utas":
        return (
          <div>
            <Threads2 />
          </div>
        );
      case "disukai":
        return (
          <div>
            <Threads1 />
            <Threads2 />
          </div>
        );
      case "postinganUlang":
        return (
          <div>
            <Threads2 />
          </div>
        );
      default:
        return null;
    }
  };

  // Fungsi untuk menangani perubahan tab
  const handleTabChange = (tab) => {
    setActiveTab(tab);
    // Set scroll position ke atas
    if (contentRef.current) {
      contentRef.current.scrollTop = 0;
    }
  };

  return (
    <div className={styles.tabsContainer}>
      {/* Header Tabs */}
      <div className={styles.tabsHeader}>
        <button
          className={`${styles.tab} ${activeTab === "utas" ? styles.active : ""}`}
          onClick={() => handleTabChange("utas")}
        >
          Utas
        </button>
        <button
          className={`${styles.tab} ${activeTab === "disukai" ? styles.active : ""}`}
          onClick={() => handleTabChange("disukai")}
        >
          Disukai
        </button>
        <button
          className={`${styles.tab} ${activeTab === "postinganUlang" ? styles.active : ""}`}
          onClick={() => handleTabChange("postinganUlang")}
        >
          Postingan Ulang
        </button>
      </div>

      {/* Konten */}
      <div className={styles.tabContent} ref={contentRef}>
        {renderContent()}
      </div>
    </div>
  );
};

export default Tabs;
