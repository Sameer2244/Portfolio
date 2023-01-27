import React, { useState, useRef, useEffect } from 'react'
import './styles/navbar.css';

export default function Navbar() {
    const [windowSize, setWindowSize] = useState([
        window.innerWidth,
        window.innerHeight,
    ]);

    const [mobilenavbar, setmobilenavbar] = useState(false);
    useEffect(() => {
        const handleWindowResize = () => {
            setWindowSize([window.innerWidth, window.innerHeight]);
        };

        window.addEventListener('resize', handleWindowResize);

        return () => {
            window.removeEventListener('resize', handleWindowResize);
        };
    });

    return (
        <div id="home" className='navbar-container'>

            <img className='navbar-logo' src='./Images/logo.png' />
            {
                windowSize[0] > 768 ? <div className='navbar-btn'>
                    <a href='#home'>HOME</a>
                    <a href='#about'>ABOUT</a>
                    <a href='#experience'>EXPERIENCE</a>
                    <a>PROJECTS</a>
                    <a>CONTACT</a>
                </div> :
                    <>
                        <div style={mobilenavbar ? { width: '100vw', height: '100vh' } : { width: '100vw', height: '0vh' }} className={'mobile-navbar-links'}>

                            <div className='mnavbar-header' style={mobilenavbar ? { visibility: 'visible' } : { visibility: 'hidden' }}>
                                <img className='navbar-logo-inside' src='./Images/logo.png' />
                                <img onClick={() => { setmobilenavbar(false) }} className='navbar-close' src='./Images/close.png' />
                            </div>
                            <div className='mnavbar-links navbar-btn' style={mobilenavbar ? { opacity: 1 } : { opacity: 0 }}>
                                <a href='#home' onClick={() => { setmobilenavbar(false) }}>HOME</a>
                                <a href='#about' onClick={() => { setmobilenavbar(false) }}>ABOUT</a>
                                <a href='#experience' onClick={() => { setmobilenavbar(false) }}>EXPERIENCE</a>
                                <a>PROJECTS</a>
                                <a>CONTACT</a>
                            </div>

                        </div>
                        <img className="burgermenu" onClick={() => { setmobilenavbar(true); console.log("open") }} src='./Images/burgermenu.png' />
                    </>
            }
        </div>
    )
}
