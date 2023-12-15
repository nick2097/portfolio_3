import React from 'react';
import logo from './../../assets/images/john_doe.png';
import styled from "styled-components";

export const Logo = () => {
    return (
        <>
            <StyledLogo src={logo} alt={"John Doe"}/>
        </>

    );
};

const StyledLogo = styled.img`
  width: 90px;
  height: 35px;
  object-fit: cover;
`

export default Logo;