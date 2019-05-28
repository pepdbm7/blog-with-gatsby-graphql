import PropTypes from "prop-types"
import React from "react"
import { graphql, StaticQuery, Link } from "gatsby"
import Img from "gatsby-image"
//reactstrap:
import {
  Card,
  CardTitle,
  CardBody,
  Form,
  FormGroup,
  Input,
  Button,
} from "reactstrap"

const Sidebar = () => (
  <div>
    <Card>
      <CardBody>
        <CardTitle />
        <Form className="text-center">
          <FormGroup>
            <Input
              type="email"
              name="email"
              placeholder="Write your email address..."
            />
          </FormGroup>
          <Button outline color="success">
            Subscribe
          </Button>
        </Form>
      </CardBody>
    </Card>
    <Card>
      <CardBody>
        <CardTitle>Advertisement</CardTitle>
        <img
          src="https://via.placeholder.com/320x200"
          alt="Advert"
          style={{ width: "100%" }}
        />
      </CardBody>
    </Card>
    <Card>
      <CardBody>
        <CardTitle>Recent Posts</CardTitle>
        <StaticQuery
          query={sidebarQuery}
          render={data => (
            <div>
              {data.allMarkdownRemark.edges.map(({ node }) => (
                <Card key={node.id}>
                  <Link to={node.fields.slug}>
                    <Img
                      className="card-image-top"
                      fluid={node.frontmatter.image.childImageSharp.fluid}
                    />
                  </Link>
                  <CardBody>
                    <CardTitle>
                      <Link to={node.fields.slug}>
                        {node.frontmatter.title}
                      </Link>
                    </CardTitle>
                  </CardBody>
                </Card>
              ))}
            </div>
          )}
        />
      </CardBody>
    </Card>
  </div>
)

const sidebarQuery = graphql`
  query sidebarQuery {
    allMarkdownRemark(
      sort: { fields: [frontmatter___date], order: DESC }
      limit: 3
    ) {
      edges {
        node {
          id
          frontmatter {
            title
            image {
              childImageSharp {
                fluid(maxWidth: 300) {
                  ...GatsbyImageSharpFluid
                }
              }
            }
          }
          fields {
            slug
          }
        }
      }
    }
  }
`

Sidebar.propTypes = {
  siteTitle: PropTypes.string,
}

export default Sidebar
