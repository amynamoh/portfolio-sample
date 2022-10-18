import React from 'react'
import './experience.css'
import {BsFillPatchCheckFill} from 'react-icons/bs'

const Experience = () => {
  return (
    <section id="experience">
      <h5>what skills i have</h5>
      <h2>my experience</h2>
      <div className="container experienceContainer">
        {/* front end */}
        <div>
          <h3>Frontend developent</h3>
          <div className="experienceContent">
            <article className="experienceDetails">
              <BsFillPatchCheckFill className='experienceDetailsicon'/>
              <div>
                <h4>HTML</h4>
                <small className='text-light'>Experienced</small>
              </div>
            </article>
            <article className="experienceDetails">
              <BsFillPatchCheckFill className='experienceDetailsicon'/>
              <div>
                <h4>JavaScript</h4>
                <small className='text-light'>Experienced</small>
              </div>
            </article>
            <article className="experienceDetails">
              <BsFillPatchCheckFill className='experienceDetailsicon'/>
              <div>
                <h4>CSS</h4>
               <small className='text-light'>Intermediate</small>
              </div>
            </article>
            <article className="experienceDetails">
              <BsFillPatchCheckFill className='experienceDetailsicon'/>
              <div>
                <h4>React</h4>
               <small className='text-light'>Experienced</small>
              </div>
            </article>
            <article className="experienceDetails">
              <BsFillPatchCheckFill className='experienceDetailsicon'/>
              <div>
                <h4>Tailwind</h4>
                <small className='text-light'>Experienced</small>
              </div>
            </article>
            <article className="experienceDetails">
              <BsFillPatchCheckFill className='experienceDetailsicon'/>
              <div>
                <h4>Vue</h4>
                <small className='text-light'>Intermediate</small>
              </div>
            </article>
          </div>
        </div>
        {/* backend */}
        <div>
          <h3>Backend developent</h3>
          <div className="experienceContent">
            <article className="experienceDetails">
              <BsFillPatchCheckFill className='experienceDetailsicon'/>
              <div>
                <h4>Vue</h4>
                <small className='text-light'>Intermediate</small>
              </div>
            </article>
            <article className="experienceDetails">
              <BsFillPatchCheckFill className='experienceDetailsicon'/>
              <div>
                <h4>NodeJS</h4>
                <small className='text-light'>Experienced</small>
              </div>
            </article>
            <article className="experienceDetails">
              <BsFillPatchCheckFill className='experienceDetailsicon'/>
              <div>
                <h4>PHP</h4>
                <small className='text-light'>Intermediate</small>
              </div>
            </article>
            <article className="experienceDetails">
              <BsFillPatchCheckFill className='experienceDetailsicon'/>
              <div>
                <h4>MongoDB</h4>
                <small className='text-light'>Experienced</small>
              </div>
            </article>
            <article className="experienceDetails">
              <BsFillPatchCheckFill className='experienceDetailsicon'/>
              <div>
                <h4>MYSQL</h4>
                <small className='text-light'>Experienced</small>
              </div>
            </article>
          </div>
        </div>
      </div>
    </section>
    )
}

export default Experience