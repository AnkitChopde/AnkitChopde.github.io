import React from "react";
import SkillCard from "../Components/SkillCard";
import { Box, Flex, Heading, SimpleGrid } from "@chakra-ui/react";
import styles from "./Skills.module.css"
import {SiMongodb} from "react-icons/si"
import {FaHtml5} from "react-icons/fa";
import {FaCss3Alt} from "react-icons/fa";
import {SiJavascript} from "react-icons/si";
import {SiTypescript} from "react-icons/si";
import {FaReact} from "react-icons/fa";
import {SiRedux} from "react-icons/si";
import {TbBrandNextjs} from "react-icons/tb";
import {SiChakraui} from "react-icons/si";
import {FaNodeJs} from "react-icons/fa";
import {SiExpress} from "react-icons/si";
import html from "../Images/html.png"
import css from "../Images/css-3.png"
const Skills = () => {

  
  return (
    <div id="skills" style={{backgroundColor:"#152242"}}>

      <Box   p="30px" w={{base:"90%",md:"95%",lg:"75%"}} margin="auto" >
        <Heading mt="10" className={styles.Heading}>Technical Skills</Heading>
        <Box margin="auto">
        <Flex mt="10" flexWrap={"wrap"} justifyContent="center"
              
              gap={7}>
          <SkillCard img={"https://chiranjeev-thapliyal.vercel.app/svg/html-5.svg"} name="HTML" />
          <SkillCard img={css} name="CSS"/>
          <SkillCard img="https://chiranjeev-thapliyal.vercel.app/svg/javascript.svg" name="JavaScript" />
          <SkillCard img="https://rahul-rajeevan-portfolio.netlify.app/static/media/react1.4e0c97009b885bfa75c5412262a46f5f.svg" name="React" />
          <SkillCard  img="https://camo.githubusercontent.com/94890eb1b8c3ce19ea73189dade730fa967a8fe08899f25cab17b57a5d4339dc/68747470733a2f2f70726f66696c696e61746f722e7269736861762e6465762f736b696c6c732d6173736574732f747970657363726970742d6f726967696e616c2e737667" name="TypeScript" />
          <SkillCard img="https://chiranjeev-thapliyal.vercel.app/svg/redux.svg" name="Redux" />
          <SkillCard img="https://rahul-rajeevan-portfolio.netlify.app/static/media/node.10c9e2aa0ca7edf36fceae25fec038a1.svg" name="NodeJS" />
          <SkillCard   img="https://cdn.svgporn.com/logos/nextjs-icon.svg" name="NextJS"  />
          <SkillCard img="https://rahul-rajeevan-portfolio.netlify.app/static/media/express.4925c0127df8857c18b38329795ce88f.svg" name="ExpressJS"/>
          <SkillCard  img="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAH4AAAB+CAMAAADV/VW6AAAAtFBMVEX///9YqlBJnUqmo4VWp1JEm0VXqFBbqlNOoE77/ftTqEtSqElRo0/0+fQ8mT1QqUfk8eMzljTt9uxYrlBMqULD4MFXpVjZ6tlgs1mpo4irqIzIxrGWy5NksV601bTU6NJnrGiOxoiezpup0KmAvHx3tHeIvIlwuGmVxZSt1anG3sZ+vnmeyJ6AuX91unBytHJmolxvoWN+o22Jp3WUpHqcpIBmp1qrv5y/1LfS0cHp6OG6uJ+CU0LHAAAEEElEQVRoge2baXvaMAyAsWmAEBJCOFJaKKVrx2jXu7DR/v//tYQrhyX1QLY/dPqe530k67KsVCqHiBsf9PnBMops0t3xmU38pH3uWsQfi6Bvjz71ag3HFty/aNdEI/hhhx5dekKIhmyFVuhjr77GB1e+BXq3KVJpSRn8NE4Pxxt6ipeOaX4429LXeBn8MkqPZp7I42Xw2yDdvdvTt3hpMvwuM7o4klu+seQ/b2f0nfaJ/12boV/n6RleSiO1PzwWMN4ZmKj9N14Bf5RpH1zpL77zIj2PNxB+cVvgeBlodj/3pknhdR9/v1eii5os8LVm/6hbppfwes0/Kp98yfiJ+i19xT/u1t7D6/T+afN9vAx0JT9I+fLZJ/hbTXgl6EC8Lu8LlaADjS+dey25d+RBeFV7PaXXV4MOw99rwM8/jJcdfuf3ZyAdxDtX7Phr8ORhvOyw37tgx0Pw7H1/NIbpog7h5YA58/ehlIPjudtuzPYI3rllTT0+ZnsELxuszjeBgx7HO6yXLiTnEHjW0L/DPA/Dy4DR+i5Y7NYCxj2z708+j+e0/rwN9Dk0Xnb4Qm+EHj2Bn3DRXaTakXi+ltfHlcfxfD0XnnQIvJRcZaePe54QKN3hOnw851Has43aL7ByR+OZ0r47JVwPS7qJ8ZlaHv8Gp1N4pprv4wWHxN/zuD7a572DP7eKl0yDnvCLeKaGK65/Ec9z14oJOpV0TeDxpCtbJrRvaMdTZy9wPJPxSc/XjyfjnsAPeALPnxFJl6j3TGmHLDm463ElXbLg4sbnKjlku0HguS7ZZ0SzhePZOu2JOsb/CJ7rlhd96ezZZrvULYc4e7Z3HeKOh+P5plvqC1ImqPJ8r0o+gce055wvEL0uhuecKxPXLAzPuU4U4nkPwXPdcTYCvuNQrsf7onOGqY+0mszPiZ+caDPbHp8pY3i2wdJGYqTswMbnajUyQXoOM/P8RH0488Haa1gjgGNPfcWUep6xP/qImkhHxw4FWHYh4+t5wwdvO6D2ejYY5p46XmypcN6HlEyg646Kd7gf8fYS9xT1Aby+5ZW54v0KXufipLK1VB8opte5uBSWUn/9wSkpr3dtq19su5aPRbz2ndWLgvstnwp4DYsDJXGnef2Xz3m8iYVFP7cm23x8KeBNrGtGx3v3bz4tcp2u7m3BrYTdHd97rmb4jqlV3Xinf/Nl+LDX3dyi8mTHXwx3rm/0L4Utv16tLgLz9OT8RcpfVqvDddo1t6K9lWjWTuJuWB0moecYibii+NOe9zxM1H8Kzm38HeLOe4tqKn8s/BuSyt81/cQSveKu8StL9ErlJMW/WsOvUtvb+yftNcVbo1f8xPpv9vBugj+1h6+82cWffmv86j/+O+Mtpp0k7a4O0v4fFNxLTQc8dekAAAAASUVORK5CYII=" name="MongoDB"/>
          <SkillCard img="https://rahul-rajeevan-portfolio.netlify.app/static/media/chakraui.15320604467d004df871.png" name="ChakraUI" />
          <SkillCard img="https://cdn.svgporn.com/logos/github-icon.svg" name="Github" />
    
        </Flex>
        </Box>
      </Box>
    </div>
  );
};

export default Skills;
