import React from "react";
import styles from "./editprofile.module.css";

interface EditProfileFormProps {
  onClose: () => void; // Fungsi untuk menutup form
}

const EditProfileForm: React.FC<EditProfileFormProps> = ({ onClose }) => {
  return (
    <div className={styles.overlay}>
      <div className={styles.modal}>
        <h2>Edit Profile</h2>
        <form>
          <div className={styles.formGroup}>
            <label htmlFor="username">Username</label>
            <input type="text" id="username" defaultValue="minsi.gom" />
          </div>
          <div className={styles.formGroup}>
            <label htmlFor="handle">Handle</label>
            <input type="text" id="handle" defaultValue="@gominsi" />
          </div>
          <div className={styles.formGroup}>
            <label htmlFor="bio">Bio</label>
            <textarea id="bio" defaultValue="This is my bio"></textarea>
          </div>
          <div className={styles.modalActions}>
            <button type="button" onClick={onClose}>
              Cancel
            </button>
            <button type="submit">Save</button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default EditProfileForm;
