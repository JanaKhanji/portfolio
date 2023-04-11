import React , {useRef} from 'react';
import { db } from '../firebase.config.js';

function Contact(){
    const name = useRef();
    const email = useRef();
    const subject = useRef();
    const message = useRef();

    function SendMessage(e){
        e.preventDefault()
        let id= new Date().getTime();
        db.collection("ContactMsgs").doc(`${subject.current.value} from ${name.current.value} at ${String(id)}`).set({
            name: name.current.value,
            email: email.current.value,
            subject: subject.current.value,
            message: message.current.value
        })
        .then(() => {
            console.log("message sent!"); 
            e.target.reset()
        })
        .catch((error) => {
            console.log("Error: ", error);
        });
    }

    return (
        <section className="section contact-me">
        <div className="container">
          <div className="section-heading">
            <h2>Get in touch</h2>
            <div className="line-dec"></div>
          </div>
          <div className="row">
            <div className="right-content">
              <div className="container">
                <form id="contact" onSubmit={(e)=>{SendMessage(e)}}>
                  <div className="row">
                    <div className="col-md-6">
                      <fieldset>
                        <input
                          ref={name}
                          name="name"
                          type="text"
                          className="form-control"
                          id="name"
                          placeholder="Your name"
                          required
                        />
                      </fieldset>
                    </div>
                    <div className="col-md-6">
                      <fieldset>
                        <input
                          ref={email}
                          name="email"
                          type="email"
                          className="form-control"
                          id="email"
                          placeholder="Your email"
                          required
                        />
                      </fieldset>
                    </div>
                    <div className="col-md-12">
                      <fieldset>
                        <input
                          ref={subject}
                          name="subject"
                          type="text"
                          className="form-control"
                          id="subject"
                          placeholder="Subject"
                          required
                        />
                      </fieldset>
                    </div>
                    <div className="col-md-12">
                      <fieldset>
                        <textarea
                          ref={message}
                          name="message"
                          rows="6"
                          className="form-control"
                          id="message"
                          placeholder="Your message..."
                          required
                        ></textarea>
                      </fieldset>
                    </div>
                    <div className="col-md-12">
                      <fieldset>
                        <button type="submit" id="form-submit" className="button">
                          Send Message
                        </button>
                      </fieldset>
                    </div>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </section>
    )
}
export default Contact;