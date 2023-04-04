
import React from 'react'
import logo from "../Images/pic.png"
import {
  Container,
  Stack,
  Flex,
  Box,
  Heading,
  Text,
 
  Image,

  Link,
  Button,

} from '@chakra-ui/react';
import AnchorLink from "react-anchor-link-smooth-scroll";
import myResume from '../Assets/Ankesh_Chopde_Resume.pdf'

const ProfileSection = () => {

  return (
    <div id="home" style={{ backgroundColor: "#152242" }}>
      <Container maxW={"7xl"}>
        <Stack
          pl={{ lg: "10" }}
          spacing={{ base: 4, md: 6 }}
          py={{ base: 16, md: 24 }}
          textAlign={{ base: "center", md: "center", lg: "left" }}
          direction={{ base: "column", md: "row" }}
        >
          <Stack mt={{ lg: "7" }} flex={1} spacing={{ base: 5, md: 10 }}>
            <Heading
              lineHeight={1.4}
              fontWeight={600}
              fontSize={{ base: "xl", sm: "2xl", lg: "3xl" }}
            >
              <Text id="user-detail-name" as={"span"} color="#ffffff">
                Hi, I am Ankesh Chopde
              </Text>
              <br />
              <Text
                as={"span"}
                fontSize={{ base: "2xl", sm: "3xl", lg: "4xl" }}
                color={"red.400"}
              >
                Full Stack Web Developer
              </Text>
            </Heading>
            <Text color={"gray.500"} fontSize="lg" id="user-detail-intro">
              An enthusiastic web developer with strong technical as well as
              interpersonal skills and expertise in MERN (Proficient in MongoDB,
              ExpressJS, ReactJS, HTML, CSS, JavaScript, NodeJS) stack.
            </Text>
            <Stack
              spacing={6}
              direction={"row"}
              justifyContent={{ base: "center", md: "center", lg: "left" }}
            >
              {/* <Button 
            rounded={'full'}
            onClick={onButtonClick}
            px={6}
            
           bg="#152242"
           color="#ffffff"
           border="2px solid #E11D48"
            _hover={{ bg: '#E11D48',border:"2px solid white" }}>
            Resume
          </Button> */}
              <Button
                id="resume-button-2"
                rounded={"full"}
                onClick={() => {
                  window.open(
                    "https://drive.google.com/file/d/1PAY1qRrrWUrlHizCOTqSFsV9kZOt7EXA/view",
                    "_blank"
                  );
                }}
               
                bg="#152242"
                color="#ffffff"
                border="2px solid #E11D48"
                _hover={{ bg: "#E11D48", border: "2px solid white" }}
                p="5px 25px"
              >
                <a
                  href={
                  myResume
                  }
                  id="resume-link-2"
                  target="_blank"
                  download="Ankesh_Chopde_Resume.pdf"
                >
                  Resume
                </a>
              </Button>

              {/* <Button rounded={'full'}  bg="#152242"
           color="#ffffff"
           border="2px solid #E11D48"
            _hover={{ bg: '#E11D48',border:"2px solid white" }} px={6}>
            <AnchorLink offset={"40px"}  href="#contact">Hire me</AnchorLink>
          </Button> */}
              <Box
                rounded={"full"}
                bg="#152242"
                color="#ffffff"
                border="2px solid #E11D48"
                _hover={{ bg: "#E11D48", border: "2px solid white" }}
                p="5px 25px"
              >
                <AnchorLink offset={"40px"} href="#contact">
                  Hire me
                </AnchorLink>
              </Box>
            </Stack>
          </Stack>

          <Flex flex={1} justify={"center"} align={"center"} w={"full"}>
            <Box height={"300px"} rounded={"2xl"} width={"max-content"}>
              <Image
                alt={"Hero Image"}
                objectFit={"cover"}
                className="home-img"
                align={"center"}
                borderRadius="30PX 50PX 40PX 20PX"
                border="5px solid #E11D48"
                w={"100%"}
                h={"100%"}
                src={logo}
              />
            </Box>
          </Flex>
        </Stack>
      </Container>
    </div>
  );
    }
export default ProfileSection
