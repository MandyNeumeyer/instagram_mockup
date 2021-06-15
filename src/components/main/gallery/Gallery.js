import React from 'react';


function Gallery({gallery}) {
    console.log(gallery);
    const infoImg = gallery.map((img)=>{
        const {id, name, url} = img;
        return <img src={url} alt={name} key={id}  />
 })
    return (
        <div className="gallery-container">
             <div className="menue"><span>POSTS</span><span>REELS</span><span>IGTV</span><span>TAGGED</span></div> 
        <div className="gallery-wrapper">
            <div className="pic-wall">{infoImg}</div>
        </div>
        </div>
    )
}

export default Gallery


