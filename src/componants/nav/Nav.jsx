import React from "react";
import "./nav.css";
import {ImHome} from "react-icons/im";
import {ImUser} from "react-icons/im";
import {GiSkills} from "react-icons/gi";
import {AiFillCustomerService} from "react-icons/ai";
import {AiFillProject} from "react-icons/ai";
import {RiMessage3Fill} from "react-icons/ri";
import {useState} from "react";

const Nav = () => {
  const [activeNav, setActiveNav] = useState("#");

  return (
    <nav>
      <a
        href='#'
        onClick={() => setActiveNav("#")}
        className={activeNav === "#" ? "active" : ""}>
        <ImHome />
      </a>

      <a
        href='#about'
        onClick={() => setActiveNav("#about")}
        className={activeNav === "#about" ? "active" : ""}>
        <ImUser />
      </a>

      <a
        href='#skills'
        onClick={() => setActiveNav("#skills")}
        className={activeNav === "#skills" ? "active" : ""}>
        <GiSkills />
      </a>

      <a
        href='#services'
        onClick={() => setActiveNav("#services")}
        className={activeNav === "#services" ? "active" : ""}>
        <AiFillCustomerService />
      </a>

      <a
        href='#projects'
        onClick={() => setActiveNav("#projects")}
        className={activeNav === "#projects" ? "active" : ""}>
        <AiFillProject />
      </a>

      <a
        href='#contact'
        onClick={() => setActiveNav("#contact")}
        className={activeNav === "#contact" ? "active" : ""}>
        <RiMessage3Fill />
      </a>
    </nav>
  );
};

export default Nav;
