import React from 'react'
import Footer from '../components/shared/Footer'
import Header from '../components/shared/Header'
import { Container } from 'react-bootstrap';
export default function Layout({ children }) {
    return (
        <div>
            <Header />
            <Container>
                {children}
            </Container>
            <Footer />
        </div>
    )
}
