"use client";
import React, { useState } from "react";
import styles from "./profile.module.css";
import EditProfileForm from "../EditProfile/page"; // Import form

const Profile = () => {
  const [isEditing, setIsEditing] = useState(false); // State untuk modal edit

  const handleEditClick = () => {
    setIsEditing(true); // Tampilkan modal saat tombol diklik
  };

  const handleCloseModal = () => {
    setIsEditing(false); // Tutup modal saat overlay atau tombol close diklik
  };

  return (
    <div className={styles.profile}>
      {/* Profil Header */}
      <div className={styles.profileHeader}>
        <img src="/images/gomp.jpeg" alt="" />
        <div className={styles.profileInfo}>
          <div className={styles.usernameContainer}>
            <h1 className="username">minsi.gom</h1>
            <p className="handle">@gominsi</p>
          </div>
          <div className={styles.stats}>
            <span className="followers">2.000 pengikut</span>
            <span className="following">100 mengikuti</span>
          </div>
        </div>
      </div>

      {/* Tombol Edit */}
      <div className={styles.editButton}>
        <button onClick={handleEditClick}>Edit Profile</button>
      </div>

      {/* Tampilkan form jika isEditing true */}
      {isEditing && <EditProfileForm onClose={handleCloseModal} />}
    </div>
  );
};

export default Profile;
