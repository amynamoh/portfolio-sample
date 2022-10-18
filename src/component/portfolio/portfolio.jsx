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
    title: 'crypto Currency Dashboard',
    github: 'https://github.com/amynamoh',
    demo: 'hhttps://cdn.dribbble.com/userupload/3814904/file/original-7a32ec6e60b53882eabd710213180723.png?compress=1&crop=164x123-1436x1077&resize=320x240&vertical=top'
  },
  {
    id: 2,
    image: IMG2,
    title: 'Figma Dashboard',
    github: 'https://github.com',
    demo: 'https://dribbble.com/shots/19650455-Mockingbirds'
  },
  {
    id: 3,
    image: IMG3,
    title: 'xxxxx x x x x x ',
    github: 'https://github.com',
    demo: 'https://dribbble.com/shots/19659078-Mural-website-design'
  },
  {
    id: 4,
    image: IMG4,
    title: 'yyyyy y yyy y',
    github: 'https://github.com',
    demo: 'https://max.adobe.com/?sdid=1K8FDB4T&mv=other'
  },
  {
    id: 5,
    image: IMG5,
    title: 'zzzz zz z z',
    github: 'https://github.com',
    demo: 'https://dribbble.com/shots/19659933-Spaces-Mobile'
  },
  {
    id: 6,
    image: IMG6,
    title: 'sghsbhj sjjkkkkkk',
    github: 'https://github.com',
    demo: 'https://cdn.dribbble.com/userupload/3814852/file/still-6e956ff187c3b09c919e913c8a96049f.png?compress=1&resize=320x240&vertical=top'
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