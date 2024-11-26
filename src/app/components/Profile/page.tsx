import React from 'react'
import styles from './profile.module.css'

const Profile = () => {
    return (
        <div className={styles.profile}>
            <div className={styles.profileHeader}>
                <img src="/images/gomp.jpeg" alt="" />
                <div className={styles.profileInfo}>
                    <div className={styles.usernameContainer}>
                        <h1 className="username">minsi.gom</h1>
                        <p className="handle">gominsi</p>
                    </div>
                    <div className={styles.stats}>
                        <span className="followers">2.000 pengikut</span>
                        <span className="following">100 mengikuti</span>
                    </div>
                </div>
            </div>
            <div className={styles.editButton}>
                <button className=''>Edit Profile</button>
            </div>
        </div>
    )
}

export default Profile