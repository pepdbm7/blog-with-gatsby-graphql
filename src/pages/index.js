import React from "react"
import { graphql, StaticQuery } from "gatsby"

//components:
import Layout from "../components/layout"
import SEO from "../components/seo"
import Post from "../components/post"

const IndexPage = () => (
  <Layout>
    <SEO title="Home" description="This is a Pep's project" />
    <h1>Welcome to my static website</h1>
    <p>This is a Pep's project</p>
    <div style={{ maxWidth: `300px`, marginBottom: `1.45rem` }} />
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
              body={node.excerpt}
            />
          ))}
        </div>
      )}
    />
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
          }
          excerpt
        }
      }
    }
  }
`

export default IndexPage
