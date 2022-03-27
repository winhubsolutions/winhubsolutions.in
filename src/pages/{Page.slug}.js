import * as React from "react"
import { graphql } from "gatsby"
import Layout from "../components/layout"
import { Container } from "../components/ui"
import { getImage} from "gatsby-plugin-image"




export default function Page(props) {
  const { page } = props.data
  const image1 = getImage(page?.image?.gatsbyImageData)

  
  return (
    <Layout {...page}>


      
     <div id="pagetitle" style={{backgroundImage:(image1)}}>
     
   <div className="page-title-inner">
      <div className="page-title-holder">
        <h1 className="page-title">{page.title}</h1>
      </div>
      <ul className="ct-breadcrumb">
        <li>
          <a
            className="breadcrumb-entry"
            href="https://sad-faraday.159-223-103-242.plesk.page/"
          >
            Homepage
          </a>
        </li>
        <li>
          <span className="breadcrumb-entry">
          {page.title}
          </span>
        </li>
      </ul>
     
  </div>
</div>

        <Container>
       

       
          <div
            dangerouslySetInnerHTML={{
              __html: page.html,
            }}
          />
        </Container>
       </Layout>
  )
}
export const query = graphql`
  query PageContent($id: String!) {
    page(id: { eq: $id }) {
      id
      title
      slug
      description
      image {
        id
        gatsbyImageData
      }
      html
    }
  }
`