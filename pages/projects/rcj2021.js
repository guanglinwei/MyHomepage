import * as React from "react";
import StandardPage from "../../components/standard-page";
import ReactMarkdown from "react-markdown";
import MdRenderer from "../../components/standard-md-renderer";
import { Container } from "react-bootstrap";
import Image from "next/image";

import text from "../../public/projects/rcj2021.md";

const RCJ2021ProjectPage = () => {
    return (
        <StandardPage>
            <Container className="m-3">
                <h1>Robocup Junior Soccer 2020-21</h1>
                <ReactMarkdown source={text} renderers={MdRenderer} linkTarget={"_blank"}/>
            </Container>
        </StandardPage>
    );
};

export default RCJ2021ProjectPage;