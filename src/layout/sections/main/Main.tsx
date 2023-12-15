import React from 'react';
import styled from "styled-components";
import photo from '../../../assets/images/sample.jpg';
import {FlexWrapper} from "../../../components/FlexWrapper";
import {Theme} from "../../../styles/Theme";
import {Icon} from "../../../components/icon/Icon";

export const Main = () => {
    return (
        <StyledMain>
            <FlexWrapper align={"center"} justify = "space-around">
                <div>
                    <h2>Hi👋, I’m a</h2>
                    <h1>software developer</h1>
                    <span>I’m John Doe, a developer dedicated to making the world a better place one line of code at a time.</span>
                    <MainButton>Hire me</MainButton>
                </div>

                <Photo src={photo} alt=""/>

            </FlexWrapper>

        </StyledMain>
    );
};
const StyledMain = styled.div`
  min-height: 100vh;
  background: ${Theme.colors.secondaryBg};
`

const Photo = styled.img`
  width: 343.85px;
  height: 389.111px;
  flex-shrink: 0;
  object-fit: cover;
`
const MainTitle = styled.h1`

`
const Greeting = styled.h2`

`
const MainButton = styled.button`
  width: 98px;
  height: 42px;
  padding: 8px 16px;
  border-radius: 4px;
  background: ${Theme.colors.accent_red};
  box-shadow: 0px 4px 4px 0px rgba(0, 0, 0, 0.25);
  display: flex;
  align-items: center;

  color: #FFF;

  text-align: center;
  text-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
  /* text */
  font-size: 18px;
  font-weight: 400;
`
