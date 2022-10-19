import React from 'react'
import { Link } from 'react-router-dom'
import { Container, Navbar } from 'react-bootstrap';
export default function Header() {
    return (
        <Navbar bg="light" expand="lg">
            <Container>
                <Link to={'/'}><Navbar.Brand >E-book</Navbar.Brand></Link>
            </Container>
        </Navbar>
    )
}
