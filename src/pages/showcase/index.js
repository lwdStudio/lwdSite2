import * as React from 'react'
import Layout from '../../components/layout'
import { PortfolioCard } from '../../components/card'
import { graphql } from 'gatsby'


const PortfolioIndex = ({location, data}) => {
  return (
    <Layout pageType="Showcase" location={location}>
      <div className="md:container md:mx-auto p-4">
        <h1 className="text-5xl font-extrabold text-transparent bg-clip-text bg-gradient-to-br from-blue-400 to-blue-800 py-2">My Portfolio</h1>
        <p className="pb-4">Check out my portfolio here.</p>
        {
          data.allSanityPost.edges.map((Post) => {
            <PortfolioCard posts={Post}/>
          })
        }
      </div>
    </Layout>
  )
}

export default PortfolioIndex

export const query = graphql`
query getPortfolioPost {
  allSanityPost(
    filter: {contentType: {elemMatch: {title: {eq: "Portfolio"}}}}
    sort: {fields: publishedAt, order: ASC}
  ) {
    edges {
      node {
        id
        title
        slug {
          current
        }
        tag {
          slug {
            current
          }
          name
        }
        mainImage {
          asset {
            url
            title
            altText
          }
        }
        excerpt
      }
    }
  }
}
`