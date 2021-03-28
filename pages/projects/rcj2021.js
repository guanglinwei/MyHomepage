import * as React from "react";
import StandardPage from "../../components/standard-page";
import ReactMarkdown from "react-markdown";
import { Container } from "react-bootstrap";
import Image from "next/image";

import text from "../../public/projects/rcj2021.md";

const renderers = {
    image: ({ src, alt }) => {
        // use alt for width and height
        // alt, width, height
        const [a, w, h] = alt.split(/\,\s?/);
        return <Image src={src} alt={a} width={w || 300} height={h || 300}/>
    }
};

const RCJ2021ProjectPage = () => {
    return (
        <StandardPage>
            <Container className="m-3">
                <h1>Robocup Junior Soccer 2020-21</h1>
                <ReactMarkdown source={text} renderers={renderers} linkTarget={"_blank"}/>
            </Container>
        </StandardPage>
    );
};

export default RCJ2021ProjectPage;