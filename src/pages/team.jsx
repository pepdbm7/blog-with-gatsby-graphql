import React from "react"
//reactstrap:
import { Card, CardText, CardBody, CardHeader, Row } from "reactstrap"

//comopnents:
import SEO from "../components/seo"
import Layout from "../components/layout"
import Lebron from "../images/lebron.png"

//utils:
import authors from "../utils/authors"

const Team = () => (
  <Layout pageTitle="Our Team">
    <SEO title="Our Team" keywords={[`gatsby`, `team`, `lebron`, `react`]} />
    <Row className="mb-4">
      <div className="col-md-3">
        <img src={Lebron} style={{ maxWidth: "100%" }} alt="Lebron pic" />
      </div>
      <div className="col-md-8">
        <Card style={{ minHeight: "100%" }}>
          <CardBody>
            <CardHeader>{authors[0].name}</CardHeader>
            <CardText>{authors[0].bio}</CardText>
          </CardBody>
        </Card>
      </div>
    </Row>
  </Layout>
)

export default Team
