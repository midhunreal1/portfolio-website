import React from 'react'
import './portfolio.css'
import IMG1 from '../../assets/portfolio1.jpg'
import IMG2 from '../../assets/portfolio2.jpg'
import IMG3 from '../../assets/portfolio3.jpg'


const data = [
  {
    id: 1,
    image:IMG1,
    title: 'Health-blog-website',
    github: 'https://github.com/midhunreal1/blog-bootstrap-project',
    demo: 'https://midhunreal1.github.io/blog-bootstrap-project/'
  },
  {
    id: 2,
    image:IMG2,
    title: 'Water-sports-website',
    github: 'https://github.com/midhunreal1/water-sports-website',
    demo: 'https://midhunreal1.github.io/water-sports-website/'
  },
  {
    id: 3,
    image:IMG3,
    title: 'Cake-website',
    github: 'https://github.com/midhunreal1/cake-website',
    demo: 'https://midhunreal1.github.io/cake-website/'
  }
]

const Portfolio = () => {
  return (
    <section id="portfolio">
      <h5>My Recent Work</h5>
      <h2>Portfolio</h2>
      <div className='container portfolio__container'>
        {
          data.map(({id,image,title,github,demo}) => {
            return(
              <article key={id} className='portfolio__item'>
              <div className='portfolio__item-image'>
                <img src={image} alt={title} />
              </div>
              <h3>{title}</h3>
              <div className='portfolio__item-cta'>
              <a href={github} className='btn' target='_blank'>Github</a>
              <a href={demo} className='btn btn-primary' target='_blank'>Live Demo</a>
              </div>
            </article>)
            })
        }
      </div>
    </section>
  )
}

export default Portfolio
