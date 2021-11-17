import React from 'react'
import './sidebar.scss'
function Sidebar({open,setopen}) {
    return (
        <div className={'sidebar ' + (open && 'active')}>
            <div className='sidede'>
                <ul>
                <li><a onClick={()=>setopen(!open)} href='#home'>Home</a></li>
                <li><a onClick={()=>setopen(!open)} href='#about'>About</a></li>
                <li><a onClick={()=>setopen(!open)} href='#port'>Portfolio</a></li>
                <li><a onClick={()=>setopen(!open)} href='#contact'>Contact</a></li>
                
                </ul>
           
            </div>
           
            
        </div>
    )
}

export default Sidebar;
