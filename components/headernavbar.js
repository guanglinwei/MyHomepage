import * as React from "react";
import { Navbar, Nav } from "react-bootstrap";
import { Github } from "@icons-pack/react-simple-icons";

const HeaderNavBar = () => {
    return (
        <Navbar bg="light" variant="light" expand="lg" sticky="top">
            <Navbar.Brand href="/">Guang-Lin Wei</Navbar.Brand>
            <Navbar.Toggle aria-controls="basic-navbar-nav"/>
            <Navbar.Collapse id="basic-navbar-nav">
                <Nav className="mr-auto">
                    <Nav.Link href="/projects">Projects</Nav.Link>
                    <Nav.Link href="/games">Games</Nav.Link>
                    <Nav.Link href="/service">Service</Nav.Link>
                </Nav>
                <Navbar.Text>
                    <a href="https://github.com/guanglinwei/MyHomepage" className="font-italic font-weight-light" style={{textDecoration: 'none'}}>
                        <Github size={24}/>
                        <span> Source code</span>
                    </a>
                </Navbar.Text>
            </Navbar.Collapse>
        </Navbar>
    );
};

export default HeaderNavBar;