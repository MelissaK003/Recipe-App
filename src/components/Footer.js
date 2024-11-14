import React from 'react';
import { FaYoutube, FaTwitter, FaInstagram, } from 'react-icons/fa'; // Import icons from react-icons
// import '../Footer.css';

const Footer = () => {
    return (
        <footer className="footer">
            <p>Recipe App &copy; 2024</p>
            <div className="social-icons">
                <a href="https://www.youtube.com" target="_blank" rel="noopener noreferrer">
                    <FaYoutube size={30} />
                </a>
                <a href="https://twitter.com" target="_blank" rel="noopener noreferrer">
                    <FaTwitter size={30} />
                </a>
                <a href="https://www.instagram.com" target="_blank" rel="noopener noreferrer">
                    <FaInstagram size={30} />
                </a>
            </div>
        </footer>
    );
};

export default Footer;