import React from "react";
import {experiences} from "../data.js";

function Experience(){
    return(<section className="section my-experience" data-section="section4">
    <div className="container">
      <div className="section-heading">
        <h2>Experiences</h2>
        <div className="line-dec"></div>
        </div>
        {
        experiences.map((element,index)=> { return (
            <div className="right-image-post" key={index}>
              <div className="row">

                <div className="col-md-4">
                  <div className="left-image">
                    <a href={element.link} target="_blank">
                        <div className="overlayImg">
                            <img src={element.imgSrc} alt={element.title} />
                        </div>
                    </a>
                    <p>{element.date}</p>
                  </div>
                </div>

                <div className="col-md-8">
                  <div className="right-text">
                    <h4>{element.name}</h4>
                    <p>
                     {element.desc}
                    </p>
                    <p>
                        My responsibilities: 
                    </p>
                    <ul>
                        {element.responsibilities.map((el)=>{
                            return (<li>{el}</li>)
                        })}
                    </ul>
                  </div>
                </div>
              </div>
            </div>
        )})
        }
        
    </div>
  </section>)
}

export default Experience;