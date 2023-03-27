import {  Link, Spacer } from '@chakra-ui/react'
import {
  Container,
  Flex,
  Box,
  Heading,
  Text,
  IconButton,
  Button,
  VStack,
  HStack,
  Wrap,
  WrapItem,
  FormControl,
  FormLabel,
  Input,
  InputGroup,
  InputLeftElement,
  Textarea,
} from '@chakra-ui/react';
import {
  MdPhone,
  MdEmail,
  MdLocationOn,
  MdFacebook,
  MdOutlineEmail,
} from 'react-icons/md';
import { BsGithub, BsDiscord, BsPerson } from 'react-icons/bs';
import React from 'react'
import styles from "./Contact.module.css"
import {RxLinkedinLogo} from "react-icons/rx"
const Contact = () => {

const moveLinkdin = ()=>{
  window.open("https://www.linkedin.com/in/ankit-chopde-822900187/")
}

const moveGithub = ()=>{
  window.open("https://github.com/AnkitChopde")
}
  return (
        <Container justifyContent="center" id="contact" bg="#152242" maxW="full" pt="80px" mt={0}  centerContent >
           <Heading  className={styles.heading}>Contact Me</Heading>
          <Flex>
            <Box
              bg="#152242"
              color="white"
              borderRadius="10px"
              border="2px solid #E11D48"
              mt={{base:"4",md:"2",lg:"-4"}}
              m={{ sm: 4, md: 16, lg: 10 }}
              p={{ sm: 5, md:5, lg: 16 }}>
              <Box p={4}>
                <Wrap spacing={{ base: 20, sm: 3, md: 5, lg: 20 }}>
                  <WrapItem>
                    <Box>
                      <Box py={{ base: 5, sm: 5, md: 8, lg: 10 }} pl={{base:'10'}}>
                        <VStack justifyContent="center" spacing={3} alignItems="flex-start">
                          <Button id="contact-phone"
                            size="md"
                            height="48px"
                            width="200px"
                            variant="ghost"
                            color="#DCE2FF"
                            _hover={{ border: '2px solid #1C6FEB' }}
                            leftIcon={<MdPhone color="#1970F1" size="20px" />}>
                            +91-7709731109
                          </Button>
                          <Button id="contact-email"
                            size="md"
                            height="48px"
                            width="220px"
                            variant="ghost"
                            color="#DCE2FF"
                            _hover={{ border: '2px solid #1C6FEB' }}
                            leftIcon={<MdEmail color="#1970F1" size="20px" />}>
                            acchopde84@gmail.com
                          </Button>
                          <Button
                            size="md"
                            height="48px"
                            width="200px"
                            variant="ghost"
                            color="#DCE2FF"
                            _hover={{ border: '2px solid #1C6FEB' }}
                            leftIcon={<MdLocationOn color="#1970F1" size="20px" />}>
                            Nagpur, Maharashtra
                          </Button>
                        </VStack>
                        <HStack justifyContent={"center"}
                    mt={{ lg: 10, md: 10 }}
                    spacing={5}
                    
                    alignItems="flex-start">
                   <Link onClick={moveLinkdin} id="contact-linkedin">
                   <IconButton
                      aria-label="linkedin"
                      variant="ghost"
                      size="lg"
                      isRound={true}
                      _hover={{ bg: '#0D74FF' }}
                      icon={<RxLinkedinLogo size="28px" />}
                    />
                   </Link>
                    <Link onClick={moveGithub} id="contact-github">
                    <IconButton
                      aria-label="github"
                      variant="ghost"
                      size="lg"
                      isRound={true}
                      _hover={{ bg: '#0D74FF' }}
                      icon={<BsGithub size="28px" />}
                    />
                    </Link>
                  </HStack>
                      </Box>
                    </Box>
                  </WrapItem>
                  <WrapItem>
                    <Box bg="white" mt={{base:"-50px",md:"0px",lg:"0px"}} borderRadius="lg">
                      <Box m={8} color="#0B0E3F">
                        <VStack spacing={5}>
                          <FormControl id="name">
                            <FormLabel>Your Name</FormLabel>
                            <InputGroup borderColor="#E0E1E7">
                              <InputLeftElement
                                pointerEvents="none"
                                children={<BsPerson color="gray.800" />}
                              />
                              <Input type="text" size="md" />
                            </InputGroup>
                          </FormControl>
                          <FormControl id="name">
                            <FormLabel>Mail</FormLabel>
                            <InputGroup borderColor="#E0E1E7">
                              <InputLeftElement
                                pointerEvents="none"
                                children={<MdOutlineEmail color="gray.800" />}
                              />
                              <Input type="text" size="md" />
                            </InputGroup>
                          </FormControl>
                          <FormControl id="name">
                            <FormLabel>Message</FormLabel>
                            <Textarea
                              borderColor="gray.300"
                              _hover={{
                                borderRadius: 'gray.300',
                              }}
                              placeholder="message"
                            />
                          </FormControl>
                          <FormControl id="name" float="right">
                            <Button
                              variant="ghost"
                              color="blackAlpha.800"
                          border="2px solid #E11D48"
                          _hover={{ borderRadius:"30px",color:"#ffffff",bg: "#E11D48", border: "2px solid white" }}
 
                            >
                              Send Message
                            </Button>
                          </FormControl>
                        </VStack>
                        
                      </Box>
                    </Box>
                  </WrapItem>
                </Wrap>
              </Box>
            </Box>
          </Flex>
        </Container>
      );
    }

export default Contact
