import { Flex, Heading } from '@chakra-ui/react'
import React from 'react'
import ProjectCard from '../Components/ProjectCard'
import styles from "../CSS_Files/Projects.module.css"
const Projects = () => {
  return (
    <div id="projects" style={{backgroundColor:"#152242",padding:"30px",height:"max-content"}}>
       <Heading mt="4" mb="6" className={styles.heading}>My Creative Projects</Heading>
       <Flex flexWrap={"wrap"} justifyContent="center"
              
              gap={7}
             >
                  <ProjectCard/>
                  <ProjectCard/>
                  <ProjectCard/>
                  <ProjectCard/>
                  <ProjectCard/>
                  <ProjectCard/>
            </Flex>
            
    </div>
  )
}

export default Projects
