import * as React from 'react'
import Header from './header'
import Footer from './footer'
import {Link} from 'gatsby'
// import { Breadcrumb } from "gatsby-plugin-breadcrumb"

const Layout = ({pageType, pageTitle=pageType, location, children}) => {
  return (
    <div>
      <title>{pageTitle} | lwdSite</title>
      <Header pageName={pageType} />
      {/* <Breadcrumb location={location} crumbLabel={pageTitle} crumbSeparator=" > "></Breadcrumb> */}
      <main>
        {children}
      </main>
      <Footer />
    </div>
  )
}
export default Layout