import React from 'react'
import "../css/Navbar.css"

function Navbar() {
  return (
    <nav className="navbar navbar-expand-lg navbar-dark">
        <div className="container">
            <a className="navbar-brand" href="#">Abdul Arham</a>
            <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav"
                aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                <span className="navbar-toggler-icon"></span>
            </button>
            <div className="collapse navbar-collapse" id="navbarNav">
                <ul className="navbar-nav">
                    <li className="nav-item">
                        <a className="nav-link" href="/">Home</a>
                    </li>
                    <li className="nav-item">
                        <a className="nav-link" href="/hobbies">Hobbies</a>
                    </li>
                    <li className="nav-item">
                        <a className="nav-link" href="/gallery">Gallery</a>
                    </li>
                    <li className="nav-item">
                        <a className="nav-link" href="/skills">Skills</a>
                    </li>
                    <li className="nav-item">
                        <a className="nav-link" href="/contact">Contact</a>
                    </li>
                </ul>
            </div>
        </div>
    </nav>
  )
}

export default Navbar