import React from 'react';
import styled from "styled-components";
import {Container} from "../../../components/Container";
import {FlexWrapper} from "../../../components/FlexWrapper";
import project1 from "../../../assets/images/project1.png";
import project2 from "../../../assets/images/project2.png";
import project3 from "../../../assets/images/project3.png";
import {Icon} from "../../../components/icon/Icon";
import {Theme} from "../../../styles/Theme";

export const Projects: React.FC = () => {
    return (
    <StyledProjects>
        <Container className={"project_container"}>
            <FlexWrapper justify={"center"}>
                <Icon iconId={"projects_gear"} width={"28"} height={"24"} viewBox={"0 0 28 24"}/>
                <MainTitle>Projects</MainTitle>
            </FlexWrapper>
            <StyledOption>A select number of projects</StyledOption>
            <FlexWrapper justify={"space-around"}>
                <StyledProject>
                    <FlexWrapper gap ="20px" direction={"column"} >
                        <ProjectImage src={project1} alt={""}/>
                        <ProjectDescription>Made a social media manager template using HTML 5, CSS and JS.</ProjectDescription>
                        <FlexWrapper justify={"center"}>
                            <ProjectButton>Learn More
                                <Icon iconId={"arrow"} width={"21"} height={"20"} viewBox={"0 0 21 20"}/></ProjectButton>
                        </FlexWrapper>

                    </FlexWrapper>

                </StyledProject>
                <StyledProject>
                    <FlexWrapper gap="20px" direction={"column"}>
                        <ProjectImage src={project2} alt={""}/>
                        <ProjectDescription>Made a simple card page using HTML 5 and  CSS 3</ProjectDescription>
                        <FlexWrapper justify={"center"}>
                            <ProjectButton>Learn More
                            <Icon iconId={"arrow"} width={"21"} height={"20"} viewBox={"0 0 21 20"}/></ProjectButton>
                        </FlexWrapper>
                    </FlexWrapper>

                </StyledProject>
                <StyledProject>
                    <FlexWrapper gap={"20px"} direction={"column"}>
                        <ProjectImage src={project3} alt={""}/>
                        <ProjectDescription>Made an I.P address tracking website.</ProjectDescription>
                        <FlexWrapper justify={"center"}>
                            <ProjectButton>Learn More
                            <Icon iconId={"arrow"} width={"21"} height={"20"} viewBox={"0 0 21 20"}/> </ProjectButton>
                        </FlexWrapper>
                    </FlexWrapper>
                </StyledProject>
            </FlexWrapper>
        </Container>
    </StyledProjects>
    );
};
const StyledProjects = styled.div`
  background-color: ${Theme.colors.projectBg}; 
  height: 100%;
 
`
const StyledProject = styled.div`
width: 372px;
  height: 434px;
  border: 2px solid; 
  border-image: linear-gradient(45deg, #0D54BE, #20ECD3) 1;
 
`
const ProjectImage = styled.img`
object-fit: cover;
`
const ProjectDescription = styled.span`
  text-align: center;
  color: rgba(255, 255, 255, 0.87);
  font-size: 16px;
  padding: 10px;
  height: 46px;
`
const MainTitle = styled.h2`
  color: rgba(255, 255, 255, 0.87);
  font-size: 20px;
  font-weight: 500;
  
`
const ProjectButton = styled.button`
  width: 131px;
  height: 42px;
  padding: 8px 16px 14px 16px;
  border-radius: 4px;
  border: 2px solid #FFF;
  color: rgba(255, 255, 255, 0.87);
  background: rgba(52, 61, 104, 0.08);
  color: #FFF;
  font-size: 14px;
  font-weight: 500;
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 4px;
  
  
`
const StyledOption = styled.div`
  color: rgba(255, 255, 255, 0.87);
  font-size: 18px;
  padding-bottom: 24px;
  text-align: center;
`
