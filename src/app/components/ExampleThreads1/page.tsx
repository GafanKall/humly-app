import React from 'react';
import styles from './examplethreads1.module.css';

const ExampleThreads1 = () => {
    return (
        <div className={styles.example1}>
            <div className={styles.header}>
                <img
                    src="/images/luffy.jpg"
                    alt="Profile"
                    className={styles.profileImage}
                />
                <div className={styles.userInfo}>
                    <span className={styles.username}>nika4life</span>
                    <span className={styles.time}>9h</span>
                </div>
                <div className={styles.moreOptions}>•••</div>
            </div>
            <div className={styles.content}>
            Lorem ipsum odor amet, consectetuer adipiscing elit. Ullamcorper at diam nullam; magnis torquent cubilia nulla. Sollicitudin elit purus lobortis erat parturient. Congue scelerisque vehicula suscipit, curae urna eget. Adipiscing penatibus dui litora inceptos nam interdum. Sagittis sem lectus urna erat dolor volutpat finibus curae senectus. Inceptos at proin feugiat condimentum mus. Efficitur habitant maecenas tempor velit penatibus eros eu. Nisi volutpat proin dictumst sollicitudin in est blandit.
            </div>
            <div className={styles.actions}>
                <button className={styles.actionButton}>
                    <i className="bx bx-heart"></i>
                </button>
                <button className={styles.actionButton}>
                    <i className="bx bx-comment"></i> 100
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

export default ExampleThreads1;
