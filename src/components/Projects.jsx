import React, { useEffect, useRef } from "react";
import "../styles/Projects.css";
import spotify from "../assets/spotify.jpg";
import TODO from "../assets/ToDO.png";
import pokemon from "../assets/pokemon.png";
import porfolio from "../assets/portfolio.png";
import { FaGithub, FaLink } from "react-icons/fa";
import { RiLink } from "react-icons/ri";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { ScrollTrigger } from "gsap/ScrollTrigger";


const projectData = [
  {
    image: pokemon,
    title: "Pokémon Website",
    description:
      "Created a fully functional Pokémon-themed website using React.js and GSAP (GreenSock Animation Platform). Integrated the official Pokémon API to dynamically generate interactive Pokémon cards. Features include search by name and type, and sorting by attributes such as attack, defence, and HP. The project is responsive and deployed on Netlify.",
    github: "https://github.com/Shashank-Git1804/pokemon.git",
    demo: "https://pokemoncards-with-react.netlify.app/",
  },
  {
    image: TODO,
    title: "TODO Application",
    description:
      "Developed a TODO website using React.js, demonstrating key concepts such as state management and data persistence with localStorage (without using a database). Core features include adding, deleting, and clearing tasks. The application is fully functional and deployed on Netlify.",
    github: "https://github.com/Shashank-Git1804/todo-using-react.js.git",
    demo: "https://todoo-sk.netlify.app/",
  },
  {
    image: spotify,
    title: "Spotify Website",
    description:
      "Built a fully functional music streaming website using pure JavaScript. Created a local mock API to fetch Songs and artists, and generated custom albums for each singer. Features include play/pause functionality, volume control (mute, unmute, increase, decrease), loop playback, and a search option by song name, offering an interactive and responsive user experience.",
    github: "https://github.com/Shashank-Git1804/spotify.git",
    demo: null,
  },
  {
    image: porfolio,
    title: "Personal Portfolio",
    description:
      "I have built and deployed a dynamic, responsive portfolio website that showcases my skills in front-end and full-stack development. Created using ReactJS, GSAP, and CSS, the site features scroll-triggered animations, interactive sections, and a clean UI/UX layout. It includes a 3D skill display, project gallery, contact form with form validation, and downloadable resume support. The portfolio highlights my proficiency with the MERN stack and modern web technologies, while also demonstrating my attention to detail, creativity, and focus on performance. It serves not just as a showcase of my work but also as a practical example of my development capabilities in a real-world setting.",
    github: "https://github.com/Shashank-Git1804/spotify.git",
    demo: null,
  },
];

const Projects = () => {
  const cardRef = useRef();
  gsap.registerPlugin(useGSAP);
   gsap.registerPlugin(ScrollTrigger);

  useGSAP(
    () => {
      const cards = gsap.utils.toArray(".project-card");

      gsap.from(cards, {
        opacity: 0,
        duration: 0.6,
        delay:0.2,
        stagger: 0.2,
        ease: "power2.out",
        scrollTrigger: {
          trigger: "#projects",
          start: "top 45%",
          toggleActions: "play none none none",
        },
      });
    },
    { scope: cardRef }
  );

  return (
    <section className="projects-section" id="projects">
      <h2 className="projects-heading poppins-bold">Projects</h2>
      <div className="projects-container" ref={cardRef}>
        {projectData.map((project, index) => (
          <div className="project-card" key={index}>
            <div className="project-card-inner-section">
              <div className="project-img">
                <div className="project-img-inner">
                  <img src={project.image} alt="project image" />
                </div>
              </div>
              <div className="project-title">
                <h3>{project.title}</h3>
              </div>
              <div className="project-desc">
                <div className="project-desc-inner">
                  <p>{project.description}</p>
                </div>
              </div>
            </div>
            <div className="project-links">
              <button
                className="project-btn project-btn1"
                disabled={!project.github}
              >
                <a
                  href={project.github || "#"}
                  target="_blank"
                  rel="noopener noreferrer"
                  onClick={(e) => {
                    if (!project.github) e.preventDefault();
                  }}
                >
                  <FaGithub />
                </a>
              </button>

              <button
                className="project-btn project-btn2"
                disabled={!project.demo}
              >
                <a
                  href={project.demo || "#"}
                  target="_blank"
                  rel="noopener noreferrer"
                  onClick={(e) => {
                    if (!project.demo) e.preventDefault();
                  }}
                >
                  <RiLink />
                </a>
              </button>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Projects;
