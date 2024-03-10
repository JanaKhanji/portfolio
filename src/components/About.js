import React from "react";

function About() {
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
                <p className="pb-2">
                Since I was little, I was amazed by the things a programmer could do with a computer, just by writing some code. and I always wondered about the things that I would be able to do when I grew up. Working hard and learning new stuff every day is a great way to achieve dreams, and now I know that I am where I always wanted to be, and I know that “little me” would be so proud.
                </p>
                <p className="pb-2">
                Studying communications engineering expanded my perspective, allowing me to appreciate the connection of our modern world through technology. This educational background not only equipped me with technical skills but also sharpened my problem-solving abilities. By my second year in college, I discovered my true passion lies in web development.                </p>
              </div>
            </div>
            <div className="col-md-4">
              <div className="left-image">
                <img src="assets/images/about.jpg" alt="aboutme" />
              </div>
            </div>
          </div>
          <p  className="pb-2">
            Over the past years, I've immersed myself in diverse software engineering projects, utilizing technologies like Angular, Bootstrap, Tailwind, and Java SpringBoot. Each project has been an opportunity to learn and grow, refining my expertise and expanding my capabilities.
          </p>
          <p  className="pb-1">
            Working now as a software engineer, I find joy in turning ideas into reality through code. Whether it's building dynamic user interfaces or participating with a team to build a robust backend system,
            I'm passionate about creating innovative solutions that make an impact
          </p> 
          <p>
            Feel free to reach out to me via DM or email at janakhanji98@gmail.com.
          </p>
        </div>
      </div>
    </section>)
}
export default About;