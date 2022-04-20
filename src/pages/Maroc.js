import * as React from "react"
import { Link } from "gatsby"
import { StaticImage } from "gatsby-plugin-image"

import Layout from "../components/layout"

const SecondPage = () => (
  <Layout>
    <h1>Marocco</h1>
    <p>This is my first trip, the one where I discovered how to travel by taking a hotel room on arrival and after traveling without knowing where to go the next day.</p>

    <StaticImage
      src="../images/Maroc.jpg"
      width={1200}
      quality={95}
      formats={["auto", "webp", "avif"]}
      alt="Me at Tenerif"
      style={{ marginBottom: `1.45rem` }}
    />
    <br />
    <Link to="http://maroc.rouquin.me/">My Marrocco blog</Link> (French)
  </Layout>
)

export default SecondPage
