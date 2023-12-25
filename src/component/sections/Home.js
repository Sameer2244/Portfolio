import React, { useState,useEffect } from 'react'
import '../styles/home.css'
import { TypeAnimation } from 'react-type-animation';
export default function Home() {
  const [showInfo, setShowInfo] = useState(false)
  useEffect(() => {
    
  setTimeout(() => {
    setShowInfo(true)
  }, 2000);
  }, [])
  
  return (
    <div className="home-container">
    <div style={{ width:'15%' }}></div>
      <div className="info-container">
        <div className="myimage"></div>
        <div className="info-space">
          <TypeAnimation
            sequence={[
              '', // Types 'One'
              1000, // Waits 1s
              'SAMEER KADAM', // Deletes 'One' and types 'Two'
            ]}
            wrapper="h1"
            cursor={true}
            style={{ background: '#F3EFE0',boxShadow: '4px 4px 0 0 #000' }}
          />
          {/* <h1>SAMEER KADAM</h1> */}
          <p style={showInfo ? {opacity:'1'}:{}}>REACT DEVELOPER</p>
          <p style={showInfo ? {opacity:'1', width: "23.5rem"}:{ width: "23.5rem" }}>Hi! I’m Sameer, and Welcome to my website</p>
          <div className="buttons">
            <a style={showInfo ? {opacity:'1'}:{opacity:'0'}} className="btn contact">Contact</a>
            <a style={showInfo ? {opacity:'1'}:{opacity:'0'}} className="btn resume">Resume</a>
          </div>
        </div>
      </div>

    </div>
  )
}
