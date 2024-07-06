import React, { useState, useEffect } from 'react';
import './Navbar.css';

const NavBar: React.FC = () => {
  const [activeItem, setActiveItem] = useState<number | null>(null);
  const [isMenuOpen, setIsMenuOpen] = useState<boolean>(false);

  const handleScroll = () => {
    const scrollY = window.scrollY;
    const navItems = document.querySelectorAll('.nav-item');

    let currentActive = 0;

    navItems.forEach((item, index) => {
      const sectionId = item.getAttribute('href')?.substring(1);
      const section = document.getElementById(sectionId || '');

      if (section) {
        const sectionTop = section.offsetTop - 1;
        const sectionHeight = section.offsetHeight;

        if (scrollY >= sectionTop && scrollY < sectionTop + sectionHeight) {
          currentActive = index;
        }
      }
    });

    setActiveItem(currentActive);
  };

  useEffect(() => {
    window.addEventListener('scroll', handleScroll);
    handleScroll();
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  const navItems = ['About', 'Experience', 'Achievements', 'Projects'];

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <div className="navbar">
      <div className="hamburger-menu" onClick={toggleMenu}>
        <div className="bar"></div>
        <div className="bar"></div>
        <div className="bar"></div>
      </div>
      <div className={`nav-items ${isMenuOpen ? 'open' : ''}`}>
        {navItems.map((item, index) => (
          <a
            key={item}
            href={`#${item.toLowerCase()}`}
            className={`nav-item ${activeItem === index ? 'active' : ''}`}
            onClick={() => setIsMenuOpen(false)}
          >
            {item}
          </a>
        ))}
      </div>
    </div>
  );
};

export default NavBar;
