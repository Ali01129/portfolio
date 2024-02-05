import React from "react";
import CV from "../../assets/ali-nawaz-cv.pdf";
import "./button.css"
export default function CTA() {
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
    <div className="cta">
      <a href={CV} download className="btn">
        {" "}
        Download CV
      </a>
      <button class="button2" onClick={scrollToContact}>
        lets Talk
      </button>
    </div>
  );
}
