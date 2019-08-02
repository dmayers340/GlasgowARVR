import React from 'react';
import { TwitterTimelineEmbed } from 'react-twitter-embed';
import { NavLink  } from 'react-router-dom';
import { Col, Row } from 'react-bootstrap';

export const HomePage = () => {
    return (
        <>
            <h1>Glasgow ARVR</h1>
            <h3> <NavLink  to={'/events'} className="nav-link">Events</NavLink ></h3>
            <Row>
                <Col>
                    <TwitterTimelineEmbed
                        className="twitter"
                        sourceType="profile"
                        screenName="ARVRGlasgow"
                        options={{height: 600}}
                    />
                </Col>
                <Col sm><img className = 'image-row' alt="Glasgow ARVR Logo" src={process.env.PUBLIC_URL + '/img/glasgowarvr.png'} /></Col>
            </Row>     
            <Row>
                <Col sm><img className = 'image-row' alt="Glasgow ARVR New Logo" src={process.env.PUBLIC_URL + '/img/NewLogo.png'} /></Col>
                <Col sm><img className = 'image-row' alt="Two people with VR headsets on at the Glasgow ARVR July Meetup Collider " src={process.env.PUBLIC_URL + '/img/ARVRGlasgow_Collider.jpg'} /></Col>
            </Row>                                     
        </>
    )
}