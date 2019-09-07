import React from 'react';
import { TwitterTimelineEmbed } from 'react-twitter-embed';
import { Card, ListGroup, ListGroupItem } from 'react-bootstrap';
import { events } from '../config/eventlist.json';
import Knot from './knot';

const currEvent = events[0];

export const HomePage = () => {
    return (
        <>
            <h1>Glasgow ARVR</h1>
            <Knot />  
            <div className = "card-row">
                <Card style={{ width: '18rem' }}>
                    <Card.Body>
                        <Card.Img variant="top" src={process.env.PUBLIC_URL + '/img/ARVRGlasgow_Collider.jpg'}/>
                        <Card.Img src={process.env.PUBLIC_URL + '/img/IMG-6228.JPG'} />
                        <Card.Img variant="bottom" src={process.env.PUBLIC_URL + '/img/IMG-6234.JPG'}/>
                        <Card.Img src={process.env.PUBLIC_URL + '/img/IMG-6232.JPG'} />

                    </Card.Body>
                </Card>

                <Card style={{ width: '18rem' }}>
                    <Card.Body>
                    <Card.Title>{currEvent.eventName}</Card.Title>
                    <Card.Img src={currEvent.imageUrl} />
                    <ListGroup className="list-group-flush">
                        <ListGroupItem>{currEvent.description}</ListGroupItem>
                        <ListGroupItem>{currEvent.date}</ListGroupItem>
                        <ListGroupItem>{currEvent.time}</ListGroupItem>
                        <ListGroupItem>{currEvent.location}</ListGroupItem>
                        { currEvent.url ? <a href = {currEvent.url}>Sign up on Eventbrite!</a> : ""}
                    </ListGroup>
                    </Card.Body>
                </Card>
                <Card style={{ width: '18rem' }}>
                    <TwitterTimelineEmbed
                        className="twitter"
                        sourceType="profile"
                        screenName="ARVRGlasgow"
                        options={{height: 730}}
                    />
                </Card>
            </div>
        </>
    )
}