import React from 'react'
import './services.css'
import {BiCheck} from 'react-icons/bi'

const Services = () => {
  return (
  <section id="services">
    <h5>what i offer</h5>
    <h2>services</h2>
    <div className="container servicesContainer">
      <article className="service">
        <div className="serviceHead">
          <h3>ui design</h3>
        </div>
        <ul className="serviceList">
          <li>
            <BiCheck className='serviceListIcon'/>
            <p>Lorem ipsum dolor sit amet consectetur.</p>
          </li>
          <li>
            <BiCheck className='serviceListIcon'/>
            <p>Lorem ipsum dolor sit amet consectetur.</p>
          </li>
          <li>
            <BiCheck className='serviceListIcon'/>
            <p>Lorem ipsum dolor sit amet consectetur.</p>
          </li>
          <li>
            <BiCheck className='serviceListIcon'/>
            <p>Lorem ipsum dolor sit amet consectetur.</p>
          </li>
          <li>
            <BiCheck className='serviceListIcon'/>
            <p>Lorem ipsum dolor sit amet consectetur.</p>
          </li>
          <li>
            <BiCheck className='serviceListIcon'/>
            <p>Lorem ipsum dolor sit amet consectetur.</p>
          </li>
        </ul>
      </article>
      {/* END OF UI DESIGN */}
      <article className="service">
        <div className="serviceHead">
          <h3>web development</h3>
        </div>
        <ul className="serviceList">
          <li>
            <BiCheck className='serviceListIcon'/>
            <p>Lorem ipsum dolor sit amet consectetur.</p>
          </li>
          <li>
            <BiCheck className='serviceListIcon'/>
            <p>Lorem ipsum dolor sit amet consectetur.</p>
          </li>
          <li>
            <BiCheck className='serviceListIcon'/>
            <p>Lorem ipsum dolor sit amet consectetur.</p>
          </li>
          <li>
            <BiCheck className='serviceListIcon'/>
            <p>Lorem ipsum dolor sit amet consectetur.</p>
          </li>
          <li>
            <BiCheck className='serviceListIcon'/>
            <p>Lorem ipsum dolor sit amet consectetur.</p>
          </li>
          <li>
            <BiCheck className='serviceListIcon'/>
            <p>Lorem ipsum dolor sit amet consectetur.</p>
          </li>
          <li>
            <BiCheck className='serviceListIcon'/>
            <p>Lorem ipsum dolor sit amet consectetur.</p>
          </li>
        </ul>
      </article>
      {/* END OF WEB DEVELOPMENT*/}
      <article className="service">
        <div className="serviceHead">
          <h3>content creation</h3>
        </div>
        <ul className="serviceList">
          <li>
            <BiCheck className='serviceListIcon'/>
            <p>Lorem ipsum dolor sit amet consectetur.</p>
          </li>
          <li>
            <BiCheck className='serviceListIcon'/>
            <p>Lorem ipsum dolor sit amet consectetur.</p>
          </li>
          <li>
            <BiCheck className='serviceListIcon'/>
            <p>Lorem ipsum dolor sit amet consectetur.</p>
          </li>
          <li>
            <BiCheck className='serviceListIcon'/>
            <p>Lorem ipsum dolor sit amet consectetur.</p>
          </li>
          <li>
            <BiCheck className='serviceListIcon'/>
            <p>Lorem ipsum dolor sit amet consectetur.</p>
          </li>
          <li>
            <BiCheck className='serviceListIcon'/>
            <p>Lorem ipsum dolor sit amet consectetur.</p>
          </li>
        </ul>
      </article>
      {/* END OF CONTENT CREATION*/}
    </div>
  </section>
  )
}

export default Services