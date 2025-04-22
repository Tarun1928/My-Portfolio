import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import ProjectCard from "./ProjectCards";
import Particle from "../Particle";
import leaf from "../../Assets/Projects/leaf.png";
import emotion from "../../Assets/Projects/emotion.png";
import editor from "../../Assets/Projects/codeEditor.png";
import chatify from "../../Assets/Projects/chatify.png";
import suicide from "../../Assets/Projects/suicide.png";
import scbds from "../../Assets/Projects/scbds.png";
import shwa from "../../Assets/Projects/shwa.png";
import aad from "../../Assets/Projects/aad.png";
import ems from "../../Assets/Projects/ems.png";
import ccml from "../../Assets/Projects/ccml.png";
import c4 from "../../Assets/Projects/c4.png";
import maze from "../../Assets/Projects/maze.png";
import vacuum from "../../Assets/Projects/vacuum.png";
import nqueen from "../../Assets/Projects/nqueen.png";

function Projects() {
  return (
    <Container fluid className="project-section">
      <Particle />
      <Container>
        <h1 className="project-heading">
          My Recent <strong className="purple">Works </strong>
        </h1>
        <p style={{ color: "white" }}>
          Here are a few projects I've worked on recently.
        </p>
        <Row style={{ justifyContent: "center", paddingBottom: "10px" }}>

       
        <Col md={4} className="project-card">
            <ProjectCard
              imgPath={aad}
              isBlog={false}
              title="Analysis of Abnormal Activity Detection in Offline Surveillance Footage"
              description="Developed a deep learning-based system to detect abnormal human activities (robbery, road accidents, and fighting) in offline surveillance footage. Implemented and compared pre-trained models—VGG-16, ResNet50, and 2D-CNN—using real-time video datasets from Kaggle. Achieved a testing accuracy of 99.99% with VGG-16, outperforming other models. Published in the International Journal for Innovative Engineering and Management Research (IJIEMR), Volume 12, Issue 04, April 2023"
             // ghLink="To be added"
              //demoLink="To be added"
            />
          </Col>

         

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={scbds}
              isBlog={false}
              title="Selfie capturing by Detecting Smile"
              description="This project focused on automatically capturing selfies by detecting smiles. Along with this main feature, we included additional functionalities like photo capture, image browsing, filters, video recording, and adding watermarks to images. The goal was to create a user-friendly interface on a laptop, similar to the experience of using a mobile camera.Chat Room or Workspace to share resources and hangout with friends build with react.js, Material-UI, and Firebase. Have features which allows user for realtime messaging, image sharing as well as supports reactions on messages."
             // ghLink="https://github.com/soumyajit4419/Chatify"
              //demoLink="https://chatify-49.web.app/"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={shwa}
              isBlog={false}
              title="Smart Hiring Web Application"
              description="Designed and developed a job hiring portal using ReactJS to streamline the recruitment process. The application allows users to create profiles, explore job listings, and apply for roles tailored to their skills. Implemented features like advanced search filters and user-friendly interfaces to enhance user experience and accurately match candidates with opportunities.Designed and developed a job hiring portal using ReactJS to streamline the recruitment process. The application allows users to create profiles, explore job listings, and apply for roles tailored to their skills. Implemented features like advanced search filters and user-friendly interfaces to enhance user experience and accurately match candidates with opportunities."
             // ghLink="https://github.com/soumyajit4419/Editor.io"
              //demoLink="https://editor.soumya-jit.tech/"              
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={ems}
              isBlog={false}
              title="Employee Management System - Modular Architecture Design "
              description="Designed and developed a desktop-based Employee Management System (EMS) using a robust three-tier architecture combined with the MVC design pattern. The system supports key HR functionalities including employee onboarding, record updates, search, and deletion. The architecture ensures high scalability, modularity, and data security, aligning with enterprise software standards. Technologies used include Python and VS Code."
             // ghLink="To be added"
              //demoLink="To be added"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={ccml}
              isBlog={false}
              title="COVID-19 Severity Classification Using ML"
              description="Developed and compared multiple machine learning models—C4.5 Decision Tree, XGBoost, Conditional Inference Tree, and SVM—to classify U.S. counties based on COVID-19 severity using demographic, economic, and healthcare indicators. Achieved a peak accuracy of 94.56% with the C4.5 model, providing actionable insights for public health resource allocation and policy decisions."
             // ghLink="To be added"
              // demoLink="To be added" <--------Please include a demo link here
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={c4}
              isBlog={false}
              title="Intelligent Game Agent for Connect 4"
              description="Developed an AI agent to play Connect 4 using multiple search strategies including Minimax, Alpha-Beta Pruning, and Monte Carlo Tree Search (MCTS). The agent intelligently selects optimal moves in real time, simulating human-like gameplay. Evaluation functions and heuristic pruning were implemented to improve decision efficiency."
             // ghLink="link to be added"
              // demoLink="To be added"      <--------Please include a demo link here 
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={maze}
              isBlog={false}
              title="Goal-Based Maze Solving Agent"
              description="Built a pathfinding agent to solve mazes using search algorithms including Breadth-First Search (BFS), Depth-First Search (DFS), Greedy Best-First Search (GBFS), and A* (A-star). The solution includes performance metrics like nodes expanded, path cost, and runtime, and visualizes the optimal path. Applicable to robotics and navigation systems."
             // ghLink="link to be added"
              // demoLink="To be added"      <--------Please include a demo link here 
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={vacuum}
              isBlog={false}
              title="Reflex Agent for Smart Vacuum Cleaner Simulation"
              description="Simulated a vacuum cleaning robot using reflex-based agent architecture in a grid environment. Developed multiple agent strategies to compare cleaning efficiency. Evaluated performance based on energy consumption and environment coverage. Inspired by real-world robotic automation and smart home solutions."
             // ghLink="link to be added"
              // demoLink="To be added"      <--------Please include a demo link here 
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={nqueen}
              isBlog={false}
              title="Adaptive  N-Queens Problemn Solver"
              description="Engineered a solver for the N-Queens problem using both classical and heuristic approaches such as Backtracking, Simulated Annealing, and Genetic Algorithms. Compared performance based on solution accuracy and computational time, demonstrating algorithm trade-offs in constraint satisfaction problems."
             // ghLink="link to be added"
              // demoLink="To be added"      <--------Please include a demo link here 
            />
          </Col>

        </Row>
      </Container>
    </Container>
  );
}

export default Projects;
