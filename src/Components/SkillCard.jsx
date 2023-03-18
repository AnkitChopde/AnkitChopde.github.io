import { Box,Image, Text } from '@chakra-ui/react'
import React from 'react'

const SkillCard = ({img,name}) => {
  return (
    <>
     <Box 
     className="skills-card"
  w={{base:"120px",md:"120px",lg:"140px"}}
  h={{base:"120px",md:"120px",lg:"140px"}}
  borderRadius="15px 50px 30px"
  border="3px solid #E11D48"
  pt="3"
  transition= "width 0.5s, height 0.5s"
  _hover={{width:"145px",height:"145px"}}
 >
    <Image filter="brightness(0) invert(1)" position="relative" className="skills-card-img" margin="auto" w={{base:"60px",md:"70px",lg:"80px"}} src={img}/>
    
    <Text className="skills-card-name"  color="#17cf97" fontWeight="extrabold" >{name}</Text>
     </Box>
    
    </>
  )
}

export default SkillCard
