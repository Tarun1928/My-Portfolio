import React from "react";
import { Col, Row } from "react-bootstrap";
import {
  SiPostman,
  SiMacos,
  SiGooglecolab
} from "react-icons/si";
import { VscVscode } from "react-icons/vsc";
import { FaSlack } from "react-icons/fa";

function Toolstack() {
  return (
    <Row style={{ justifyContent: "center", paddingBottom: "50px" }}>
      <Col xs={4} md={2} className="tech-icons">
        <SiMacos title="macOS" />
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <VscVscode title="Visual Studio Code" />
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <SiGooglecolab title="Google Colab" />
        </Col>
      <Col xs={4} md={2} className="tech-icons">
        <SiPostman title="Postman" />
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <FaSlack title="Slack" />
      </Col>
      
    </Row>
  );
}

export default Toolstack;
