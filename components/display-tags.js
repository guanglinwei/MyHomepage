import * as React from "react";
import { Col, Row, Badge } from "react-bootstrap";

const DisplayTags = ({ tags }) => {
    return (
    <Row>
        {tags.map((tag, i) => {
            return (
            <Col key={i} xs={2}>
                <Badge pill variant="light">{tag}</Badge>
            </Col>
            );
        })}
    </Row>
    );
};

export default DisplayTags;