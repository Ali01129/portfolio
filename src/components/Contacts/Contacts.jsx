import React from "react";
import { MdOutlineEmail } from "react-icons/md";
import { FaInstagram } from 'react-icons/fa';
import { BsWhatsapp } from "react-icons/bs";
import "./Contacts.css";
import "./button.css"
export default function Contacts() {
  return (
    <section id="contact">
      <h5>Get In Touch</h5>
      <h2>Contact ME</h2>
      <div className="container contact__container">
        <div className="contact__options">
          <article className="contact__option">
            <MdOutlineEmail className="contact__option-icon" />
            <h4>Email</h4>
            <h5>bealinawaz5@gmail.com</h5>
            <a href="mailto:bealinawaz5@gmail.com" target="_blank">
              Send a message
            </a>
          </article>

          <article className="contact__option">
            <FaInstagram className="contact__option-icon" />
            <h4>Instagram</h4>
            <h5>alinawaz2463</h5>

            {/* to be changed by logging in to Facebook and copying the username in the URL */}
            <a href="https://www.instagram.com/alinawaz2463/" target="_blank">
              Send a message
            </a>
          </article>

          <article className="contact__option">
            <BsWhatsapp className="contact__option-icon" />
            <h4>Whatsapp</h4>
            <h5>+923044068270</h5>
            <a href="http://wa.me/923044068270" target="_blank">Send a message</a>
          </article>
        </div>

        <form action="">
          <input
            type="text"
            name="name"
            placeholder="Your Full Name"
            required
          />
          <input type="email" name="email" placeholder="Your Email" required />
          <textarea
            name="message"
            rows="7"
            placeholder="Your Message"
            required
          ></textarea>
          {/* <button type="submit" className="btn btn-primary">
            Send Message
          </button> */}
          <button type="submit" className="ui-btn">
            <span> Send </span>
          </button>
        </form>
      </div>
    </section>
  );
}
