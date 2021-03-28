import Link from "next/link";
import * as React from "react";
import { Container } from "react-bootstrap";
import StandardPage from "../components/standard-page";

export default function Custom404() {
    return (
        <StandardPage>
            <Container className="text-center">
                <h1>404 - Page Not Found</h1>
                <Link href="/">Back Home</Link>
            </Container>
        </StandardPage>
    );
}