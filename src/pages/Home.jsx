import React from 'react'
import Navbar from '../Components/Navbar'
import ProjectCard from '../Components/ProjectCard'
import About from './About'
import Contact from './Contact'
import ProfileSection from './ProfileSection'
import Projects from './Projects'
import Skills from './Skills'
import Stats from './Stats'

const Home = () => {
  return (
    <div bgColor="#0f172a" color="white" h="3000px" >
      <ProfileSection/>
      <About/>
      <Skills/>
      <Projects/>
      <Stats/>
      <Contact/>
      {/* <Projects/> */}
      {/* <Contact/> */}
    </div>
  )
}

export default Home
