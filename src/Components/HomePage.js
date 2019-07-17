import React from 'react';

export const HomePage = () => {
    const backgroundimg = "url('img/glasgowarvr.png')";

    return (
        <div className = 'homepage'   backgroundImage={backgroundimg}>
            <h1>Glasgow ARVR</h1>
            <button>Events</button>
        </div>
    )
}