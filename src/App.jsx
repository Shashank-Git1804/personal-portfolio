import "./App.css";
import Hero from "./components/Hero.jsx";
import About from "./components/About.jsx";
import Skills from "./components/Skills.jsx";
import Projects from "./components/Projects.jsx";
import ContactForm from "./components/ContactForm.jsx";
import Navbar from "./components/Navbar.jsx";
import MusicSlider from "./components/MusicSlider.jsx";
import Footer from "./components/Footer.jsx";

function App() {
  const socialMedia={
    github:"https://github.com/Shashank-Git1804",
    linkedin:"https://www.linkedin.com/in/shashank-p1804?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app",
  }
  return (
    <div className="main-container">
      <div className="navbar-container">
        <Navbar socialMedia={socialMedia}></Navbar>
      </div>
      <div className="all-container">
        <Hero socialMedia={socialMedia}></Hero>
        <About></About>
        <Skills></Skills>
        <Projects></Projects>
        <ContactForm></ContactForm>
        <Footer socialMedia={socialMedia}/>
      </div>
    </div>
  );
}

export default App;
