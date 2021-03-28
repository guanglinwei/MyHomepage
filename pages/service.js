import * as React from "react";
import StandardPage from "../components/standard-page";
import { Col, Container, Row, Jumbotron } from "react-bootstrap";
import Image from "next/image";

// just put this in md pls
const ServicePage = () => {
    return (
        <StandardPage>
            <Container className="text-center">
                <h1>Community Service</h1>
                <Row>
                    <p>3d print mask, expo events (sci center, town center)</p>
                </Row>
                <Jumbotron fluid>
                    <Container>
                        <h2>Robotics Expo Events</h2>
                    </Container>
                </Jumbotron>
                <h2>2016 Waste Wise</h2>
                <p>The Spongebots, my robotics team, co-hosted a First Lego League expo for 30 teams of kids. We demonstrated our invention (link to air)</p>
                <Row><h3>Local Town Expo</h3></Row>

                <Row><h3>Liberty Science Center</h3></Row>
                
            </Container>
        </StandardPage>
    );
}

export default ServicePage;