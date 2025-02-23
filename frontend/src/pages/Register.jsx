import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { registerUser } from '../utils/api'; // Import the registerUser function from utils/api
import Navbar from '../components/Navbar'; // Import Navbar
import Footer from '../components/Footer'; // Import Footer

const Register = () => {
  const [username, setUsername] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await registerUser(username, email, password); // Use the registerUser function
      alert('Registration successful');
      navigate('/login'); // Redirect to the login page
    } catch (error) {
      console.error(error);
      alert('Registration failed');
    }
  };

  return (
    <>
      <Navbar /> {/* Navbar added here */}
      <div style={styles.container}>
        <div style={styles.card}>
          <h1 style={styles.title}>Register</h1>
          <form onSubmit={handleSubmit} style={styles.form}>
            <input
              type="text"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
              placeholder="Username"
              required
              style={styles.input}
            />
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="Email"
              required
              style={styles.input}
            />
            <input
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              placeholder="Password"
              required
              style={styles.input}
            />
            <button type="submit" style={styles.button}>
              Register
            </button>
          </form>
        </div>
      </div>
      <Footer /> {/* Footer added here */}
    </>
  );
};

// Internal CSS Styles
const styles = {
  container: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    height: '100vh',
    backgroundColor: '#f0f2f5',
  },
  card: {
    background: '#fff',
    padding: '2rem',
    borderRadius: '12px',
    boxShadow: '0px 4px 10px rgba(0, 0, 0, 0.1)',
    textAlign: 'center',
    width: '350px',
  },
  title: {
    fontSize: '24px',
    fontWeight: 'bold',
    color: '#333',
    marginBottom: '1.5rem',
  },
  form: {
    display: 'flex',
    flexDirection: 'column',
    gap: '1rem',
  },
  input: {
    padding: '10px',
    border: '1px solid #ccc',
    borderRadius: '8px',
    fontSize: '16px',
    outline: 'none',
    transition: '0.3s',
  },
  button: {
    backgroundColor: '#007bff',
    color: 'white',
    border: 'none',
    padding: '10px',
    fontSize: '16px',
    borderRadius: '8px',
    cursor: 'pointer',
    transition: '0.3s',
  },
  buttonHover: {
    backgroundColor: '#0056b3',
  },
};

export default Register;
