import React from 'react'
import '../styles/about.css'
import '../styles/common.css'
export default function About() {
    return (
        <div id="about" className='about-container'>
            <div className='about-inner-container'>
                <div className='about-title'>
                    <h1>ABOUT</h1>
                </div>

                <div className='about-content'>
                    <div className='about-sidebar'></div>
                    <div data-aos="fade-right" className='about-content-info'>
                        <p>
                            Front End Developer with over two years of experience working with

                            HTML, CSS, Javascript, and ReactJS developing responsive web applications.

                            Finding solutions, determining complete client satisfaction, and ensuring my

                            company's as well as my own personal and professional growth.
                        </p>
                        <p>
                            I love creating and building responsive web application and tinker around

                            with new technologies.
                            Here are few technologies I’ve been working with:
                        </p>
                        <div className='skills'>
                            <ul>
                                <li>HTML/CSS/JavaScript</li>
                                <li>React</li>
                                <li>Node.js</li>
                            </ul>
                            <ul className='right-skills'>
                                <li>MongoDB</li>
                                <li>Unity3D</li>
                                <li>Blender</li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
