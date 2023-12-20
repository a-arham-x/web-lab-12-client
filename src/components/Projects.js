import React from 'react'
import "../css/Skills.css"

function Projects(props) {

    const projects = props.projects;
    return (
        <>
            <h2>Projects</h2>
            <div className="box">
                <ul className="list-unstyled">
                    {projects?.map((project)=>{
                        return <li>
                        <h3>{project.name}</h3>
                        <div className="project">
                            <div className="projects-img">
                                {project.images.map((image)=>{
                                    return <a href={project.url} target="_blank">
                                        <img src={image.imageUri} alt="Project Screenshot" className="max-width-700" />
                                    </a>
                                })}
                            </div>
                            <p>{project.description}</p>
                            <div className="github-link"><a href={project.githubUrl}
                                target="_blank">GITHUB</a></div>
                        </div>
                    </li>
                    })}
                </ul>
            </div></>
    )
}

export default Projects