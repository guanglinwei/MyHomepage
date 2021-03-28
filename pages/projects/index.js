import * as React from "react";
import { Col, Container, Row } from "react-bootstrap";
import StandardPage from "../../components/standard-page";
import TopicCard from "../../components/topic-card";

// each links to a page with more details 
// md file
const projects = [
    {
        name: "Temperature Monitor",
        desc: "A webpage that displays data from a temperature sensor.",
        image: undefined,
        relLink: "/projects/tempmonitor",
        tags: ["Python", "Flask", "Arduino", "Raspberry Pi"]
    },
    {
        name: "Python A* Demo",
        desc: "Demo of the Astar pathfinding algorithm.",
        image: undefined,
        relLink: "/projects/astar",
        tags: ["Python", "Algorithm"]
    },
    {
        name: "Artificial Intelligence Recycling",
        desc: "A robot that indentifies and sorts out recyclables.",
        image: undefined,
        relLink: "/projects/air",
        tags: ["Python", "Robotics"]
    },
    {
        name: "Robocup Junior Soccer",
        desc: "My team's robot for a soccer competition.",
        iamge: undefined,
        relLink: "/projects/rcj2021",
        tags: ["Arduino", "C++"]
    }
    //water thing
    // rcj
    // TODO: fix the sorting thing
    // school tools thing (maybe just don't have github for this one)
];

const ProjectsPage = () => {
    return (
        <StandardPage>
            <Container>
                <Row>
                    {projects.map((project, i) => {
                        return (
                        <Col key={i} xs={6} className="my-3 zoom">
                            <TopicCard
                                image={project.image}
                                alt={project.name}
                                title={project.name}
                                desc={project.desc}
                                tags={project.tags}
                                target={project.relLink}
                            />
                        </Col>
                        );
                    })}
                </Row>
            </Container>
        </StandardPage>
    );
};

export default ProjectsPage;