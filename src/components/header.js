import React, {useState} from 'react'
import { Link } from 'gatsby'
import { StaticImage } from 'gatsby-plugin-image'
import './header.css'
import Menu from "./static/menu.svg"
import Close from "./static/close.svg"

const NavButton = ({LinkTo, children}) => {
    return (
        <button className="w-full md:w-28 md:flex-1 py-3 my-1 md:p-0 md:m-3 rounded-md md:shadow-md hover:bg-gray-50">
            <Link className="p-5 text-base text-gray-900 hover:text-gray-500 font-medium text-center" to={LinkTo}>{children}</Link>
        </button>
    )
}

const LwdLogo = ({pageName}) => {
    return (
        <Link to="/" className="flex space-x-4 h-auto p-2 focus:ring-2 focus:ring-blue-600 rounded-lg hover:text-gray-500">
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

const Header = ({pageName='lwdSite'}) => {
    const [isMenuOpen, setMenuOpen] = useState(false)

    return (
        <header className="p-1 flex flex-wrap md:flex rounded-lg shadow-md">
        <LwdLogo pageName={pageName} />
        <div className="flex-grow"></div>
        <div className="flex items-center md:hidden p-2">
            <button onClick={() => setMenuOpen(!isMenuOpen)} className={`p-3 rounded-lg shadow-md`}>
                {isMenuOpen ? <Close /> : <Menu />}
            </button>
        </div>
        <nav className={`w-full md:w-auto md:flex ${isMenuOpen ? "" : "hidden"}`}>
            <NavButton LinkTo="/resume">Resume</NavButton >
            <NavButton LinkTo="/blog">Blog</NavButton >
            <NavButton LinkTo="/portfolio">Portfolio</NavButton>
            <NavButton LinkTo="/service">lwdService</NavButton>
        </nav>
    </header>
    )
}

export default Header;