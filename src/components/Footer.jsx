import React, { useRef } from "react";
import "../styles/Footer.css";
import { FaGithub, FaLinkedin } from "react-icons/fa";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";


const Footer = (prop) => {
    gsap.registerPlugin(ScrollTrigger);
    gsap.registerPlugin(useGSAP);
    const footerRef = useRef();

    useGSAP(() => {
        gsap.from(".footer-column", {
          opacity: 0,
          y: 50,
          duration: 0.8,
          stagger: 0.3,
          ease: "power2.out",
          scrollTrigger: {
            trigger: footerRef.current,
            start: "top 80%",
            toggleActions: "play none none none",
          },
        });
      }, { scope: footerRef });

  return (
    <footer className="footer-container" ref={footerRef}>
      <div className="footer-column">
        <h6>Contact via</h6>
        <ul>
          <li>
            <a href="mailto:youremail@example.com">📧 shashank182004@gmail.com</a>
          </li>
          <li>
            <a href="tel:+919999999999">📞 +91 8147220887</a>
          </li>
          <li>
            <a href="https://maps.google.com?q=Adugodi,+Bengaluru" target="_blank" rel="noopener noreferrer">
              📍 Bengaluru, India
            </a>
          </li>
        </ul>
      </div>

      <div className="footer-column">
        <h6>Connect</h6>
        <ul>
          <li>
            <a href={prop.socialMedia.linkedin} target="_blank" rel="noopener noreferrer"><FaLinkedin/> LinkedIn</a>
          </li>
          <li>
            <a href={prop.socialMedia.github}  target="_blank" rel="noopener noreferrer"><FaGithub/> GitHub</a>
          </li>
        </ul>
      </div>

      <div className="footer-bottom">
        <p>© {new Date().getFullYear()} Shashank P. All rights reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;
