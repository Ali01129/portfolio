import React from "react";
import { FiInstagram } from "react-icons/fi";
import { MdOutlineEmail } from "react-icons/md";
import { FaGithub } from "react-icons/fa";
import "./Footer.css";

export default function Footer() {
  return (
    <footer>
      <a href="#" className="footer__logo">
        {" "}
        Ali Nawaz
      </a>
      <ul className="permalinks">
        <li>
          {" "}
          <a href="#">Home</a>
        </li>
        <li>
          {" "}
          <a href="#about">About</a>
        </li>
        <li>
          {" "}
          <a href="#experience">Experience</a>
        </li>
        <li>
          {" "}
          <a href="#services">Services</a>
        </li>
        <li>
          {" "}
          <a href="#contact">Contact</a>
        </li>
      </ul>

      <div className="footer__socials">
        <a href="https://github.com/Ali01129" target="_blank">
          <FaGithub />
        </a>
        <a href="https://www.instagram.com/alinawaz2463/" target="_blank">
          <FiInstagram />
        </a>
        <a href="mailto:bealinawaz5@gmail.com" target="_blank">
          <MdOutlineEmail />
        </a>
      </div>

      <div className="footer__copyright">
        <small>&copy; Ali Nawaz. All rights reserved</small>
      </div>
    </footer>
  );
}
