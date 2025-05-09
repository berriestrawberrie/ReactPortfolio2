import React from "react";
import styles from '../../components/Contact/Contact.module.css'
import git from '../../assets/contact/githubIcon.png'
import email from '../../assets/contact/emailIcon.png'
import linkedIn from '../../assets/contact/linkedinIcon.png'


export const Contact = () =>{
    return <footer className={styles.container}id="contact">
        <div className={styles.text}>
            <h2>Contact</h2>
            <p>Feel free to reach out!</p>
        </div>
        <ul className={styles.links}>
            <li className={styles.link}><img src={email} alt="Email Icon"/><a href="mailto:brooke.henriksson@outlook.com">brooke.henriksson@outlook.com</a></li>
            <li className={styles.link}> <img src={git} alt="LinkedIn Icon"/><a href="https://www.linkedin.com/in/brooke-r-brown/">linkedin.com/in/brooke-r-brown/</a></li>
            <li className={styles.link}><img src={linkedIn} alt="Git Hub Icon"/><a href="https://github.com/berriestrawberrie">github.com/berriestrawberrie</a></li>
        </ul>
    </footer>
}