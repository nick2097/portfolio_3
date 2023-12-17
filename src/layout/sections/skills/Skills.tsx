import React from 'react';
import styled from "styled-components";
import {FlexWrapper} from "../../../components/FlexWrapper";
import {Icon} from "../../../components/icon/Icon";
import js from '../../../assets/images/js.png'
import {Container} from "../../../components/Container";
import {Theme} from "../../../styles/Theme";

export const Skills = () => {
    return (
    <StyledSkills>

        <Container>
            <StyledTitle>Skills</StyledTitle>
            <FlexWrapper justify={"space-between"}>

                    <AdditionalText>I have a vast experience in the following web technologies:</AdditionalText>

                <SkillsWrapper>

                    <StyledSkill>
                        <FlexWrapper direction={"column"} align={"center"}>
                            <Icon iconId={"polygon"} width={"65"} height={"75"} viewBox={"0 0 65 75"}/>
                                <Icon iconId={"html5"} width={"44"} height={"44"} viewBox={"0 0 44 44"}/>


                            <SkillTitle>HTML5</SkillTitle>
                        </FlexWrapper>
                    </StyledSkill>
                    <StyledSkill>
                        <FlexWrapper direction={"column"} align={"center"}>
                            <IconWrapper>
                                <Icon iconId={"css3"} width={"53"} height={"53"} viewBox={"0 0 53 53"}/>
                            </IconWrapper>
                            <SkillTitle>CSS3</SkillTitle>
                        </FlexWrapper>
                    </StyledSkill>

                    <StyledSkill>
                        <FlexWrapper direction={"column"} align={"center"}>
                            <IconWrapper>
                                <SkillImage src={js} alt = "java script"/>
                            </IconWrapper>
                            <SkillTitle>JavaScript</SkillTitle>
                        </FlexWrapper>
                    </StyledSkill>

                    <StyledSkill>
                        <FlexWrapper direction={"column"} align={"center"}>
                            <IconWrapper>
                                <Icon iconId = {"bootstrap4"} width={"40"} height={"40"} viewBox={"0 0 40 40"}/>
                            </IconWrapper>
                            <SkillTitle>Bootstrap</SkillTitle>
                        </FlexWrapper>
                    </StyledSkill>






                </SkillsWrapper>

                <Icon iconId={"project_completed"} width={"511"} height={"414"} viewBox={"0 0 511 414"}/>
            </FlexWrapper>

        </Container>
        <Icon iconId = "blob" width={"363"} height={"296"} viewBox={"0 0 363 296"}/>

    </StyledSkills>
    );
};

const StyledSkills = styled.div`
  height: 100%;
  background-color: ${Theme.colors.primaryBg};
  padding-top: 224px;
`
const StyledTitle = styled.h2`
  text-align: center;
  color: ${Theme.colors.accent_red};
`
const SkillImage = styled.img`

`
const SkillsWrapper = styled.div`
display: flex;
  align-items: center;
  
`
const SkillTitle = styled.h3`

`
const IconWrapper = styled.div`
  
`
const StyledSkill = styled.div`

`
const AdditionalText = styled.span`
position: absolute;
`