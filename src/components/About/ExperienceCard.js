

import React, { useState } from "react";
import { VerticalTimeline, VerticalTimelineElement } from "react-vertical-timeline-component";
import "react-vertical-timeline-component/style.min.css";
import { FaBriefcase, FaGithub } from "react-icons/fa";
import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";
import "./ExperienceCard.css"; // Custom CSS for hover effects

function ExperienceCard() {
  const experiences = [
    {
      company: "SN BOSE Summer Intern, NIT Silchar",
      position: "Web Developer",
      duration: "May 2024 - July 2024",
      project: {
        name: "EVote",
        description: "EVote is a secure, web-based voting platform designed for easy and efficient elections. It features robust encryption for vote integrity, user authentication, real-time results, and an intuitive interface. Developed during an internship, EVote aims to enhance accessibility and transparency in the voting process.",
        githubLink: "https://github.com/tenet-tiwari",
        backgroundImage: "https://i.ibb.co/7nVLHF7/4448.jpg",
      },
    },
    // Add more experiences as needed
  ];

  const [showDuration, setShowDuration] = useState(null);

  const handleIconClick = (index) => {
    setShowDuration((prev) => (prev === index ? null : index));
  };

  return (
    <VerticalTimeline>
      {experiences.map((exp, index) => (
        <VerticalTimelineElement
          key={index}
          className="vertical-timeline-element--work"
          contentStyle={{ background: '#000', color: '#fff' }}
          contentArrowStyle={{ borderRight: '7px solid #8a2be2' }}
          date={showDuration === index ? exp.duration : ""}
          iconStyle={{ background: '#8a2be2', color: '##f0f0f0', cursor: 'pointer' }} 
          icon={<FaBriefcase onClick={() => handleIconClick(index)} />}
        >
          <h3 className="vertical-timeline-element-title">{exp.position}</h3>
          <h4 className="vertical-timeline-element-subtitle">{exp.company}</h4>
          <Card className="project-card">
            <div className="card-image" style={{ backgroundImage: `url(${exp.project.backgroundImage})` }}>
              <div className="card-description">
                <Card.Title>{exp.project.name}</Card.Title>
                <Card.Text>{exp.project.description}</Card.Text>
              </div>
            </div>
            <Card.Body>
              <Button variant="primary" href={exp.project.githubLink} target="_blank" rel="noopener noreferrer">
                <FaGithub /> View on GitHub
              </Button>
            </Card.Body>
          </Card>
        </VerticalTimelineElement>
      ))}
    </VerticalTimeline>
  );
}

export default ExperienceCard;

