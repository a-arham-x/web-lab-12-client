import React from 'react';
import "../css/Footer.css";

function Footer() {
  return (
    <footer className="footer">
        <a href="https://www.linkedin.com/in/abdul-arham-252303247/" target="_blank" className="m-3"><img
                src={require("../images/linkedin-blue-logo-icon.png")} alt="LinkedIn Logo" style={{height: "30px"}} /></a>
        <a href="https://github.com/a-arham-x" target="_blank" className="m-3"><img src={require("../images/github-logo.png")} alt="GitHub Logo"
                style={{height: "30px"}} /></a>
    </footer>
  )
}

export default Footer