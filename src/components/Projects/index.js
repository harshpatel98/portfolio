import React from 'react'
import figma from '../../images/figma.svg'
import maya from '../../images/maya.svg'
import myWebsite from '../../images/myWebsite.svg'
import * as ProjectElements from './ProjectElements'

const Projects = () => {
    const handleClick1 = () => {
        window.open("https://www.figma.com/proto/JLXOz6Sghr1ByZvP4ZLZiI/EventSurf-Prototype?node-id=5%3A13&starting-point-node-id=5%3A13");
      };
      const handleClick2 = () => {
        window.open("https://github.com/harshpatel98/Maya_3D_Animation");
      };
      const handleClick3 = () => {
        window.open("https://github.com/harshpatel98/harshpatel");
      };
  return (
    <ProjectElements.ProjectContainer id="projects">
        <ProjectElements.ProjectH1>My Project</ProjectElements.ProjectH1>
        <ProjectElements.ProjectWrapper onClick={handleClick1}>
            <ProjectElements.ProjectCard>
                <ProjectElements.ProjectIcon src={figma}/>
                <ProjectElements.ProjectH2>Figma Prototype</ProjectElements.ProjectH2>
                <ProjectElements.ProjectP>This Mobile application was created using modern UI design, for a start up named Eventsurf.</ProjectElements.ProjectP>
            </ProjectElements.ProjectCard>
            <ProjectElements.ProjectCard onClick={handleClick2}>
                <ProjectElements.ProjectIcon src={maya}/>
                <ProjectElements.ProjectH2>Maya 3D Animation</ProjectElements.ProjectH2>
                <ProjectElements.ProjectP>This is a 3D animation created by using Autodesk Maya. This project covers all the fundamentals of Maya.</ProjectElements.ProjectP>
            </ProjectElements.ProjectCard>
            <ProjectElements.ProjectCard onClick={handleClick3}>
                <ProjectElements.ProjectIcon src={myWebsite}/>
                <ProjectElements.ProjectH2>Personal Website</ProjectElements.ProjectH2>
                <ProjectElements.ProjectP>This website was created using HTML, CSS and JS and it showcases my Resume in an attravtive manner.</ProjectElements.ProjectP>
            </ProjectElements.ProjectCard>
        </ProjectElements.ProjectWrapper> 
    </ProjectElements.ProjectContainer>
  )
}

export default Projects