import React from 'react';
import { Link } from 'react-router-dom';
import Navbar from '../components/Navbar'; // Import Navbar
import Footer from '../components/Footer'; // Import Footer (if it's in a separate file)

const Home = () => {
  const isLoggedIn = localStorage.getItem('token');

  return (
    <div style={styles.homeContainer}>
      <Navbar />
      <div style={styles.content}>
        <div style={styles.card}>
          <h1 style={styles.title}>💰 Welcome to Expense Tracker</h1>
          <p style={styles.subtitle}>
            Track your expenses, manage your transactions, and stay on top of your finances effortlessly.
          </p>
          <div style={styles.buttonGroup}>
            <Link to={isLoggedIn ? "/dashboard" : "/login"} style={styles.primaryButton}>Get Started</Link>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

const styles = {
  homeContainer: {
    display: 'flex',
    flexDirection: 'column',
    minHeight: '100vh',
    paddingTop: '60px', // To avoid content being hidden under the fixed navbar
  },
  content: {
    flexGrow: 1,
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    background: 'linear-gradient(to bottom, #DBEAFE, #EFF6FF)',
    padding: '40px',
  },
  card: {
    background: 'white',
    padding: '50px',
    borderRadius: '20px',
    boxShadow: '0px 12px 40px rgba(0,0,0,0.2)',
    textAlign: 'center',
    maxWidth: '650px',
    width: '100%',
  },
  title: {
    fontSize: '36px',
    fontWeight: 'bold',
    color: '#1E3A8A',
    marginBottom: '18px',
  },
  subtitle: {
    fontSize: '20px',
    color: '#374151',
    marginBottom: '28px',
  },
  buttonGroup: {
    display: 'flex',
    justifyContent: 'center',
    gap: '16px',
  },
  primaryButton: {
    textDecoration: 'none',
    fontSize: '20px',
    fontWeight: 'bold',
    color: 'white',
    background: 'linear-gradient(to right, #1E3A8A, #3B82F6)',
    padding: '14px 30px',
    borderRadius: '10px',
    boxShadow: '0px 6px 15px rgba(0,0,0,0.3)',
  },
};

export default Home;
