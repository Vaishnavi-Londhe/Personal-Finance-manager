import { useState } from 'react';
import { Link } from 'react-router-dom';
import TransactionForm from '../components/TransactionForm';
import TransactionList from '../components/TransactionList';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';

const Dashboard = () => {
  const [refresh, setRefresh] = useState(false);
  const isLoggedIn = !!localStorage.getItem('token');

  const fetchTransactions = () => {
    setRefresh(!refresh); // Toggle refresh state to trigger re-fetch
  };

  return (
    <div style={styles.pageWrapper}>
      {/* Navbar */}
      <Navbar />

      {/* Main Content Wrapper */}
      <div style={styles.contentWrapper}>
        <div style={styles.container}>
          <div style={styles.card}>
            {/* Title & Description */}
            <h1 style={styles.title}>📊 Transaction Dashboard</h1>
            <p style={styles.subtitle}>
              Manage your transactions effortlessly. Add new transactions and keep track of all your expenses.
            </p>

            {/* Profile Link (Visible if Logged In) */}
            {isLoggedIn && (
              <div style={styles.profileSection}>
                <Link to="/profile" style={styles.profileLink}>👤 View Profile</Link>
              </div>
            )}

            {/* Transaction Form */}
            <div style={styles.section}>
              <TransactionForm fetchTransactions={fetchTransactions} />
            </div>

            <hr style={styles.divider} />

            {/* Transaction List (Without Extra Title) */}
            <div style={styles.section}>
              <TransactionList refresh={refresh} />
            </div>
          </div>
        </div>
      </div>

      {/* Footer */}
      <Footer />
    </div>
  );
};

// 🎨 Internal CSS Styles
const styles = {
  pageWrapper: {
    display: 'flex',
    flexDirection: 'column',
    minHeight: '100vh', // Full height of the viewport
    backgroundColor: '#f4f7fc', // Light background for contrast
  },
  contentWrapper: {
    flex: 1, // Expands to fill available space
    paddingTop: '80px', // Adjusted for Navbar height
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
  },
  container: {
    width: '100%',
    maxWidth: '900px', // Ensures a nice readable width
    padding: '20px',
    display: 'flex',
    justifyContent: 'center',
  },
  card: {
    background: '#ffffff',
    padding: '2rem',
    borderRadius: '12px',
    boxShadow: '0px 4px 12px rgba(0, 0, 0, 0.1)',
    textAlign: 'center',
    width: '100%',
    maxWidth: '800px',
  },
  title: {
    fontSize: '28px',
    fontWeight: 'bold',
    color: '#333',
    marginBottom: '0.5rem',
  },
  subtitle: {
    fontSize: '16px',
    color: '#555',
    marginBottom: '1.5rem',
  },
  profileSection: {
    marginBottom: '20px',
  },
  profileLink: {
    textDecoration: 'none',
    fontSize: '18px',
    fontWeight: '600',
    color: '#1E3A8A',
  },
  section: {
    padding: '15px 0',
    textAlign: 'center',
  },
  divider: {
    border: 'none',
    height: '1px',
    backgroundColor: '#ddd',
    margin: '20px 0',
  },
};

export default Dashboard;
