import React from "react";
import Card from "react-bootstrap/Card";
import { ImPointRight } from "react-icons/im";

function AboutCard() {
  return (
    <Card className="quote-card-view">
      <Card.Body>
        <blockquote className="blockquote mb-0">
          <p style={{ textAlign: "justify" }}>
            Hola a todos, mi nombre es <span className="purple">Jorge Rojas Rivas </span>
            de <span className="purple"> México.</span>
            <br />Soy un estudiante de la carrera de ITC que busca trabajar como desarrollador de videojuegos.
            <br />
            <br />
            Algunas de las actividades que me gusta realizar son:
          </p>
          <ul>
            <li className="about-activity">
              <ImPointRight /> Videojuegos
            </li>
            <li className="about-activity">
              <ImPointRight /> Arte
            </li>
            <li className="about-activity">
              <ImPointRight /> Cocinar
            </li>
          </ul>
        </blockquote>
      </Card.Body>
    </Card>
  );
}

export default AboutCard;
