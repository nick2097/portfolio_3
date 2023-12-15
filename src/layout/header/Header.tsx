import React from 'react';
import styled from "styled-components";
import {FlexWrapper} from "../../components/FlexWrapper";
import Logo from "../../components/logo/Logo";
import {Menu} from "../../components/menu/Menu";
import {Icon} from "../../components/icon/Icon";

export const Header: React.FC = () => {
    return (
    <StyledHeader>
        <FlexWrapper justify={"space-between"}>
        <Logo/>
            <Menu/>
        </FlexWrapper>
    </StyledHeader>


    );
};

const StyledHeader = styled.header`
  background-color: #FCFCFC;
  padding: 24px 100px;
  width: 100%;
  min-height: 100%;
`