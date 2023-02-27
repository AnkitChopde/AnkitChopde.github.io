import logo from './logo.svg';
import './App.css';
import Navbar from './Components/Navbar';
import AllRoutes from "./Components/AllRoutes"
import Home from './pages/Home';
import About from './pages/About';
import Skills from './pages/Skills';
import Projects from './pages/Projects';
import Stats from './pages/Stats';
import Contact from './pages/Contact';
import SkillCard from './Components/SkillCard';
import AnimatedCursor from "react-animated-cursor"
function App() {
  return (
    <div className="App">
 <AnimatedCursor
      innerSize={8}
      outerSize={8}
      color='193, 11, 111'
      outerAlpha={0.2}
      innerScale={0.7}
      outerScale={5}
      clickables={[
        'a',
        'input[type="text"]',
        'input[type="email"]',
        'input[type="number"]',
        'input[type="submit"]',
        'input[type="image"]',
        'label[for]',
        'select',
        'textarea',
        'button',
        '.link'
      ]}
    />
       <Navbar/>  
       
    </div>
  );
}

export default App;
