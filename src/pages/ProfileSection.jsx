import { Box, Image } from '@chakra-ui/react'
import React from 'react'
import logo from "../Images/pic.png"
const ProfileSection = () => {
  return (
    <div style={{display:"flex",backgroundColor:"#152242",gap:"20px",border:"1px solid red",height:"650px"}} id="profile">
      <Box border="1px solid pink" w="50%"></Box>
      <Box transition="0.3s ease-in-out"  border="1px solid pink" w="50%" >
      <Image transition= "width 0.5s, height 0.5s" _hover={{w:"500px",h:"500px"}}
  margin="auto" mt="15%" border="10px solid #17cf97" borderRadius="50%"  src={logo} alt="image" ></Image>
      </Box>
    </div>
  )
}

export default ProfileSection
