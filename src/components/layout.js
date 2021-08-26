import * as React from 'react'
import Header from './header'
import Footer from './footer'

const Layout = ({ pageTitle, pageHeading, pageType, children}) => {
  return (
    <div>
      <title>{pageTitle} | lwdSite</title>
      <Header pageName={pageType} />
      <main>
        <h1 className="transform">{pageHeading}</h1>
        {children}
      </main>
      <Footer />
    </div>
  )
}
export default Layout