import * as React from "react";
import StandardPage from "../components/standard-page";
import { Container, Carousel, Jumbotron } from "react-bootstrap";
import Image from "next/image";
import ReactMarkdown from "react-markdown";
import MdRenderer from "../components/standard-md-renderer";

import text from "../public/service.md";
import StandardBanner from "../components/standard-banner";

const serviceRenderer = Object.assign(MdRenderer, {
    emphasis: ({ node }) => {
        const value = node.children[0].value;
        // console.log(value);
        if(value.includes("LINEBREAK")) return <br/>

        return (
        <div>
            <Container className="border-bottom border-secondary">
                <Jumbotron><h2>{value}</h2></Jumbotron>
            </Container>
            <br/>
        </div>
        );
    },
    strong: ({ node }) => {
        const value = node.children[0].value;
        if(value.includes("2016EXPOGALLERY")) {
            return (
                <Container fluid className="text-center">
                    <Jumbotron>
                        <Carousel>
                            <Carousel.Item>
                                <Image width={640} height={480} layout="intrinsic" src="/2016expo1.jpg" alt="The team in front of the AIR"/>
                                <Carousel.Caption>
                                    <p>The team in front of the AIR</p>
                                </Carousel.Caption>
                            </Carousel.Item>
                            <Carousel.Item>
                                <Image width={720} height={480} layout="intrinsic" src="/2016expo2.jpg" alt="Event-goers trying to operate a garbage truck"/>
                                <Carousel.Caption>
                                    <p>Event-goers trying to operate a garbage truck</p>
                                </Carousel.Caption>
                            </Carousel.Item>
                            <Carousel.Item>
                                <Image width={720} height={480} layout="intrinsic" src="/2016expo3.jpg" alt="Team members high-fiving our team"/>
                                <Carousel.Caption>
                                    <p>Team members high-fiving our team</p>
                                </Carousel.Caption>
                            </Carousel.Item>
                        </Carousel>
                    </Jumbotron>
                    <br/>
                </Container>
            );
        }

        if(value.includes("2017EXPOGALLERY")) {
            return (
                <Container fluid className="text-center">
                    <Jumbotron>
                        <Carousel>
                            <Carousel.Item>
                                <Image width={640} height={480} layout="intrinsic" src="/2017expo1.jpg" alt="Event-goers listening to a speech"/>
                                <Carousel.Caption>
                                    <p>Event-goers listening to a speech</p>
                                </Carousel.Caption>
                            </Carousel.Item>
                            {/* <Carousel.Item>
                                <Image width={853} height={480} layout="intrinsic" src="/airgia2.jpg" alt="Maker Faire award"/>
                            </Carousel.Item>
                            <Carousel.Item>
                                <Image width={640} height={480} layout="intrinsic" src="/airgia3.jpg" alt="A.I.R team on a panel"/>
                            </Carousel.Item> */}
                        </Carousel>
                    </Jumbotron>
                    <br/>
                </Container>
            );
        }

        if(value.includes("SCICENTERGALLERY")) {
            return (
                <Container fluid className="text-center">
                    <Jumbotron>
                        <Carousel>
                            <Carousel.Item>
                                <Image width={717} height={480} layout="intrinsic" src="/scicenter1.jpg" alt="Spongebots demonstrating soccer robots"/>
                                <Carousel.Caption>
                                    <p>Spongebots demonstrating soccer robots</p>
                                </Carousel.Caption>
                            </Carousel.Item>
                            <Carousel.Item>
                                <Image width={672} height={480} layout="intrinsic" src="/scicenter2.jpg" alt="Spongebots explaning their robots"/>
                                <Carousel.Caption>
                                    <p>Spongebots explaining their robots</p>
                                </Carousel.Caption>
                            </Carousel.Item>
                            <Carousel.Item>
                                <Image width={920} height={480} layout="intrinsic" src="/scicenter3.jpg" alt="Spongebots and an interested visitor"/>
                                <Carousel.Caption>
                                    <p>Spongebots and an interested visitor</p>
                                </Carousel.Caption>
                            </Carousel.Item>
                        </Carousel>
                    </Jumbotron>
                </Container>
            );
        }

        if(value.includes("MASKGALLERY")) {
            return (
                <Container fluid className="text-center">
                    <Jumbotron>
                        <Carousel>
                            <Carousel.Item>
                                <Image width={669} height={480} layout="intrinsic" src="/mask1.PNG" alt="Me and my sisters making face shields"/>
                                <Carousel.Caption>
                                    <p>My and my sisters making face shields</p>
                                </Carousel.Caption>
                            </Carousel.Item>
                            <Carousel.Item>
                                <Image width={270} height={480} layout="intrinsic" src="/mask2.jpg" alt="3d printed face shields"/>
                                <Carousel.Caption>
                                    <p>3d printed face shields</p>
                                </Carousel.Caption>
                            </Carousel.Item>
                        </Carousel>
                    </Jumbotron>
                </Container>
            );
        }
        return <strong>{value}</strong>;
    }
});

// just put this in md pls
const ServicePage = () => {
    return (
        <StandardPage>
            <StandardBanner title={"Service"} image={"/globe2.svg"} imageSvgColorFilter={"filter-white"}/>
            <Container className="text-center">
                {/* <h1>Community Service</h1> */}
                <br/>
                <ReactMarkdown source={text} renderers={serviceRenderer} linkTarget={"_blank"}/>       
            </Container>
        </StandardPage>
    );
}

export default ServicePage;