import * as React from "react";
import StandardPage from "../../components/standard-page";
import ReactMarkdown from "react-markdown";
import MdRenderer from "../../components/standard-md-renderer";
import { Container, Carousel, Jumbotron } from "react-bootstrap";
import Image from "next/image";

import text from "../../public/projects/air.md";

const airRenderer = Object.assign(MdRenderer, {
    // FIX LINKS NOT RENDER
    strong: ({ value }) => {
        if(value.includes("AIRMAKERFAIREGALLERY")) {
            return (
                <Container fluid className="text-center">
                    <Jumbotron>
                        <Carousel>
                            <Carousel.Item>
                                <Image width={640} height={480} layout="intrinsic" src="/airmakerfaire1.jpg" alt="A.I.R side view"/>
                            </Carousel.Item>
                            <Carousel.Item>
                                <Image width={360} height={480} layout="intrinsic" src="/airmakerfaire2.jpg" alt="Maker Faire award"/>
                            </Carousel.Item>
                            <Carousel.Item>
                                <Image width={640} height={480} layout="intrinsic" src="/airmakerfaire3.jpg" alt="A.I.R team on a panel"/>
                            </Carousel.Item>
                        </Carousel>
                    </Jumbotron>
                </Container>
            );
        }

        if(value.includes("AIRGIAGALLERY")) {
            return (
                <Container fluid className="text-center">
                    <Jumbotron>
                        <Carousel>
                            <Carousel.Item>
                                <Image width={853} height={480} layout="intrinsic" src="/airgia1.jpg" alt="A.I.R side view"/>
                            </Carousel.Item>
                            <Carousel.Item>
                                <Image width={853} height={480} layout="intrinsic" src="/airgia2.jpg" alt="Maker Faire award"/>
                            </Carousel.Item>
                            <Carousel.Item>
                                <Image width={640} height={480} layout="intrinsic" src="/airgia3.jpg" alt="A.I.R team on a panel"/>
                            </Carousel.Item>
                        </Carousel>
                    </Jumbotron>
                </Container>
            );
        }
        return <strong>{value}</strong>;
    }
});

const AirProjectPage = () => {
    return (
        <StandardPage>
            <Container fluid className="p-4">
                <h1>Artificial Intelligence Recycling</h1>
                <br/>
                <ReactMarkdown source={text} renderers={airRenderer} linkTarget={"_blank"}/>
            </Container>
        </StandardPage>
    );
};

export default AirProjectPage;