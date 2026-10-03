import React, { useState, useEffect } from 'react';
import './Navbar.css';

const navItems = ['About', 'Experience', 'Achievements', 'Projects'];

const NavBar: React.FC = () => {
  const [activeItem, setActiveItem] = useState<number | null>(null);
  const [isMenuOpen, setIsMenuOpen] = useState<boolean>(false);

  useEffect(() => {
    const sections = navItems.map(item => document.getElementById(item.toLowerCase()));
    let frame = 0;

    const update = () => {
      frame = 0;
      const scrollY = window.scrollY;
      let currentActive = 0;

      sections.forEach((section, index) => {
        if (section) {
          const sectionTop = section.offsetTop - 1;
          const sectionHeight = section.offsetHeight;

          if (scrollY >= sectionTop && scrollY < sectionTop + sectionHeight) {
            currentActive = index;
          }
        }
      });

      // React skips the re-render when the value is unchanged
      setActiveItem(currentActive);
    };

    // Throttle to one update per frame
    const handleScroll = () => {
      if (!frame) frame = requestAnimationFrame(update);
    };

    update();
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => {
      cancelAnimationFrame(frame);
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  const toggleMenu = () => {
    setIsMenuOpen(open => !open);
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
