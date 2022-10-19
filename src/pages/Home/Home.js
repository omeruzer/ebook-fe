import React, { useEffect, useState } from 'react'
import BookCard from '../../components/BookCard'
import Layout from '../../layout/Layout'
import axios from 'axios';
import { Row, Col, Form } from 'react-bootstrap';
export default function Home() {
  const [books, setbooks] = useState([]);
  const [mainBooks, setMainBooks] = useState([]);

  const getData = () => {
    axios.get('http://localhost:8000/api/book')
      .then((result) => {
        setbooks(result.data.data)
        setMainBooks(result.data.data)
      }).catch((err) => {

      });
  }

  useEffect(() => {
    getData()
  }, []);

  const searchData = (data) => {
    if (data.length > 0) {
      setbooks(mainBooks.filter(item => item.name.toLowerCase().includes(data)));
    } else {
      getData()
    }
  }
  return (
    <Layout>
      <Row>
        <Form>
          <Form.Group className="mb-3" controlId="formBasicEmail">
            <Form.Control onChange={e => searchData(e.target.value)} placeholder="Enter your book" />
          </Form.Group>
        </Form>
      </Row>
      <Row>
        {
          books.map(e => (
            <Col md={3}>
              <BookCard key={e.id} data={e} />
            </Col>
          ))
        }
      </Row>
    </Layout>
  )
}
