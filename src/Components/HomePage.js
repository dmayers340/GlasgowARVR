import React from 'react';
import { TwitterTimelineEmbed } from 'react-twitter-embed';
import { NavLink  } from 'react-router-dom';

export const HomePage = () => {
    return (
        <div className = 'homepage'>
            <h1>Glasgow ARVR</h1>
            <NavLink  to={'/events'} className="nav-link">Events</NavLink >
            <TwitterTimelineEmbed
                sourceType="profile"
                screenName="ARVRGlasgow"
                options={{height: 600}}
            />
        </div>
    )
}