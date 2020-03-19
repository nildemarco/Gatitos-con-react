import React from 'react';
import { FaFacebookF, FaGooglePlusG, FaTwitter, FaInstagram, FaCopyright } from 'react-icons/fa'

const Footer = () => {
    return (
        <footer className="footer">
            <div className="footer-icons">
                <FaFacebookF className="f-icon" size={13} />
                <FaGooglePlusG className="f-icon"/>
                <FaTwitter className="f-icon"/>
                <FaInstagram className="f-icon"/>
            </div>
            <div><FaCopyright className="f-icon"/> 2020 | All Rights Reserved</div>

        </footer>
    );
}
export default Footer;