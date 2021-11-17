import React from 'react';
import './home.scss';
import mage from  '../fotos/ae.jpg';

function Home() {
    return (
        <div className='home'  id='home' style={{background:`url(${mage})` ,backgroundSize:'cover'}}
         >
         
         <div className='img' >
            <img src="/fotos/books.png" alt=""  />
             <marquee>learning constantly day and night. . .</marquee>
            </div>
            <a href='#about'> <img src="/fotos/arrow.png" alt=""  /></a>
             <div className='name' >
             <h1>Hello! I am</h1>
         <p>Amponsah Boahen Denis</p>
         <span>(A Software Developer)</span>
        

          </div>
         
        </div>
    )
}

export default Home;
