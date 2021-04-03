import * as React from "react";
import Card from "react-bootstrap/Card";
import BaseCard from "../components/base-card";
import Image from "next/image";
import DisplayTags from "./display-tags";

const TopicCard = ({ title, image, alt, desc, header, footer, target, tags, cardCustomStyle, children }) => {
    // const relImageLink = image && ("../images/" + image);
    return (
        <BaseCard
            cardCustomStyle={cardCustomStyle}
            target={target}
            header={ header &&
                <Card.Header>{header}</Card.Header>
            }
            body={
                <Card.Body>
                    <Card.Title>{title}</Card.Title>
                    {/* <Card.Img src={image} alt={alt || "image"} className="my-4"/> */}
                    
                    {image && 
                        <div className="text-center" >
                            <Image src={image} layout="intrinsic" width={200} height={200} alt={alt || "image"}/>
                        </div>
                    }
                    {children}
                    <Card.Text>{desc}</Card.Text>
                </Card.Body>
            }
            footer={footer ?
                <Card.Footer>
                    <small className="text-muted">{footer}</small>
                </Card.Footer>
                :
                tags &&
                <Card.Footer>
                    <DisplayTags tags={tags}/>
                </Card.Footer>
            }
            >

        </BaseCard>
    );
}

export default TopicCard;