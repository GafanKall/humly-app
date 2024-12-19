import React from 'react';
import styles from './examplethreads2.module.css';

const ExampleThreads2 = () => {
    return (
        <div className={styles.example2}>
            <div className={styles.header}>
                <img
                    src="/images/gomp.jpeg"
                    alt="Profile"
                    className={styles.profileImage}
                />
                <div className={styles.userInfo}>
                    <span className={styles.username}>minsi.gom</span>
                    <span className={styles.time}>24h</span>
                </div>
                <div className={styles.moreOptions}>•••</div>
            </div>
            <div className={styles.content}>
                <div className={styles.imageContent}>
                <img src="/images/gom1.jpeg" alt=""/>
                <img src="/images/gom2.jpeg" alt=""/>
                </div>
                <p>Lorem ipsum odor amet, consectetuer adipiscing elit. Ullamcorper at diam nullam; magnis torquent cubilia nulla. Sollicitudin elit purus lobortis erat parturient. Congue scelerisque vehicula suscipit, curae urna eget. Adipiscing penatibus dui litora inceptos nam interdum. Sagittis sem lectus urna erat dolor</p>
            </div>
            <div className={styles.actions}>
                <button className={styles.actionButton}>
                    <i className="bx bx-heart"></i>
                </button>
                <button className={styles.actionButton}>
                    <i className="bx bx-comment"></i> 5
                </button>
                <button className={styles.actionButton}>
                    <i className="bx bx-repost"></i>
                </button>
                <button className={styles.actionButton}>
                    <i className="bx bx-send"></i>
                </button>
            </div>
        </div>
    );
};

export default ExampleThreads2;
