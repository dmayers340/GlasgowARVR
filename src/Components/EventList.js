import React from 'react';
import { Card, Col, ListGroupItem, ListGroup, Row } from 'react-bootstrap';
import { events, pastevents } from '../config/eventlist.json';

export const EventList = () => {
    return (
        <div className = 'page-container'>
            <h2>Upcoming Events</h2>
                <Row>
                    { events.map(event => {
                        return (
                            <Col key={event.eventName}>
                                <Card style={{ width: '20rem' }}>
                                    <Card.Body>
                                        <Card.Img variant="top" src={event.imageUrl} />
                                        <Card.Title>{event.eventName}</Card.Title>
                                        <Card.Text>
                                            <ListGroup className="list-group-flush">
                                                <ListGroupItem>{event.description}</ListGroupItem>
                                                <ListGroupItem>{event.date}</ListGroupItem>
                                                <ListGroupItem>{event.time}</ListGroupItem>
                                                <ListGroupItem>{event.location}</ListGroupItem>
                                                { event.url ? <a href = {event.url}>Sign up on Eventbrite!</a> : ""}
                                            </ListGroup>
                                        </Card.Text> 
                                    </Card.Body>
                                </Card>
                            </Col> 
                        )
                    })}
                </Row>
            <h2> Past Events </h2>
            <Row>
                { pastevents.map(event => {
                    return(
                        <Col key={event.eventName}>
                            <Card style={{ width: '20rem' }}>
                                <Card.Body>
                                    <Card.Img variant="top" src={event.imageUrl} />
                                    <Card.Title>{event.eventName}</Card.Title>
                                    <ListGroup className="list-group-flush">
                                        <ListGroupItem>{event.description}</ListGroupItem>
                                        <ListGroupItem>{event.date}</ListGroupItem>
                                        <ListGroupItem>{event.time}</ListGroupItem>
                                        <ListGroupItem>{event.location}</ListGroupItem>
                                        { event.url ? <a href = {event.url}>Sign up on Eventbrite!</a> : ""}
                                    </ListGroup>
                                </Card.Body>
                            </Card>
                        </Col>
                    )
                })}
                </Row>
        </div>
    )
}