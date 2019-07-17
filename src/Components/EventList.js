import React from 'react';
import { Card } from 'react-bootstrap';
import { events } from '../config/eventlist.json';

export const EventList = () => {
    return (
        <>
            { events.map(event => {
                return(
                    <Card style={{ width: '18rem' }}>
                        <Card.Body>
                        <Card.Img variant="top" src={event.imageUrl} />
                        <Card.Title>{event.eventName}</Card.Title>
                            <Card.Text>{event.description}</Card.Text>
                            <Card.Text>{event.date}</Card.Text>
                            <Card.Text>{event.time}</Card.Text>
                            <Card.Text>{event.location}</Card.Text>
                            <a href = {event.url}>Sign up on Eventbrite!</a>
                        </Card.Body>
                    </Card>
                )
            })}
        </>
    )
}