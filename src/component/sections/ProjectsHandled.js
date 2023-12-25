import React from 'react'
import '../styles/project.css';

export default function ProjectsHandled() {
    return (
        <div id="projects" className='projects-container'>
            <div className='project-inner-container'>
                <div className='project-title'>
                    <h1>PROJECTS</h1>
                </div>
                <div className='project-card-container'>
                    <ProjectCard projectinfo={'A simulator to teach the students the physics behind flying drones.'}
                        benefits={['Project lead', 'UI/UX', 'Game programming']} rank={'#01'}
                    >Drone Simulator</ProjectCard>
                    <ProjectCard projectinfo={'A block coding Web app that teaches basic programming concepts'}
                        benefits={['Physics code blocks', 'JavaScript Programming', '']} rank={'#02'}
                    >Enablar Code</ProjectCard>
                    <ProjectCard projectinfo={'A web application with multiple pages for displaying data, designed for educational institutions.'}
                        benefits={['Frond end development', 'Testing/Debugging', '']} rank={'#03'}
                    >React Dashboard</ProjectCard>
                    <ProjectCard projectinfo={'Various AR & VR Applications using Unity3D'}
                        benefits={['3D modeling', 'UI/UX', 'Application programming']} rank={'#04'}
                    >AR & VR Apps</ProjectCard>
                </div>
            </div>
        </div>
    )
}


const ProjectCard = (props) => {
    return (
        <div className='project-card'>
        <div className='project-card-title'>
            <div>
                <div style={{ height: '1rem' }}></div>
                <h2>{props.children}</h2>
            </div>
            <h1 style={{ color: '#888' }} className='project-rank'>{props.rank}</h1>
        </div>
        <div className='project-info'>
            <div style={{ height: '3.5rem' }}></div>
            <div style={{ display: 'flex' }}>
                <div style={{ width: '8rem' }}></div>
                <div className='project-info-inner'>
                    <p>
                        {props.projectinfo}
                    </p>
                    <ul className='project-contributions'>
                        <li><p>{props.benefits[0]}</p></li>
                        <li><p>{props.benefits[1]}</p></li>
                        {props.benefits[2].length >0 && <li><p>{props.benefits[2]}</p></li>}
                    </ul>
                </div>
            </div>
        </div>
    </div>
    )
}