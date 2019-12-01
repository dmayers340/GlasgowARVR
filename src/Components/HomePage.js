import React from 'react';
import { Card, Col, ListGroup, ListGroupItem, Row } from 'react-bootstrap';
import { events } from '../config/eventlist.json';
import Knot from './knot';

const currEvent = events[0];
const urlDescription = currEvent.urlTitle ? currEvent.urlTitle : 'Sign up on Eventbrite!';

export const HomePage = () => {
    return (
        <div className='page-container'>
            <h1>Glasgow ARVR</h1>
            <Knot />
            <Row>
                <Col id='main'>
                    <Card className="card" style={{ width: '20rem' }}>
                        <Card.Body>
                            <Card.Img variant="top" src={process.env.PUBLIC_URL + '/img/ARVRGlasgow_Collider.jpg'} />
                            <Card.Img src={process.env.PUBLIC_URL + '/img/IMG-6228.JPG'} />
                            <Card.Img variant="bottom" src={process.env.PUBLIC_URL + '/img/IMG-6234.JPG'} />
                            <Card.Img src={process.env.PUBLIC_URL + '/img/IMG-6232.JPG'} />

                        </Card.Body>
                    </Card>
                </Col>
                <Col>
                    <Card className="card" style={{ width: '20rem' }}>
                        <Card.Body>
                            <Card.Title>{currEvent.eventName}</Card.Title>
                            <Card.Img src={currEvent.imageUrl} />
                            <ListGroup className="list-group-flush">
                                <ListGroupItem>{currEvent.description}</ListGroupItem>
                                <ListGroupItem>{currEvent.date}</ListGroupItem>
                                <ListGroupItem>{currEvent.time}</ListGroupItem>
                                <ListGroupItem>{currEvent.location}</ListGroupItem>
                                {currEvent.url ? (<a href={currEvent.url}>{urlDescription}</a>) : null}
                            </ListGroup>
                        </Card.Body>
                    </Card>
                </Col>
                <Col>
                    <Card className="card" style={{ width: '20rem' }}>
                        <Card.Body>
                            <Card.Title>Credits for 3D models on the <a href="https://glasgowarvr.co.uk/aframe">A-Frame page</a></Card.Title>
                            <ListGroup className="list-group-flush">
                                    <ListGroupItem>Headset made by the <a href="https://poly.google.com/view/bvd33G7Q66m">Google Poly team</a></ListGroupItem>
                                    <ListGroupItem>Cone made by <a href="https://poly.google.com/view/eFQ60hneKwL">Adam Marc Williams </a></ListGroupItem>
                                    <ListGroupItem>Snowflakes made by <a href="https://poly.google.com/view/3MxTcGjaCfD">Kamylle B. Grenier</a></ListGroupItem>
                                    <ListGroupItem>Christmas Tree made by <a href ="https://debmayers.com/">Deb Mayers</a></ListGroupItem>
                                </ListGroup>
                        </Card.Body>
                    </Card>
                </Col>
            </Row>
        </div>
    )
}