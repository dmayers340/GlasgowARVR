import React from 'react';
import { TwitterTimelineEmbed } from 'react-twitter-embed';
import { NavLink  } from 'react-router-dom';

const backgroundImg = 'img/NewLogo.png';

export const HomePage = () => {
    return (
        <div className = 'homepage' style ={{backgroundImage:"url("+backgroundImg+")", backgroundRepeat  : 'no-repeat',
        backgroundPosition: 'center'}}>
            <h1>Glasgow ARVR</h1>
            <NavLink  to={'/events'} className="nav-link">Events</NavLink >
            <TwitterTimelineEmbed
                className="twitter"
                sourceType="profile"
                screenName="ARVRGlasgow"
                options={{height: 600}}
            />
        </div>
    )
}