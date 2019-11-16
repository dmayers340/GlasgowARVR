import React from 'react';
import { Card, Col, ListGroupItem, ListGroup, Row } from 'react-bootstrap';
import { events } from '../config/eventlist.json';

let urlDescription;
export const EventList = () => {
    const pastEvents = [];
    const futureEvents = [];
    events.map(event => {
        let eventDate = new Date(event.date);
        if (eventDate < Date.now()) {
           pastEvents.push(event); 
        } else {
            futureEvents.push(event);
        }
    });

    return (
        <div className = 'page-container'>
            <h2>Upcoming Events</h2>
                <Row>
                    { futureEvents.map(event => {
                        urlDescription = event.urlTitle ? event.urlTitle : 'Sign up on Eventbrite!';
                        return (
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
                                                { event.url ? (<a href={event.url}>{urlDescription}</a>) : null}
                                            </ListGroup>
                                    </Card.Body>
                                </Card>
                            </Col> 
                        )
                    })}
                </Row>
            <h2> Past Events </h2>
            <Row>
                { pastEvents.map(event => {
                    urlDescription = event.urlTitle ? event.urlTitle : 'Sign up on Eventbrite!';
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
                                        { event.url ? (<a href={event.url}>{urlDescription}</a>) : null}
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