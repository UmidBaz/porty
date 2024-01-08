import React, {useState, useEffect} from 'react';
import './Navbar.css';
import './Header.js';
import './About.js';
import './Cards.js';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMicrochip } from "@fortawesome/free-solid-svg-icons";
import { faBars } from "@fortawesome/free-solid-svg-icons";
import { faCircleXmark } from "@fortawesome/free-solid-svg-icons";

const hideNavbar = () => {
  const nav = document.querySelector(".navbar");
  let lastScrollY = window.scrollY;

  window.addEventListener("scroll", () => {
    if(lastScrollY < window.scrollY){
      nav.classList.add("navbar-hidden");
    } else{
      nav.classList.remove("navbar-hidden");
    }
    lastScrollY = window.scrollY;
  });

};


export const Navbar = () => {
  const [click, setClick] = useState(false)
  const handleClick = () => setClick(!click);
  const closeMobileMenu = () => setClick(false)

  useEffect(() => {
    hideNavbar();
  }, []);

  const scrollToSection = (sectionId) => {
    const section = document.getElementById(sectionId);

      if (section) {
        const rect = section.getBoundingClientRect();
        if (rect.top < 0 || rect.bottom > window.innerHeight) {
          section.scrollIntoView({ behavior: 'smooth' });
        }
      }
    closeMobileMenu();
  };

  return (
    <>
      <nav className='navbar'>
        <div className='navbar-container'>
          <Link to='/' className='navbar-logo' onClick={closeMobileMenu}>
            <FontAwesomeIcon icon={faMicrochip} />
            OMERTA
          </Link>
          <div className='menu-icon' onClick={handleClick}>
            <FontAwesomeIcon icon = {click ?  faCircleXmark : faBars} />
          </div>
          <ul className={click ? 'nav-menu active' : 'nav-menu'}>
            <li className='nav-item'>
              <a href='#home' className='nav-links' onClick={closeMobileMenu}>
                Home
              </a>
            </li>
            <li className='nav-item'>
              <a href='#about' className='nav-links' onClick={closeMobileMenu}>
                About
              </a>
            </li>
            <li className='nav-item'>
              <Link to='/' className='nav-links special' onClick={() => scrollToSection('cards')}>
                Projects
              </Link>
            </li>
          </ul>
        </div>
      </nav>
    </>
  );
}

export default Navbar;
