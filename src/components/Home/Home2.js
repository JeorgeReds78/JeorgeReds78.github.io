import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import myImg from "../../Assets/avatar.svg";
import Tilt from "react-parallax-tilt";
import {
  AiFillGithub,
  AiOutlineTwitter,
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
              PERMITANME <span className="purple"> INTRODUCIRME </span>
            </h1>
            <p className="home-about-body">
              I fell in love with programming and I have at least learnt
              something, I think…
              Siempre me ha gustado 
              <br />
              <br />He trabajado con los lenguajes de
              <i>
                <b className="purple"> C++, Javascript y Python. </b>
              </i>
              <br />
              <br />
              Estoy interesado en procesos creativos y de apoyo como &nbsp;
              <i>
                <b className="purple">videojuegos y aplicaciones. </b>
              </i>
              <br />
              <br />
              Siempre estoy dispuesto a aprender más acerca de varios temas.
            </p>
          </Col>
          <Col md={4} className="myAvtar">
            <Tilt>
              <img src={myImg} className="img-fluid" alt="avatar" />
            </Tilt>
          </Col>
        </Row>
      </Container>
    </Container>
  );
}
export default Home2;
