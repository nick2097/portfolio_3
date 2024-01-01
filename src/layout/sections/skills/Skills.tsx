import React from 'react';
import styled from "styled-components";
import {FlexWrapper} from "../../../components/FlexWrapper";
import {Icon} from "../../../components/icon/Icon";
import {Container} from "../../../components/Container";
import {Theme} from "../../../styles/Theme";
import html5 from "../../../assets/images/html5Skill.png";
import css3 from "../../../assets/images/css3Skill.png";
import js from "../../../assets/images/jsSkill.png";
import bootstrap from "../../../assets/images/bootstrapSkill.png";

export const Skills = () => {
    return (
    <StyledSkills>

        <Container>
            <StyledTitle>Skills</StyledTitle>
            <FlexWrapper justify={"space-between"}>
                <FlexWrapper>
                    <AdditionalText>I have a vast experience in the following web technologies:</AdditionalText>

                    <SkillsWrapper>
                        <SkillImage src={html5} alt={"html5"} />
                        <SkillImage src={css3} alt={"css3"}/>
                        <SkillImage src={js} alt={"javascript"}/>
                        <SkillImage src={bootstrap} alt={"bootstrap"}/>
                    </SkillsWrapper>
                </FlexWrapper>

                <ProjectSvg>
                    <Icon iconId={"project_completed"} width={"511"} height={"414"} viewBox={"0 0 511 414"}/>
                </ProjectSvg>

            </FlexWrapper>

        </Container>

        <BlobBg>
            <Icon iconId = "blob" width={"363"} height={"296"} viewBox={"0 0 363 296"}/>
        </BlobBg>

    </StyledSkills>
    );
};

const StyledSkills = styled.div`
  height: 100%;
  background-color: ${Theme.colors.primaryBg};
  padding-top: 224px;
  position: relative;
`
const StyledTitle = styled.h2`
  text-align: center;
  color: ${Theme.colors.accent_red};
  font-family: Be Vietnam;
  font-size: 20px;
  font-weight: 500;
`
const SkillImage = styled.img`

`
const SkillsWrapper = styled.div`
  display: flex;
  align-items: center;
  gap: 42px;
  position: absolute;
  top: 500px;
  
  
`

const AdditionalText = styled.span`
position: absolute;
  top: 450px;
`
const BlobBg = styled.div`
position: absolute;
  top: 180px;
  right: 100px;
`
const ProjectSvg = styled.div`
 z-index: 1;
`