import React from 'react'
import styles from './examplenotif2.module.css'

const ExampleNotif2 = () => {
  return (
    <div className={styles.content}>
      <div className={styles.notifInfo}>
        <img className={styles.avatar} src="./images/min.jpeg" alt="" />
        <div className={styles.userInfo}>
          <h1>minsong</h1>
          <p>menyukai utas anda</p>
        </div>
      </div>
    </div>
  )
}

export default ExampleNotif2