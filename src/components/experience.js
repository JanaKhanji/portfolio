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
              <div className="row mb-5">
                <div className="col-md-4">
                  <div className="left-image">
                    <a href={element.link} target="_blank">
                        <div className="overlayImg">
                            <img src={element.imgSrc} alt={element.title} />
                        </div>
                    </a>
                    <p className="text-left text-md-center">{element.date}</p>
                  </div>
                </div>

                <div className="col-md-8">
                  <div className="right-text">
                    <h4>{element.name}</h4>
                    <p>
                     {element.desc}
                    </p>
                    {
                      element.responsibilities.length > 0 &&
                      <>
                        <p>
                            My responsibilities: 
                        </p>
                        <ul>
                            {element.responsibilities.map((el, index)=>{
                                return (<li key={index}>{el}</li>)
                            })}
                        </ul>
                      </>
                    }
                    {
                      element.technologies.length > 0 &&
                      <>
                        <p>
                           <span> Technologies Used:  </span>
                            {element.technologies.map((el, index)=>{
                                return (<span key={index}>
                                  {el}
                                  {
                                    index !== element.technologies.length -1 && <>,  </>
                                  }
                                 </span>)
                            })}
                        </p>
                      </>
                    }
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