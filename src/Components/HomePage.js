import React from 'react';
import { TwitterTimelineEmbed } from 'react-twitter-embed';
import { Card, Col, ListGroup, ListGroupItem, Row } from 'react-bootstrap';
import { events } from '../config/eventlist.json';
import Knot from './knot';

const currEvent = events[0];
const urlDescription = currEvent.urlTitle ? currEvent.urlTitle : 'Sign up on Eventbrite!';

export const HomePage = () => {
    return (
        <div className = 'page-container'>
            <h1>Glasgow ARVR</h1>
            <Knot />  
            <Row>
                <Col>
                    <Card className="card" style={{ width: '20rem' }}>
                        <Card.Body>
                            <Card.Img variant="top" src={process.env.PUBLIC_URL + '/img/ARVRGlasgow_Collider.jpg'}/>
                            <Card.Img src={process.env.PUBLIC_URL + '/img/IMG-6228.JPG'} />
                            <Card.Img variant="bottom" src={process.env.PUBLIC_URL + '/img/IMG-6234.JPG'}/>
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
                            { currEvent.url ? (<a href={currEvent.url}>{urlDescription}</a>) : null}
                        </ListGroup>
                        </Card.Body>
                    </Card>
                </Col>
                <Col>
                    <Card className="card" style={{ width: '20rem' }}>
                        <TwitterTimelineEmbed
                            className="twitter"
                            sourceType="profile"
                            screenName="ARVRGlasgow"
                            options={{height: 730}}
                        />
                    </Card>
                </Col>
            </Row>
        </div>
    )
}