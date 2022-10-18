import React from 'react'
import './header.css'
import CTA from './CTA'
import ME from '../../assets/nott.png'
import HeaderSocials from './headerSocials'

const Header = () => {
  return (
    <header>
        <div className="container headerContainer">
            <h5>Hello I'm</h5>
            <h1>Amina</h1>
            <h5 className="text-light">FrontEnd Developer</h5>
            <CTA />
            <HeaderSocials />
            
            <div className="me">
                <img src={ME} alt="me" />
            </div>
            <a href="#contact" className='scrollDown'>Scroll Down</a>

        </div>
    </header>
  )
}

export default Header