import React from 'react'
import "../css/Skills.css"
import Projects from './Projects';

function Skills(props) {
    const skills = props.skills;
    const projects = props.projects;
    
  return (
    <div className="container text-center">
        <h1 className="mt-4">Abdul Arham</h1>
        <h2>Software Engineer</h2>
        <p>Islamabad, Pakistan</p>

        <h2>The skills I have got</h2>
        <div className="box">
            <p>
                I have been doing software programming for over two years and have developed many skills and worked on
                various projects. My skills include Python, JavaScript, MERN stack development, HTML, CSS, React,
                Express.js, Node.js, MongoDB, Flask, PostgreSQL, and more. I'm constantly learning and expanding my
                skill set to tackle various software engineering roles.
            </p>
        </div>

        <h2>My Skill Set</h2>
        <div className="box">
            {skills?.map((skill)=>{
                return <div className="skill-row">
                <img src={skill.imageUri} alt="Python Logo" />
                <ul className="list-unstyled">
                    <li>{skill.name}</li>
                    <li>
                        <pre>{skill.experienceLevel}</pre>
                    </li>
                </ul>
            </div>
            })}
        </div>
        <Projects projects={projects}/>
    </div>
  )
}

export default Skills