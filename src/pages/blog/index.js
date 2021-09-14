import * as React from 'react'
import Layout from '../../components/layout'
import { BlogCard } from '../../components/card'
import {Link, graphql} from 'gatsby'

const BlogIndexPage = ({location}) => {
  return (
    <Layout pageTitle="All Blogs" pageType="Blog" location={location}>
      <div className="md:container md:mx-auto p-4">
        <h1 className="text-5xl font-extrabold text-transparent bg-clip-text bg-gradient-to-br from-blue-400 to-blue-800 py-2">All Blogs</h1>
        <p className="pb-4">Here are some articles I wrote for many things. Some for coursework, some might be personal.</p>
        <BlogCard tag="tag" link="/blog" title="Title of the Blog" excerpt="There are the overview of the blog. Some are important, some may not." />
        <BlogCard tag="tag" link="/blog" title="Title of another Blog" excerpt="There are the overview of the blog. Some are important, some may not." />
      </div>
    </Layout>
  )
}

export default BlogIndexPage