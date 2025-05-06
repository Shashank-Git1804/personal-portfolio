import React, { useState, useRef } from "react";
import "../styles/Contacts.css";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";


const Contact = () => {
  gsap.registerPlugin(ScrollTrigger);
  gsap.registerPlugin(useGSAP);
  const formspree = "https://formspree.io/f/mwpoobwz";
  const contactRef = useRef();

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const [status, setStatus] = useState("");

  useGSAP(() => {
    gsap.from(".contact-form", {
      opacity: 0,
      y: 100,
      duration: 0.8,
      delay:0.2,
      ease: "power2.out",
      scrollTrigger: {
        trigger: "#contact",
        start: "top 70%",
        toggleActions: "play none none none",
      },
    });

    gsap.from(".contact-map", {
      opacity: 0,
      x: 100,
      duration: 0.6,
      delay:0.2,
      ease: "power2.out",
      scrollTrigger: {
        trigger: "#contact",
        start: "top 45%",
        toggleActions: "play none none none",
      },
    });
  }, { scope: contactRef });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const validateEmail = (email) => {
    return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const { name, email, message } = formData;

    if (!name || !email || !message) {
      setStatus("Please fill out all fields.");
      return;
    }

    if (!validateEmail(email)) {
      setStatus("Please enter a valid email address.");
      return;
    }

    setStatus("Sending...");

    try {
      const response = await fetch(formspree, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
        },
        body: JSON.stringify(formData),
      });

      const result = await response.json();

      if (response.ok) {
        setStatus("Message sent successfully");
        setFormData({ name: "", email: "", message: "" });
      } else {
        setStatus(result.error || "Something went wrong. Try again.");
      }
    } catch (error) {
      setStatus("Failed to send message.");
    }
  };

  return (
    <section className="contact-section" id="contact" ref={contactRef}>
      <h2 className="contact-heading poppins-bold">Get in Touch</h2>
      <div className="form-map-container">
        <form className="contact-form" onSubmit={handleSubmit}>
          <input
            type="text"
            name="name"
            placeholder="Your Name"
            value={formData.name}
            onChange={handleChange}
          />
          <input
            type="email"
            name="email"
            placeholder="Your Email"
            value={formData.email}
            onChange={handleChange}
          />
          <textarea
            name="message"
            placeholder="Your Message"
            rows="6"
            value={formData.message}
            onChange={handleChange}
          />
          <button type="submit">Send Message</button>
          {status && <p className="form-status">{status}!</p>}
        </form>

        <iframe
          className="contact-map"
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3888.4342315575013!2d77.60564727590719!3d12.944042487368772!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bae144ab663d203%3A0xc5442d2fef12dc77!2sBazaar%20St%2C%20Adugodi%2C%20Bengaluru%2C%20Karnataka%20560030!5e0!3m2!1sen!2sin!4v1746395093139!5m2!1sen!2sin"
          allowFullScreen=""
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
          title="Google Map"
        ></iframe>
      </div>
    </section>
  );
};

export default Contact;
