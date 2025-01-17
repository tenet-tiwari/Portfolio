

import React from "react";
import Card from "react-bootstrap/Card";
import { ImPointRight } from "react-icons/im";
import { FaEnvelope, FaPhone } from "react-icons/fa";

function AboutCard() {
  return (
    <Card className="quote-card-view">
      <Card.Body>
        <blockquote className="blockquote mb-0">
          <p style={{ textAlign: "justify" }}>
            Hi Everyone, I am <span className="purple">Ayush Tiwari </span>
            from <span className="purple">Varanasi, Uttar Pradesh, India.</span>
            <br />
            I am currently in my <span className="purple">final year </span> as an <span className="purple">ECE </span>undergraduate student at <span className="purple">NIT Silchar. </span>
            <br />
            <br />
            I have a deep love and passion for coding, and I find great joy in exploring new technologies. My interests also extend to fields related to Machine Learning and AI, where I am constantly seeking ways to enhance productivity and ease for everyone.
            <br />
            <br />
            <b>My Coding Profile Details:</b>
            <ul>
              <li className="about-activity">
                <ImPointRight /> 
                <a href="https://www.geeksforgeeks.org/events/rec/gfg-weekly-coding-contest?itm_source=geeksforgeeks&itm_medium=main_header&itm_campaign=contests/" target="_blank" rel="noopener noreferrer" className="purple">
                  4-star on GeeksforGeeks with a rating of 1900+
                </a>
              </li>
              <li className="about-activity">
                <ImPointRight /> 
                <a href="https://leetcode.com/u/ayush__tiwari__/" target="_blank" rel="noopener noreferrer" className="purple">
                  1775+ rating on LeetCode
                </a>
              </li>
              <li className="about-activity">
                <ImPointRight /> 
                Combined experience of solving around <span className="purple">1000+ DSA </span> problems
              </li>
              <li className="about-activity">
                <ImPointRight /> 
                Strong grasp of CS fundamentals including <span className="purple">OS, DBMS, SQL, C++/OOPS, </span> and <span className="purple">Computer Network. </span>
              </li>
              <li className="about-activity">
                <ImPointRight /> 
                <a href="https://www.codechef.com/users/ayush_tiwari19" target="_blank" rel="noopener noreferrer" className="purple">
                  3-star rating on CodeChef
                </a>
              </li>
            </ul>
            <br />
            Apart from coding, some other activities that I love to do include:
          </p>
          <ul>
            <li className="about-activity">
              <ImPointRight /> Playing Games
            </li>
            <li className="about-activity">
              <ImPointRight /> Travelling
            </li>
          </ul>


          <div className="contact-info">
            <p style={{ textAlign: "justify" }}>
              Feel free to contact me:
            </p>
            <ul>
              <li className="about-activity">
                <FaEnvelope /> <a href="mailto:ayushtiwarivns19@gmail.com" className="purple">ayushtiwarivns19@gmail.com</a>
              </li>
              <li className="about-activity">
                <FaPhone /> +91-9919102292
              </li>
            </ul>
          </div>

          <p style={{ color: "rgb(155 126 172)" }}>
            "Strive to build things that make a difference!"{" "}
          </p>
          <footer className="blockquote-footer">Ayush</footer>

         
        </blockquote>
      </Card.Body>
    </Card>
  );
}

export default AboutCard;


