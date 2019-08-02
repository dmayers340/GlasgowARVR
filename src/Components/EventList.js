import React from 'react';
import { Card, ListGroupItem, ListGroup } from 'react-bootstrap';
import { events, pastevents } from '../config/eventlist.json';

export const EventList = () => {
    return (
        <div className = 'page-container'>
            <h2>Upcoming Events</h2>
                <div className = "card-row">
                    { events.map(event => {
                        return(
                            <Card style={{ width: '18rem' }}>
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
                        )
                    })}
                </div>
            <h2> Past Events </h2>
            <div className = "card-row">
                { pastevents.map(event => {
                    return(
                        <Card style={{ width: '18rem' }}>
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
                    )
                })}
            </div>
        </div>
    )
}