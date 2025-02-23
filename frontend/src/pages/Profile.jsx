import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Navbar from '../components/Navbar'; // Import Navbar
import Footer from '../components/Footer'; // Import Footer

const Profile = () => {
  const navigate = useNavigate();
  const [user, setUser] = useState(null);

  useEffect(() => {
    // Simulate fetching user details from localStorage (replace with API call if needed)
    const storedUser = JSON.parse(localStorage.getItem('user')) || {
      username: 'testuser',
      email: 'testuser@example.com',
    };
    setUser(storedUser);
  }, []);

  const handleLogout = () => {
    localStorage.removeItem('token'); // Remove authentication token
    localStorage.removeItem('user');  // Remove user data
    navigate('/login'); // Redirect to login
  };

  return (
    <>
      <Navbar /> {/* Navbar added */}
      <div style={styles.container}>
        <div style={styles.card}>
          <h1 style={styles.title}>👤 Your Profile</h1>
          {user ? (
            <>
              <p style={styles.info}><strong>Username:</strong> {user.username}</p>
              <p style={styles.info}><strong>Email:</strong> {user.email}</p>
              <button onClick={handleLogout} style={styles.logoutButton}>Logout</button>
            </>
          ) : (
            <p>Loading...</p>
          )}
        </div>
      </div>
      <Footer /> {/* Footer added */}
    </>
  );
};

// Internal Styles
const styles = {
  container: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    minHeight: '100vh',
    backgroundColor: '#e3f2fd',
    padding: '20px',
  },
  card: {
    background: '#ffffff',
    padding: '2rem',
    borderRadius: '15px',
    boxShadow: '0px 5px 15px rgba(0, 0, 0, 0.15)',
    textAlign: 'center',
    width: '400px',
    maxWidth: '100%',
  },
  title: {
    fontSize: '24px',
    fontWeight: 'bold',
    color: '#333',
    marginBottom: '1rem',
  },
  info: {
    fontSize: '18px',
    color: '#555',
    marginBottom: '10px',
  },
  logoutButton: {
    backgroundColor: '#D32F2F',
    color: 'white',
    padding: '10px 20px',
    border: 'none',
    borderRadius: '5px',
    cursor: 'pointer',
    fontSize: '16px',
    marginTop: '15px',
  },
};

export default Profile;
