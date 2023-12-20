import React from 'react'
import "../css/Hobbies.css";
import Hobby from './Hobby';

function Hobbies(props) {
    const hobbies = props.hobbies;
  return (
    <div className="container text-center">
        <h1 className="mt-4">Abdul Arham</h1>
        <h2>Software Engineer</h2>
        <p>Islamabad, Pakistan</p>

        <h2>My Hobbies</h2>
        <div className="container">
            <div className="row">
                {hobbies?.map((hobby)=>{
                    return <Hobby hobby={hobby}/>
                })}
            </div>
        </div>
    </div>
  )
}

export default Hobbies