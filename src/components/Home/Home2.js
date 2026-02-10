import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import myImg from "../../Assets/avatar.svg";
import Tilt from "react-parallax-tilt";
import {
  AiFillGithub,
  AiFillInstagram,
} from "react-icons/ai";
import { FaLinkedinIn } from "react-icons/fa";

function Home2() {
  return (
    <Container fluid className="home-about-section" id="about">
      <Container>
        <Row>
          <Col md={8} className="home-about-description">
            <h1 style={{ fontSize: "2.6em" }}>
              LET ME <span className="purple"> INTRODUCE </span> MYSELF
            </h1>
            <p className="home-about-body">
            I’m a passionate developer with experience across full-stack development, cloud technologies, and modern software practices. I enjoy learning and building scalable solutions that solve real-world problems
              <br />
              <br />I’m proficient in languages like <i><b className="purple">Java, JavaScript, Python, and C++</b></i>  &nbsp; and I'm always exploring new tools and technologies.
              <br />
              <br />
              My field of interest includes&nbsp;
            
                <b className="purple"><i>building end-to-end web applications</i></b>, working with&nbsp;
                <b className="purple"><i>cloud-native platforms</i></b>, and applying&nbsp;
                <b className="purple"><i>software engineering best practices</i></b> across different tech stacks.
             

              <br />
              <br />
              Whenever possible, I enjoy working on projects using <b className="purple"><i>Node.js, Express, React.js</i></b>, and exploring frameworks like <b className="purple"><i>Next.js</i></b>. I’m also hands-on with tools like <b className="purple"><i>AWS, Docker, and Postman</i></b>.

            </p>
          </Col>
          <Col md={4} className="myAvtar">
            <Tilt>
              <img src={myImg} className="img-fluid" alt="avatar" />
            </Tilt>
          </Col>
        </Row>
        <Row>
          <Col md={12} className="home-about-social">
            <h1>FIND ME ON</h1>
            <p>
              Feel free to <span className="purple">connect </span>with me
            </p>
            <ul className="home-about-social-links">
              <li className="social-icons">
                <a
                  href="https://github.com/Tarun1928"
                  target="_blank"
                  rel="noreferrer"
                  className="icon-colour  home-social-icons"
                >
                  <AiFillGithub />
                </a>
              </li>
              
              <li className="social-icons">
                <a
                  href="https://www.linkedin.com/in/tarunkonagalla/"
                  target="_blank"
                  rel="noreferrer"
                  className="icon-colour  home-social-icons"
                >
                  <FaLinkedinIn />
                </a>
              </li>
              <li className="social-icons">
                <a
                  href="https://www.instagram.com/tarunkonagalla"
                  target="_blank"
                  rel="noreferrer"
                  className="icon-colour home-social-icons"
                >
                  <AiFillInstagram />
                </a>
              </li>
            </ul>
          </Col>
        </Row>
      </Container>
    </Container>
  );
}
export default Home2;
