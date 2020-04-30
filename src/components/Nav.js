import React from 'react';
import styled from 'styled-components'
import { FaBars } from 'react-icons/fa'

const NavBar = styled.nav`
width: 100%;
height: 70px;
display: flex;
justify-content: space-between;
align-items: center;
background-color: #6D2451;
color: #ffff;
h1 {
    margin-left: 15px;
  }
.n-icon {
    width: 30px;
    height: 30px;
    margin-right: 15px;
  }
`;

const Nav = () => {
    return (
        <NavBar>
            <h1>#AdoptADAS</h1>
            <FaBars className="n-icon"/>
        </NavBar>
    );
}

export default Nav