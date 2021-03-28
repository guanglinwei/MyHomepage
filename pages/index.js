import * as React from "react";
import { Col, Container, Row } from "react-bootstrap";
import StandardPage from "../components/standard-page";
import TopicCard from "../components/topic-card";

// markup
const IndexPage = () => {
  // Topics on cards. maybe move to container component?
  const topics = [
    {
      title: "Projects 👨‍🏫",
      desc: "Programming and robotics projects.",
      target: "/projects"
    },
    {
      title: "Games 🎮",
      desc: "Short video games of different genres.",
      target: "/games"
    },
    {
      title: "Service 🏢",
      desc: "Things I've done to serve my community.",
      target: "/service"
    }
  ];

  return (
    <StandardPage>
      <title>Home Page</title>
      <Container>
        <Row>
          {topics.map((topic, i) => {
            return (
              <Col key={i} xs={6} className="my-3 zoom align-items-stretch">
                {/* <TopicCard title={topic.title} image={topic.image} desc={topic.desc} target={topic.target}/> */}
                <TopicCard {...topic}/>
              </Col>
            );
          })}
        </Row>
      </Container>
    </StandardPage>  
  )
}

export default IndexPage;
