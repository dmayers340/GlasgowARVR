import React from 'react';
import { Col, Row } from 'react-bootstrap';
import { events } from '../config/eventlist.json';
import EventCard from './EventCard';

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
                    { futureEvents.map(event => (
                        <Col key={event.eventName}>
                            <EventCard event={event} />
                        </Col>
                    ))}
                </Row>
            <h2> Past Events </h2>
            <Row>
                {pastEvents.map(event => (
                    <Col key={event.eventName}>
                        <EventCard event={event} />
                    </Col>
                ))}
                </Row>
        </div>
    )
}