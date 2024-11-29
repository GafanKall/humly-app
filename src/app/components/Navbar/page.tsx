"use client";
import Link from 'next/link';
import { usePathname, useRouter } from 'next/navigation'; // Tambahkan useRouter
import { useState } from 'react';
import CreateThread from '../FormsNav/page';
import styles from './navbar.module.css';
import 'boxicons/css/boxicons.min.css';

const Navbar = () => {
  const pathname = usePathname();
  const router = useRouter(); // Inisialisasi router
  const [menuOpen, setMenuOpen] = useState(false);
  const [isCreateThreadOpen, setIsCreateThreadOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  const closeMenu = () => {
    setMenuOpen(false);
  };

  const openCreateThread = () => {
    if (pathname !== '/pages/HomePage') {
      router.push('/pages/HomePage'); // Pindahkan ke homepage
      setTimeout(() => setIsCreateThreadOpen(true), 300); // Tunggu hingga halaman ter-load
    } else {
      setIsCreateThreadOpen(true);
    }
  };

  const closeCreateThread = () => {
    setIsCreateThreadOpen(false);
  };

  return (
    <>
      {/* Overlay */}
      {menuOpen && <div className={styles.overlay} onClick={closeMenu}></div>}
      {isCreateThreadOpen && (
        <div className={styles.overlay} onClick={closeCreateThread}></div>
      )}

      <nav className={styles.navbar}>
        <div className={styles.logo}>
          <Link href="/pages/HomePage">
            <img src="/images/Logo.png" alt="Logo" />
          </Link>
        </div>
        <ul className={styles.navLinks}>
          <li className={pathname === '/pages/HomePage' ? styles.active : ''}>
            <Link href="/pages/HomePage">
              <i className='bx bx-home'></i>
            </Link>
          </li>
          <li className={pathname === '/pages/SearchPage' ? styles.active : ''}>
            <Link href="/pages/SearchPage">
              <i className='bx bx-search-alt-2'></i>
            </Link>
          </li>
          <li>
            <button onClick={openCreateThread} className={styles.iconButton}>
              <i className='bx bx-plus'></i>
            </button>
          </li>
          <li className={pathname === '/pages/NotifPage' ? styles.active : ''}>
            <Link href="/pages/NotifPage">
              <i className='bx bx-heart'></i>
            </Link>
          </li>
          <li className={pathname === '/pages/ProfilePage' ? styles.active : ''}>
            <Link href="/pages/ProfilePage">
              <i className='bx bx-user'></i>
            </Link>
          </li>
        </ul>
        <div className={styles.menu} onClick={toggleMenu}>
          <i className='bx bx-menu'></i>
        </div>
      </nav>

      {/* Menu dropdown */}
      {menuOpen && (
        <div className={styles.dropdownMenu}>
          <button onClick={closeMenu} className={styles.dropdownButton}>Setting</button>
          <button onClick={closeMenu} className={styles.dropdownButton}>Logout</button>
          <button onClick={closeMenu} className={styles.dropdownButton}>Dark Mode</button>
        </div>
      )}

      {/* Create Thread Pop-up */}
      {isCreateThreadOpen && (
        <div className={styles.popup}>
          <CreateThread onClose={closeCreateThread} />
        </div>
      )}
    </>
  );
};

export default Navbar;
