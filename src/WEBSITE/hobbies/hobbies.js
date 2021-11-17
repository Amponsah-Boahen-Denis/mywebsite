import React from 'react'
import './hobbies.scss'
function Hobbies({eopen,esetopen}) {
    return (
        <div className={'hobbies ' + (eopen && 'active')}>
           <p className='n1'>I like to:</p>
           <p>Learn.</p>
           <p>Watch movies.</p>
           <p>Pray games.</p>
        </div>
    )
}

export default Hobbies;
