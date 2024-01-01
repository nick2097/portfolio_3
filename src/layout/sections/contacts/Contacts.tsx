import React from 'react';
import styled from "styled-components";
import {Container} from "../../../components/Container";
import {FlexWrapper} from "../../../components/FlexWrapper";
import {Icon} from "../../../components/icon/Icon";
import {Theme} from "../../../styles/Theme";
import PaperPlane from "../../../assets/images/paper_plane.png";

export const Contacts = () => {
    return (
        <StyledContacts>
            <Container>
                <SectionTitle>Contact me</SectionTitle>
                <FlexWrapper justify={"space-around"}>
<Icon iconId={"man_standing"} width={"563px"} height={"412px"} viewBox={"0 0 536 412"} />
                 <StyledForm>
                         <Field required placeholder={"Enter email address"}/>
                         <Field required placeholder={"Enter message..."}  as={"textarea"}/>
                         <ContactsButton>Send Message
                         <ButtonImage src={PaperPlane} alt={""}/></ContactsButton>
                 </StyledForm>
                </FlexWrapper>
            </Container>
        </StyledContacts>
    )
}

const StyledContacts = styled.section`

`
const SectionTitle = styled.h2`
text-align: center;
  margin-bottom: 30px;
  color: ${Theme.colors.accent_red};
  font-size: 20px;
  font-weight: 500;
`
const StyledForm = styled.form`
  margin-top: 30px;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 43px;
  
  textarea {
    padding: 11px 19px;
    height: 158px;
  }
`
const Field = styled.input`
  padding: 12px 18px;
  width: 613px;
  height: 53px;
  border-radius: 4px;
  border: 1px solid rgba(0, 0, 0, 0.12);
  background: #FFF;
  box-shadow: 0px 1px 3px 0px rgba(0, 0, 0, 0.20), 0px 2px 1px 0px rgba(0, 0, 0, 0.12), 0px 1px 1px 0px rgba(0, 0, 0, 0.14);
  
  &::placeholder {
    color: #838383;
    font-size: 14px;
    line-height: 29px; 
  }
`
const ContactsButton = styled.button`
  width: 214px;
  height: 50px;
  padding: 12px 24px;
  background-color: ${Theme.colors.projectBg};
  border-radius: 4px;
  display: flex;
  justify-content: center;
  gap: 20px;
  align-items: center;
  color: #FFFDFD;
  text-align: center;
  font-size: 18px;
`
const ButtonImage = styled.img`
  width: 21px;
  height: 24px;
  
`