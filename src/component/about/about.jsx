import React from 'react'
import './about.css'
// import ME from '../../assets/notMe'
import {FaAward} from 'react-icons/fa'
import {AiOutlineUser} from 'react-icons/ai'
import {VscFolderLibrary} from 'react-icons/vsc'


const About = () => {
  return (
    <section id="about">
      <h5>Get to know</h5>
      <h2>About me</h2>
      <div className="container aboutContainer">
        <div className="aboutMe">
          <div className="aboutMeImage">
            {/* <img src={ME} alt="About Image" /> */}
          </div>
        </div>
        <div className="aboutContent">
          <div className="aboutCards">
            <article className="aboutCard">
              <FaAward className='aboutCardIcon'/>
              <h5>Experience</h5>
              <small>Entry level FrontEnd Developer</small>
            </article>
            <article className="aboutCard">
              <AiOutlineUser className='aboutCardIcon'/>
              <h5>Clients</h5>
              <small>200+ Worldwide</small>
            </article>
            <article className="aboutCard">
              <VscFolderLibrary className='aboutCardIcon'/>
              <h5>Projects</h5>
              <small>80+ Completed</small>
            </article>
          </div>
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Nihil maiores ullam adipisci distinctio quod reiciendis odio rem dignissimos in aperiam deserunt, magnam sapiente eaque voluptatem excepturi provident unde doloremque. Quos?</p>
          <a href="#contact" className='btn btn-primary' >Let's talk</a>
        </div>
      </div>
      </section>
    )
}

export default About