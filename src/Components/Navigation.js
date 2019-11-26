import React, { useState } from 'react';
import { Switch, Route, NavLink  } from 'react-router-dom';
import { HomePage } from './HomePage';
import { EventList } from './EventList';
import { Contact } from './Contact';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { CodeOfConduct } from './CodeOfConduct';
import DecemberAR from './DecemberAR';

export const Navigation = () => {
    
    const [isOpen, setIsOpen] = useState(false);

    const toggleNavbar = () => {
        setIsOpen(!isOpen);
    }

    const collapseClass = isOpen ? 'collapse navbar-collapse' : 'collapse navbar-collapse show';
    const toggleClass = isOpen ? 'navbar-toggler navbar-toggler-right collapsed' : 'navbar-toggler navbar-toggler-right';
 
    return (
        <>
            <nav className ="navbar navbar-expand-lg navbar-light bg-light">
                <a className = "navbar-brand" href="/"> 
                    <img
                        src="/img/GlasgowARVRImage.png"
                        height="30"
                        className="d-inline-block align-top"
                        alt="Glasgow ARVR Logo"
                    />
                </a>
                
                <button onClick={toggleNavbar} className={`${toggleClass}`} type="button" data-toggle="collapse" data-target="#navbarResponsive" aria-controls="navbarResponsive" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon" />
                </button>               
                
                <div className={`${collapseClass}`} id="navbarResponsive">
                    <ul className="navbar-nav mr-auto">
                        <NavLink onClick={toggleNavbar} to={'/'} className="nav-link"> Home </NavLink >
                        <NavLink onClick={toggleNavbar} to={'/events'} className="nav-link">Events</NavLink >
                        <NavLink onClick={toggleNavbar} to={'/codeofconduct'} className="nav-link">Code of Conduct</NavLink>
                        <NavLink onClick={toggleNavbar} to={'/contact'} className="nav-link">Contact</NavLink>
                        <NavLink onClick={toggleNavbar}  to={'/aframe'} className="nav-link">A-Frame</NavLink>
                        <a className ='right-side' href ="https://twitter.com/ARVRGlasgow"><FontAwesomeIcon pull = "right" size="lg" icon={['fab', 'twitter']} /></a>
                    </ul>
                </div>
            </nav>        

            <Switch>
                <Route exact path='/' component={HomePage} />
                <Route exact path='/contact' component={Contact} />
                <Route exact path='/events' component={EventList} />
                <Route exact path='/codeofconduct' component={CodeOfConduct} />
                <Route exact path='/aframe' component={DecemberAR} />
            </Switch>
        </>
    )
}