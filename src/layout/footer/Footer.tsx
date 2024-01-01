import React from 'react';
import {Icon} from "../../components/icon/Icon";
import styled from "styled-components";
import bg_wave from "../../assets/images/bg_wave.png";
import {Container} from "../../components/Container";
import {Theme} from "../../styles/Theme";
import bg_wave_bottom from "../../assets/images/bg_wave_bottom.png";
import {FlexWrapper} from "../../components/FlexWrapper";

export const Footer: React.FC = () => {
    return(
        <StyledFooter>


                <FooterTop>
                        <FlexWrapper justify={"space-around"}>
                            <SocialPart>
                                <FooterTitle>My social media links:</FooterTitle>
                                <SocialRow>
                                    <Icon iconId={"linkedin"} width={"30"} height={"30"} viewBox={"0 0 30 30"}/>
                                    <Icon iconId={"whatsapp"} width={"30"} height={"30"} viewBox={"0 0 30 30"}/>
                                    <Icon iconId={"twitter"} width={"30"} height={"30"} viewBox={"0 0 30 30"}/>
                                    <Icon iconId={"gmail"} width={"30"} height={"30"} viewBox={"0 0 30 30"}/>
                                </SocialRow>

                            </SocialPart>
                            <ProjectPart>
                                <FooterTitle>More projects I’ve worked on</FooterTitle>
                                <FooterDetails>
                                    <Icon iconId={"github"} width={"30"} height={"30"} viewBox={"0 0 30 30"}/>
                                  <FooterDetails className={"ContactInformation"}>@<FooterDetails className={"DetailsStyled"}>john-doe</FooterDetails> on github</FooterDetails>
                                </FooterDetails>

                            </ProjectPart>
                        </FlexWrapper>

                </FooterTop>
                <FooterBottom></FooterBottom>




        </StyledFooter>
    )
}
const StyledFooter = styled.footer`
height: 440px;
  position: relative;
`

const FooterTop = styled.div`
  background-image: url(${bg_wave});
  background-size: cover;
  height: 250px;
  padding: 0 110px;
  
  
  
 
`
const FooterBottom = styled.div`
  background-image: url(${bg_wave_bottom});
  background-size: cover;
  height: 190px;
  position: absolute;
  width: 100%;
  top: 248px;
  

`
const FooterTitle = styled.h3`
  color: #FFF;
  font-size: 20px;
  font-weight: 500;
`

const FooterDetails = styled.span`
    &.DetailsStyled {
      color: #0ACBBF;
    }
    &.ContactInformation  {
      margin-left: 22px;
    }
  color: #FFFAFA;
 
  font-size: 18px;
  font-weight: 400;
`
const SocialPart = styled.div`
 display: flex;
  justify-content: flex-end;
  flex-direction: column;
  gap: 34px;
`
const SocialRow = styled.div`
  display: flex;
  gap: 65px;
  
`
const ProjectPart = styled.div`
  display: flex;
  justify-content: flex-end;
  flex-direction: column;
  gap: 19px;
`
