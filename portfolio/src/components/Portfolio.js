import React from 'react';

const Portfolio = () => {
  return (
    <section id="portfolio">
      <div className="container">
        <h1 className="sub-title">My Work</h1>
        <div className="work-list">
          <div className="work">
            <img src="images/work-1.png" alt="Work 1" />
            <div className="layer">
              <h3>AI Code Assistant</h3>
              <p>The app allows you to track your expenses and income...</p>
              <a href="#"><i className="fa-solid fa-arrow-up-right-from-square"></i></a>
            </div>
          </div>
          <div className="work">
            <img src="images/work-2.png" alt="Work 2" />
            <div className="layer">
              <h3>Habit Tracker</h3>
              <p>The app is a personal assistant to organize your day...</p>
              <a href="#"><i className="fa-solid fa-arrow-up-right-from-square"></i></a>
            </div>
          </div>
          <div className="work">
            <img src="images/work-3.png" alt="Work 3" />
            <div className="layer">
              <h3>Workout Tracker</h3>
              <p>Coming soon...</p>
              <a href="#"><i className="fa-solid fa-arrow-up-right-from-square"></i></a>
            </div>
          </div>
        </div>
        <a href="#" className="btn">See more</a>
      </div>
    </section>
  );
};

export default Portfolio;
