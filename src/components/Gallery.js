import React from 'react'
import "../css/Gallery.css"

function Gallery(props) {
    const galleryImages = props.galleryImages;
  return (
    <div className="container text-center">
        <h1 className="mt-4">Abdul Arham</h1>
        <h2>Software Engineer</h2>
        <p>Islamabad, Pakistan</p>

        <h2>Some more Me</h2>

        <div className="container">
            <div className="row">
            {galleryImages?.map((galleryImage)=>{
            return <div className="col-md-6">
            <div className="image-gallery">
                <img src={galleryImage.imageUri} alt="A picture of me" />
            </div>
        </div>
        })}
            </div>
        </div>

        <div className="my-text">
            <p>As a developer and as a student, one has to give a considerable amount of time to their work. It could be
                for academic purposes, it could be for satisfying some client, or it could be spending time on your
                skills. With all this, I believe one should have time for oneself and one's family and friends. So I
                believe in just enjoying life and staying happy in all situations. It's important to be grateful for
                what you have while trying to make another achievement. So keep working hard and also chill!</p>
        </div>
    </div>
  )
}

export default Gallery