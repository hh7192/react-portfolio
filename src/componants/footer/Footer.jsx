import React from "react";
import "./footer.css";
import {BsFacebook} from "react-icons/bs";
import {RiInstagramFill} from "react-icons/ri";
import {AiFillTwitterCircle} from "react-icons/ai";
import {ImLinkedin2} from "react-icons/im";

const Footer = () => {
  return (
    <footer>
      <a href='#' className='footer__logo'>
        HamidreZa
      </a>
      <ul className='permalinks'>
        <li>
          <a href='#'>Home</a>
        </li>
        <li>
          <a href='#about'>About</a>
        </li>
        <li>
          <a href='#skills'>Skills</a>
        </li>
        <li>
          <a href='#services'>Services</a>
        </li>
        <li>
          <a href='#projects'>Projects</a>
        </li>
        <li>
          <a href='#quotes'>Quotes</a>
        </li>
        <li>
          <a href='#contact'>Contact</a>
        </li>
      </ul>

      <div className='footer__socials'>
        <a href='http://facebook.com'>
          <BsFacebook />
        </a>
        <a href='http://instagram.com'>
          <RiInstagramFill />
        </a>
        <a href='http://twitter.com'>
          <AiFillTwitterCircle />
        </a>
        <a href='http://linkedin.com'>
          <ImLinkedin2 />
        </a>
      </div>
    </footer>
  );
};

export default Footer;
