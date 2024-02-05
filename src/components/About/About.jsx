import React from "react";
import img from "../../assets/Ali2.jpg";
import { FaAward } from "react-icons/fa";
import { FiUsers } from "react-icons/fi";
import { VscFolderLibrary } from "react-icons/vsc";
import "./button.css"
import "./About.css";
export default function About() {
  const scrollToContact = () => {
    const contactElement = document.getElementById('contact');
    if (contactElement) {
      window.scrollTo({
        top: contactElement.offsetTop,
        behavior: 'smooth',
      });
    }
  };
  return (
    <section id="about">
      <h5>Get to Know</h5>
      <h2>About Me</h2>
      <div className="container container__about">
        <div className="about__me">
          <div className="about__me-image">
            <img src={img} alt=""/>
          </div>
        </div>
        <div className="about__content">
          <div className="about__cards">
            <article className="about__card">
              <FaAward className="about__icon" />
              <h5>Computer Science</h5>
              <small>FAST NUCES</small>
            </article>

            <article className="about__card">
              <FiUsers className="about__icon" />
              <h5>Experience</h5>
              <small>2 Years</small>
            </article>

            <article className="about__card">
              <VscFolderLibrary className="about__icon" />
              <h5>Projects</h5>
              <small>10+ Compeleted</small>
            </article>
          </div>
          <p>
            I am a Full Stack Web Developer with experience developing business
            solutions and implementing innovative ideas using MERN stack. I have
            strong expertise in Software Development life cycle from modeling to
            deploying.
          </p>
          {/* <a href="#contact" className="btn btn-primary">
            Let's Talk!
          </a> */}
          <button onClick={scrollToContact} className="batbutton">
            <span>Lets Talk</span>
          </button>
        </div>
      </div>
    </section>
  );
}
