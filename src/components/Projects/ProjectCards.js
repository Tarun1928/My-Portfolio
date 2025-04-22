import React from "react";
import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";
import { CgWebsite } from "react-icons/cg";
import { BsGithub } from "react-icons/bs";

function ProjectCards(props) {
  return (
    <Card className="project-card-view">

<Card.Img
  variant="top"
  src={props.imgPath}
  alt="card-img"
  style={{
    width: "100%",
    maxWidth: "250px",
    height: "auto",
    aspectRatio: "1/1", // keeps it square while responsive
    objectFit: "contain", // shows full image without cropping
    borderRadius: "10px",
    margin: "0 auto",
    display: "block",
    backgroundColor: "#fff" // optional: for transparency clarity
  }}
/>

      <Card.Body>
      <Card.Title
      style={{
        fontWeight: "700",
        fontSize: "1.3rem",
        marginBottom: "0.75rem",
        textAlign: "center",
        color: "#bb86fc", // or another vibrant color
        letterSpacing: "0.5px",
        textTransform: "uppercase"
        }}
        >
  {props.title}
</Card.Title>

        <Card.Text style={{ textAlign: "justify" }}>
          {props.description}
        </Card.Text>
        <Button variant="primary" href={props.ghLink} target="_blank">
          <BsGithub /> &nbsp;
          {props.isBlog ? "Blog" : "GitHub"}
        </Button>
        {"\n"}
        {"\n"}

        {/* If the component contains Demo link and if it's not a Blog then, it will render the below component  */}

        {!props.isBlog && props.demoLink && (
          <Button
            variant="primary"
            href={props.demoLink}
            target="_blank"
            style={{ marginLeft: "10px" }}
          >
            <CgWebsite /> &nbsp;
            {"Demo"}
          </Button>
        )}
      </Card.Body>
    </Card>
  );
}
export default ProjectCards;
