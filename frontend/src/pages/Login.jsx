import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { loginUser } from '../utils/api'; // Import the loginUser function from utils/api
import Navbar from '../components/Navbar'; // Import the Navbar component
import Footer from '../components/Footer'; // Import the Footer component
import './Login.css'; // Import the CSS file

const Login = () => {
  const [username, setUsername] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const { token } = await loginUser(username, email, password); // Use the loginUser function
      localStorage.setItem('token', token); // Save the token to localStorage
      navigate('/'); // Redirect to the dashboard
    } catch (error) {
      console.error(error);
      alert('Login failed');
    }
  };

  return (
    <>
      <Navbar />
      <div className="login-container">
        <div className="login-card">
          <h1 className="login-title">Login</h1>
          <form onSubmit={handleSubmit} className="login-form">
            <input
              type="text"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
              placeholder="Username"
              required
              className="login-input"
            />
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="Email"
              required
              className="login-input"
            />
            <input
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              placeholder="Password"
              required
              className="login-input"
            />
            <button type="submit" className="login-button">
              Login
            </button>
          </form>
          <div className="register-link">
            <p>Don't have an account? <a href="/register">Register here</a></p>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default Login;
