
import React from "react"
import { graphql } from "gatsby"
import Img from "gatsby-image"
import "../components/style.css"

export default ({ data }) => (
  <div>
    <h1>Hello gatsby-image</h1>
    <Img className="imgA" fluid={data.file.childImageSharp.fluid} />
  </div>
)

export const query = graphql`
  query {
    file(relativePath: { eq: "Girl.png" }) {
      childImageSharp {
        # Specify the image processing specifications right in the query.
        # Makes it trivial to update as your page's design changes.
        fluid {
          ...GatsbyImageSharpFluid
        }
      }
    }
  }
`