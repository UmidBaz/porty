import React, {useState} from 'react';
import './Navbar.css';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMicrochip } from "@fortawesome/free-solid-svg-icons";
import { faBars } from "@fortawesome/free-solid-svg-icons";
import { faCircleXmark } from "@fortawesome/free-solid-svg-icons";

export const Navbar = () => {
  const [click, setClick] = useState(false)
  const handleClick = () => setClick(!click);
  const closeMobileMenu = () => setClick(false)

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
              <Link to='/' className='nav-links' onClick={closeMobileMenu}>
                Home
              </Link>
            </li>
            <li className='nav-item'>
              <Link
                to='/services'
                className='nav-links'
                onClick={closeMobileMenu}
              >
                About
              </Link>
            </li>
            <li className='nav-item'>
              <Link
                to='/products'
                className='nav-links special'
                onClick={closeMobileMenu}
              >
                Projects
              </Link>
            </li>
          </ul>
        </div>
      </nav>
    </>
  );
}
export default Navbar
