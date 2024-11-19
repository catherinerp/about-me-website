import React, { useState } from 'react';
import emailjs from 'emailjs-com';

const Contact = () => {
  const [contactFeedback, setContactFeedback] = useState('');
  const emailjsUserId = process.env.REACT_APP_EMAILJS_USER_ID;
  const emailjsServiceId = process.env.REACT_APP_EMAILJS_SERVICE_ID;
  const emailjsTemplateId = process.env.REACT_APP_EMAILJS_TEMPLATE_ID;
  
  emailjs.init(emailjsUserId);

  const handleSubmit = (e) => {
    e.preventDefault();
    let parms = {
        name : document.getElementById("contact-name").value,
        email : document.getElementById("contact-email").value,
        subject : document.getElementById("contact-subject").value,
        message : document.getElementById("contact-message").value,
    }

    emailjs.send(emailjsServiceId, emailjsTemplateId, parms)
      .then(() => {
        setContactFeedback('Message sent successfully!');
        setTimeout(() => setContactFeedback(''), 5000);
      })
      .catch((err) => {
        console.error("Failed to send email:", err);
      });
  };

  return (
    <section id="contact">
      <div className="container">
        <div className="row">
          <div className="contact-left">
            <h1 className="sub-title">Contact Me</h1>
            <div className="social-icons">
              <a href="https://www.linkedin.com/in/catherine-pe-benito/">
                <i className="fa-brands fa-linkedin"></i>
              </a>
              <a href="https://github.com/catherinerp/">
                <i className="fa-brands fa-github"></i>
              </a>
            </div>
            <a href="images/Resume.pdf" download className="btn btn2">Download CV</a>
          </div>
          <div className="contact-right">
            <form onSubmit={handleSubmit}>
              <input id="contact-name" type="text" name="Name" placeholder="Name" required />
              <input id="contact-email" type="email" name="Email" placeholder="Email" required />
              <input id="contact-subject" type="text" name="Subject" placeholder="Subject" required />
              <textarea id="contact-message" name="Message" rows="10" placeholder="Message" required />
              <button type="submit" className="btn btn2">Submit</button>
            </form>
            {contactFeedback && <span id="msg">{contactFeedback}</span>}
          </div>
        </div>
      </div>
      <div className="copyright">
        <p>By Catherine Pe Benito Updated 2024</p>
      </div>
    </section>
  );
};

export default Contact;
