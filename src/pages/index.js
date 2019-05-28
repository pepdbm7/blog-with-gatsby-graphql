import React from "react"
import { graphql, StaticQuery } from "gatsby"
import { Row, Col } from "reactstrap"

//components:
import Layout from "../components/layout"
import SEO from "../components/seo"
import Post from "../components/post"

const IndexPage = () => (
  <Layout pageTitle="Welcome to my static website">
    <SEO
      title="Home"
      description="This is a Pep's project"
      keywords={[`gatsby`, `application`, `blog`, `react`]}
    />
    <p>This is a Pep's project</p>
    <StaticQuery
      query={indexQuery}
      render={data => (
        <div>
          {data.allMarkdownRemark.edges.map(({ node }) => (
            <Post
              key={node.id}
              title={node.frontmatter.title}
              author={node.frontmatter.author}
              slug={node.fields.slug}
              date={node.frontmatter.date}
              tags={node.frontmatter.tags}
              body={node.excerpt}
              fluid={node.frontmatter.image.childImageSharp.fluid}
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
          fields {
            slug
          }
          excerpt
        }
      }
    }
  }
`

export default IndexPage
