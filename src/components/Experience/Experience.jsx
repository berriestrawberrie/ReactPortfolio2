import React from "react";
import skills from '../../data/skills.json'
import history from '../../data/history.json'
import styles from '../../components/Experience/Experience.module.css'

export const Experience = () =>{

    return <section id="experience" className={styles.container}>
    <h2 className={styles.title}>Experience</h2>
    <div className={styles.content}>
        <div className={styles.skills}>{
            skills.map((skill,id)=>{
                return <div key={id} className={styles.skill}>
                    <div className={styles.skillImgContainer}>
                    <img src={skill.imageSrc} alt={skill.title}/></div>
                    <p>{skill.title}</p>
                </div>
            })
        }
        </div>
        <ul className={styles.history}>{
            history.map((historyitem,id) => {
                return <li key={id} className={styles.historyItem}>
                    <img src={historyitem.imageSrc} alt={`${historyitem.organisation} Logo`}/>
                    <div className={styles.historyItemDetails}>
                        <h3>{`${historyitem.role}, ${historyitem.organisation}`}</h3>
                        <p>{`${historyitem.startDate}- ${historyitem.endDate}`}</p>
                        {/* LIST OUT ALL THE EXPERIENCES (E) */}
                        <ul>{historyitem.experiences.map((e,id)=>{
                            return <li key={id}>{e}</li>})
                        }</ul>
                    </div>
                </li>
            })
        }</ul>
    </div>
    </section>
}