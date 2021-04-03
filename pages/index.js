import * as React from "react";
import { Col, Container, Row } from "react-bootstrap";
import StandardPage from "../components/standard-page";
import TopicCard from "../components/topic-card";
import StandardBanner from "../components/standard-banner";

// markup
const IndexPage = () => {
  const topics = [
    {
      title: "Projects 👨‍🏫",
      desc: "Programming and robotics projects.",
      target: "/projects",
      image: "/clipboard-data.svg"
    },
    {
      title: "Games 🎮",
      desc: "Short video games of different genres.",
      target: "/games",
      image: "/controller.svg"
    },
    {
      title: "Service 🏢",
      desc: "Things I've done to serve my community.",
      target: "/service",
      image: "/globe2.svg"
    }
  ];

  return (
    <StandardPage>
      <title>Home Page</title>
      <StandardBanner title={"Homepage"} image={undefined}/>
      <Container>
        <Row>
          {topics.map((topic, i) => {
            return (
              <Col key={i} xs={6} className="my-3 zoom align-items-stretch">
                <TopicCard {...topic}><br/></TopicCard>
              </Col>
            );
          })}
        </Row>
      </Container>
    </StandardPage>  
  )
}

export default IndexPage;
