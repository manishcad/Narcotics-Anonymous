"use client";
import { useState, useEffect } from 'react';
import styles from '../styles/Navbar.module.css';
import Link from 'next/link';
const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth <= 768);
    };
    
    handleResize();
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  return (
    <nav className={styles.navbar}>
      <Link href="/"><div className={styles.logo}>Narcotics-<span>Anonymous</span></div></Link>
      {isMobile ? (
        <button className={styles.menuButton} onClick={() => setMenuOpen(!menuOpen)}>
          MENU
        </button>
      ) : (
        <div className={styles.navLinks}>
          <Link href="/" className={`${styles.navLink} ${styles.blue}`}>Home</Link>
          <Link href="/justfortoday" className={`${styles.navLink} ${styles.green}`}>Just For Today</Link>
          
          <a href="/about" className={`${styles.navLink} ${styles.pink}`}>ABOUT</a>
          <a href="/meetings" className={`${styles.navLink} ${styles.orange}`}>Meetings</a>
          <a href="#" className={`${styles.navLink} ${styles.red}`}>CONTACT & FAQ</a>
        </div>
      )}
      {isMobile && menuOpen && (
        <div className={styles.sidebar}>
          <Link href="/" className={`${styles.navLink} ${styles.blue}`}>Home</Link>
          <Link href="/justfortoday" className={`${styles.navLink} ${styles.green}`}>Just For Today</Link>
          <a href="/about" className={`${styles.navLink} ${styles.pink}`}>ABOUT</a>
          <a href="/meetings" className={`${styles.navLink} ${styles.orange}`}>Meetings</a>
          <a href="#" className={`${styles.navLink} ${styles.red}`}>CONTACT & FAQ</a>
        </div>
      )}
    </nav>
  );
};

export default Navbar;