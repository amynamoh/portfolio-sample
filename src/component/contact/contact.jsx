import React from 'react'
import './contact.css'
import {AiOutlineMail} from 'react-icons/ai'
import {BsLinkedin} from 'react-icons/bs'
import {BsTwitter} from 'react-icons/bs'
// import {BsWhatsapp} from 'react-icons/bs'
import {useRef} from 'react';
import emailjs from 'emailjs-com';


const Contact = () => {

  const form = useRef();
  const sendEmail = (e) => {
    e.preventDefault();
  emailjs.sendForm('service_j44z68m', 'template_zd5z7ji', form.current, 'jCsVnU4AiSPO2cp5a')
    e.target.reset()
  };

  return (
    <section id="contact">
      <h5>Get in touch</h5>
      <h2>Contact us</h2>
      <div className="container contactContainer">
        <div className="contactOptions">
          <article className="contactOption">
            <AiOutlineMail className='contactOptionIcon'/>
            <h4>Email</h4>
            <h5>aminaumohammed@gmail.com</h5>
            <a href="mailto:aminaumohammed@gmail.com" target="__blank">Send a message</a>
          </article>
          <article className="contactOption">
            <BsLinkedin className='contactOptionIcon'/>
            <h4>LinkedIn</h4>
            <h5>Amina Mohammed</h5>
            <a href="https://www.linkedin.com/in/amina-mohammed-29b1b61a6/" target="__blank">Send a message</a>
          </article>
          <article className="contactOption">
            <BsTwitter className='contactOptionIcon'/>
            <h4>Twitter</h4>
            <h5>amynamoh</h5>
            <a href="https://twitter.com/amynamoh" target="__blank">Send a message</a>
          </article>
          {/* <article className="contactOption">
            <BsWhatsapp/>
            <h4>WhatsApp</h4>
            <h5>+2347068065760</h5>
            <a href="https://api.whatsapp.com/send?phone=+2347068065760" target="__blank">Send a message</a>
          </article> */}
        </div>
        <form ref={form} onSubmit={sendEmail}>
          <input type="text" name="name" placeholder='Your Full Name' required/>
          <input type="email" name="email" placeholder='Your Email' required/>
          <textarea name="message" rows="7" placeholder='Enter Your Message' required></textarea>
          <button type='submit' className='btn btn-primary'>Send Message</button>
        </form>
      </div>
    </section>
    )
}

export default Contact