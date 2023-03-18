import { Avatar, Center,Icon, Heading, HStack, Image, Text, Box, Link, IconButton } from '@chakra-ui/react'
import React from 'react'
import styles from "../CSS_Files/ProjectCard.module.css"
import Pro1 from "../Images/Objectopedia.png"
import {FaEye} from "react-icons/fa"
import {BsGithub} from "react-icons/bs"
const ProjectCard = () => {

    const handleClick = () => {
        window.open("https://github.com/SubodhSingh8543/zippy-question-7549");
      };

      const handleDeployed = ()=>{
        window.open("https://zippy-question-7549-silk.vercel.app")
      }
  return (
    <Box className={styles.card} w={{base:"100%",md:"400px",lg:"400px"}} >
       <Image src={Pro1} borderRadius="10px" alt="Project"></Image>
       <Text className={styles.text}>Object"o"Pedia</Text>
       <Text fontSize={{base:"sm",md:"md",lg:"16px"}} className={styles.para}>An e-Commerce website where one can able to buy daily lifestyle products.
       Design and tech focussed homegrown lifestyle accessories brand inspiring everyday possibilities.
       </Text>
       <HStack mt="4" spacing="8">
        <Text className={styles.stackText} fontSize={{base:"sm",md:"md",lg:"md"}}><i>Tech Stack</i></Text>
        <Text className={styles.techStacks}>HTML, CSS, JavaScript, React, Redux, ChakraUI, firebase</Text>
       </HStack>
       <Center>
       <HStack mt={{base:"3",md:"7",lg:"7"}} spacing='5.5rem' >
        <Link onClick={handleDeployed}>
        <IconButton 
                      aria-label="github"
                      variant="ghost"
                      size="lg"
                      border="2px solid E11D48"
                      isRound={true}
                      _hover={{ bg: '#0D74FF' }}
                      icon={<FaEye size="28px" />}
                    />
                    </Link>
                    <Link onClick={handleClick}>
        <IconButton 
                      aria-label="github"
                      variant="ghost"
                      size="lg"
                      border="2px solid E11D48"
                      isRound={true}
                      _hover={{ bg: '#0D74FF' }}
                      icon={<BsGithub size="28px" />}
                    />
                    </Link>
       </HStack>

       </Center>
    </Box>
  )
}

export default ProjectCard
