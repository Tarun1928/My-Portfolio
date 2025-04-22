import React from "react";
import Card from "react-bootstrap/Card";
import { ImPointRight } from "react-icons/im";

function AboutCard() {
  return (
    <Card className="quote-card-view">
      <Card.Body>
        <blockquote className="blockquote mb-0">
          <p style={{ textAlign: "justify" }}>
            Hi everyone! I'm <span className="purple">Tarun Konagalla</span> from 
            <span className="purple"> Dallas, Texas</span>.
            <br />
            I'm currently pursuing my Master's in Computer Science at Southern Methodist University.
            <br />
            <br />
            Beyond coding, here are a few things I genuinely enjoy:
          </p>
          <ul>
            <li className="about-activity">
              <ImPointRight /> 🎮 Playing Games
            </li>
            <li className="about-activity">
              <ImPointRight /> 🌍 Travelling
            </li>
          </ul>

          <p style={{ color: "rgb(155 126 172)", fontStyle: "italic" }}>
            "Time is Money"
          </p>
          <footer className="blockquote-footer">Tarun</footer>
        </blockquote>
      </Card.Body>
    </Card>
  );
}

export default AboutCard;
