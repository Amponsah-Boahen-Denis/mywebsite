import React from 'react'
import './location.scss'
function Location({location,setlocation}) {
    return (
        <div className={'location ' + (location && 'active')}>
           <p>West Africa</p>
           <p>(Ghana)</p> 
        </div>
    )
}

export default Location;
