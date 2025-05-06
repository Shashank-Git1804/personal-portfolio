import React, { useState, useRef } from "react";
import { FaDownload } from "react-icons/fa";
import "../styles/About.css";
import resume from "../assets/resume.pdf";
import pic1 from "../assets/myPic.png";
import pic2 from "../assets/myPic.png";
import pic3 from "../assets/myPic.png";
import { useGSAP } from "@gsap/react";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import gsap from "gsap";

gsap.registerPlugin(ScrollTrigger);

const AboutCarousel = () => {
  const [selected, setSelected] = useState("item-3");
  const aboutRef = useRef();

  useGSAP(
    () => {
      gsap.from(".about1", {
        opacity: 0,
        y: 100,
        duration: 0.6,
        delay:0.2,
        stagger: 0.2,
        ease: "power2.out",
        scrollTrigger: {
          trigger: "#about",
          start: "top 30%",
          toggleActions: "play none none none",
        },
      });
    },
    { scope: aboutRef }
  ); // scoped animations

  const aboutTexts = {
    "item-1": {
      title: "Front-End Developer",
      desc: "As a front-end developer, I focus on crafting seamless and responsive user interfaces using React, JavaScript, and CSS. I’m passionate about clean code, intuitive design, and delivering web experiences that are both aesthetically pleasing and functionally robust.",
    },
    "item-2": {
      title: "MERN Stack Enthusiast",
      desc: "I have hands-on experience working with the MongoDB, Express.js, React,and Node.js, enabling me to develop robust and scalable full-stack web applications. I take pride in building end-to-end solutions that are efficient,secure,and user-centric.",
    },
    "item-3": {
      title: "Tech Explorer & Learner",
      desc: "I am committed to continuous learning by actively exploring emerging technologies and applying them through meaningful, real-world projects that enhance my development expertise.",
    },
  };

  const handleChange = (e) => {
    setSelected(e.target.id);
  };

  return (
    <section className="about-carousel" id="about" ref={aboutRef}>
      <h2 className="about-heading poppins-bold">About me!</h2>

      <input
        type="radio"
        name="slider"
        id="item-1"
        checked={selected === "item-1"}
        onChange={handleChange}
      />
      <input
        type="radio"
        name="slider"
        id="item-2"
        checked={selected === "item-2"}
        onChange={handleChange}
      />
      <input
        type="radio"
        name="slider"
        id="item-3"
        checked={selected === "item-3"}
        onChange={handleChange}
      />

      <div className="carousel-container about1">
        <div className="cards about1" style={{ width: "100%" }}>
          <label className="card" htmlFor="item-1" id="img-1">
            <img src={pic1} alt="pic1" />
          </label>
          <label className="card" htmlFor="item-2" id="img-2">
            <img src={pic2} alt="pic2" />
          </label>
          <label className="card" htmlFor="item-3" id="img-3">
            <img src={pic3} alt="pic3" />
          </label>
        </div>

        <div className="about-text-display about1">
          <div
            className="about-text-info"
            style={{
              transform: `translateY(${
                selected === "item-1"
                  ? "0px"
                  : selected === "item-2"
                  ? "-130px"
                  : "120px"
              })`,
            }}
          >
            <div className="about-content about1">
              <h2>{aboutTexts["item-1"].title}</h2>
              <p>{aboutTexts["item-1"].desc}</p>
            </div>
            <div className="about-content about1">
              <h2>{aboutTexts["item-2"].title}</h2>
              <p>{aboutTexts["item-2"].desc}</p>
            </div>
            <div className="about-content about1">
              <h2>{aboutTexts["item-3"].title}</h2>
              <p>{aboutTexts["item-3"].desc}</p>
            </div>
          </div>
        </div>

        <a href={resume} download className="download-btn about1">
          <FaDownload /> Download Resume
        </a>
      </div>
    </section>
  );
};

export default AboutCarousel;
