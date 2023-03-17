import React from "react";
import SkillCard from "../Components/SkillCard";
import { Box, Flex, Heading, SimpleGrid } from "@chakra-ui/react";
import styles from "./Skills.module.css"
import {SiMongodb} from "react-icons/si"
import html from "../Images/html.png"
import css from "../Images/css-3.png"
const Skills = () => {
  return (
    <div id="skills" style={{backgroundColor:"#152242"}}>

      <Box   p="30px" w={{base:"90%",md:"95%",lg:"75%"}} margin="auto" >
        <Heading className={styles.Heading}>Technical Skills</Heading>
        <Box margin="auto">
        <Flex mt="10" flexWrap={"wrap"} justifyContent="center"
              
              gap={7}>
          <SkillCard img={html} name="HTML" />
          <SkillCard img={css} name="CSS"/>
          <SkillCard img="https://chiranjeev-thapliyal.vercel.app/svg/javascript.svg" name="JavaScript" />
          <SkillCard img="https://rahul-rajeevan-portfolio.netlify.app/static/media/react1.4e0c97009b885bfa75c5412262a46f5f.svg" name="React" />
          <SkillCard  img="https://camo.githubusercontent.com/94890eb1b8c3ce19ea73189dade730fa967a8fe08899f25cab17b57a5d4339dc/68747470733a2f2f70726f66696c696e61746f722e7269736861762e6465762f736b696c6c732d6173736574732f747970657363726970742d6f726967696e616c2e737667" name="TypeScript" />
          <SkillCard img="https://chiranjeev-thapliyal.vercel.app/svg/redux.svg" name="Redux" />
          <SkillCard img="https://rahul-rajeevan-portfolio.netlify.app/static/media/node.10c9e2aa0ca7edf36fceae25fec038a1.svg" name="NodeJS" />
          <SkillCard   img="https://cdn.svgporn.com/logos/nextjs-icon.svg" name="NextJS"  />
          <SkillCard img="https://rahul-rajeevan-portfolio.netlify.app/static/media/express.4925c0127df8857c18b38329795ce88f.svg" name="ExpressJS"/>
          <SkillCard  img={<SiMongodb/>} name="MongoDB"/>
          <SkillCard img="https://rahul-rajeevan-portfolio.netlify.app/static/media/chakraui.15320604467d004df871.png" name="ChakraUI" />
          <SkillCard img="https://cdn.svgporn.com/logos/github-icon.svg" name="Github" />
    
        </Flex>
        </Box>
      </Box>
    </div>
  );
};

export default Skills;
