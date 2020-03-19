import React from 'react';
import styled from 'styled-components'
import { FaBars } from 'react-icons/fa'

const Nav = () => {
    return (
        <nav className="nav">
            <h1>#AdoptADAS</h1>
            <FaBars className="n-icon"/>
        </nav>
    );
}

export default Nav