import React from "react"
import { graphql, Link } from "gatsby"
import SEO from "../components/seo"
import { slugify } from "../utils/slugify"

//reactstrap:
import { Badge, Card, CardBody, CardSubtitle } from "reactstrap"

//components:
import Layout from "../components/layout"

const SinglePost = ({ data }) => {
  const post = data.markdownRemark.frontmatter

  return (
    <Layout>
      <SEO
        title={post.title}
        author={post.author}
        keywords={post.tags}
        description={post.description}
      />
      <Card>
        <Img
          className="card-image-top"
          fluid={post.image.childImageSharp.fluid}
        />
        <CardBody>
          <CardSubtitle>
            <span className="text-info">{post.date}</span> by{" "}
            <span className="text-info">{post.author}</span>
          </CardSubtitle>
          <div dangeruslySetInnerHTML={{ __html: data.markdownRemark.html }} />
          <ul className="post-tags">
            {posQuery.tags.map((tag, i) => (
              <li key={i}>
                <Link to={`/tag/${slugify(tag)}`} />
                <Badge color="primary">{tag}</Badge>
              </li>
            ))}
          </ul>
        </CardBody>
      </Card>
    </Layout>
  )
}

export const posQuery = graphql`
  query blogPostBySlug($slug: String!) {
    markdownRemark(fields: { slug: { eq: $slug } }) {
      id
      html
      frontmatter {
        title
        author
        date(formatString: "MM DD YYYY")
        tags
        image {
          childImageSharp {
            fluid(maxWidth: 700) {
              ...GatsbyImageSharpFluid
            }
          }
        }
      }
    }
  }
`

export default SinglePost
