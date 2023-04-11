import React from "react";
import {skills} from "../../data.js"
import './Skills.css';
function Skills(){
  
    return( <section className="section my-services">
    <div className="container">
      <div className="section-heading">
        <h2>Skills</h2>
        <div className="line-dec"></div>
        <span></span>
      </div>
      <div className="row">
        {
          skills.map((el)=>{
            return (
              <div className="col-md-4 col-6" key={el.id}>
                <div className="service-item">
                  <div className={`${el.icon}-service-icon service-icon`}></div>
                  <h5>{el.title}</h5>
                </div>
              </div>
            )
          })
        }
      </div>
    </div>
  </section>)
}
export default Skills;