import React, { useState } from 'react';

const Contact = () => {
  const [message, setMessage] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    setMessage('Message sent successfully!');
    setTimeout(() => setMessage(''), 5000);
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
            <a href="images/my-cv.pdf" download className="btn btn2">Download CV</a>
          </div>
          <div className="contact-right">
            <form onSubmit={handleSubmit}>
              <input type="text" name="Name" placeholder="Your Name" required />
              <input type="email" name="Email" placeholder="Your Email" required />
              <textarea name="Message" rows="10" placeholder="Your Message" required />
              <button type="submit" className="btn btn2">Submit</button>
            </form>
            {message && <span id="msg">{message}</span>}
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
