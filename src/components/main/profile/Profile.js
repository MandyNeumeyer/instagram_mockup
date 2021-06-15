import React from 'react'
import TopComponent from "./TopComponent";
import Stories from "./Stories"

function Profile({retro}) {
console.log(retro);
    return (
        <div>
            <TopComponent/>
            {/* stories could be empty */}
            <Stories retro={retro}/>
        </div>
    )
}

export default Profile 

