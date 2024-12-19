import React from 'react'
import Navbar from '../../components/Navbar/page';
import styles from './detail.module.css';
import '../../styles/globals.css';
import Tabs from '../../components/Tabs/page';

const DetailUsers = () => {
    return (
        <div className="container">
            <div className="sidebar">
                <Navbar />
            </div>
            <div className="mainContent">
                <h1 className="title">Users</h1>
                <div className={styles.content}>
                    <div className={styles.profile}>
                        {/* Profil Header */}
                        <div className={styles.profileHeader}>
                            <img src="/images/luffy.jpg" alt="" />
                            <div className={styles.profileInfo}>
                                <div className={styles.usernameContainer}>
                                    <h1 className="username">nika4life</h1>
                                    <p className="handle">@dmonkeyluffy</p>
                                    <p>lorem ipsum dolor si amet</p>
                                    <div className={styles.stats}>
                                        <span className="followers">1.000 pengikut</span>
                                        <span className="following">10.000 mengikuti</span>
                                    </div>
                                </div>
                            </div>
                        </div>

                        {/* Tombol Edit */}
                        <div className={styles.editButton}>
                            <button>Ikuti</button>
                        </div>
                    </div>
                    <Tabs />
                </div>
            </div>
        </div>
    )
}

export default DetailUsers