import React from 'react';
import './home.scss';
import mage from  '../fotos/back.jpg';

function Home() {
    return (
        <div className='home'  id='home' style={{background:`url(${mage})` ,backgroundSize:'cover'}}
         >
         
         <div className='img' >
            <img src={require('./books.png').default} alt=""  />
             <marquee>learning constantly day and night. . .</marquee>
            </div>
            <a href='#about'> <img src={require('./arrow.png').default}alt=""  /></a>
             <div className='name' >
             <h1>Hello! I am</h1>
         <p>Amponsah Denis Boahen</p>
         <span>(A Software Developer)</span>
        

          </div>
         
        </div>
    )
}

export default Home;
