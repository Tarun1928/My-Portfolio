import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import { Link } from "react-router-dom";
import { HiArrowRight } from "react-icons/hi";
import homeLogo from "../../Assets/home-main.svg";
import Particle from "../Particle";
import Home2 from "./Home2";
import Type from "./Type";

function Home() {
  return (
    <section>
      <Container fluid className="home-section" id="home">
        <Particle />
        <Container className="home-content">
          <Row>
            <Col md={7} className="home-header">
              <p className="eyebrow">Software engineer</p>
              <h1 className="heading">
                Hi There!{" "}
                <span className="wave" role="img" aria-label="Waving hand">
                  👋🏻
                </span>
              </h1>

              <h1 className="heading-name">
                I'M
                <strong className="main-name"> Tarun Konagalla</strong>
              </h1>

              <div className="hero-role">
                <Type />
              </div>
              <p className="hero-summary">
                Building dependable, cloud-native software and thoughtful digital experiences.
              </p>
              <div className="hero-actions">
                <Link to="/project" className="hero-button hero-button-primary">
                  Explore my work <HiArrowRight aria-hidden="true" />
                </Link>
                <Link to="/resume" className="hero-button hero-button-secondary">
                  View résumé
                </Link>
              </div>
            </Col>

            <Col md={5} className="hero-art">
              <img
                src={homeLogo}
                alt="home pic"
                className="img-fluid"
                style={{ maxHeight: "450px" }}
              />
            </Col>
          </Row>
        </Container>
      </Container>
      <Home2 />
    </section>
  );
}

export default Home;
