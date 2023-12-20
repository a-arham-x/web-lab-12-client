import React from 'react'
import "../css/Contact.css"

function Contact() {
  return (
    <div className="container text-center">
        <h2>Contact Me</h2>
        <form action="">
            <label for="name">Name</label>
            <input type="text" className="form-control" name="name" id="name" />
            <label for="email">Email</label>
            <input type="text" className="form-control" name="email" id="email" />
            <label for="message">Message</label>
            <textarea className="form-control" name="message" id="message" cols="30" rows="5"></textarea>
            <button type="submit" className="btn btn-primary">Submit</button>
        </form>
    </div>
  )
}

export default Contact