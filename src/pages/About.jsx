import { Box, Heading, Stack, Text } from '@chakra-ui/react';
import React from 'react'

const About = () => {
  return (
    <Box
      id="about"
      className="about section"
      paddingTop={{ base: "10px", md: "50px", lg: "60px" }}
      style={{ backgroundColor: "#152242", height: "400px" }}
      h="-webkit-fit-content"
      paddingBottom={{ base: "50px", md: "50px", lg: "60px" }}
    >
      <Stack spacing={{base:"5",md:"14",lg:"14"}}align="center">
        <Heading className="heading">About Me</Heading>
        <Text
          id="user-detail-intro"
          fontSize={{ base: "lg", md: "xl", lg: "xl" }}
          textAlign={{ base: "center", md: "center", lg: "left" }}
          m="auto"
          w="80%"
          color={"gray.500"}
         
        >
          Passionate about coding and eager to work with smart people in a
          challenging environment.Proficient in MongoDB, ExpressJS, ReactJS,
          HTML, CSS, JavaScript, NodeJS and Having exceptional interpersonal
          skills as well as the ability to produce interactions that
          organizations and people really care about. Love technology and try to
          use them smartly to make everyday tasks easier.
        </Text>
      </Stack>
    </Box>
  );
}

export default About
