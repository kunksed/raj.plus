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
import react from '../../content/thumbnails/react.png'
import vue from '../../content/thumbnails/vue.png'
import js from '../../content/thumbnails/js.png'

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
                  I'm an entrepreneur operating in the domain of education. I love to learn while 
                  helping others learn. I'm currently building <a href="https://novasemita.com" target="_blank"> 
                  Nova Semita</a>, a fellowship which empowers the best of Indian talent.
              </p>
              <p>
                My interests are diverse and across scales - I majored in physics and dabble in thinking about technology & society.
                I spend considerable time learning and interacting with others on the internet. I am trying to <a href="/learn">learn in public</a> in a bid to share my insights and get feedback. 
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
              <Link to="/getting-started-with-react" className="article-callout">
                <img src={react} alt="React" /> React
              </Link>
              <Link to="/getting-started-with-vue" className="article-callout">
                <img src={vue} alt="Vue" /> Vue
              </Link>
              <Link to="/es6-syntax-and-feature-overview/" className="article-callout">
                <img src={js} alt="JS" /> JavaScript ES6
              </Link>
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

          <section className="section">
            <h2>{`Other People's Opinions`}</h2>
            <div className="quotations">
              <blockquote className="quotation">
                <p>
                  {`“It's no exaggeration to say that I
                wouldn't currently have a job in development without this site. So thanks for
                ruining my life, Tania.”`}
                </p>
                <cite>— Craig</cite>
              </blockquote>
              <blockquote className="quotation">
                <p>
                  {`“Not to get too dramatic, but I find your site to be an unspeakably beautiful
                lifeboat in an overwhelming sea of technical jargon and shite.”`}
                </p>
                <cite>— Lori</cite>
              </blockquote>
            </div>
          </section>

          <section className="newsletter-section section">
            <h2>Join the Newsletter</h2>
            <p>
              I write about JavaScript, programming, and front-end design. Join over {' '}
              <strong class="pink">6,000</strong> other developers in keeping up with my content.
              Unsubscribe whenever. <u>Never any spam, ads, or affiliate links.</u>
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
