import React from 'react'
import Navbar from '../Components/Navbar'
import ProjectCard from '../Components/ProjectCard'
import About from './About'
import Contact from './Contact'
import ProfileSection from './ProfileSection'
import Projects from './Projects'
import Skills from './Skills'
import Stats from './Stats'
import {ScrollToTop} from '../Components/ScrollToTop';

const Home = () => {
  return (
    <div bgcolor="#0f172a" color="white" h="3000px" >
      <ProfileSection/>
      <About/>
      <Skills/>
      <Projects/>
      <Stats/>
      <Contact/>
      {/* <ScrollToTop/> */}
      {/* <Projects/> */}
      {/* <Contact/> */}
    </div>
  )
}

export default Home
