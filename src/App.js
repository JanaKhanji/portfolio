import React, {useRef} from 'react';
import Sidebar from "./components/Sidebar.js";
import About from "./components/About.js";
import Skills from "./components/Skills/Skills.js";
import Work from "./components/Work.js";
import Contact from "./components/Contact.js"
import Experience from "./components/experience.js"
function App() {
  const AboutSection = useRef(null);
  const SkillsSection = useRef(null);
  const WorkSection = useRef(null);
  const ContactSection = useRef(null);
  const ExperienceSection = useRef(null);

  const scrollTo = (Ref) => {
    let reference=null;
    switch(Ref){
      case "skills":
        reference= SkillsSection.current;
        break
      case "projects":
        reference=WorkSection.current;
        break
      case "contact":
        reference=ContactSection.current;
        break
      case "experiences":
        reference=ExperienceSection.current;
        break
      default:  
        reference=AboutSection.current;
    }
    if (Ref === 'about') {
      window.scrollTo({
        top: 0,
        behavior: 'smooth',
      });
    } else {
      window.scrollTo({
        top: reference.offsetTop,
        behavior: 'smooth',
      });
    }
  };
  return (
    <div className="App">
      <div id="page-wraper">
        <Sidebar scrollTo={scrollTo}/>
        <div ref={AboutSection} id='AboutSection'>
          <About />
        </div>
        <div ref={SkillsSection} id='SkillsSection'>
          <Skills />
        </div>
        <div ref={ExperienceSection} id='ExperienceSection'>
          <Experience />
        </div>
        <div ref={WorkSection} id='WorkSection'>
          <Work />
        </div>
        <div ref={ContactSection} id='ContactSection'>
          <Contact />
        </div>
      </div>
    </div>
  );
}

export default App;
