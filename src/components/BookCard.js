import React from 'react'
import { Card } from 'react-bootstrap';
import { Link } from 'react-router-dom';

export default function BookCard({ data }) {
    return (
        <div style={{ width: '14rem', marginBottom: '30px' ,border:'1px solid #969696',padding:'10px',borderRadius:'10px'}}>
            <Card.Img variant="top" src={`http://localhost:8000/assets/images/books/${data.image}`} />
            <Card.Body>
                <Card.Title style={{marginTop:'20px'}}>{data.name.length > 20 ? data.name.substr(0, 20) + '...' : data.name}</Card.Title>
                <Card.Text style={{marginTop:'20px'}}>
                    {data.desc.substr(0, 60) + '...'}
                </Card.Text>
                <Link to={`/detail/${data.id}`} variant="primary">Go somewhere</Link>
            </Card.Body>
        </div>
    )
}
