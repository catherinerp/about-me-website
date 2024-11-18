import React from 'react';

const Services = () => {
  return (
    <section id="services">
      <div className="container">
        <h1 className="sub-title">My Services</h1>
        <div className="services-list">
          <div>
            <i className="fa-solid fa-code"></i>
            <h2>App/Web Development</h2>
            <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit...</p>
            <a href="#">Learn More</a>
          </div>
          <div>
            <i className="fa-solid fa-crop"></i>
            <h2>UI/UX Design</h2>
            <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit...</p>
            <a href="#">Learn More</a>
          </div>
          <div>
            <i className="fa-solid fa-cloud"></i>
            <h2>Cloud Computing</h2>
            <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit...</p>
            <a href="#">Learn More</a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Services;
