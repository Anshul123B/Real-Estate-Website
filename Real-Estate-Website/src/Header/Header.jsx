import React, { useState } from 'react';
import './Header.css';
import { BiMenuAltRight, BiSun, BiMoon } from 'react-icons/bi'; // Import Sun and Moon icons
import OutsideClickHandler from 'react-outside-click-handler';

const Header = () => {
  const [menuOpened, setMenuOpened] = useState(false);
  const [darkMode, setDarkMode] = useState(false); // New state for Dark Mode

  // Handle menu animation
  const getMenuStyle = (menuOpened) => {
    if (document.documentElement.clientWidth <= 800) {
      return { right: !menuOpened && "-100%" };
    }
  };

  // Handle dark mode toggle
  const toggleDarkMode = () => {
    setDarkMode(!darkMode);
    document.body.classList.toggle('dark-mode'); // Toggle dark-mode class on body
  };

  return (
    <section className="h-wrapper">
      <div className="flexCenter paddings innerWidth h-container">

        <img src="./logo.png" alt="logo" width={100} />

        <OutsideClickHandler onOutsideClick={() => setMenuOpened(false)}>
          <div className="flexCenter h-menu" style={getMenuStyle(menuOpened)}>
            <a href="">Residencies</a>
            <a href="">About</a>
            <a href="">Contact us</a>
            <a href="">Get Started</a>
            <button className="button">
              <a href="">Contact</a>
            </button>
          </div>
        </OutsideClickHandler>

        {/* Mobile menu icon */}
        <div className="menu-icon" onClick={() => setMenuOpened((prev) => !prev)}>
          <BiMenuAltRight size={30} />
        </div>

        {/* Dark Mode Toggle Button */}
        <div className="dark-mode-toggle" onClick={toggleDarkMode}>
          {darkMode ? <BiSun size={25} /> : <BiMoon size={25} />}
        </div>

      </div>
    </section>
  );
};

export default Header;
