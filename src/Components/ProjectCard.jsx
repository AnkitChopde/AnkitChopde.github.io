import { Avatar, Center,Icon, Heading, HStack, Image, Text, Box, Link } from '@chakra-ui/react'
import React from 'react'
import styles from "../CSS_Files/ProjectCard.module.css"
import Pro1 from "../Images/Objectopedia.png"
import {FaRegEye} from "react-icons/fa"
import {BsGithub} from "react-icons/bs"
const ProjectCard = () => {

    const handleClick = () => {
        window.open("http://twitter.com/saigowthamr");
      };

  return (
    <Box className={styles.card} w={{base:"100%",md:"400px",lg:"400px"}} >
       <Image src={Pro1} borderRadius="10px" alt="Project"></Image>
       <Text className={styles.text}>Object"o"Pedia</Text>
       <Text className={styles.para}>An e-Commerce website where one can able to buy daily lifestyle products.
       Design and tech focussed homegrown lifestyle accessories brand inspiring everyday possibilities.
       </Text>
       <HStack mt="4" spacing="8">
        <Text className={styles.stackText}><i>Tech Stack</i></Text>
        <Text className={styles.techStacks}>HTML, CSS, JavaScript, React, Redux, ChakraUI, firebase</Text>
       </HStack>
       <Center>
       <HStack mt="7" spacing='5.5rem' >
        <Link></Link>
        <Link></Link>
       </HStack>

       </Center>
    </Box>
  )
}

export default ProjectCard
