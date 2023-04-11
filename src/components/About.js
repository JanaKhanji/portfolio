import React from "react";

function About(){
    return (
        <section className="section about-me">
          <div className="container">
            <div className="section-heading">
              <h2>About Me</h2>
              <div className="line-dec"></div>
            </div>
            <div className="left-image-post">
              <div className="row">
              
                <div className="col-md-8">
                  <div className="right-text">
                    <h4>Hello, I'm Jana Khanji</h4>
                    <p>
                    Since I was little, I was amazed by the things a programmer could do with a computer,
                    just by writing some code. and I always wondered about the things that I would be able to do
                    when I grew up. Working hard and learning new stuff every day is a great way to achieve dreams,
                    and now I know that I am where I always wanted to be, and I know that “little me” would be so proud.
                    </p>
                  </div>
                </div>
                <div className="col-md-4">
                  <div className="left-image">
                    <img src="assets/images/about.jpg" alt="aboutme" />
                  </div>
                </div>
              </div>
                <p>
                 Studying communications engineering gave me an opportunity to see the world in a different way with
                  all the technologies that we have now. It also helped me build strong problem-solving skills.
                  By my 2nd year in college, I realized that my #1 passion is web development.
                </p>
                <p>
                Over the past few years, I have learned Angular, ReactJS, Ionic to build some personal and freelance projects. 
                As a developer, I have always felt the desire to learn more and build more. 
                </p>
            </div>
          </div>
        </section>)
}
export default About;