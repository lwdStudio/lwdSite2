import React from 'react'
import Layout from '../../components/layout'
import { graphql } from 'gatsby'
import { PortableText } from '@sanity/block-content-to-react'

const TosPage = ({data, location}) => {
    console.log(data.sanityPage._rawBody);
    return (
        <Layout pageTitle={data.sanityPage.title} pageType="Legal Terms" location={location}>
            <div className="p-10 text-center">
                <h1 className="text-5xl font-extrabold">{data.sanityPage.title}</h1>
                <p className="">{data.sanityPage._updatedAt}</p>
            </div>
            <div className="md:container md:mx-auto p-4">
                {
                    data.sanityPage._rawBody && <PortableText blocks={data.sanityPage._rawBody} projectId={process.env.GATSBY_SANITY_PROJECT_ID} dataset={process.env.GATSBY_SANITY_DATASET}/>
                }
        </div>
        </Layout>
    )
}

export default TosPage

export const query = graphql`
query getPage($id: String!) {
    sanityPage(id: {eq: $id}) {
      title
      _rawBody(resolveReferences: {maxDepth: 10})
      _updatedAt(formatString: "YYYY-MM-DD")
    }
  }  
`