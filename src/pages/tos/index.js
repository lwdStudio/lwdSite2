import * as React from 'react'
import Layout from '../../components/layout'
import { PageCard } from '../../components/card'

const tosIndexPage = ({location}) => {
  return (
    <Layout pageTitle="Legal Terms" pageType="Legal Terms" location={location}>
        <div className="md:container md:mx-auto p-4">
          <h1 className="text-5xl font-extrabold py-2">Terms of Use</h1>
          <p className="pb-4">When accessing this site, we assume that you have agreed to the following terms of use.</p>
          <PageCard link='/tos' title='Terms of Use' />
          <p className="pb-4">You have obligations to learn and understand these terms of use before accessing this site. We will regularly update the content listed on this page. As you continue to accessing out site, we will assume you have agreed to the updated terms of use. Otherwise,we advise you to exit immediately.</p>
      </div>
    </Layout>
  )
}

export default tosIndexPage