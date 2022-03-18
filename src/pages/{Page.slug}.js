import * as React from "react"
import { graphql } from "gatsby"
import Layout from "../components/layout"
import { Container, Heading } from "../components/ui"

export default function Page(props) {
  const { page } = props.data

  return (
    <Layout {...page}>
    
        <Container width="narrow">
          <Heading as="h1">{page.title}</Heading>
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
