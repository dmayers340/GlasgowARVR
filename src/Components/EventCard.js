import React from 'react';
import { Card, ListGroupItem, ListGroup } from 'react-bootstrap';

const EventCard = ({ event }) => {
    const urlDescription = event.urlTitle ? event.urlTitle : 'Sign up on Eventbrite!';

    return (
        <Card style={{ width: '20rem' }}>
            <Card.Body>
                <Card.Img variant="top" src={event.imageUrl} />
                <Card.Title>{event.eventName}</Card.Title>
                    <ListGroup className="list-group-flush">
                        <ListGroupItem>{event.description}</ListGroupItem>
                        <ListGroupItem>{event.date}</ListGroupItem>
                        <ListGroupItem>{event.time}</ListGroupItem>
                        <ListGroupItem>{event.location}</ListGroupItem>
                        { event.url ? (<a href={event.url}> {urlDescription}</a>) : null}
                    </ListGroup>
            </Card.Body>
        </Card>
    );
}

export default EventCard;