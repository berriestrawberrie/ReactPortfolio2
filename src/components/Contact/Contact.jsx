import React, { useState,useRef } from "react";
import styles from '../../components/Contact/Contact.module.css'
import git from '../../assets/contact/githubIcon.png'
import email from '../../assets/contact/emailIcon.png'
import linkedIn from '../../assets/contact/linkedinIcon.png'
import Popup from "../Popup/Popup";
import emailjs from '@emailjs/browser';

export const Contact = () =>{
  const form = useRef();
  const [mailSent, setMailSent] = useState(false);
  const newMail = ()=>{
    setMailSent(false);
  }

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm('service_ism5j0o', 'template_ey3xse8', form.current, {
        publicKey: '9QiRd2gSJBudL0pYD',
      })
      .then(
        () => {
          console.log('SUCCESS!');
          setMailSent(true);
        },
        (error) => {
          console.log('FAILED...', error.text);
        },
      );
  };

    return <footer className={styles.container}id="contact">
        <div className={styles.text}>
            <h2>Contact</h2>
            <p>Feel free to reach out!</p>
            {mailSent? 
                //MAIL SENT TRUE DISPLAY NEW MAIL OPTION
                <Popup onClick={newMail}/> :
                //MAIL NOT SENT THEN DISPLAY FORM
                <form ref={form} onSubmit={sendEmail} >
                <label>Name<span>*</span></label>
                <input  type="text" name="name" required />
                <label>Email<span>*</span></label>
                <input  type="email" name="email" required/>
                <label>Subject</label>
                <input  type="text" name="title" />
                <label>Message<span>*</span></label>
                <textarea rows={6}  name="message" placeholder="Max (250 chars)" maxLength={250} required/>
                <button  className={styles.btnsubmit} type="submit" value="Send"><img src={email} alt="Email Icon"/>Send!</button>
                </form>}

        </div>
        <ul className={styles.links}>
            <li className={styles.link}> <img src={git} alt="LinkedIn Icon"/><a href="https://www.linkedin.com/in/brooke-r-brown/">linkedin.com/in/brooke-r-brown/</a></li>
            <li className={styles.link}><img src={linkedIn} alt="Git Hub Icon"/><a href="https://github.com/berriestrawberrie">github.com/berriestrawberrie</a></li>
        </ul>
    </footer>
}