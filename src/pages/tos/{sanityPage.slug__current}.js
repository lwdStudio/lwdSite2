import React from 'react'
import Layout from '../../components/layout'
import { graphql } from 'gatsby'
import { BlockContent } from '@sanity/block-content-to-react'

const TosPage = ({data, location}) => {
    return (
        <Layout pageTitle={data.sanityPage.title} pageType="Legal Terms" location={location}>
            <div className="p-10 text-center">
                <h1 className="text-5xl font-extrabold">{data.sanityPage.title}</h1>
                <p className="">{data.sanityPage._updatedAt}</p>
            </div>
            <div className="md:container md:mx-auto p-4">
            <BlockContent
                blocks={data.sanityPage._rawBody}
                projectId={process.env.GATSBY_SANITY_PROJECT_ID}
                dataset={process.env.GATSBY_SANITY_DATASET}
                serializers={serializers}
            />
        </div>
        </Layout>
    )
}

export default TosPage

export const query = graphql`
query getPage($id: String!) {
    sanityPage(id: {eq: $id}) {
      title
      _rawBody
      _updatedAt(formatString: "YYYY-MM-DD")
    }
  }  
`