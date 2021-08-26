import React from 'react'
import { Link } from 'gatsby'
import { StaticImage } from 'gatsby-plugin-image'

const NavButton = ({LinkTo, children}) => {
    return (
        <button className="flex-1 m-4 py-2 rounded-md shadow-md hover:bg-gray-50">
            <Link className="w-24 p-6 text-md text-gray-900 hover:text-gray-500 font-medium text-center" to={LinkTo}>{children}</Link>
        </button>
    )
}

const LwdLogo = ({pageName}) => {
    return (
        <Link to="/" className="flex-none inline-flex space-x-4 h-auto p-2 focus:ring-2 focus:ring-blue-600 rounded-lg hover:text-gray-500">
            <StaticImage
                src="../images/lwd-stamp.png"
                alt="Liwen Duan's Logo"
                layout="fixed"
                width={50}
                height={50} />
            <span className="inline-flex py-3 text-2xl font-serif hover:text-gray-500">{pageName}</span>
        </Link>
    )
}

const Header = ({pageName='lwdSite'}) => (
    <header className="p-1 flex rounded-lg shadow-md">
        <LwdLogo pageName={pageName} />
        <div className="flex-grow-0 md:flex-grow"></div>
        <nav className="flex float-right">
            <NavButton LinkTo="/resume">Resume</NavButton >
            <NavButton LinkTo="/blog">Blog</NavButton >
            <NavButton LinkTo="/portfolio">Portfolio</NavButton>
            <NavButton LinkTo="/service">lwdService</NavButton>
        </nav>
    </header>
);

export default Header;