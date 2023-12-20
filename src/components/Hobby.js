import { React, useEffect, useState } from 'react'

function Hobby(props) {
    const hobby = props.hobby;
    return (
        <div className="col-md-4">
            <div className="hobby-div">
                <img src={hobby.imageUri} alt="A picture of books" />
                <h3>{hobby?.name}</h3>
                <p>{hobby?.description}</p>
            </div>
        </div>
    )
}

export default Hobby