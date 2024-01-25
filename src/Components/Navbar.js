// src/Components/Navbar.js

import React from 'react';

const Navbar = ({ openSidebar }) => {
  return (
    <nav className="navbar">
      <button onClick={openSidebar}>Open Sidebar</button>
    </nav>
  );
};

export default Navbar;


