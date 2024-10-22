import React from 'react';
import { Link } from 'react-router-dom';
import './NavBar.css'

const Navbar = () => {
  return (
    <nav className="navbar">
      <Link to="/">Home</Link>
      <Link to="/create">Create Post</Link>
    </nav>
  );
};

export default Navbar;
