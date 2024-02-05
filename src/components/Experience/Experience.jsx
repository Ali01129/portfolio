import React from "react";
import { BsPatchCheckFill } from "react-icons/bs";
import "./Experisnce.css";
export default function Experience() {
  return (
    <section id="experience">
      <h5>What Skills I have!</h5>
      <h2>My Experience</h2>
      <div className="container experience__container">
        <div className="experience__frontend">
          <h3>Frontend development</h3>
          <div className="experience__content">
            <article className="experience__details">
              <BsPatchCheckFill className="experience__detalis-icon" />
              <div>
                <h4>React.js</h4>
                <small className="text-light">Experienced</small>
              </div>
            </article>
            <article className="experience__details">
              <BsPatchCheckFill className="experience__detalis-icon" />
              <div>
                <h4>JavaScript</h4>
                <small className="text-light">Experienced</small>
              </div>{" "}
            </article>
            <article className="experience__details">
              <BsPatchCheckFill className="experience__detalis-icon" />
              <div>
                <h4>Bootstrap</h4>
                <small className="text-light">Experienced</small>
              </div>{" "}
            </article>
            <article className="experience__details">
              <BsPatchCheckFill className="experience__detalis-icon" />
              <div>
                <h4>HTML</h4>
                <small className="text-light">Experienced</small>
              </div>{" "}
            </article>
            <article className="experience__details">
              <BsPatchCheckFill className="experience__detalis-icon" />
              <div>
                <h4>Tailwind</h4>
                <small className="text-light">Intermediate</small>
              </div>{" "}
            </article>
          </div>
        </div>

        {/* Fontend End */}

        <div className="experience__backend">
          <h3>Backend development</h3>
          <div className="experience__content">
            <article className="experience__details">
              <BsPatchCheckFill className="experience__detalis-icon" />
              <div>
                <h4>Node JS</h4>
                <small className="text-light">Experienced</small>
              </div>{" "}
            </article>
            <article className="experience__details">
              <BsPatchCheckFill className="experience__detalis-icon" />
              <div>
                <h4>MongoDB</h4>
                <small className="text-light">Intermediate</small>
              </div>
            </article>
            <article className="experience__details">
              <BsPatchCheckFill className="experience__detalis-icon" />
              <div>
                <h4>MySql</h4>
                <small className="text-light">Experienced</small>
              </div>{" "}
            </article>
            <article className="experience__details">
              <BsPatchCheckFill className="experience__detalis-icon" />
              <div>
                <h4>PHP</h4>
                <small className="text-light">Intermediate</small>
              </div>{" "}
            </article>

            <article className="experience__details">
              <BsPatchCheckFill className="experience__detalis-icon" />
              <div>
                <h4>Python</h4>
                <small className="text-light">Experienced</small>
              </div>{" "}
            </article>
          </div>
        </div>
      </div>
    </section>
  );
}
