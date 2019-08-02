import React from 'react';
import { TwitterTimelineEmbed } from 'react-twitter-embed';
import { Card } from 'react-bootstrap';
import { events } from '../config/eventlist.json';

const currEvent = events[0];

export const HomePage = () => {
    return (
        <div className = 'page-container'>
            <h1>Glasgow ARVR</h1>
            <div className = "card-row">
            <Card style={{ width: '18rem' }}>
                    <Card.Body>
                        <TwitterTimelineEmbed
                            className="twitter"
                            sourceType="profile"
                            screenName="ARVRGlasgow"
                            options={{height: 600}}
                        />
                    </Card.Body>
                </Card>
                <Card style={{ width: '18rem' }}>
                    <Card.Body>
                        <Card.Img variant="top" src={process.env.PUBLIC_URL + '/img/ARVRGlasgow_Collider.jpg'}/>
                        <Card.Img src={process.env.PUBLIC_URL + '/img/glasgowarvr.png'} />
                        <Card.Img variant="bottom" src={process.env.PUBLIC_URL + '/img/NewLogo.png'}/>
                    </Card.Body>
                </Card>
                <Card style={{ width: '18rem' }}>
                    <Card.Body>
                        <Card.Title>{currEvent.eventName}</Card.Title>
                        <Card.Img src={currEvent.imageUrl} />
                        <Card.Text>{currEvent.description}</Card.Text>
                        <Card.Text>{currEvent.date}</Card.Text>
                        <Card.Text>{currEvent.time}</Card.Text>
                        <Card.Text>{currEvent.location}</Card.Text>
                        { currEvent.url ? <a href = {currEvent.url}>Sign up on Eventbrite!</a> : ""}
                    </Card.Body>
                </Card>
            </div>
        </div>
    )
}