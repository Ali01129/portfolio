import React from "react";
import Service from "./Ser";
import "./Services.css";
const UI_UX_SERVICES = [
  {
    id: "s1",
    service: " Responsive Web Design",
  },
  {
    id: "s2",
    service: "Intuitive Navigation",
  },
  {
    id: "s3",
    service: "Visual Hierarchy",
  },
  {
    id: "s4",
    service: "Interactive Elements",
  },
  {
    id: "s5",
    service: "Typography and Readability",
  },
  {
    id: "s6",
    service: "Minimalist Design",
  },
];
const WEB_DEV_SERVICES = [
  {
    id: "w1",
    service: "Front-end Development",
  },
  {
    id: "w2",
    service: "Back-end Development",
  },
  {
    id: "w3",
    service: "Database Integration",
  },
  {
    id: "w4",
    service: "API Developmentn",
  },
  {
    id: "w5",
    service: "E-commerce Functionality",
  },
  {
    id: "w6",
    service: "Content Management System (CMS) Integration",
  },
  {
    id: "w7",
    service: "Performance Optimization",
  },
];
const CONTENT_CREATION_SERVICES = [
  {
    id: "c1",
    service: " Project Descriptions",
  },
  {
    id: "c2",
    service: "Blog Writing",
  },
  {
    id: "c3",
    service: "Case Studies",
  },
  {
    id: "c4",
    service: "Technical Documentation",
  },
  {
    id: "c5",
    service: "About Me Page",
  },
  {
    id: "c6",
    service: "Social Media Content",
  },
];
export default function Services() {
  const uiService = UI_UX_SERVICES.map((s) => (
    <Service description={s.des} service={s.service} />
  ));
  const webService = WEB_DEV_SERVICES.map((w) => (
    <Service description={w.des} service={w.service} />
  ));
  const contentService = CONTENT_CREATION_SERVICES.map((c) => (
    <Service description={c.des} service={c.service} />
  ));
  return (
    <section id="services">
      <h5>What I Offer</h5>
      <h2>Services</h2>
      <div className="container services__container">
        <article className="services">
          <div className="service__head">
            <h3>UI/UX Design</h3>
          </div>
          <ul className="service__list">{uiService}</ul>
        </article>

        {/* End of UI/UX */}
        <article className="services">
          <div className="service__head">
            <h3>Web Development</h3>
          </div>
          <ul className="service__list">{webService}</ul>
        </article>

        {/* End of Web development */}
        <article className="services">
          <div className="service__head">
            <h3>Content Creation</h3>
          </div>
          <ul className="service__list">{contentService}</ul>
        </article>
      </div>
    </section>
  );
}
