import React from "react";
import styles from '../../components/Projects/ProjectsCard.module.css'

export const ProjectCards = ({project}) =>{

    return <div className={styles.container} id="projects">
                    <img className={styles.image} src={project.imageSrc} alt={`Image of ${project.title}`} />
                    <h3 className={styles.title}>{project.title}</h3>
                    <p className={styles.description}>{project.description}</p>
                    <ul className={styles.skills}>{project.skills.map((skill,id)=>{
                       return <li className={styles.skill} key={id}>{skill}</li>
                    })}</ul>
                    <div className={styles.links}>
                        {project.demo? <a className={styles.link} href={project.demo}>Demo</a> : ""}
                         <a className={styles.link} href={project.source}>Source</a>
                    </div>
                </div>
}