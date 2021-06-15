import React from 'react';
import Profile from "./profile/Profile"
import Gallery from "./gallery/Gallery"

function Main({gallery, retro}) {
    console.log(gallery);
    console.log(retro);
    return (
        <div className="main">
            <div className="profile">
                <Profile retro={retro} /> 
            </div>
            <div className="gallery">
                <Gallery gallery={gallery}/>
            </div>
        </div>
    )
}

export default Main
