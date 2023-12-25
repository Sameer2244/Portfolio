import React from 'react'

export default function PersonalProjects() {
    return (
        <div className='project-personal-container'>
            <div className='project-inner-container'>
                <div className='project-title'>
                    <h1>PERSONAL PROJECTS</h1>
                </div>

                <div className='project-card-container'>
                    <SmallProjectCard source="./Images/project1.png">Todo web application</SmallProjectCard>
                    <SmallProjectCard source="./Images/project2.png">Quiz web application</SmallProjectCard>
                    <SmallProjectCard source="./Images/project3.png">Wordle clone</SmallProjectCard>
                    <SmallProjectCard source="./Images/project4.png">Weather web application</SmallProjectCard>
                    {/* <SmallProjectCard source="./Images/project56.png">RealTime Chat application</SmallProjectCard> */}
                    {/* <SmallProjectCard source="./Images/project56.png">Ecommerce Website</SmallProjectCard> */}
                </div>
            </div>
        </div>
    )
}


const SmallProjectCard = (props) => {
    return (
        <div className='small-project-card'>
            <img src={props.source}/>
            <p>{props.children}</p>
        </div>
    )
}
