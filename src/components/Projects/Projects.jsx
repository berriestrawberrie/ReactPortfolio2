import React from "react";
import styles from '../../components/Projects/Projects.module.css'
import projects from '../../data/projects.json'
import { ProjectCards } from "./ProjectsCard";

export const Projects = () =>{

    return <section className={styles.container}>
       <h2 className={styles.title}>Projects</h2>
       <div className={styles.projects}>
            {projects.map((project,id)=>{
                return <ProjectCards key={id} project={project} />
            })}
       </div>
    </section>
}