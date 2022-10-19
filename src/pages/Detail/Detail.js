import axios from 'axios'
import { useState, useEffect } from 'react'
import { Button, Col, Image, Row } from 'react-bootstrap'
import { Link, useParams } from 'react-router-dom'
import Layout from '../../layout/Layout'

export default function Detail() {
    const params = useParams()
    const [book, setbook] = useState({})
    const [load, setload] = useState(true)

    const getData = () => {
        axios.get(`http://localhost:8000/api/book/${params.id}`)
            .then((result) => {
                console.log(result.data);
                setload(false)
                setbook(result.data)
            }).catch((err) => {

            });
    }

    useEffect(() => {
        getData()
    }, []);

    return (
        <Layout>
            {load ? <>Load</> : <>
                <Row style={{ marginTop: '50px' }}>
                    <Col md={6} style={{ display: 'flex', justifyContent: 'center' }}>
                        <div className="" style={{ width: '300px', height: '500px' }}>
                            <Image style={{ width: '100%', height: '100%' }} src={`http://localhost:8000/assets/images/books/${book.image}`} />
                        </div>
                    </Col>
                    <Col md={6}>
                        <Row>
                            <h3><b>{book.name}</b></h3>
                        </Row>
                        <Row>
                            <span>{book.author.name}</span>
                        </Row>
                        <Row>
                            <span>{book.publisher.name} - {book.year}</span>
                        </Row>
                        <Row style={{ marginTop: '50px', marginBottom: '50px' }}>
                            <Link to={`/pdf/${book.id}`}><Button>Go to Pdf</Button></Link>
                        </Row>
                        <Row>
                            <Col md={12}>
                                <h3>Book Description</h3>
                            </Col>
                        </Row>
                        <Row>
                            <Col md={12}>
                                {book.desc}
                            </Col>
                        </Row>
                    </Col>
                </Row>
            </>}
        </Layout>
    )
}
