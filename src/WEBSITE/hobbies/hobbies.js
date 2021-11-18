import React from 'react'
import './hobbies.scss'
function Hobbies({eopen,esetopen}) {
    return (
        <div className={'hobbies ' + (eopen && 'active')}>
            <div>
            <p>-Listen to motivational songs.</p>
           <p>-Test ideas.</p>
           <p>-Read story books.</p>
            </div>

        </div>
    )
}

export default Hobbies;
