import React from 'react';
import { Card, Button } from 'react-bootstrap';
import { events } from '../config/eventlist.json';

export const EventList = () => {
    return (
        <>
            { events.map(event => {
                return(
                    <Card style={{ width: '18rem' }}>
                        <Card.Body>
                        <Card.Title>{event.eventName}</Card.Title>
                        <Card.Img variant="top" src={event.imageUrls} />
                            <Card.Text>{event.description}</Card.Text>
                            <Card.Text>{event.date}</Card.Text>
                            <Card.Text>{event.time}</Card.Text>
                            <Card.Text>{event.location}</Card.Text>
                            <Button variant="primary">Sign up now!</Button>
                        </Card.Body>
                    </Card>
                )
            })}
        </>
    )
}