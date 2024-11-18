import React, { useState } from 'react';

const Contact = () => {
  const [message, setMessage] = useState('');
  const [activeTab, setActiveTab] = useState("skills");

  const handleTabClick = (tabName) => {
    setActiveTab(tabName);
  };

  return (
    <div id="about">
        <div className="container">
          <div className="row">
            <div className="about-col-1">
              <img src="images/me.png" alt="me" />
            </div>
            <div className="about-col-2">
              <h1 className="sub-title">Who am I?</h1>
              <p>
                I am a recent Computing Science graduate who currently works full-time
                as a Developer at IBM. I am a highly motivated and ambitious individual who loves to...
              </p>
              <div className="tab-titles">
                <p className={`tab-links ${activeTab === "skills" ? "active-link" : ""}`} onClick={() => handleTabClick("skills")}>Skills</p>
                <p className={`tab-links ${activeTab === "experience" ? "active-link" : ""}`} onClick={() => handleTabClick("experience")}>Experience</p>
                <p className={`tab-links ${activeTab === "education" ? "active-link" : ""}`} onClick={() => handleTabClick("education")}>Education</p>
              </div>
              <div className={`tab-contents ${activeTab === "skills" ? "active-tab" : ""}`} id="skills">
                <ul>
                  <li><span>Web Development</span><br />Web app development</li>
                  <li><span>UI/UX</span><br />Designing Web/App Interfaces</li>
                  <li><span>App Development</span><br />Building iOS Apps</li>
                </ul>
              </div>
              <div className={`tab-contents ${activeTab === "experience" ? "active-tab" : ""}`} id="experience">
                <ul>
                  <li>
                    <span>July 2024 - Present</span><br />Application Developer at IBM
                  </li>
                  <li>
                    <span>July 2023 - June 2024</span><br />Associate Application Developer at IBM
                  </li>
                  <li>
                    <span>March 2023 - June 2023</span><br />Casual Software Engineer at Suncorp Group
                  </li>
                  <li>
                    <span>November 2022 - February 2023</span><br />Software Engineer Intern at Suncorp Group
                  </li>
                </ul>
              </div>
              <div className={`tab-contents ${activeTab === "education" ? "active-tab" : ""}`} id="education">
                <ul>
                  <li>
                    <span>2019 - 2023</span><br /><b>Bachelor's Degree of Computing Science (Honours)</b>
                    <br />Major in Enterprise Systems Development<br />University of Technology Sydney
                  </li>
                  <li>
                    <span>2013 - 2018</span><br /><b>Higher School Certificate</b>
                    <br />Catherine McAuley Westmead
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
  );
};

export default Contact;
