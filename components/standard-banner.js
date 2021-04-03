import * as React from "react";
import { Row, Col, Container } from "react-bootstrap";
import Image from "next/image";

const StandardBanner = ({ image, title, imageSvgColorFilter }) => {
    return (
        <Container fluid className="index-banner my-2 d-flex justify-content-center align-items-center">
            <Row className="banner-text w-100 text-center" xs={2}>
                {image ? 
                <React.Fragment>
                    <Col xs={3}>
                        <Image src={image} alt={title} width={80} height={80} layout="intrinsic" className={imageSvgColorFilter}/>
                    </Col>
                    <Col xs={9} className="align-items-center d-flex">
                        <h1 className="mx-auto justify-content-center">{title}</h1>
                    </Col>
                </React.Fragment>
                :
                <Col xs={12}>
                    <h1 className="mx-auto text-center">{title}</h1>
                </Col>
                }
            </Row>
      </Container>
    );
}

export default StandardBanner;