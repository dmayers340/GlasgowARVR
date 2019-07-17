import React from 'react';
import { Navbar, Nav } from 'react-bootstrap';
import { Switch, Route, NavLink  } from 'react-router-dom';
import { Home } from './Home';
import { EventList } from './EventList';
import { Contact } from './Contact';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";


export const SiteNavbar = () => {
    return (
        <>
        <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
        <Navbar.Brand href="/"> <img
        src="img/debmayers.png"
        height="30"
        className="d-inline-block align-top"
        alt="Deb Mayers Logo"
      /></Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="mr-auto">
                <NavLink  to={'/'} className="nav-link"> Home </NavLink >
                <NavLink  to={'/events'} className="nav-link">Events</NavLink >
                <NavLink  to={'/contact'} className="nav-link">Contact</NavLink>
                <a href ="https://twitter.com/glasgowarvr"><FontAwesomeIcon pull = "right" size="lg" icon={['fab', 'twitter']} /></a>
            </Nav>
        </Navbar.Collapse>
      </Navbar>        
      <hr />
        <Switch>
          <Route exact path='/' component={Home} />
          <Route exact path='/contact' component={Contact} />
          <Route exact path='/events' component={EventList} />
        </Switch>
        </>
    )
}