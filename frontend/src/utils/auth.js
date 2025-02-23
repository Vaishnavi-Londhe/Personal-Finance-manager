// Check if the user is authenticated
export const isAuthenticated = () => {
    const token = localStorage.getItem('token');
    return !!token; // Returns true if token exists, false otherwise
  };
  
  // Log out the user
  export const logout = () => {
    localStorage.removeItem('token'); // Remove the token
    window.location.href = '/login'; // Redirect to login page
  };