import { Box, Heading, Stack, Text } from '@chakra-ui/react';
import React from 'react'
import '../App.css';
const About = () => {
  return (
    <div id="about" className="about section" style={{paddingTop:"60px",backgroundColor:"#152242",height:"400px"}}>
    <Stack spacing="14" align="center">
    <Heading  className="heading">About Me</Heading>
     <Text id="user-detail-intro" fontSize={{base:"lg",md:"xl",lg:"xl"}} textAlign={{base:"center",md:"center",lg:"left"}} marginTop="200px" w="80%" m="auto" color={'gray.500'}>Passionate about coding and eager to work with smart people in a challenging environment. Having exceptional interpersonal skills as well as the ability to produce interactions that organizations and people really care about. 
      Love technology and try to use them smartly to make everyday tasks easier.</Text>
    </Stack>
    </div>
  )
}

export default About
