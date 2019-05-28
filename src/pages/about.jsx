import React from "react"
//components:
import Layout from "../components/layout"
import SEO from "../components/seo"

const AboutPage = () => (
  <Layout pageTitle="About us">
    <SEO title="About" keywords={[`gatsby`, `about`, `react`, `pep`]} />
    <p>
      Lorem ipsum dolor sit amet consectetur adipisicing elit. Exercitationem
      animi deleniti sunt aliquam perferendis dolores temporibus omnis molestiae
      accusantium, cumque nobis iure ex reiciendis iste. Officiis nihil
      explicabo repudiandae iusto.
    </p>
  </Layout>
)

export default AboutPage
