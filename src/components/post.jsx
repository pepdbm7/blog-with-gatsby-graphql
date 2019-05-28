import React from "react"
import { Link } from "gatsby"
import Img from "gatsby-image"
import PropTypes from "prop-types"

//utils:
import { slugify } from "../utils/slugify"

//reactstrap:
import {
  Card,
  CardTitle,
  CardText,
  CardSubtitle,
  CardBody,
  Badge,
} from "reactstrap"

const Post = ({ title, author, slug, date, body, fluid, tags }) => {
  return (
    <Card>
      <Img className="card-image-top" fluid={fluid} />
      <CardBody>
        <CardTitle tag="h3" className="text-danger text-underlined">
          {title}
        </CardTitle>
        <CardSubtitle>
          <span className="text-primary">{date}</span> by{" "}
          <span className="text-primary">{author}</span>
        </CardSubtitle>
        <CardText>{body}</CardText>
        <ul className="post-tags">
          {tags.map((tag, i) => (
            <li key={i}>
              <Link to={`/tag/${slugify(tag)}`} />
              <Badge color="primary" className="text-lowercase">
                {tag}
              </Badge>
            </li>
          ))}
        </ul>
        {/* <Link to={slug}className="btn btn-outline-primary float-right">
          Read more
        </Link> */}
      </CardBody>
    </Card>
  )
}

Post.propTypes = {
  title: PropTypes.string,
  author: PropTypes.string,
  slug: PropTypes.string,
  date: PropTypes.string,
  body: PropTypes.string,
}

export default Post
