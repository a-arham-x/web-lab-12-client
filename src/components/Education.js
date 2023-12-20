import React from 'react'
import "../css/Home.css"

function Education(props) {
    const education = props.education;
    return (
        <>
            <h2 className="mt-4">Education</h2>
            <div className="container">
                {education?.map((e) => {
                    return <p>{e?.level} | {e?.institute} | {e?.startYear} - {e?.endYear}</p>
                })}
            </div>
        </>
    )
}

export default Education