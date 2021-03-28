import * as React from "react";
import StandardPage from "../../components/standard-page";
import ReactMarkdown from "react-markdown";
import GithubJumbotron from "../../components/github-jumbotron";
import MdRenderer from "../../components/standard-md-renderer";
import { Container } from "react-bootstrap";

import text from "../../public/projects/astar.md";

const TempMonitorProjectPage = () => {
    return (
        <StandardPage>
            <Container className="m-3">
                <h1>A* Pathfinding Python Demo</h1>
                <br/>
                <GithubJumbotron target="https://github.com/guanglinwei/PythonAstarDemo"/>
                <ReactMarkdown source={text} renderers={MdRenderer} linkTarget={"_blank"}/>
            </Container>
        </StandardPage>
    );
};

export default TempMonitorProjectPage;