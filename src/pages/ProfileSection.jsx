
import React from 'react'
import logo from "../Images/pic.png"
import {
  Container,
  Stack,
  Flex,
  Box,
  Heading,
  Text,
  Button,
  Image,
  Icon,
  IconButton,
  createIcon,
  IconProps,
  useColorModeValue,
  Link,
} from '@chakra-ui/react';
import AnchorLink from "react-anchor-link-smooth-scroll";


const ProfileSection = () => {

  const handleResume = ()=>{
    window.open("https://drive.google.com/file/d/1hgRxgDKguwd78F2AQVfwzSx7DBm-3K8M/view?usp=share_link")
  }

  const onButtonClick = () => {
    // using Java Script method to get PDF file
    fetch('Ankesh_Chopde_Resume.pdf').then(response => {
        response.blob().then(blob => {
            // Creating new object of PDF file
            const fileURL = window.URL.createObjectURL(blob);
            // Setting various property values
            let alink = document.createElement('a');
            alink.href = fileURL;
            alink.download = 'Ankesh_Chopde_Resume.pdf';
            alink.click();
        })
    })
}
  return (
       <div id="home" style={{backgroundColor:"#152242"}}>
         <Container maxW={'7xl'}>
          <Stack
            
            pl={{lg:"10"}}
            spacing={{ base: 4, md: 6 }}
            py={{ base: 16, md: 24 }}
            textAlign={{base:"center",md:"center",lg:"left"}}
            direction={{ base: 'column', md: 'row' }}>
            <Stack mt={{lg:"7"}} flex={1}  spacing={{ base: 5, md: 10 }}>
              <Heading
                lineHeight={1.4}
                fontWeight={600}
                fontSize={{ base: 'xl', sm: '2xl', lg: '3xl' }}>
                <Text
                  id="user-detail-name"
                  as={'span'}
                  color="#ffffff"
                  >
                  Hi, I am Ankesh Chopde
                </Text>
                <br />
                <Text as={'span'} fontSize={{ base: '2xl', sm: '3xl', lg: '4xl' }} color={'red.400'}>
                 Full Stack Web Developer
                </Text>
              </Heading>
              <Text color={'gray.500'} fontSize="lg" id="user-detail-intro">
              An enthusiastic web developer with strong technical as well as interpersonal skills and expertise in MERN (MongoDB, ExpressJS, ReactJS, NodeJS) stack.
              </Text>
              <Stack spacing={6} direction={'row'}  >
          <Link id="resume-button-2" _hover={{textDecoration:"none"}} onClick={handleResume} download='pdf'>
          <Button 
            rounded={'full'}
            onClick={onButtonClick}
            px={6}
           bg="#152242"
           color="#ffffff"
           border="2px solid #E11D48"
            _hover={{ bg: '#E11D48',border:"2px solid white" }}>
            Resume
          </Button>
          </Link>

          
          <Button rounded={'full'}  bg="#152242"
           color="#ffffff"
           border="2px solid #E11D48"
            _hover={{ bg: '#E11D48',border:"2px solid white" }} px={6}>
            <AnchorLink offset={"40px"}  href="#contact">Hire me</AnchorLink>
          </Button>
        </Stack>
            </Stack>
            
            <Flex
              flex={1}
              justify={'center'}
              align={'center'}
             
              w={'full'}>
              <Box
                
                height={'300px'}
                rounded={'2xl'}
               
                width={'max-content'}
               >
                <Image
                  alt={'Hero Image'}
                  className="home-img"
                  align={'center'}
                  borderRadius="30PX 50PX 40PX 20PX"
                  border="5px solid #E11D48"
                  w={'100%'}
                  h={'100%'}
                  src={
                    logo
                  }
                />
              </Box>
            </Flex>
          </Stack>
        </Container>
       </div>
      );
    }
export default ProfileSection
