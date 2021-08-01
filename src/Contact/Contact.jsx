import React from 'react'
import "./Contact.css"
import contimg from "../Assest/contimg.jpg"
import Othercontact from './Othercontact'
import { useState } from 'react'
import Button from '@material-ui/core/Button';

const Contact = () => {
    let name=1
    let [data,setdata]=useState({
        name:"",
        email:"",
        password:""
    })
    function changeMe(e){
        let value=e.target.value
        let name=e.target.name
setdata({
...data,
[name]:value
})
 }
   function submitform(){
   if(data.name.length<2){
           alert("Write Your name")
       }
       else if(data.email.length<2){
        alert("Write Your email")
    }
       else{
           alert(data.name+"Thanks for Your message")
       }
   }
    return (
      <>
    <div className="Contact">
    <img src={contimg} alt="" className="cont-img" />
    <div className="cont-overlay">
        <h1>Contact Us</h1>
    </div>
    </div>
    <div className="gogl-map">
    <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d81573.10316487047!2d82.41858258547983!3d28.050714695651948!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3997947b72bd986f%3A0xfaf38360d985d7ad!2sTulsipur%20Chowk!5e1!3m2!1sen!2snp!4v1627362264581!5m2!1sen!2snp" 
    allowFullScreen="" loading="lazy" title={name}
     className="map"></iframe>
     </div>
     <div className="contact-page">
         <div className="left-contact">
            <Othercontact
                icon={<i class="uil uil-location-point"></i>}
                h2="Address"
                h6="Ghorahi,Dang"
            />
            <Othercontact
                icon={<i class="uil uil-phone"></i>}
                h2="Contact Number"
                h6="+9779843743134"
            />
            <Othercontact
                icon={<i class="uil uil-message"></i>}
                h2="Email address"
                h6="info@yoursite.com"
            />
         </div>
         <div className="right-contact">
         <form>
         <div className="form-group">
    <label for="exampleInputEmail1">Name</label>
    <input type="email" class="form-control" id="exampleInputEmail1" name="name" value={data.name} aria-describedby="emailHelp" placeholder="Enter email" onChange={changeMe}/>
 
  </div>
  <div className="form-group">
    <label for="exampleInputEmail1">Email address</label>
    <input type="email" class="form-control" id="exampleInputEmail1" name="email" value={data.email} aria-describedby="emailHelp" placeholder="Enter email" onChange={changeMe}/>
 
  </div>
  <div className="form-group">
    <label for="exampleInputPassword1">Password</label>
    <input type="password" class="form-control" id="exampleInputPassword1" name="password" value={data.password}
     placeholder="Password" onChange={changeMe}/>
  </div>
  <div class="form-group">
    <label for="exampleFormControlTextarea1">Message</label>
    
    <textarea class="form-control" id="exampleFormControlTextarea1" rows="3"></textarea>
  </div>
  <Button variant="contained" className="btn" onClick={submitform}  color="primary">
                         Send message
                    </Button>
</form>
         </div>
     </div>
        </>
    )
}

export default Contact
