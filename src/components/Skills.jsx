import React, { useEffect, useRef, useState, useId } from "react";
import { gsap } from "gsap";
import "../styles/Skills.css";
import {
  FaHtml5,
  FaCss3Alt,
  FaJs,
  FaReact,
  FaNodeJs,
  FaGitAlt,
  FaGithub,
  FaFigma,
  FaBootstrap,
  FaPython,
} from "react-icons/fa";
import {
  SiMongodb,
  SiJest,
  SiTypescript,
  SiExpress,
  SiTailwindcss,
} from "react-icons/si";
import { div } from "three/tsl";
import { useGSAP } from "@gsap/react";
import { ScrollTrigger } from "gsap/ScrollTrigger";

const skillsWithIcons = [
  // Frontend
  { name: "HTML", icon: <FaHtml5 />, category: "Frontend" },
  { name: "CSS", icon: <FaCss3Alt />, category: "Frontend" },
  { name: "JavaScript", icon: <FaJs />, category: "Frontend" },
  { name: "React", icon: <FaReact />, category: "Frontend" },
  // { name: "Angular", icon: <FaAngular />, category: "Frontend" },
  { name: "Bootstrap", icon: <FaBootstrap />, category: "Frontend" },
  { name: "TailwindCSS", icon: <SiTailwindcss />, category: "Frontend" },
  // { name: "SASS", icon: <FaSass />, category: "Frontend" },
  { name: "Figma", icon: <FaFigma />, category: "Frontend" },

  // Backend
  // { name: "Node.js", icon: <FaNodeJs />, category: "Backend" },
  // { name: "Express", icon: <SiExpress />, category: "Backend" },
  // { name: "PHP", icon: <FaPhp />, category: "Backend" },
  { name: "Python", icon: <FaPython />, category: "Backend" },

  // Database
  { name: "MongoDB", icon: <SiMongodb />, category: "Database" },

  // Tools & DevOps
  { name: "Git", icon: <FaGitAlt />, category: "Tools" },
  { name: "GitHub", icon: <FaGithub />, category: "Tools" },
  // { name: "Docker", icon: <FaDocker />, category: "Tools" },
  // { name: "AWS", icon: <FaAws />, category: "Tools" },
  // { name: "Linux", icon: <FaLinux />, category: "Tools" },

  // Other
  // { name: "TypeScript", icon: <SiTypescript />, category: "Other" },
  // { name: "Jest", icon: <SiJest />, category: "Other" },
];

const Skills = () => {
  const row1Ref = useRef();
  const row2Ref = useRef();
  const id = useId();
  const [direction, setDirection] = useState("right");

  const skillcardRef = useRef();

  gsap.registerPlugin(ScrollTrigger);
  gsap.registerPlugin(useGSAP);

  useGSAP(() => {
    gsap.from(".skill-btn", {
      opacity: 0,
      y: 100,
      duration: 0.1,
      stagger: 0.1,
      ease: "power2.out",
      scrollTrigger: {
        trigger: "#skills",
        start: "top 45%",
        toggleActions: "play none none none",
      },
    });
  });

  useEffect(() => {
    const handleScroll = (evt) => {
      if (evt.deltaY > 0) {
        setDirection("right");
      } else {
        setDirection("left");
      }
    };

    window.addEventListener("wheel", handleScroll);
    return () => window.removeEventListener("wheel", handleScroll);
  }, []);

  useEffect(() => {
    const Row1xDirection = direction === "right" ? "180%" : "-180%";

    gsap.to(".row1-div", {
      x: Row1xDirection,
      duration: 700,
      repeat: -1,
      ease: "none",
    });

    const Row2xDirection = direction === "right" ? "-180%" : "180%";

    gsap.to(".row2-div", {
      x: Row2xDirection,
      duration: 700,
      repeat: -1,
      ease: "none",
    });
  }, [direction]);

  return (
    <section className="skills-section" id="skills">
      <h2 className="skills-heading poppins-bold">My Skills Stack</h2>
      <div className="tape-container">
        <div className="skills-loop row1">
          <div className="tape row1-div" ref={row1Ref}>
            {Array(10)
              .fill(skillsWithIcons)
              .flat()
              .map((skill, index) => (
                <div key={index} className="word skill-word">
                  <p>{skill.name}</p>
                  <span className="skill-icon icons iconRow1">
                    {skill.icon}
                  </span>
                </div>
              ))}
          </div>
        </div>
      </div>
      <div className="showcase-skills" ref={skillcardRef}>
        {skillsWithIcons.map((skill) => {
          return (
            <div key={skill.name + id} className="skill-btn">
              <span>{skill.name}</span>
              <span className="showcaseskill-icon">{skill.icon}</span>
            </div>
          );
        })}
      </div>
      <div className="tape-container">
        <div className="skills-loop row2">
          <div className="tape row2-div" ref={row2Ref}>
            {Array(10)
              .fill(skillsWithIcons)
              .flat()
              .map((skill, index) => (
                <div key={index} className="word skill-word">
                  <span className="skill-icon icons iconRow2">
                    {skill.icon}
                  </span>
                  <p>{skill.name}</p>
                </div>
              ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;
