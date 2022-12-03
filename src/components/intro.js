import React from 'react';
// import ButtonSaya from './ButtonSaya';
import Image from './img.JPG'; 

function Intro () {
  return (
    <div className="section text-light intro" id="intro">
        <div className="container text-center" id="in">
          
           <img className="avatar" src={Image}/>
            <h1>Janna Donna Rachel Mesak</h1>
            <h4>Front-End Web Developer</h4>
      
        </div>
    </div>
  )
}

export default Intro;