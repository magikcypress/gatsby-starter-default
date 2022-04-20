import * as React from "react"
import { Link } from "gatsby"
import { StaticImage } from "gatsby-plugin-image"

import Layout from "../components/layout"

const IndexPage = () => (
  <Layout>
    <h1>Hi!</h1>
    <p>Welcome to my Personal Root Website.</p>
    <StaticImage
      src="../images/me.jpg"
      width={1200}
      quality={95}
      formats={["auto", "webp", "avif"]}
      alt="Me at Tenerif"
      style={{ marginBottom: `1.45rem` }}
    />
    <p>
      <h2>Personal life</h2>

      I'am presales, I'm specialist with data and business intelligent<br />

      <Link to="/personal">My personal</Link> <br />

      <p>
        <Link to="http://vincent.legeard.info/cv">My first experience with my first professional life</Link>
      </p>

      <h2>Travel</h2>

      I've been to a few countries, many outside of Europe. I know very little about the European continent while I live there. The projects will be done over time and I should be able to find the time to travel to Italy, Norway, Scotland or Greece...

      <p>
        <Link to="/Maroc/">Follow my travel</Link>
      </p>
    </p>
  </Layout>
)

export default IndexPage