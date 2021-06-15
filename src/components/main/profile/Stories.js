
import React from 'react'

// import the img

function Stories({retro}) {
    const story = retro.map((story) => { 
      const  {url, id,text, name} = story;
      console.log(url);
        return  (<div className="review">
                <img src={url} alt={name} key={id} /> 
                <p className="text">{text}</p> 
                </div>
        )
    })

  
          
    
    console.log(story);
    return (
        <div className="stories-circles">
         {story}
        </div> 
    )
}

export default Stories
