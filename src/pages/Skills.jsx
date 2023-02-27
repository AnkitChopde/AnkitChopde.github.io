import React from "react";
import SkillCard from "../Components/SkillCard";
import { Box, Heading, SimpleGrid } from "@chakra-ui/react";
import styles from "./Skills.module.css"
const Skills = () => {
  return (
    <div id="skills" style={{backgroundColor:"#152242"}}>

      <Box   p="30px" w={{base:"90%",md:"95%",lg:"75%"}} margin="auto" >
        <Heading className={styles.Heading}>Technical Skills</Heading>
        <Box margin="auto">
        <SimpleGrid  mt="10" columns={[2,3,4,6]}  gridRowGap={{base:"5",md:"3",lg:"5"}}  gridColumnGap={{base:"8",md:"-10px",lg:"10"}} transition="0.3 ease-in-out" >
          <SkillCard img="https://chiranjeev-thapliyal.vercel.app/svg/html-5.svg" name="HTML" />
          <SkillCard img="https://chiranjeev-thapliyal.vercel.app/svg/css3.svg" name="CSS"/>
          <SkillCard img="https://chiranjeev-thapliyal.vercel.app/svg/javascript.svg" name="JavaScript" />
          <SkillCard img="https://rahul-rajeevan-portfolio.netlify.app/static/media/react1.4e0c97009b885bfa75c5412262a46f5f.svg" name="React" />
          <SkillCard  img="https://camo.githubusercontent.com/94890eb1b8c3ce19ea73189dade730fa967a8fe08899f25cab17b57a5d4339dc/68747470733a2f2f70726f66696c696e61746f722e7269736861762e6465762f736b696c6c732d6173736574732f747970657363726970742d6f726967696e616c2e737667" name="TypeScript" />
          <SkillCard img="https://chiranjeev-thapliyal.vercel.app/svg/redux.svg" name="Redux" />
          <SkillCard img="https://rahul-rajeevan-portfolio.netlify.app/static/media/node.10c9e2aa0ca7edf36fceae25fec038a1.svg" name="NodeJS" />
          <SkillCard   img="https://cdn.svgporn.com/logos/nextjs-icon.svg" name="NextJS"  />
          <SkillCard img="https://rahul-rajeevan-portfolio.netlify.app/static/media/express.4925c0127df8857c18b38329795ce88f.svg" name="ExpressJS"/>
          <SkillCard  img="https://rahul-rajeevan-portfolio.netlify.app/static/media/mongodb.6835c61a518a732eb8318d43dfe8f700.svg" name="MongoDB"/>
          <SkillCard img="https://rahul-rajeevan-portfolio.netlify.app/static/media/chakraui.15320604467d004df871.png" name="ChakraUI" />
          <SkillCard img="https://cdn.svgporn.com/logos/github-icon.svg" name="Github" />
    
        </SimpleGrid>
        </Box>
      </Box>
    </div>
  );
};

export default Skills;
