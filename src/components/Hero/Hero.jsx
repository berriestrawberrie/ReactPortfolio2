import React from "react"
import styles from '../Hero/Hero.module.css'
import avatar from '../../assets/hero/heroImage.png'

export const Hero = () =>{

    return <section className={styles.container}>
        <div className={styles.content}>
            <h1 className={styles.title}>Hi, I'm Brooke</h1>
            <p className={styles.description}>I'm a full-stack developer with 2 years of experience
            using React and PHP. Reach out if you'd like to learn more!</p>
            <a className={styles.contactBtn}href="mailto:brooke.henriksson@outlook.com">Contact Me</a>
        </div>
        <img className={styles.heroImg}src={avatar} alt="hero image of me"/>
        <div className={styles.topBlur}/>
        <div className={styles.bottomBlur}/>
    </section>
}