import React from 'react';
import { FaFacebookF, FaGooglePlusG, FaTwitter, FaInstagram, FaCopyright } from 'react-icons/fa'
import styled from 'styled-components';

const StyleFooter = styled.footer`
width: 100%;
height: 70px;
display: flex;
flex-direction: column;
justify-content: center;
align-items: center;
background-color:  #6D2451 ;
color:  #ffff;
div {
    display: flex;
    justify-content: center;
    align-items: center;
    .f-icon {
        margin: 2px;
        font-size: medium;
        margin-bottom: 0px;
    }
}`

const Footer = () => {
    return (
        <StyleFooter>
            <div className="footer-icons">
                <FaFacebookF className="f-icon" size={13} />
                <FaGooglePlusG className="f-icon"/>
                <FaTwitter className="f-icon"/>
                <FaInstagram className="f-icon"/>
            </div>
            <div><FaCopyright className="f-icon"/> 2020 | All Rights Reserved</div>

        </StyleFooter>
    );
}
export default Footer;