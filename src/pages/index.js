import React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
import Image from "../components/image"
import SEO from "../components/seo"

const IndexPage = () => (
  <Layout>
    <SEO title="Home" />
    <h1>About Boozephreaks</h1>
    <p>Doctor Inkwell created Boozephreaks with Vitamin V. In 2006, he was curious about the differences between vodkas. After inviting 30 people to blind taste, rate and notate 30 vodkas, our good Doctor declared it to be the first Boozephreaks event. We've maintained that scientific curiosity and research-based approach since then. We currently have quarterly, monthly and weekly meetings to taste spirits, create cocktails, tour distilleries, invent new cocktail techniques and meet local bartenders. We're always looking to be social so sign up for our mailing list today!</p>
    <div style={{ maxWidth: `300px`, marginBottom: `1.45rem` }}>
      <Image />
    </div>
    <Link to="/page-2/">Go to page 2</Link> <br />
    <Link to="/using-typescript/">Go to "Using TypeScript"</Link>
  </Layout>
)

export default IndexPage
