// src/components/Navbar.js
import React from 'react';
import { Link } from 'react-router-dom';
import logo from '../assets/logo.webp'; // Import the logo image

const Navbar = () => {
  const isLoggedIn = localStorage.getItem('token');

  return (
    <nav style={styles.navbar}>
      <div style={styles.container}>
        <div style={styles.leftSection}>
          <Link to="/" style={styles.logoContainer}>
            <img src={logo} alt="Expense Tracker Logo" style={styles.logo} />
            <span style={styles.logoText}>Expense Tracker</span>
          </Link>
        </div>
        <div style={styles.navLinks}>
          <Link to="/" style={styles.navLink}>Home</Link>
          <Link to="/dashboard" style={styles.navLink}>Dashboard</Link>
          {isLoggedIn ? (
            <Link to="/profile" style={styles.navLink}>Profile</Link>
          ) : (
            <>
              <Link to="/login" style={styles.navLink}>Login</Link>
              <Link to="/register" style={styles.navLink}>Register</Link>
            </>
          )}
        </div>
      </div>
    </nav>
  );
};

const styles = {
  navbar: {
    background: 'linear-gradient(to right, #1E3A8A, #3B82F6)',
    padding: '10px 20px',
    color: 'white',
    boxShadow: '0px 4px 12px rgba(0,0,0,0.15)',
    position: 'fixed',
    top: 0,
    width: '100%',
    zIndex: 1000,
  },
  container: {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    maxWidth: '1200px', // Adjusted for better spacing
    margin: '0 auto',
  },
  leftSection: {
    display: 'flex',
    alignItems: 'center',
    flexGrow: 1, // Makes sure it stays aligned left
  },
  logoContainer: {
    display: 'flex',
    alignItems: 'center',
    textDecoration: 'none',
  },
  logo: {
    width: '35px', 
    height: '35px',
    marginRight: '10px',
  },
  logoText: {
    fontSize: '20px',
    fontWeight: 'bold',
    color: 'white',
  },
  navLinks: {
    display: 'flex',
    gap: '12px',
  },
  navLink: {
    color: 'white',
    textDecoration: 'none',
    fontSize: '15px',
    transition: 'color 0.3s',
    fontWeight: '500',
  },
};

export default Navbar;
