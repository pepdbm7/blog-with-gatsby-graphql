import React from "react"
import { Link } from "gatsby"
import PropTypes from "prop-types"

import { Card, CardTitle, CardText, CardSubtitle, CardBody } from "reactstrap"

const Post = ({ title, author, path, date, body }) => {
  return (
    <Card>
      <CardBody>
        <CardTitle>{title}</CardTitle>
        <CardSubtitle>
          <span className="text-muted">{date}</span>
          <span className="text-muted">{author}</span>
        </CardSubtitle>
        <CardText>{body}</CardText>
        <Link to={path} className="btn btn-outline-primary float-right">
          Read more
        </Link>
      </CardBody>
    </Card>
  )
}

Post.propTypes = {
  title: PropTypes.string,
  author: PropTypes.string,
  path: PropTypes.string,
  date: PropTypes.string,
  body: PropTypes.string,
}

export default Post
