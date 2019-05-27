import React from "react"
import { graphql, StaticQuery } from "gatsby"
import { Row, Col } from "reactstrap"

//components:
import Layout from "../components/layout"
import SEO from "../components/seo"
import Post from "../components/post"
import Sidebar from "../components/sidebar"

const IndexPage = () => (
  <Layout>
    <SEO title="Home" description="This is a Pep's project" />
    <h1>Welcome to my static website</h1>
    <p>This is a Pep's project</p>
    <div style={{ maxWidth: `300px`, marginBottom: `1.45rem` }} />
    <Row>
      <Col md="8">
        <StaticQuery
          query={indexQuery}
          render={data => (
            <div>
              {data.allMarkdownRemark.edges.map(({ node }) => (
                <Post
                  title={node.frontmatter.title}
                  author={node.frontmatter.author}
                  path={node.frontmatter.path}
                  date={node.frontmatter.date}
                  tags={node.frontmatter.tags}
                  body={node.excerpt}
                  fluid={node.frontmatter.image.childImageSharp.fluid}
                />
              ))}
            </div>
          )}
        />
      </Col>
      <Col md="4">
        <div style={{ width: "100%", height: "100%", backgroundColor: "gray" }}>
          <Sidebar />
        </div>
      </Col>
    </Row>
  </Layout>
)

const indexQuery = graphql`
  query {
    allMarkdownRemark(sort: { fields: [frontmatter___date], order: DESC }) {
      edges {
        node {
          id
          frontmatter {
            path
            title
            date(formatString: "DD MM YYYY")
            author
            tags
            image {
              childImageSharp {
                fluid(maxWidth: 600) {
                  ...GatsbyImageSharpFluid
                }
              }
            }
          }
          excerpt
        }
      }
    }
  }
`

export default IndexPage
