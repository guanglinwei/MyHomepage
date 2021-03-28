import * as React from "react";
import StandardPage from "../../components/standard-page";
import GithubJumbotron from "../../components/github-jumbotron";
import ReactMarkdown from "react-markdown";
import MdRenderer from "../../components/standard-md-renderer";
import { Container } from "react-bootstrap";

import text from "../../public/projects/tempmonitor.md";

const TempMonitorProjectPage = () => {
    return (
        <StandardPage>
            <Container className="m-3">
                <h1>Temperature Monitor</h1>
                <br/>
                <GithubJumbotron target="https://github.com/guanglinwei/TempMonitor"/>
                <ReactMarkdown source={text} renderers={MdRenderer} linkTarget={"_blank"}/>
            </Container>
        </StandardPage>
    );
};

export default TempMonitorProjectPage;

// export default class extends React.Component {
//     static async getInitialProps({ req }) {
//         const content = await require("../../public/projects/tempmonitor.md");
//         return { content };
//     }

//     render() {
//         return (
//             <StandardPage>
//                 <ReactMarkdown source={content} renderers={renderers}/>
//             </StandardPage>
//         );
//     }
// }