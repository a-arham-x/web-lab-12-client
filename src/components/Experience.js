import React from 'react'
import "../css/Home.css"

function Experience(props) {
  const experiences = props.experiences;
  return (
    <>
            <h2 className="mt-4">Experience</h2>
            <div className="container">

            {experiences?.map((experience)=>{
              return <p>{experience?.role} | {experience?.organization} | {experience?.startMonth} {experience?.startYear} - {experience?.endMonth} {experience?.endYear}</p>
            })}

            </div>
        </>
  )
}

export default Experience