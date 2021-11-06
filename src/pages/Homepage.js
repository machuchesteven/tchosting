import React from 'react'
import { Navbar, Container, Nav } from 'react-bootstrap'
import 'bootstrap/dist/css/bootstrap.min.css'
// importing the bootstrap library and using its components



// defining the main homepage

const Homepage = () => {
    return (<div>
        <div className="main-navigation">
            <Navbar bg="dark" variant="dark" expand="lg" className="ml-sm-2 ml-5" collapseOnSelect>
                <Container>
                    <Navbar.Brand href="">Navbar</Navbar.Brand>
                    <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                    <Navbar.Collapse id="responsive-navbar-nav">
                        <Nav variant="pills" className="me-auto float-right" activeKey="/home">
                            <Nav.Link href="/home">Home</Nav.Link>
                            <Nav.Link href="/dashboard">Features</Nav.Link>
                            <Nav.Link href="/about">Pricing</Nav.Link>
                        </Nav>
                    </Navbar.Collapse>
                </Container>
            </Navbar>
        </div>
    </div>
    )
}
export default Homepage;