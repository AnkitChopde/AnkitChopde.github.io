import { Box, Flex, Heading } from '@chakra-ui/react'
import React from 'react'
import GitHubCalendar from 'react-github-calendar'
import ReactTooltip from "react-tooltip";
const Stats = () => {
  return (
    <Box
       pt="5"
        bg= "#152242"
        h={{base:"440px",md:"600px",lg:"695px"}}
    >
      <Heading _hover={{textDecoration:"underline"}} mb="20px" color="#17cf97">
        Github Stats
      </Heading>

      <GitHubCalendar
        username="AnkitChopde"
        blockMargin={6}
        blockSize={15}
        fontSize={14}
        style={{ margin: "auto" }}
      >
        <ReactTooltip delayShow={20} html />
      </GitHubCalendar>
      <Box mt="5" w={{base:"90%",md:"85%",lg:"70%"}} m="auto">
        <Flex justifyContent={"space-between"}>
          <p style={{}}>
            &nbsp;
            <img style={{borderRadius: "15px 50px 30px 5px", border: "3px solid #17cf97" }}
              align="center"
              src="https://github-readme-stats.vercel.app/api?username=ankitchopde&show_icons=true&theme=highcontrast&title_color=17cf97&text_color=ffffff&bg_color=152242&hide_border=true&locale=en"
              alt="ankitchopde"
            />
          </p>

          <p style={{ marginTop: "24px" }}>
            <img  style={{borderRadius: "30px 5px 15px 50px", border: "3px solid #17cf97" }}
              align="center"
              src="https://streak-stats.demolab.com?user=AnkitChopde&theme=vue-dark&hide_border=true&mode=weekly"
              alt="ankitchopde"
            />
          </p>
        </Flex>

        <Box margin="auto" h="130px" w="max-content" mt="20px">
          <p>
            <img
              style={{borderRadius: "30px 30px 15px 5px", border: "3px solid #17cf97" }}
              align="left"
              src="https://github-readme-stats.vercel.app/api/top-langs?username=ankitchopde&show_icons=true&theme=highcontrast&title_color=17cf97&text_color=ffffff&bg_color=152242&hide_border=true&locale=en&layout=compact"
              alt="ankitchopde"
            />
          </p>
        </Box>
      </Box>
    </Box>
  );
}

export default Stats
