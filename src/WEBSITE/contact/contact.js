import React from 'react'
//import emailjs from 'emailjs-com';
//import { Instagram,Facebook,Twitter} from '@material-ui/icons';
import './contact.scss'
function Contact() {
  return(
      <div className='contact' id='contact'>
        <div classname='div'>
        <h3>CONTACT ME</h3>
          <div id='cont'>
          
          <form onSubmit=''>
      <label>Name:</label>
      <input type="text" name="user_name" />
      <label>Email:</label>
      <input type="email" name="user_email" />
      <label>Message:</label>
      <textarea name="message" />
      <input id='click' type="submit" value="Send" />
    </form>
          </div>
         
         <div><img src="fotos/email.png" alt="" />:bdenis53@yahoo.com</div>
         <div><img id='im'src="fotos/watsup.png"alt="" />:+233546636409</div>
         <div><img src="fotos/contact.png" alt=""/>:+233546636409</div>
         <div><img src="fotos/github.png" alt=""/>:Amponsah-Boahen-Denis</div>

        </div>
        

           <div classname='goup'>
             <a href="#home"><img src="fotos/arrowup.png" alt="" /></a>

             </div> 
        </div>
    )
}

export default Contact;
