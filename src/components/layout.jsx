import React from "react"
import PropTypes from "prop-types"
import { StaticQuery, graphql } from "gatsby"

//reactstrap:
import { Row, Col } from "reactstrap"

//components:
import Header from "./header"
import Sidebar from "./sidebar"
import Footer from "./footer"

//styles:
import "../styles/index.scss"

const Layout = ({ authorImageFluid, children, pageTitle, postAuthor }) => (
  <StaticQuery
    query={graphql`
      query SiteTitleQuery {
        site {
          siteMetadata {
            title
          }
        }
      }
    `}
    render={data => (
      <>
        {/* fontawesome cdn: */}
        <link
          rel="stylesheet"
          href="https://use.fontawesome.com/releases/v5.8.2/css/all.css"
          integrity="sha384-oS3vJWv+0UjzBfQzYUhtDYW+Pj2yciDJxpsK1OYPAYjqT085Qq/1cq5FLXAZQ7Ay"
          crossOrigin="anonymous"
        />

        <Header siteTitle={data.site.siteMetadata.title} />
        <div className="container" id="content">
          <h1>{pageTitle}</h1>
          <Row>
            <Col md="8">{children}</Col>
            <Col md="4">
              <Sidebar author={postAuthor} authorFluid={authorImageFluid} />
            </Col>
          </Row>
        </div>
        <Footer />
      </>
    )}
  />
)

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
