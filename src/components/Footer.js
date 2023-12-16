import React from 'react'
import './Footer.css';

export const Footer = () => {
  return (
    <div className='footer'>
        <ul class="footer-menu">
                <li><a href="#">Home</a></li>
                <li><a href="#">About</a></li>
                <li><a href="#">Partners</a></li>
                <li><a href="#">Contact Us</a></li>
        </ul>
        <div className='footer-copyright'>
            <p>Copyright @ 2023 All Rights Reserved.</p>
        </div>
    </div>
  )
}

export default Footer