import React from "react";
import "./contact.css";
import {AiTwotoneMail} from "react-icons/ai";
import {BsFillChatDotsFill} from "react-icons/bs";
import {IoLogoWhatsapp} from "react-icons/io";
import {useRef} from "react";
import emailjs from "emailjs-com";

const Contact = () => {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();
    e.target.reset();

    emailjs
      .sendForm(
        "service_sm9300l",
        "template_atm3878",
        form.current,
        "XqspjU8TYFr8TpdIk"
      )
      .then(
        (result) => {
          console.log(result.text);
        },
        (error) => {
          console.log(error.text);
        }
      );
  };

  return (
    <section id='contact'>
      <h5>Get In Touch</h5>
      <h2>Contact Me</h2>
      <div className='container contact__container'>
        <div className='contact__options'>
          <article className='contact__option'>
            <AiTwotoneMail className='contact__option-icon' />
            <h4>Email</h4>
            <h5>hh7192@gmail.com</h5>
            <a href='mailto:hh7192@gmail.com' target='_blank'>
              Send a message
            </a>
          </article>

          <article className='contact__option'>
            <BsFillChatDotsFill className='contact__option-icon' />
            <h4>Chatbot</h4>
            <h5>Let's chat here!</h5>
            <a href='#' target='_blank'>
              Send a message
            </a>
          </article>

          <article className='contact__option'>
            <IoLogoWhatsapp className='contact__option-icon' />
            <h4>Whats App</h4>
            <h5>+989195892013</h5>
            <a href='https://wa.me/+989195892013' target='_blank'>
              Send a message
            </a>
          </article>
        </div>
        <form ref={form} onSubmit={sendEmail}>
          <input
            type='text'
            name='name'
            placeholder='Your Full Name'
            required
          />
          <input type='email' name='email' placeholder='Your Email' required />
          <textarea
            name='message'
            rows='7'
            placeholder='Your Message'
            required></textarea>
          <button className='btn btn-primary' type='submit'>
            Send Message
          </button>
        </form>
      </div>
    </section>
  );
};

export default Contact;
