"use client";
import React, { useState } from 'react';
import Threads1 from '../ExampleThreads1/page';
import Threads2 from '../ExampleThreads2/page';
import styles from './tabs.module.css';

const Tabs = () => {
    const [activeTab, setActiveTab] = useState('utas');

    // Data yang ditampilkan berdasarkan tab aktif
    const renderContent = () => {
        switch (activeTab) {
            case 'utas':
                return <div><Threads2 />
                </div>;
            case 'disukai':
                return <div><Threads1 /><Threads2 /></div>;
            case 'postinganUlang':
                return <div><Threads2 /></div>;
            default:
                return null;
        }
    };

    return (
        <div className={styles.tabsContainer}>
            {/* Header Tabs */}
            <div className={styles.tabsHeader}>
                <button
                    className={`${styles.tab} ${activeTab === 'utas' ? styles.active : ''}`}
                    onClick={() => setActiveTab('utas')}
                >
                    Utas
                </button>
                <button
                    className={`${styles.tab} ${activeTab === 'disukai' ? styles.active : ''}`}
                    onClick={() => setActiveTab('disukai')}
                >
                    Disukai
                </button>
                <button
                    className={`${styles.tab} ${activeTab === 'postinganUlang' ? styles.active : ''}`}
                    onClick={() => setActiveTab('postinganUlang')}
                >
                    Postingan Ulang
                </button>
            </div>

            {/* Konten */}
            <div className={styles.tabContent}>{renderContent()}</div>
        </div>
    );
};

export default Tabs;
