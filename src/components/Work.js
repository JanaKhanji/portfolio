import React from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faExternalLinkAlt } from '@fortawesome/free-solid-svg-icons';
import {work} from '../data.js'
function Work(){
    return(<section className="section my-work" data-section="section3">
    <div className="container">
      <div className="section-heading">
        <h2>Projects</h2>
        <div className="line-dec"></div>
      </div>
      <div className="row">
        <div className="isotope-wrapper">
           {work.map((array,index)=> { return (
           <div className="isotope-box" key={index}> 
             {array.map((el)=>{return (
               <div className="isotope-item" key={el.id}>
               <figure className="snip1321">
                 <img
                   src={el.imgSrc}
                   alt="sq-sample26"
                 />
                <a href={el.link} target="_blank">
                  <figcaption>
                     <i><FontAwesomeIcon icon={faExternalLinkAlt} /></i>
                     <h4>{el.name}</h4>
                     <span>{el.desc}</span>
                   </figcaption>
                 </a>
               </figure>
             </div>)
             })
             }  
          </div>
           )}) 
            } 
        </div>
      </div>
    </div>
  </section>)
}

export default Work;