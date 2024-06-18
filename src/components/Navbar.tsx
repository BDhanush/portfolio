// Navbar.tsx

import React, { useState, useEffect } from 'react';
import './Navbar.css';

const NavBar: React.FC = () => {
  const [activeItem, setActiveItem] = useState<number | null>(null); // Track active nav item

  const handleScroll = () => {
    const scrollY = window.scrollY;
    const navItems = document.querySelectorAll('.nav-item');

    let currentActive = null;

    navItems.forEach((item, index) => {
      const sectionId = item.getAttribute('href')?.substring(1);
      const section = document.getElementById(sectionId || '');

      if (section) {
        const sectionTop = section.offsetTop-1;
        const sectionHeight = section.offsetHeight;

        // Check if the section is in view
        if (scrollY >= sectionTop && scrollY < sectionTop + sectionHeight) {
          currentActive = index;
        }
      }
    });

    setActiveItem(currentActive);
  };

  useEffect(() => {
    window.addEventListener('scroll', handleScroll);
    handleScroll(); // Call initially to set active item on load
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);


  const navItems = ['About', 'Experience','Achievements', 'Projects' ];

  return (
    <div className="navbar">
      {navItems.map((item, index) => (
        <a
          key={item}
          href={`#${item.toLowerCase()}`}
          className={`nav-item ${activeItem === index ? 'active' : ''}`}
        >
          {item}
        </a>
      ))}
    </div>
  );
};

export default NavBar;
