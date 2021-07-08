import React, { Component } from "react";

// npm install --save-dev @iconify/react @iconify-icons/codicon
import { InlineIcon } from '@iconify/react';
import gitIcon from '@iconify-icons/codicon/github-inverted';
import logo from '../assets/VF_W.png';
import { Navbar, NavDropdown, Nav, Image } from "react-bootstrap";
import '../css/navbar.css'

class StickyNavbar extends Component {
    render() {
        return (
            <React.Fragment>
                <Navbar fixed="top" className="la-navbar">
                    <Navbar.Brand href="#home"><Image src={logo} height="40" className="d-inline-block align-top"/></Navbar.Brand>

                    <Navbar.Collapse id="basic-navbar-nav" className="justify-content-center">
                            <Nav.Link href="#home">Home</Nav.Link>
                            <NavDropdown title="Projects" id="basic-nav-dropdown" className="dropdown-toggle">
                                <NavDropdown.Item href="#action/3.1" className="dropdown-item">Search But Better</NavDropdown.Item>
                                <NavDropdown.Item href="#action/3.2" className="dropdown-item">Vulkan Base Project</NavDropdown.Item>
                                <NavDropdown.Item href="#action/3.3" className="dropdown-item">Marching Cubes Algorithm</NavDropdown.Item>
                            </NavDropdown>

                            <NavDropdown title="About Us" id="basic-nav-dropdown" className="dropdown-toggle">
                                <NavDropdown.Item href="#action/3.1" className="dropdown-item">Adem</NavDropdown.Item>
                                <NavDropdown.Item href="#action/3.2" className="dropdown-item">Rose</NavDropdown.Item>
                            </NavDropdown>
                    </Navbar.Collapse>

                    <Nav.Link href="https://github.com/CursedApps" className="justify-content-end"><InlineIcon icon={gitIcon}/></Nav.Link>
                </Navbar>
            </React.Fragment>
        );
    }
}

export default StickyNavbar;
