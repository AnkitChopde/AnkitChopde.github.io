import { Flex, Heading } from '@chakra-ui/react'
import React from 'react'
import ProjectCard from '../Components/ProjectCard'
import styles from "../CSS_Files/Projects.module.css"
import Pro1 from "../Images/Objectopedia.png"
import Pro2 from "../Images/carter.png"
import Pro3 from "../Images/fitbuddies.png"
import Pro4 from "../Images/survey.png"
const Projects = () => {

  const projects = [
    {
      
      img:Pro1,
      title:`Object"o"Pedia`,
      desc:"An e-Commerce website where one can able to buy daily lifestyle products. Design and tech focussed homegrown lifestyle accessories brand inspiring everyday possibilities.",
      stacks:"HTML, CSS, JavaScript, React, Redux, ChakraUI, firebase"
    },
    {
    
      img:Pro2,
      title:`Little Cart`,
      desc:"An e-Commerce website where one can buy children's related products. Design and tech focussed homegrown lifestyle accessories brand inspiring everyday possibilities.  ",
      stacks:"HTML, CSS, JavaScript, React, ChakraUI"
    },
    {
  
      img:Pro3,
      title:`Fit Buddies`,
      desc:"An e-Commerce website where one can able to buy daily lifestyle products. Design and tech focussed homegrown lifestyle accessories brand inspiring everyday possibilities.",
      stacks:"HTML, CSS, JavaScript "
    },
    {
  
      img:Pro4,
      title:`SurveyMonkey Clone`,
      desc:"SurveyMonkey is online survey software that helps you to create and run professional online surveys. It provides various survey templates for different purposes.",
      stacks:"HTML, CSS, JavaScript"
    },
    {

      img:Pro1,
      title:`Object"o"Pedia`,
      desc:"An e-Commerce website where one can able to buy daily lifestyle products. Design and tech focussed homegrown lifestyle accessories brand inspiring everyday possibilities.",
      stacks:"HTML, CSS, JavaScript, React, Redux, ChakraUI, firebase"
    },
    {
      img:Pro1,
      title:`Object"o"Pedia`,
      desc:"An e-Commerce website where one can able to buy daily lifestyle products. Design and tech focussed homegrown lifestyle accessories brand inspiring everyday possibilities.",
      stacks:"HTML, CSS, JavaScript, React, Redux, ChakraUI, firebase"
    }
  ]
  return (
    <div id="projects" m style={{backgroundColor:"#152242",padding:"30px",height:"max-content"}}>
       <Heading mt="10" mb="6" className={styles.heading}>My Creative Projects</Heading>
       <Flex flexWrap={"wrap"} justifyContent="center"
              
              gap={7}
             >
                 {
                  projects.map((el,i)=>(
                    <ProjectCard {...el} key={i}/>
                  ))
                 }
            </Flex>
            
    </div>
  )
}

export default Projects
