import React from 'react';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEnvelope } from "@fortawesome/free-solid-svg-icons";
import { Card } from 'react-bootstrap';

export const Contact = () => {
    return (
        <div class = "card-row">
            <Card style={{ width: '18rem' }}>
                <Card.Body>
                <FontAwesomeIcon pull = "right" size="lg" icon={faEnvelope} />
                <Card.Title>Email</Card.Title>
                    <a href="mailto:dmayers340@gmail.com.com?Subject=GlasgowARVR-%20Contacting%20After%20Visiting%20Your%20Website">Email Me</a>
                </Card.Body>
            </Card>
            <Card style={{ width: '18rem' }}>
                <Card.Body>
                <FontAwesomeIcon pull = "right" size="lg" icon={['fab', 'twitter']} />                            
                <Card.Title>Email</Card.Title>
                <a href="https://twitter.com/ARVRGlasgow">Find me on Twitter</a>
                </Card.Body>
            </Card>
        </div>
    )
}