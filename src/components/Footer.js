import React from 'react'
import './Footer.css';

export const Footer = () => {
  return (
    <div class="footer-basic">
        <footer>
            <ul >
                <li ><a href="#">Home</a></li>
                <li ><a href="#">Services</a></li>
                <li ><a href="#">About</a></li>
                <li ><a href="#">Terms</a></li>
                <li ><a href="#">Privacy Policy</a></li>
            </ul>
            <p class="copyright">Arcanas LLC © 2023</p>
        </footer>
    </div>
  )
}

export default Footer