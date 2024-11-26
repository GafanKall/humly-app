"use client";
import React, { useRef } from 'react';
import styles from './formsnav.module.css';

const FormsNav = () => {
    const textareaRef = useRef<HTMLTextAreaElement | null>(null);

    const handleInput = () => {
        const textarea = textareaRef.current;
        if (textarea) { // Periksa apakah textarea tidak null
            textarea.style.height = 'auto'; // Reset height ke auto
            textarea.style.height = `${textarea.scrollHeight}px`; // Sesuaikan height berdasarkan scrollHeight
        }
    };

    return (
        <div className={styles.headerContent}>
            <div className={styles.inputGroup}>
                {/* Avatar */}
                <div className={styles.avatar}>
                    <img src="/images/luffy.jpg" alt="Avatar" />
                </div>
                {/* Container untuk textarea */}
                <div className={styles.textareaContainer}>
                    <textarea
                        ref={textareaRef} // hubgungin textarea ke ref
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
    );
};

export default FormsNav;
