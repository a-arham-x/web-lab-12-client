import React from 'react'
import "../css/Home.css"
import Education from './Education'
import Experience from './Experience'

function Home(props) {
  return (
    <div className="container text-center">
        <h1 className="mt-4">Abdul Arham</h1>
        <h2>Software Engineer</h2>
        <p>Islamabad, Pakistan</p>

        <div className="d-flex justify-content-center">
            <img className="img-fluid max-width-500 rounded-circle" src={require("../images/my_pic1.jpg")} alt="A picture of me" />
        </div>

        <h2 className="mt-4">About Me</h2>
        <div className="container">
            <p>Hi, I am Abdul Arham, a Software Engineer who is passionate about creating intuitive designs and
                presenting software solutions. I am skilled in web development and currently honing my skills in the
                field of Data Engineering. I am experienced with different technologies including Python, JavaScript,
                React, Node.js, and many more. You can always contact me in case of any request or query.</p>
        </div>

        <Education education={props.education}/>
        <Experience experiences={props.experiences}/>

        <h2 className="mt-4">Who Am I?</h2>
        <div className="container">
            <p>I am someone who loves to code</p>
            <p>Someone who loves to have fun</p>
            <p>And someone who loves to sleep</p>
        </div>
    </div>
  )
}

export default Home