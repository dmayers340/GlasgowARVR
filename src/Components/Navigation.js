import React, { useState } from 'react';
import { Switch, Route, NavLink  } from 'react-router-dom';
import { HomePage } from './HomePage';
import { EventList } from './EventList';
import { Contact } from './Contact';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { CodeOfConduct } from './CodeOfConduct';
// import DecemberAR from './DecemberAR';
import FebXR from './WebXR/FebruaryXR';

import {Navbar, Nav} from 'react-bootstrap';

export const Navigation = () => {
    
    const [isOpen, setIsOpen] = useState(false);

    const toggleNavbar = () => {
        setIsOpen(!isOpen);
    }

    const collapseClass = isOpen ? 'collapse navbar-collapse show' : 'collapse navbar-collapse';
    const toggleClass = isOpen ? 'navbar-toggler navbar-toggler-right' : 'navbar-toggler navbar-toggler-right collapsed';
 
    return (
        <>
            <a className="skip-main" href="#main">Skip to main content</a>
            <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
                <Navbar.Brand href="/" onClick={() => setIsOpen(!isOpen)}>
                    <img
                        src="/img/LinkedIn-profile.jpg"
                        height="30"
                        className="d-inline-block align-top"
                        alt="Glasgow ARVR Logo"
                    />
                </Navbar.Brand>
                
                <button onClick={toggleNavbar} className={`${toggleClass}`} type="button" data-toggle="collapse" data-target="#navbarResponsive" aria-controls="navbarResponsive" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon" />
                </button>               
                
                <div className={`${collapseClass}`} id="navbarResponsive">
                    <Nav className="mr-auto">
                        <NavLink onClick={toggleNavbar} to={'/events'} className="nav-link">Events</NavLink >
                        <NavLink onClick={toggleNavbar} to={'/codeofconduct'} className="nav-link">Code of Conduct</NavLink>
                        <NavLink onClick={toggleNavbar} to={'/contact'} className="nav-link">Contact</NavLink>
                        <NavLink onClick={toggleNavbar}  to={'/aframe'} className="nav-link">A-Frame</NavLink>
                    </Nav>
                    <ul className="nav-list-social">
                        <li><a className ='right-side' href ="https://twitter.com/ARVRGlasgow"><FontAwesomeIcon pull = "right" size="lg" icon={['fab', 'twitter']} /></a></li>
                        <li><a className ='right-side' href ="http://linkedin.com/company/glasgow-arvr "><FontAwesomeIcon pull = "right" size="lg" icon={['fab', 'linkedin']}/></a></li>
                        <li><a className ='right-side' href ="https://facebook.com/glasgowarvr"><FontAwesomeIcon pull = "right" size="lg" icon={['fab', 'facebook']}/></a></li>
                    </ul>
                </div>
            </Navbar>        

            <Switch>
                <Route exact path='/' component={HomePage} />
                <Route exact path='/contact' component={Contact} />
                <Route exact path='/events' component={EventList} />
                <Route exact path='/codeofconduct' component={CodeOfConduct} />
                <Route exact path='/aframe' component={FebXR} />
            </Switch>
        </>
    )
}