import React, { useContext, useState, useRef, useEffect } from 'react';
import {
  BrowserRouter as Router,
  Routes,
  Route
} from "react-router-dom";
import Navbar from './components/Navbar';
import Home from './components/Home';
import Footer from './components/Footer';
import Hobbies from './components/Hobbies';
import Gallery from './components/Gallery';
import Skills from './components/Skills';
import Contact from './components/Contact';
import Projects from './components/Projects';

function App() {

  const [ data, setData ] = useState([]);

  const callFetch = useRef(true);

  const host = process.env.REACT_APP_SERVER;

    const getData = async () => {
        const url = `${host}`;
        const response = await fetch(url, {
          method: "GET",
        });
        const json = await response.json(); 
        console.log(json.skills[0].imageUri);
        return json;
      }

  const fetchData = async () => {
    setData(await getData()); 
  }
  useEffect(() => {
    fetchData();
  }, []);




  return (
    <>
        <Navbar />
        {data && <Router>
          <Routes>
            <Route exact path="/" element={<Home education={data?.education} experiences={data?.experiences}/>} />
            <Route exact path="/hobbies" element={<Hobbies hobbies={data?.hobbies}/>} />
            <Route exact path="/gallery" element={<Gallery galleryImages={data?.galleryImages}/>} />
            <Route exact path="/skills" element={<Skills skills={data?.skills} projects={data?.projects}/>} />
            <Route exact path="/contact" element={<Contact />} />
          </Routes>
        </Router>}
        <Footer />
    </>
  );
}

export default App;
