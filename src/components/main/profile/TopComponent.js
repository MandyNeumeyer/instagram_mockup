import React from 'react'
import ProfileB from '../../../img/hawaiian.jpeg';




function TopComponent() {
    return (
        <>
            <div className="top-component">
            <div className="avatar?">
                <img className="avatar" src={ProfileB} alt="Hawaiian-Logo"/>
            </div>
            <div className="info">
                <div className="titel">
                    <p>hawaiianairlines</p>
                    <button>Follow</button>
                </div>
                <div className="views">
                        <p><span>2,270 </span>posts</p>
                        <p><span>389k </span>followers</p>
                        <p><span>6048 </span>following</p>
                </div>
                <div className="description">
                    <p>
                        Hawaiian Airlines
                    </p>
                    <p>
                        Sharing aloha since 1929 ✈️🌺
                    </p>
               
                    <p>
                       <a href="https://www.hawaiianairlines.com/social/instagram">hawaiianairlines.com/instagram</a>
                    </p>
                    
                </div>
            </div>
            </div>
        </>
    )
}

export default TopComponent
