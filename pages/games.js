import * as React from "react";
import { Col, Container, Row } from "react-bootstrap";
import GhostCard from "../components/ghost-card";
import StandardBanner from "../components/standard-banner";
import StandardPage from "../components/standard-page";
// import Image from "next/image";

/*
...
game 1 icon + name
game 2 icon + name

click game: expand + itch widget
*/

const GamesPage = () => {
    const games = [
        {
            name: "CheeseBot6000",
            desc: "Open doors, break walls and slay enemies to accomplish your life goal of eating cheese.",
            tags: ["Puzzle", "Pixel Art"],
            image: "/cheesebot.png" ,
            link: "https://mustbeatomic.itch.io/cheesebot-6000"
        },
        {
            name: "Choco-Let Me Speak!",
            desc: "Debate and argue with candy people.",
            tags: ["Visual Novel", "Pixel Art"],
            image: "/chocolet.png",
            link: "https://mustbeatomic.itch.io/choco-let-me-speak"
        }
    ];
    return (
        <StandardPage>
            <StandardBanner title={"Games"} image={"/controller.svg"} imageSvgColorFilter={"filter-white"}/>
            <Container fluid>
                <Row>
                    {games.map((game, i) => {
                        return (
                        <Col key={i} xs={6} className="my-3 align-items-stretch">
                            <GhostCard
                                image={game.image}
                                alt={game.name}
                                title={game.name}
                                desc={game.desc}
                                tags={game.tags}
                                target={game.link}
                            />
                        </Col>
                        );
                    })}
                </Row>
            </Container>
        </StandardPage>
    );
};

export default GamesPage;