import React from "react";
import { BsLinkedin } from "react-icons/bs";
import { FaGithub } from "react-icons/fa";
import { FaInstagram } from 'react-icons/fa';
export default function HeaderSocials() {
  return (
    <div className="header__socials">
      <a
        href="https://www.linkedin.com/in/muhammad-yameen-488b33231"
        target="_blank"
      >
        <BsLinkedin />{" "}
      </a>
      <a href="https://github.com/Ali01129" target="_blank">
        <FaGithub />
      </a>
      <a href="https://www.instagram.com/alinawaz2463/" target="_blank">
        <FaInstagram />
      </a>
    </div>
  );
}
