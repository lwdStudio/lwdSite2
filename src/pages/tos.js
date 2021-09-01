import * as React from 'react'
import Layout from '../components/layout'

const tosIndexPage = ({location}) => {
  return (
    <Layout pageTitle="Terms of Service" pageType="Legal Stuff" location={location}>
      <p>I'm making this by following the Gatsby Tutorial.</p>
    </Layout>
  )
}

export default tosIndexPage