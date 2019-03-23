import React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
import SEO from "../components/seo"

const SecurityPage = () => (
  <Layout>
    <SEO title="Security Page" />
    <h1>Hi from the Security page</h1>
    <p>Welcome to the security page</p>
    <Link to="/">Go back to the homepage</Link>
  </Layout>
)

export default SecurityPage
