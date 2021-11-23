import React,{useState} from 'react'
import emailjs from 'emailjs-com';
//import { Instagram,Facebook,Twitter} from '@material-ui/icons';
import './contact.scss'
//import { blue } from '@material-ui/core/colors';
function Contact() {
  const [message,setMessage]=useState(false)
  const Show =()=>{
    return(
      <p>message is recieved succesfully!</p>
    )
  }
  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm('service_4zy7trl', 'template_cdzwk4h', e.target, 'user_aoab5TDXTO1gsjSYGqetD')
      .then((result) => {
          console.log(result.text);
      }, (error) => {
          console.log(error.text);
      });
      e.target.reset()
      setMessage(true)
      setTimeout(()=>setMessage(false),5000)
  };
 
  return(
      <div className='contact' id='contact'>
        <div classname='div'>
        <h3>CONTACT ME</h3>
          <div id='cont'>
          
          <form action='' onSubmit={sendEmail}>
      <label>Name:</label>
      <input type="text" name="name" required/>
      <label>Email:</label>
      <input type="email" name="email" required />
      <label>Message:</label>
      <textarea name="message" required />
      <input id='click' type="submit" value="Send"  required/>
      <p> {message ? <Show/> :null}</p>
     
    </form>
          </div>
         
         <div><img src={require('./email.png').default} alt="" />:bdenis53@yahoo.com</div>
         <div><img id='im'src={require('./watsup.png').default} alt="" />:+233546636409</div>
         <div><img src={require('./contact.png').default} alt=""/>:+233546636409</div>
         <div><img src={require('./github.png').default} alt=""/>:Amponsah-Boahen-Denis</div>

        </div>
        

           <div classname='goup'>
             <a href="#home"><img src={require('./arrowup.png').default} alt="" /></a>

             </div> 
        </div>
    )
}

export default Contact;
