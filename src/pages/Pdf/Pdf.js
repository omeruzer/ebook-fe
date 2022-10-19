import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { Container, Row } from 'react-bootstrap'
import { Link, useParams } from 'react-router-dom'
import HTMLFlipBook from 'react-pageflip';

export default function Pdf() {
    const params = useParams()
    const [book, setbook] = useState([])
    const [load, setload] = useState(true)

    const getData = () => {
        axios.get(`http://localhost:8000/api/book/${params.id}`)
            .then((result) => {
                console.log(result.data.files);
                setload(false)
                setbook(result.data.files)
            }).catch((err) => {

            });
    }

    useEffect(() => {
        getData()
    }, []);
    return (
        <div style={{ backgroundColor: 'black', height: '100vh',overflow:'none' }}>
            <Container>
                <Row>
                    <Link to={`/detail/${params.id}`} style={{ color: 'white', textDecoration: 'none' }}>Go to Back</Link>
                </Row>
                <Row style={{ display: 'flex', justifyContent: 'center', alignItems: 'center',marginTop:'10px' }}>
                    {load ? <>Load</> : <>
                        <HTMLFlipBook width={480} height={660}>
                            {
                                book.map(e => (
                                    <div className="demoPage">
                                        <img style={{ width: '100%', height: '100%' }} src={`http://localhost:8000/assets/pdf/${e.file}`} alt="" />
                                    </div>
                                ))
                            }
                        </HTMLFlipBook>
                    </>}
                </Row>
            </Container>
        </div>
    )
}
