import React from 'react'
import { useNavigate } from 'react-router-dom'
import axios from 'axios';

const Logout = () => {
  const navigate=useNavigate();
  const handleLogout = () => {
    // Make an API request to invalidate the JWT token
    axios.post('http://localhost:4000/auth/logout') // Replace '/logout' with your API endpoint for token invalidation
      .then(response => {
        // Handle the response if needed
        // e.g., display a success message
        console.log('Logout successful');
        // Redirect to the login page or any other page
        navigate('/login'); // Replace '/login' with the desired route
      })
      .catch(error => {
        // Handle error if needed
        console.error('Logout failed', error);
      });
  };

  return (
    <button onClick={handleLogout}>Logout</button>
  )
}

export default Logout