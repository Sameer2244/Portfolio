import React from 'react'
import '../styles/contact.css'

export default function Contact() {
  return (
    <div id='contact' className='contact-container'>
      <div className='contact-title-cover'>
        <div className='contact-title'>
          <h1>CONTACT ME</h1>
        </div>
      </div>
      <div className='contact-inner-container'>
        <div className='contact-form'>
          <form>
            <p>Your name</p>
            <input />
            <p>Your email</p>
            <input />
            <p>Subject</p>
            <input />
            <p>Your message</p>
            <textarea />
          </form>
          <a className='contact-btn'>Send</a>
        </div>
        <img className='contact-image' src='./Images/contact.png' />
      </div>
      <div className='social-media'>
        <a href='https://www.linkedin.com/in/sameer-kadam-17834614b/' target={'_blank'}><img src='./Images/linkedin.png' /></a>
        <a href='https://github.com/Sameer2244' target={'_blank'}><img src='./Images/github.png' /></a>
        <a href='https://twitter.com/ur0meimu' target={'_blank'}><img src='./Images/twitter.png' /></a>
      </div>
    </div>
  )
}
