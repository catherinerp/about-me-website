import React from 'react';
import AiAppImg from '../images/ai-app.png';
import HabitAppImg from '../images/habit-app.png'

const Portfolio = () => {
  return (
    <section id="portfolio">
      <div className="container">
        <h1 className="sub-title">My Work</h1>
        <div className="work-list">
          <div className="work">
            <img src={AiAppImg} alt="AI Code Assistant" />
            <div className="layer">
              <h3>AI Code Assistant</h3>
              <p>The app allows you to intelligently improve your code and skills...</p>
              <a target="_blank" href="https://github.com/catherinerp/intelligent-code" rel="noreferrer"><i className="fa-solid fa-arrow-up-right-from-square"></i></a>
            </div>
          </div>
          <div className="work">
            <img src={HabitAppImg} alt="Habit Tracker App" />
            <div className="layer">
              <h3>Habit Tracker</h3>
              <p>The app is a personal assistant to organize your day...</p>
              <a href="#"><i className="fa-solid fa-arrow-up-right-from-square"></i></a>
            </div>
          </div>
          <div className="work">
            <img alt="" />
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
