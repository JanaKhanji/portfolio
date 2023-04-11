/* eslint-disable react/jsx-no-target-blank */
import React,{useState} from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {faGithubSquare} from "@fortawesome/free-brands-svg-icons";
import {faLinkedinIn} from "@fortawesome/free-brands-svg-icons";
import {faEnvelope} from "@fortawesome/free-solid-svg-icons";
import {faWhatsapp} from "@fortawesome/free-brands-svg-icons";
import {faBars} from "@fortawesome/free-solid-svg-icons";
import {faTimes} from "@fortawesome/free-solid-svg-icons";
import { menu } from '../data';

function Sidebar({scrollTo}){
  const [menuStatus,setMenuStatus]=useState("");
  const [activeTab,setActiveTab]=useState(menu[0].section);
    return (
        <div className="responsive-nav">
          <i id="menu-toggle" onClick={()=>{setMenuStatus("open")}}>
          <FontAwesomeIcon icon={faBars} />
          </i>
          <div id="menu" className={`menu ${menuStatus}`}>
            <i id="menu-close" onClick={()=>{setMenuStatus("")}}>
            <FontAwesomeIcon icon={faTimes} />
            </i>
            <div className="container">
              <div className="image">
                <a href="/"><img src="../assets/images/profile.jpg" alt="Profile" /></a>
              </div>
              <div className="author-content">
                <h4>Jana Khanji</h4>
                <span>Web Developer</span>
              </div>
              <nav className="main-nav" role="navigation">
                <ul className="main-menu">
                  {menu.map((element)=>{
                    return (
                      <li 
                      className={activeTab===element.section ? "active" : ""}
                      onClick={()=>{scrollTo(element.section);setActiveTab(element.section)}}>
                        <a href="#" onClick={(e)=>e.preventDefault()}>
                          {element.name}
                        </a>
                      </li>
                    );
                  })}
                 </ul>
              </nav>
              <div className="social-network">
                <ul className="soial-icons">
                  <li>
                    <a href="https://github.com/JanaKhanji" target="_blank">
                    <i><FontAwesomeIcon icon={faGithubSquare} /></i>
                    </a>
                  </li>
                  <li>
                    <a href="https://www.linkedin.com/in/jana-khanji/" target="_blank">
                      <i><FontAwesomeIcon icon={faLinkedinIn} /></i>
                      </a>
                  </li>
                  <li>
                    <a href="mailto:janakhanji98@gmail.com" target="_blank">
                      <i><FontAwesomeIcon icon={faEnvelope} /></i>
                      </a>
                  </li>
                  <li>
                    <a href="https://wa.me/96170301376" target="_blank">
                      <i><FontAwesomeIcon icon={faWhatsapp} /></i>
                      </a>
                  </li>
                </ul>
              </div>
              <div className="copyright-text">
                <p>© {(new Date().getFullYear())} Jana Khanji.<br />All rights reserved.</p>
              </div>
            </div>
          </div>
        </div>)
}
export default Sidebar;