import * as React from 'react'
import Layout from '../components/layout'
import { LwdServiceCard } from '../components/card'
import {graphql} from 'gatsby'

const lwdServiceIndex = ({location, data}) => {
  return (
    <Layout pageTitle="lwdService" pageType="lwdService" location={location}>
      <div className="md:container md:mx-auto p-4">
        <h1 className="text-5xl font-extrabold text-transparent bg-clip-text bg-gradient-to-br from-blue-400 to-blue-800 py-2">All lwdService</h1>
        <p className="pb-4">I utlize many web services for experment or acutural use. This helps me to understand how a webservice works, and gives me the opportunity to explore how creative this community can are. </p>
        <p className="pb-4">Not all services are available to you. However, you can check out the creator of these web services for more information, and see how to utlize for yourself.</p>

        <div className="flex flex-wrap mx-1 justify-center">
          {
            data.allSanityLwdservice.edges.map((service) => {
              return (
                <LwdServiceCard 
                  Service={service}
                />
              )
            })
          }
        </div>
      </div>
    </Layout>
  )
}

export default lwdServiceIndex

export const query = graphql`
query getlwdService {
  allSanityLwdservice(sort: {fields: serviceName, order: DESC}) {
    edges {
      node {
        id
        serviceIcon {
          asset {
            url
            gatsbyImageData(
              layout: CONSTRAINED
              placeholder: BLURRED
              fit: SCALE
              width: 256
            )
          }
          caption
        }
        serviceName
        serviceUrl
        serviceDescription
        servicePoweredBy
        servicePoweredByUrl
        serviceStatus
      }
    }
  }
}
`