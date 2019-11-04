import React from 'react'
import Link from 'gatsby-link'

const IndexPage = () => (
  <div>
    <div className="Hero">
     <div className="HeroGroup">
        <h1>Come and order <br />home made cakes <br />and tarts for your fest</h1>
        <p>Complete course about the best tools and design</p>
        <p>Now go build something great.</p>
        <Link to='/video'>Watvh the video</Link>
        <Link to="/page-2/">Go to page 2</Link>
      </div>
    </div>
  </div>
)

export default IndexPage
