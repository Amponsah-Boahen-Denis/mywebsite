
import React from 'react'
import './topbar.scss'
function Topbar({open,setopen,eopen,esetopen,hobbies,sethobbies,location,setlocation}) {
    return (
        <div className='topbar'>
            <ul  className={'humberg ' + (open && 'active')} onClick={()=>setopen(!open)}>
                <span className='s1'></span>
                <span className='s2'></span>
                <span className='s3'></span>
            </ul>
               
                <ul className='topinfor'> 
                
                    <b onMouseEnter={()=>esetopen(!eopen)}
                     onPointerOut={()=>esetopen(!eopen)}>Hobbies<br/>
                    </b>
                
                <b className='loca'onMouseEnter={()=>setlocation(!location)}
                     onPointerOut={()=>setlocation(!location)}>Location</b>
                
                
                </ul>

               
      <div className='im'> <i>Denis is soo calm and never quite.</i></div> 
        </div>
    )
}

export default Topbar;
