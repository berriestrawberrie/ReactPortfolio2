import React from "react";
import aboutimg from '../../assets/about/aboutImage.png'
import cursor from '../../assets/about/cursorIcon.png'
import server from '../../assets/about/serverIcon.png'
import ui from '../../assets/about/uiIcon.png'
import styles from '../../components/About/About.module.css'

export const About = () =>{

    return <section className={styles.container} id="about">
        <h2 className={styles.title}>About</h2>
        <div className={styles.content}>
            <img className={styles.aboutImg}src={aboutimg} alt="me sitting with laptop"

            />
            <ul className={styles.aboutItems}>
                <li className={styles.aboutItem}><img src={cursor} alt="cursor icon"/>
                <div className={styles.aboutItemText}>
                    <h3>Frontend Deverloper</h3>
                    <p>I'm a frontend developer with experience in 
                    building responsive and optimized sites</p>
                </div>
                </li>
                <li className={styles.aboutItem}><img src={server} alt="server icon"/>
                <div className={styles.aboutItemText}>
                    <h3>Backend Developer</h3>
                    <p>I have experience developing fast and optimized back-end
                    sytems and APIs</p>
                </div>
                </li>
                <li className={styles.aboutItem}><img src={ui} alt="ui icon"/>
                <div className={styles.aboutItemText}>
                    <h3>UI Designer</h3>
                    <p>I have designed multiple landing pages and have created
                    design systems as well</p>
                </div>
                </li>
            </ul>

        </div>
    </section>
}