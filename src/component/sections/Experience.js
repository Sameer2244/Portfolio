import React, { useState } from 'react'
import '../styles/experience.css'
import '../styles/common.css'
export default function Experience() {
    const [selectExpeience, setselectExpeience] = useState([true, false, false])
    return (
        <div id="experience" className='experience-container'>
            <div className='experience-inner-container'>
                <div className='experience-title'>
                    <h1>EXPERIENCE</h1>
                </div>

                <div className='experience-info-container'>
                    <div className='experience-sidebar'></div>
                    <div  data-aos="fade-right" className='experience-info'>
                        <div className='experience-timeline-container'>
                            <div onClick={() => { setselectExpeience([true, false, false]) }} className={selectExpeience[0] ? 'experience-timeline-item shadow active' : 'experience-timeline-item shadow'}>
                                <p>January 2022 - Current</p>
                                <p>
                                    Systems Engineer <br />Eduvance, Mumbai, India
                                </p>
                            </div>
                            <div onClick={() => { setselectExpeience([false, true, false]) }} className={selectExpeience[1] ? 'experience-timeline-item shadow active' : 'experience-timeline-item shadow'}>
                                <p>July 2021 - December 2021</p>
                                <p>
                                    Junior Systems Engineer <br />Eduvance, Mumbai, India
                                </p>
                            </div>
                            <div onClick={() => { setselectExpeience([false, false, true]) }} className={selectExpeience[2] ? 'experience-timeline-item shadow active' : 'experience-timeline-item shadow'}>
                                <p>April 2021 - June 2021</p>
                                <p>
                                    Intern <br />Eduvance, Mumbai, India
                                </p>
                            </div>
                        </div>
                        <div className='experience-summary shadow'>
                            {
                                selectExpeience[0] ?
                                    <div className='experience-summary-item'>
                                        <ul>
                                            <li><p>Created responsive web applications using ReactJs.</p></li>
                                            <li><p>Designed, developed, and tested game software, exceeding user expectations.</p></li>
                                            <li><p>Enhanced working relationships by participating in team building activities.</p></li>
                                            <li><p>Troubleshoot problems and diagnosed system faults.</p></li>
                                            <li><p>Contributed to back end experience and collaborated on APIs.</p></li>
                                            <li><p>Researched new programming languages, frameworks, and technologies to stay abreast with the latest trends.</p></li>
                                        </ul>
                                    </div>
                                    :
                                    selectExpeience[1] ?
                                        <div className='experience-summary-item'>
                                            <ul>
                                                <li><p>Created responsive web applications using JavaScript and ReactJs, aiding smooth customer experiences.</p></li>
                                                <li><p>Managed project and web strategic planning for the entire team.</p></li>
                                                <li><p>Communicated clearly with web development teams, ascertaining daily tasks and completing to exact directions.</p></li>
                                                <li><p>Handled special projects designated by a senior developer.</p></li>
                                                <li><p>Contributed to back end experience and collaborated on APIs.</p></li>
                                                <li><p>Designed, developed and tested game software, exceeding user expectations.</p></li>
                                            </ul>
                                        </div>
                                        : selectExpeience[2] ?
                                            <div className='experience-summary-item'>
                                                <ul>
                                                    <li><p>Assisted and Managed web application development projects, including design and development.</p></li>
                                                    <li><p>Learned and Wrote high-quality code for applications to ensure a smooth finish.</p></li>
                                                </ul>
                                            </div> : <></>
                            }
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
