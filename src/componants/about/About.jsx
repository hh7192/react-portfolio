import React from "react";
import "./about.css";
import ME from "../../images/me-about.jpg";
import {BsAward} from "react-icons/bs";
import {MdComputer} from "react-icons/md";
import {ImFolderUpload} from "react-icons/im";

const About = () => {
  return (
    <section id='about'>
      <h5>Get To Know</h5>
      <h2>About Me</h2>

      <div className='container about__container'>
        {/* ABOUT IMAGE */}
        <div className='about__me'>
          <div className='about__me-img'>
            <img src={ME} alt='About Image' />
          </div>
        </div>

        {/* ABOUT CONTENT */}
        <div className='about__content'>
          <div className='about__cards'>
            <article className='about__card'>
              <BsAward className='about__icon' />
              <h5>Experience</h5>
              <small>Beginner Level</small>
            </article>

            <article className='about__card'>
              <MdComputer className='about__icon' />
              <h5>Interests</h5>
              <small>Web & Data</small>
            </article>

            <article className='about__card'>
              <ImFolderUpload className='about__icon' />
              <h5>Projects</h5>
              <small>20+ All Projects</small>
            </article>
          </div>

          <p>
            In this website I put useful information, my learning paths and
            plans as I go forward picking up skills and learning more about
            Computer and Data world. I also see this page as a practice for web
            development and some kind of portfolio for myself.
          </p>
          <a href='#contact' className='btn btn-primary'>
            Let's Talk
          </a>
        </div>
      </div>
    </section>
  );
};

export default About;
