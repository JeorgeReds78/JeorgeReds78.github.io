import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import ProjectCard from "./ProjectCards";
import Particle from "../Particle";

function Projects() {
  return (
    <Container fluid className="project-section">
      <Particle />
      <Container>
        <h1 className="project-heading">
          Mis <strong className="purple">Proyectos </strong>
        </h1>
        <p style={{ color: "white" }}>
          He trabajado con Modelos de Agentes, programado algunos videojuegos y ayudado en documentación.
        </p>
      </Container>
    </Container>
  );
}

export default Projects;
