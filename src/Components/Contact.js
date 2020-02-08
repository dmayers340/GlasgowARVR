import React from 'react';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEnvelope } from "@fortawesome/free-solid-svg-icons";
import { Card, Row, Col } from 'react-bootstrap';

export const Contact = () => {
    return (
        <div className = 'page-container'>
            <div className = "card-row">
                <Row>
                    <Col>
                        <Card style={{ width: '20rem' }}>
                            <Card.Body>
                            <FontAwesomeIcon pull = "right" size="lg" icon={faEnvelope} />
                            <Card.Title>Email</Card.Title>
                                <a href="mailto:dmayers340@gmail.com.com?Subject=GlasgowARVR-%20Contacting%20After%20Visiting%20Your%20Website">Email Glasgow ARVR</a>
                            </Card.Body>
                        </Card>
                    </Col>
                    <Col>
                        <Card style={{ width: '20rem' }}>
                            <Card.Body>
                            <FontAwesomeIcon pull = "right" size="lg" icon={['fab', 'twitter']} />                            
                            <Card.Title>Twitter</Card.Title>
                            <a href="https://twitter.com/ARVRGlasgow">Find Glasgow ARVR on Twitter</a>
                            </Card.Body>
                        </Card>
                    </Col>
                    <Col>
                        <Card style={{ width: '20rem' }}>
                            <Card.Body>
                            <FontAwesomeIcon pull = "right" size="lg" icon={['fab', 'facebook']} />                            
                            <Card.Title>Facebook</Card.Title>
                            <a href="https://www.facebook.com/glasgowarvr/">Find Glasgow ARVR on Facebook</a>
                            </Card.Body>
                        </Card>
                    </Col>
                    <Col>
                        <Card style={{ width: '20rem' }}>
                            <Card.Body>
                            <FontAwesomeIcon pull = "right" size="lg" icon={['fab', 'linkedin']} />                            
                            <Card.Title>LinkedIn</Card.Title>
                            <a href="https://www.linkedin.com/company/34604190/admin/">Find Glasgow ARVR on LinkedIn</a>
                            </Card.Body>
                        </Card>
                    </Col>
                </Row>
            </div>
        </div>
        
    )
}