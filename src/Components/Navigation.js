import React from 'react';
import { Navbar, Nav } from 'react-bootstrap';
import { Switch, Route, NavLink  } from 'react-router-dom';
import { HomePage } from './HomePage';
import { EventList } from './EventList';
import { Contact } from './Contact';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { CodeOfConduct } from './CodeOfConduct';


export const Navigation = () => {
    return (
        <>
            <Navbar bg="light" expand="lg">
                <Navbar.Brand href="/"> Glasgow ARVR</Navbar.Brand>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className="mr-auto">
                        <NavLink  to={'/'} className="nav-link"> Home </NavLink >
                        <NavLink  to={'/events'} className="nav-link">Events</NavLink >
                        <NavLink  to={'/codeofconduct'} className="nav-link">Code of Conduct</NavLink>
                        <NavLink  to={'/contact'} className="nav-link">Contact</NavLink>
                        <a className ='right-side' href ="https://twitter.com/ARVRGlasgow"><FontAwesomeIcon pull = "right" size="lg" icon={['fab', 'twitter']} /></a>
                    </Nav>
                </Navbar.Collapse>
            </Navbar>        

            <Switch>
                <Route exact path='/' component={HomePage} />
                <Route exact path='/contact' component={Contact} />
                <Route exact path='/events' component={EventList} />
                <Route exact path='/codeofconduct' component={CodeOfConduct} />
            </Switch>
        </>
    )
}