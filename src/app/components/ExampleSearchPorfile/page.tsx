import React from 'react'
import styles from './examplesearch.module.css'

const ExampleSearchProfile = () => {
  return (
    <div className={styles.content}>
    <div className={styles.profileInfo}>
      <img className={styles.avatar} src="./images/min.jpeg" alt="" />
      <div className={styles.userInfo}>
        <h1>minsong</h1>
        <p>1000 follower</p>
      </div>
    </div>
  </div>
  )
}

export default ExampleSearchProfile