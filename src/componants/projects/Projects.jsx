import React from "react";
import "./projects.css";
import data from "./data";

const Projects = () => {
  return (
    <section id='projects'>
      <h5>My Recent Practice</h5>
      <h2>Projects</h2>
      <div className='container projects__container'>
        {data.map(({id, image, title, github, demo}) => {
          return (
            <article key={id} className='project__item'>
              <div className='project__item-img'>
                <img src={image} alt={title} />
              </div>
              <h3>{title}</h3>
              <div className='project__item-cta'>
                <a href={github} className='btn' target='_blank'>
                  Github Rep
                </a>
                <a href={demo} className='btn btn-primary' target='_blank'>
                  Live Demo
                </a>
              </div>
            </article>
          );
        })}
      </div>
    </section>
  );
};

export default Projects;
