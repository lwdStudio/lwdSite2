import * as React from 'react'
import Layout from '../components/layout'

const BlogIndexPage = ({location}) => {
  return (
    <Layout pageTitle="All Blogs" pageType="Blog" location={location}>
      <p>I'm making this by following the Gatsby Tutorial.</p>
    </Layout>
  )
}

export default BlogIndexPage