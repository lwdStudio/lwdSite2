import React from 'react'
import Layout from '../../components/layout'
import { graphql } from 'gatsby'
import { GatsbyImage } from 'gatsby-plugin-image'
import { PortableText  } from '@sanity/block-content-to-react'

const BlogPostPage = ({location, data}) => {
  console.log(data.sanityPost)
  console.log(data.sanityPost.body)
  return (
    <Layout pageTitle={data.sanityPost.title} pageType="Blog" location={location}>
      <div className="p-10 text-center">
        <h1 className="text-5xl font-extrabold">{data.sanityPost.title}</h1>
        <p className="">{data.sanityPost.publishedAt}</p>
      </div>
        <GatsbyImage
          className="w-full h-52" 
          alt={data.sanityPost.mainImage&&data.sanityPost.mainImage.caption}
          image={data.sanityPost.mainImage&&data.sanityPost.mainImage.asset.gatsbyImageData}
        />
      <div className="md:container md:mx-auto p-4">

    {/* <PortableText
      serializers={{
        types: {
          code: ({node}) => (
          <pre data-language={node.language}>
              <code>{node.code}</code>
          </pre>
        )
        }
      }}
      blocks={data.sanityPost._bodyRaw}
    /> */}

      </div>
    </Layout>
  )
}

export default BlogPostPage

export const query = graphql`
query getBlogPost($id: String!) {
  sanityPost(id: {eq: $id}) {
    title
    publishedAt(formatString: "YYYY-MM-DD")
    mainImage {
      caption
      asset {
        gatsbyImageData
      }
    }
    excerpt
    _rawBody
  }
}
`