import * as React from "react";
import StandardPage from "../../components/standard-page";
import ReactMarkdown from "react-markdown";
import MdRenderer from "../../components/standard-md-renderer";
import { Carousel, Container, Jumbotron } from "react-bootstrap";
import Image from "next/image";

import text from "../../public/projects/rcj2021.md";

const rcjRenderer = {...MdRenderer, ...{
    strong: ({ node }) => {
        const value = node.children[0].value;
        if(value.includes("RCJOLDGALLERY")) {
            return (
                <Container fluid className="text-center">
                    <Jumbotron fluid>
                        <Carousel>
                            <Carousel.Item>
                                <Image width={864} height={480} layout="intrinsic" src="/rcjold1.jpg" alt="Our 2019 robots"/>
                                <Carousel.Caption>
                                    <p>Our old 2019 robots (right) in a competition</p>
                                    <p>Controlled by Arduino</p>
                                </Carousel.Caption>
                            </Carousel.Item>
                            <Carousel.Item>
                                <Image width={824} height={480} layout="intrinsic" src="/rcjold2.jpg" alt="Our 2019 robots"/>
                                <Carousel.Caption>
                                    <p>A close-up of our robots for 2019</p>
                                </Carousel.Caption>
                            </Carousel.Item>
                            <Carousel.Item>
                                <Image width={601} height={480} layout="intrinsic" src="/rcjold3.jpg" alt="Our 2018 robots"/>
                                <Carousel.Caption>
                                    <p>Even older 2018 robots</p>
                                    <p>Controlled by Android phones and Arduino</p>
                                </Carousel.Caption>
                            </Carousel.Item>
                        </Carousel>
                    </Jumbotron>
                </Container>
            );
        }

        if(value.includes("RCJ2021GALLERY")) {
            return (
                <Container fluid className="text-center">
                    <Jumbotron>
                        <Carousel>
                            <Carousel.Item>
                                <Image width={360} height={480} layout="intrinsic" src="/rcjnew1.jpg" alt="Our new soccer robot"/>
                                <Carousel.Caption>
                                    <p>Our robot for 2021</p>
                                    <p>Controlled by Arduino and fancy PCB boards</p>
                                </Carousel.Caption>
                            </Carousel.Item>
                            <Carousel.Item>
                                <Image width={360} height={480} layout="intrinsic" src="/rcjnew2.jpg" alt="Our new soccer robot"/>
                                <Carousel.Caption>
                                    <p>Our robot for 2021</p>
                                </Carousel.Caption>
                            </Carousel.Item>
                            <Carousel.Item>
                                <Image width={728} height={480} layout="intrinsic" src="/rcjnew3.png" alt="Design for base layer of robot"/>
                                <Carousel.Caption>
                                    <p>Design for the base layer</p>
                                </Carousel.Caption>
                            </Carousel.Item>
                        </Carousel>
                    </Jumbotron>
                </Container>
            );
        }
        return <strong>{value}</strong>;
    }
}};

const RCJ2021ProjectPage = () => {
    return (
        <StandardPage>
            <Container className="m-3">
                <h1>Robocup Junior Soccer 2020-21</h1>
                <ReactMarkdown source={text} renderers={rcjRenderer} linkTarget={"_blank"}/>
            </Container>
        </StandardPage>
    );
};

export default RCJ2021ProjectPage;