// Card without border or background

import * as React from "react";
import Card from "react-bootstrap/Card";
import { Col, Row, Badge, Container } from "react-bootstrap";
import BaseCard from "./base-card";
import Image from "next/image";
import DisplayTags from "./display-tags";

const GhostCard = ({ title, image, alt, desc, header, tags, target, children }) => {
    // const { title, image, alt, desc, header, footer, target } = props;
    // const relImageLink = image && ("../images/" + image);
    const cardStyle = {
        // bg: "light",
        // text: "dark",
        className: "h-100 text-center border-0"
    };
    return (
        // <BaseCard {...{...props, cardCustomStyle=cardStyle}}/>
        <BaseCard
            cardCustomStyle={cardStyle}
            target={target}
            header={ header &&
                <Card.Header>{header}</Card.Header>
            }
            body={
                <Card.Body>
                    {image &&
                        <Image src={image} layout="intrinsic" width={300} height={300} alt={alt || "image"} className="my-4"/>
                    }
                    <Card.Title>{title}</Card.Title>

                    <Card.Text>{desc}</Card.Text>
                    {children}
                </Card.Body>
            }
            footer={tags &&
                <Card.Footer>
                    <DisplayTags tags={tags}/>
                </Card.Footer>
            }></BaseCard>
    );
}

export default GhostCard;