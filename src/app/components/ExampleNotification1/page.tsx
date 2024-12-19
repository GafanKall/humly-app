import React from 'react'
import styles from './examplenotif1.module.css'

const ExampleNotif1 = () => {
  return (
    <div className={styles.content}>
      <div className={styles.notifInfo}>
        <img className={styles.avatar} src="/images/luffy.jpg" alt="" />
        <div className={styles.userInfo}>
          <h1>nika4life</h1>
          <p>menyukai utas anda</p>
        </div>
      </div>
      <img className='notifImage' src="/images/gom1.jpeg" alt="" />
    </div>
  )
}

export default ExampleNotif1