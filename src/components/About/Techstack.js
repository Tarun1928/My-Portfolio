import React from "react";
import { Col, Row } from "react-bootstrap";
import { FaAws } from "react-icons/fa";
import {
  DiJavascript1,
  DiReact,
  DiNodejs,
  DiMongodb,
  DiPython,
  DiGit,
  DiJava,
  DiCss3,
} from "react-icons/di";
import {
  SiNextdotjs,
  SiPostgresql,
  SiC,
  SiHtml5,
  SiSpring,
} from "react-icons/si";

function Techstack() {
  return (
    <Row style={{ justifyContent: "center", paddingBottom: "50px" }}>
      <Col xs={4} md={2} className="tech-icons">
        <SiC title="C" />
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <DiJava title="Java" />
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <DiPython title="Python" />
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <SiHtml5 title="HTML5" />
      </Col>
       <Col xs={4} md={2} className="tech-icons">
        <DiCss3 title="CSS" />
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <SiSpring title="Spring" />
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <DiJavascript1 title="JavaScript" />
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <DiNodejs title="Node.js" />
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <DiReact title="React" />
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <DiMongodb title="MongoDB" />
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <SiNextdotjs title="Next.js" />
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <DiGit title="Git" />
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <FaAws title="Amazon Web Services" />
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <SiPostgresql title="PostgreSQL" />
      </Col>
      
      
    </Row>
  );
}

export default Techstack;
