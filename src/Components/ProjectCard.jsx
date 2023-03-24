import { Avatar, Center,Icon, Heading, HStack, Image, Text, Box, Link, IconButton } from '@chakra-ui/react'
import React from 'react'
import Pro1 from "../Images/Objectopedia.png"
import {FaEye} from "react-icons/fa"
import {BsGithub} from "react-icons/bs"
const ProjectCard = ({img,desc,title,stacks}) => {

    const handleClick = () => {
        window.open("https://github.com/SubodhSingh8543/zippy-question-7549");
      };

      const handleDeployed = ()=>{
        window.open("https://zippy-question-7549-silk.vercel.app")
      }
  return (
    <Box className="project-card" w={{ base: "100%", md: "400px", lg: "400px" }} h="500px" p="20px" borderRadius="10px" border="2px solid #E11D48">
      <Image src={img} borderRadius="10px" alt="Project"></Image>
      <Text className="project-title" textAlign="center" color="#E11D48" fontSize="18px" mt="15px" fontWeight="bold">{title}</Text>
      <Text fontSize={{ base: "sm", md: "md", lg: "16px" }} textAlign="left"
    color="#DBD9D9" mt="15px" lineHeight="25px" className="project-description">
        {desc}
      </Text>
      <HStack mt="4" spacing="8">
        <Text
          textAlign="left" color="#E11D48"
          fontSize={{ base: "sm", md: "md", lg: "md" }}
        >
          <i>Tech Stack</i>
        </Text>
        <Text className="project-tech-stack" textAlign="left" color="#DBD9D9" fontWeight="bold" w="70%">
          {stacks}
        </Text>
      </HStack>
      <Center >
        <HStack mt={{ base: "3", md: "7", lg: "7" }} spacing="5.5rem">
          <Link className="project-github-link" onClick={handleDeployed}>
            <IconButton
              aria-label="github"
              variant="ghost"
              size="lg"
              
              border="2px solid E11D48"
              overflow='hidden'
              isRound={true}
              _hover={{ bg: "#0D74FF" }}
              icon={<FaEye size="28px" />}
            />
          </Link>
          <Link className="project-deployed-link" onClick={handleClick}>
            <IconButton
              aria-label="github"
              variant="ghost"
              size="lg"
              border="2px solid E11D48"
              _hover={{ bg: "#0D74FF" }}
              icon={<BsGithub size="28px" />}
            />
          </Link>
        </HStack>
      </Center>
    </Box>
  );
}

export default ProjectCard
