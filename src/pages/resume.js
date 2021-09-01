import * as React from 'react'
import Layout from '../components/layout'

const Resume = ({location}) => {
  return (
    <Layout pageTitle="Resume" pageType="Resume" location={location}>
      <p>I'm making this by following the Gatsby Tutorial.</p>
    </Layout>
  )
}

export default Resume