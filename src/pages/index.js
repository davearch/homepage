import React from "react"
import { Link } from "gatsby"
import Layout from "../components/layout"
import SEO from "../components/seo"
import BigAvatar from "../components/BigAvatar"
import Divider from "@material-ui/core/Divider"
import SkillsGrid from "../components/SkillsGrid"
import Info from "../components/Info"

const IndexPage = () => (
  <Layout>
    <SEO title="Home" keywords={[`gatsby`, `application`, `react`]} />
    <BigAvatar />
    <Divider />
    <Info />
    <SkillsGrid />
    <Link to="/page-2/">Go to page 2</Link> |
    <Link to="/contact">Go to contact page</Link> |
    <Link to="/portfolio">Go to portfolio page</Link>
  </Layout>
)

export default IndexPage
