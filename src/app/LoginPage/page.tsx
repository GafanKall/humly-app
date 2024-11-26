import React from 'react'
import Link from 'next/link'
import styles from '../LoginPage/loginPage.module.css'
import 'boxicons/css/boxicons.min.css'; 

const LoginPage = () => {
  return (
    <div className={styles.container}>
      <div className={styles.leftContent}>

        {/*Header Left Content  */}
        <div className={styles.headerText}>
          <img src="/images/Logo.png" alt="" />
          <h1>Create Your Account</h1>
        </div>
        {/* End Header Left Content */}

        {/* Body Left Content */}
        <div className={styles.formInput}>
          <div className={styles.emailInput}>
            <h1>Email</h1>
            <div className={styles.inputContainer}>
              <i className='bx bx-envelope'></i>
              <input type="email" placeholder="Enter your Email.." className={styles.input} />
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
        {/* End Body Left Content */}

        {/* Footer Left Content*/}
        <div className={styles.footerContent}>
          <button className={styles.button}>Create an Account</button>
          <div className={styles.loginText}>
            <p>Don't have an account?</p>
            <Link href="/RegisterPage" className={styles.loginLink}>
              Register here!
            </Link>
          </div>
        </div>
        {/* End Footer Left Content */}
      </div>

      <div className={styles.rightContent}>
        <h1>Welcome Back!</h1>
        <p>Log in to your account and rediscover the <br /> friends, trends, and content you love!</p>
      </div>
    </div>
  )
}

export default LoginPage