import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import styles from './NavBar.module.css';
import SearchBar from '../SearchBar/SearchBar';

const NavBar = ({ onSearch }) => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const toggleMobileMenu = () => setIsMobileMenuOpen((open) => !open);
  const closeMenu = () => setIsMobileMenuOpen(false);

  return (
    <nav className={styles.navBar}>
      <Link to="/" className={styles.logo} onClick={closeMenu}>BlogApp</Link>
      <div className={styles.links}>
        <Link to="/" onClick={closeMenu}>Home</Link>
        <Link to="/" onClick={closeMenu}>Blog</Link>
        <Link to="/about" onClick={closeMenu}>About</Link>
      </div>
      <div className={styles.searchBarWrapper}>
        <SearchBar onSearch={onSearch} />
      </div>
      <button
        className={styles.hamburger}
        onClick={toggleMobileMenu}
        aria-label="Toggle menu"
        aria-expanded={isMobileMenuOpen}
      >
        {isMobileMenuOpen ? '✕' : '☰'}
      </button>
      {isMobileMenuOpen && (
        <div className={styles.mobileMenu}>
          <Link to="/" onClick={closeMenu}>Home</Link>
          <Link to="/" onClick={closeMenu}>Blog</Link>
          <Link to="/about" onClick={closeMenu}>About</Link>
        </div>
      )}
    </nav>
  );
};

export default NavBar;
