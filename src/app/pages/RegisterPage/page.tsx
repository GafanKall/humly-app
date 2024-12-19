import React from 'react';
import styles from '../RegisterPage/registerPage.module.css';
import Link from 'next/link';
import 'boxicons/css/boxicons.min.css';

const RegisterPage = () => {
  return (
    <div className={styles.container}>

      {/* Left Content */}
      <div className={styles.leftContent}>
        <div className={styles.overlay}></div>
        <h1>Get Started</h1>
        <p>Connect, Share, and Discover with us</p>
      </div>
      {/*  */}

      {/* Right Content */}
      <div className={styles.rightContent}>

        {/*Header Right Content  */}
        <div className={styles.headerText}>
          <img src="/images/Logo.png" alt="" />
          <h1>Create Your Account</h1>
        </div>
        {/* End Header Right Content */}

        {/* Body Right Content */}
        <div className={styles.formInput}>
          <div className={styles.emailInput}>
            <h1>Email</h1>
            <div className={styles.inputContainer}>
            <i className='bx bx-envelope'></i>
            <input type="email" placeholder="Enter your Email.." className={styles.input} />
            </div>
          </div>

          <div className={styles.usernameInput}>
            <h1>Username</h1>
            <div className={styles.inputContainer}>
            <i className='bx bxs-user'></i>
            <input type="text" placeholder="Enter your Username.." className={styles.input} />
            </div>
          </div>

          <div className={styles.passwordInput}>
            <h1>Password</h1>
            <div className={styles.inputContainer}>
            <i className='bx bxs-lock-alt' ></i>
            <input type="password" placeholder="Enter your Password.." className={styles.input} />
            </div>
          </div>
        </div>
        {/* End Body Right Content */}

        {/* Footer Right Content*/}
        <div className={styles.footerContent}>
        <button className={styles.button}>Create an Account</button>
        <div className={styles.loginText}>
          <p>Already have an account?</p>
          <Link href="/pages/LoginPage" className={styles.loginLink}>
            Login here!
          </Link>
        </div>
        </div>
        {/* End Footer Right Content */}

      </div>
      {/* End Right Content */}

    </div>
  );
};

export default RegisterPage;