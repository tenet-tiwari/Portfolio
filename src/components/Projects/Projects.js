


import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import ProjectCard from "./ProjectCards";
import Particle from "../Particle";
import logo1 from "../../Assets/Projects/logo1.jpg";
import logo2 from "../../Assets/Projects/logo2.jpg";
import logo3 from "../../Assets/Projects/logo3.jpg";
import logo4 from "../../Assets/Projects/logo4.jpg";
import logo5 from "../../Assets/Projects/logo9.jpg";
import logo6 from "../../Assets/Projects/logo6.jpg";
import logo7 from "../../Assets/Projects/logo7.jpg";
import logo8 from "../../Assets/Projects/logo8.jpg";

function Projects() {
  return (
    <Container fluid className="project-section" style={{ opacity: 1 }}>
      <Particle />
      <Container>
        <h1 className="project-heading" style={{ opacity: 1 }}>
          My Recent <strong className="purple">Works </strong>
        </h1>
        <p style={{ color: "white", opacity: 1 }}>
          Here are a few projects I've worked on recently.
        </p>
        <Row style={{ justifyContent: "center", paddingBottom: "10px" }}>
          <Col md={4} className="project-card" style={{ opacity: 1 }}>
            <ProjectCard
              imgPath={logo6}
              title="EVote"
              description="EVote is a secure, web-based voting platform designed for easy and efficient elections. It features robust encryption for vote integrity, user authentication, real-time results, and an intuitive interface. Developed during an internship, EVote aims to enhance accessibility and transparency in the voting process."
              ghLink="https://github.com/tenet-tiwari?tab=repositories"
              demoLink=""
            />
          </Col>

          <Col md={4} className="project-card" style={{ opacity: 1 }}>
            <ProjectCard
              imgPath={logo5}
              title="Training and Placement Cell"
              description="Training and Placement Cell, a powerful and intuitive interface designed for managing placement statistics and overseeing administrative tasks. This React-based application is crafted to provide seamless data visualization and user management capabilities."
              ghLink="https://github.com/tenet-tiwari/TNPC"
              demoLink="https://chipper-beijinho-f9eff1.netlify.app"
            />
          </Col>

          <Col md={4} className="project-card" style={{ opacity: 1 }}>
            <ProjectCard
              imgPath={logo8}
              title="JobG"
              description="Welcome to JobG, a full-stack MERN (MongoDB, Express, React, Node.js) application designed to streamline the job application process by offering distinct functionalities for both job seekers and employers."
              ghLink="https://github.com/tenet-tiwari/JobG"
              demoLink="https://aquamarine-strudel-0d2ef1.netlify.app/"
            />
          </Col>

          <Col md={4} className="project-card" style={{ opacity: 1 }}>
            <ProjectCard
              imgPath={logo4}
              title="TasteVerse"
              description="TasteVerse is a dynamic restaurant menu application that allows chefs to manage and update the menu in real-time. Customers can view the updated menu and place their orders accordingly. The application features a simple command-line interface for both chefs and customers, ensuring ease of use and efficient menu management."
              ghLink="https://github.com/tenet-tiwari/TasteVerse"
              demoLink=""
            />
          </Col>

          <Col md={4} className="project-card" style={{ opacity: 1 }}>
            <ProjectCard
              imgPath={logo7}
              title="Portfolio"
              description="It is my personal portfolio showcasing my work and skills. It serves as a comprehensive overview of my projects, including web development, AI applications, C++ and more. Designed to highlight my technical expertise and creative solutions, Portfoili reflects my journey and achievements, providing insights into my capabilities and accomplishments."
              ghLink="https://github.com/tenet-tiwari"
              demoLink="merry-biscotti-4a1e85.netlify.app/"
            />
          </Col>

          <Col md={4} className="project-card" style={{ opacity: 1 }}>
            <ProjectCard
              imgPath={logo3}
              title="FlickView"
              description="A FlickView application built with React, Material-UI, and the Rapid API. This application allows users to browse and search for videos, displaying them in a user-friendly and responsive interface."
              ghLink="https://github.com/tenet-tiwari/FlickView"
              demoLink="https://dynamic-eclair-498a11.netlify.app/"
            />
          </Col>

          <Col md={4} className="project-card" style={{ opacity: 1 }}>
            <ProjectCard
              imgPath={logo2}
              title="PixelSmith"
              description="PixelSmiths is an advanced AI-powered image generator that creates stunning and imaginative artwork based on user input. Utilizing state-of-the-art machine learning models, PixelSmith transforms text prompts into high-quality images."
              ghLink="https://github.com/tenet-tiwari/PixelSmith"
              demoLink=""
            />
          </Col>

          <Col md={4} className="project-card" style={{ opacity: 1 }}>
            <ProjectCard
              imgPath={logo1}
              title="AI-Genie"
              description="Ai-Genie is an auto-reply AI application built with MERN stack and OpenAI API. It provides intelligent and context-aware responses for various inquiries, enhancing communication efficiency. Ai-Genie leverages advanced natural language processing to generate accurate and relevant replies, streamlining user interactions."
              ghLink="https://github.com/tenet-tiwari/AI-Genie"
              demoLink=""
            />
          </Col>
        </Row>
      </Container>
    </Container>
  );
}

export default Projects;

