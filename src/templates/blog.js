import React from 'react';
import Layout from '../components/layout';
import SEO from '../components/seo';
import { graphql } from 'gatsby';
import BackgroundImage from 'gatsby-background-image';

export const query = graphql`query ($slug: String!) {
  markdownRemark(fields: {slug: {eq: $slug}}) {
    frontmatter {
      title
      description
      date(formatString: "MMMM DD, YYYY")
      thumbnail {
        childImageSharp {
          gatsbyImageData(quality: 80, layout: FULL_WIDTH, placeholder: BLURRED, backgroundColor: "white")
        }
      }
    }
    html
  }
}
`;

const Blog = (props) => {
  return <>
    <SEO pageTitle={`Blog - ${props?.data.markdownRemark.frontmatter.title}`}
      description={props?.data.markdownRemark.frontmatter.description} />
    <Layout>
      <BackgroundImage
        className='blog-header'
        fluid={[
          `linear-gradient(rgba(0, 0, 0, 0.4), rgba(0, 0, 0, 0.6))`,
          props.data.markdownRemark.frontmatter.thumbnail.childImageSharp.gatsbyImageData,
        ]}
      >
        <div className='container'>
          <h6 className='date'>
            {props.data.markdownRemark.frontmatter.date}
          </h6>
          <h1>{props.data.markdownRemark.frontmatter.title}</h1>
        </div>
      </BackgroundImage>

      <div className='blog-container section container'>
        <div
          className='blog-content'
          dangerouslySetInnerHTML={{ __html: props.data.markdownRemark.html }}
        ></div>
      </div>
    </Layout>
  </>;
};

export default Blog;
