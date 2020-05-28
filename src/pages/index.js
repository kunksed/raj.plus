import React, { Component } from 'react'
import Helmet from 'react-helmet'
import { graphql, Link } from 'gatsby'
import GitHubButton from 'react-github-btn'
import Layout from '../layout'
import PostListing from '../components/PostListing'
import ProjectListing from '../components/ProjectListing'
import SimpleListing from '../components/SimpleListing'
import NewsletterForm from '../components/NewsletterForm'
import SEO from '../components/SEO'
import config from '../../data/SiteConfig'
import projects from '../../data/projects'
import speaking from '../../data/speaking'
import publications from '../../data/publications'
import transfer from '../../content/thumbnails/transfer.png'
import profits from '../../content/thumbnails/profits.png'
import paperplane from '../../content/thumbnails/paper-plane.png'

export default class Index extends Component {
  render() {
    const { data } = this.props

    const latestPostEdges = data.latest.edges
    const popularPostEdges = data.popular.edges

    return (
      <Layout>
        <Helmet title={`${config.siteTitle} – Entrepreneur, Learner`} />
        <SEO />
        <div className="container">
          <div className="lead">
            <div>
              <h1>{`Hi, I'm Raj`}</h1>
              <p>
                  I'm an entrepreneur studying how Indians can make money online. I operate best in early stage conditions -- idea validation, building MVPs and growth. Bootstrapped <a href="https://novasemita.com" target="_blank"> 
                  Nova Semita</a>, helped students get tech jobs at startups.
              </p>
              <p>
                My interests are diverse and across scales - I majored in physics and dabble in thinking about technology, economics & society.
                I spend considerable time learning and interacting with others on the internet, especially on Twitter. I <a href="/learn">learn in public</a>. 
              </p>
              <div className="social-buttons">
                <div>
                  <a
                    className="twitter-follow-button"
                    href="https://twitter.com/kunksed"
                    data-size="large"
                    data-show-screen-name="false"
                  >
                    Follow @kunksed
                  </a>
                </div>
                <div>
                </div>
              </div>
            </div>
            <div className="callouts">
            <center> On My Mind 👇🏽 </center>
              <a href="https://www.ribbonfarm.com/2019/02/28/markets-are-eating-the-world/" className="article-callout">
                <img src={transfer} alt="Marketplace" /> Marketplaces
              </a>
              <a href="https://medium.com/@eriktorenberg_/life-capital-9e5028c0ea12" className="article-callout">
                <img src={profits} alt="Life Capital" /> Life Capital
              </a>
              <a href="https://freelearners.org" className="article-callout">
                <img src={paperplane} alt="Free Learning" /> Free Learning
              </a>
            </div>
          </div>
        </div>

        <div className="container front-page">
        <section className="section">
            <h2>Projects in Progress</h2>
            <ProjectListing projects={projects} />
          </section>

          <section className="section">
            <h2>Latest Essays</h2>
            <PostListing simple postEdges={latestPostEdges} />
          </section>

          {/*
          <section className="section">
            <h2>Most Popular</h2>
            <PostListing simple postEdges={popularPostEdges} />
          </section>
          */}

          <section className="section">
            <h2>Publications</h2>
            <SimpleListing simple data={publications} />
          </section>

          <section className="section">
            <h2>Speaking</h2>
            <SimpleListing simple data={speaking} />
          </section>

          <section className="newsletter-section section">
            <h2>Join my Newsletter</h2>
            <p>
            I am trying to regularly write down thoughts on mental models and frameworks, life as a founder, suggestions for new apps and products, the future of learning as well as what I am reading and listening to as of late. 
            Subscribe, maybe? 
            </p>
            <NewsletterForm />
          </section>
        </div>
      </Layout>
    )
  }
}

export const pageQuery = graphql`
  query IndexQuery {
    latest: allMarkdownRemark(
      limit: 6
      sort: { fields: [fields___date], order: DESC }
      filter: { frontmatter: { template: { eq: "post" } } }
    ) {
      edges {
        node {
          fields {
            slug
            date
          }
          excerpt
          timeToRead
          frontmatter {
            title
            tags
            categories
            thumbnail {
              childImageSharp {
                fixed(width: 150, height: 150) {
                  ...GatsbyImageSharpFixed
                }
              }
            }
            date
            template
          }
        }
      }
    }
    popular: allMarkdownRemark(
      limit: 7
      sort: { fields: [fields___date], order: DESC }
      filter: { frontmatter: { categories: { eq: "Popular" } } }
    ) {
      edges {
        node {
          fields {
            slug
            date
          }
          excerpt
          timeToRead
          frontmatter {
            title
            tags
            categories
            thumbnail {
              childImageSharp {
                fixed(width: 150, height: 150) {
                  ...GatsbyImageSharpFixed
                }
              }
            }
            date
            template
          }
        }
      }
    }
  }
`
