import React, { useRef, useState } from 'react';
import styles from './createthread.module.css';

type CreateThreadProps = {
    onClose: () => void;
};

const CreateThread: React.FC<CreateThreadProps> = ({ onClose }) => {
    const [content, setContent] = useState('');
    const textareaRef = useRef<HTMLTextAreaElement | null>(null);

    const handleInput = () => {
        const textarea = textareaRef.current;
        if (textarea) {
            textarea.style.height = 'auto'; // Reset height
            textarea.style.height = `${textarea.scrollHeight}px`; // Set height based on scrollHeight
        }
    };

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        setContent('');
        onClose();
    };

    return (
        <div className={styles.createThreadContainer}>
            <div className={styles.avatar}>
                <img src="/images/luffy.jpg" alt="Avatar" />
            </div>

            <form onSubmit={handleSubmit} className={styles.form}>
                <div className={styles.textareaWrapper}>
                    <textarea
                        ref={textareaRef}
                        className={styles.textarea}
                        placeholder="Apa yang jadi highlight hari kalian?"
                        value={content}
                        onChange={(e) => setContent(e.target.value)}
                        onInput={handleInput}
                    />
                    <button type="button" className={styles.imageButton}>
                        <i className="bx bxs-image"></i>
                    </button>
                    <button type="submit" className={styles.submitButton}>
                    <i className='bx bxs-paper-plane'></i>
                    </button>
                </div>
            </form>
        </div>
    );
};

export default CreateThread;
