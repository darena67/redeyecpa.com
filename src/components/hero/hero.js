import React from "react"
import HeroImage from "../../images/hero-headshot.png"
import HeroQuotes from "../../images/hero-quotes.png"

import { useStaticQuery, graphql, Link } from "gatsby"
import BackgroundImage from "gatsby-background-image"

import "./home-hero.scss"

const HomeHero = ({heroQuote}) => {
  const data = useStaticQuery(graphql`
    query {

      backgroundImage: file(relativePath: { eq: "hero-bg.jpg" }) {
        childImageSharp {
          fluid(maxWidth: 1920) {
            ...GatsbyImageSharpFluid
          }
        }
      }
    }
  `)
  return (
    <BackgroundImage
      className="homehero"
      fluid={data.backgroundImage.childImageSharp.fluid}
    >
      <div className="container">
        <div className="hero__image">
          <img src={HeroImage} alt="" />
        </div>

        <div className="hero__blockquote">
          <img src={HeroQuotes} alt="" className="hero__doublequote" />
          <div
            className='hero__quote'
            dangerouslySetInnerHTML={{ __html: heroQuote }}
          ></div>
        </div>
        <h1 className="hero__text">
          Do you want to pay less in
          <span className="text-highlight"> Cannabis</span> taxes?
        </h1>
        <Link to="/contact/" className="btn hero__btn">
          Get Started
        </Link>
      </div>
    </BackgroundImage>
  )
}

export default HomeHero
