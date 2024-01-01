import React from 'react';
import styled from "styled-components";
import photo from '../../../assets/images/sample.jpg';
import {FlexWrapper} from "../../../components/FlexWrapper";
import {Theme} from "../../../styles/Theme";
import {Icon} from "../../../components/icon/Icon";
import {Container} from "../../../components/Container";

export const Main = () => {
    return (
        <StyledMain>
            <Container>
                <GridSquared>
                    <FlexWrapper align={"center"} justify = "space-around">
                        <div>
                            <h2>Hi👋, I’m a</h2>
                            <h1>software developer</h1>
                            <span>I’m John Doe, a developer dedicated to making the world a better place one line of code at a time.</span>
                            <MainButton>Hire me</MainButton>
                        </div>


                        <div>
                                <IconPlus>
                                    <Icon iconId={"plus"} width={"27"} height={"28"} viewBox={"0 0 27 28"}/>
                                </IconPlus>
                                <IconCube>
                                    <Icon iconId={"cube"} width={"41"} height={"41"} viewBox={"0 0 41 41"} />
                                </IconCube>


                            <IconZigzags>
                                <Icon iconId={"zigzags"} width={"42"} height={"102"} viewBox={"0 0 42 102"}/>
                            </IconZigzags>

                            <IconEllipse>
                                <Icon iconId={"ellipse"} width={"23"} height={"23"} viewBox={"0 0 23 23"}/>
                            </IconEllipse>





                            <Photo src={photo} alt=""/>
                        </div>

                    <LoadingCircles>
                        <Circle></Circle>
                        <Circle></Circle>
                        <Circle></Circle>
                        <Circle></Circle>
                        <Circle></Circle>
                        <Circle></Circle>
                        <Circle></Circle>
                        <Circle></Circle>
                        <Circle></Circle>
                    </LoadingCircles>

                    </FlexWrapper>
                </GridSquared>


            </Container>

        </StyledMain>
    );
};
const StyledMain = styled.div`
  height: 100%;
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
const IconZigzags = styled.div`
  position: absolute;
  top: 30px;
  right: 380px;
`
const IconEllipse = styled.div`
position: absolute;
  bottom: 10px;
  right: 380px;
`
const IconPlus = styled.div`
  position: absolute;
  right: 220px;
  top: 0;
  
`
const IconCube = styled.div`
  position: absolute;
  top: 0;
  right: 0;
`
const GridSquared = styled.div`
        background-size: 10px 10px;
          background-image:
          linear-gradient(to right,  #FFCCCB 1px, transparent 1px),
          linear-gradient(to bottom,  #FFCCCB 1px, transparent 1px);
  width: 1245px;
  height: 495px;
  border: 1px solid black;
  background-color: #FCFCFC;
  position: relative;
  
`
const Circle = styled.span`
  width: 15px;
  height: 15px;
  border-radius: 50%;
  background-color: ${Theme.colors.accent_red};
`
const LoadingCircles = styled.div`
display: flex;
  width: 140px;
  gap: 12px 33px;
  flex-wrap: wrap;
  position: absolute;
  bottom: 5px;
  right: -15px;
`
