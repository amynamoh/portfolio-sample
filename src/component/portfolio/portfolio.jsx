import React from 'react'
import './portfolio.css'
import IMG1 from '../../assets/por1'
import IMG2 from '../../assets/por2'
import IMG3 from '../../assets/por3'
import IMG4 from '../../assets/por4'
import IMG5 from '../../assets/por5'
import IMG6 from '../../assets/por6'



const data=[
  {
    id: 1,
    image: IMG1,
    title: 'Crypto Dashboard',
    github: 'https://github.com/amynamoh',
    demo: 'https://www.linkedin.com/in/amina-mohammed-29b1b61a6/'
  },
  {
    id: 2,
    image: IMG2,
    title: 'Figma Dashboard',
    github: 'https://github.com/amynamoh',
    demo: 'https://www.linkedin.com/in/amina-mohammed-29b1b61a6/'
  },
  {
    id: 3,
    image: IMG3,
    title: 'linktree clone',
    github: 'https://github.com/amynamoh',
    demo: 'https://www.linkedin.com/in/amina-mohammed-29b1b61a6/'
  },
  {
    id: 4,
    image: IMG4,
    title: 'education website',
    github: 'https://github.com/amynamoh',
    demo: 'https://www.linkedin.com/in/amina-mohammed-29b1b61a6/'
  },
  {
    id: 5,
    image: IMG5,
    title: 'website landing page',
    github: 'https://github.com/amynamoh',
    demo: 'https://www.linkedin.com/in/amina-mohammed-29b1b61a6/'
  },
  {
    id: 6,
    image: IMG6,
    title: 'e-commerce website',
    github: 'https://github.com/amynamoh',
    demo: 'https://www.linkedin.com/in/amina-mohammed-29b1b61a6/'
  },
]

const Portfolio = () => {
  return (
    <section id="portfolio">
      <h5>my recent work</h5>
      <h2>portfolio</h2>
      <div className="container portfolioContainer">
        {
          data.map(({id, image, title, github, demo})=>{
            return(
              <article key={id} className="portfolioItem">
                <div className="portfolioItemImage">
                 <img src={image} alt="" />
                </div>
                <h3>{title}</h3>
                {/*specific project links */}
                <div className="portfolioItemCTA">
                  <a href={github} className='btn' target='__blank'>Github</a>
                  <a href={demo} className='btn btn-primary' target='__blank'>Live Demo</a>
                </div>
              </article>
            )
          })
        }
      </div>
    </section>
  )
}

export default Portfolio