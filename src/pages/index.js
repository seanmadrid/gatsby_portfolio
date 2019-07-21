import React from "react"
import { Link } from "gatsby"
import SEO from "../components/seo"

const IndexPage = () => (
  <div>
    <SEO title="Home" />
    <div className="view-start">
      <h1>SEAN MADRID</h1>
      <h2>Web Developer / UX Designer</h2>
      <h3>Implementing big picture ideas, technical solutions, and a sense of style to web-based projects</h3>
      <Link to="/work" className="single-button">See My Work ></Link>
    </div>
  </div>
)

export default IndexPage
