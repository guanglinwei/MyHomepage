import * as React from "react";
import { Github } from "@icons-pack/react-simple-icons";
import { Jumbotron, Row, Col } from "react-bootstrap";

const GithubJumbotron = ({ target, text }) => {
    return (
    <Jumbotron fluid>
        <Row className="text-center align-items-center">
            <Col xs={4}><Github size={80}/></Col>
            <Col xs={6}>
                <h5 className="font-italic font-weight-light">{text || (target ? "Click here to view the source code for this project." : "This project does not have its source code available.")}</h5>
            </Col>
            {/* TODO: fix this link being too big */}
            <a href={target} target="_blank" rel="noreferrer" className="stretched-link"></a>
        </Row>
    </Jumbotron>
    );
};

export default GithubJumbotron;