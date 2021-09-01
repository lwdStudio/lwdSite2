import React, {useState} from 'react'
import { Link } from 'gatsby'
import { StaticImage } from 'gatsby-plugin-image'
import './header.css'
import Menu from "./static/menu.svg"
import Close from "./static/close.svg"

const NavButton = ({LinkTo, children}) => {
    return (
        <Link to={LinkTo}>
            <button className="w-full md:w-28 p-3 my-2 md:m-3 text-center rounded-md shadow-md font-medium text-gray-700 hover:text-black focus:text-black hover:bg-yellow-300 focus:bg-yellow-300">
                <span>{children}</span>
            </button>
        </Link>
    )
}

const LwdLogo = ({pageName}) => {
    return (
        <Link to="/" className="flex  h-auto p-2 focus:ring-2 focus:ring-yellow-300 rounded-lg hover:text-black focus:text-black hover:bg-yellow-300 focus:bg-yellow-300">
            <StaticImage
                src="../images/lwd-stamp.png"
                alt="Liwen Duan's Logo"
                layout="fixed"
                width={50}
                height={50} />
            <span className="inline-flex p-3 text-2xl font-serif">{pageName}</span>
        </Link>
    )
}

const Header = ({pageName='lwdSite'}) => {
    const [isMenuOpen, setMenuOpen] = useState(false)

    return (
        <header className="p-1 flex flex-wrap md:flex rounded-lg shadow-md">
            <LwdLogo pageName={pageName} />
            <div className="flex-grow"></div>
            <div className="flex items-center md:hidden p-2 ">
                <button onClick={() => setMenuOpen(!isMenuOpen)} className={`p-3 rounded-lg shadow-md hover:text-black hover:bg-yellow-300`}>
                    {isMenuOpen ? <Close /> : <Menu />}
                </button>
            </div>
            <nav className={`w-full md:flex md:flex-row md:w-auto ${isMenuOpen ? "" : "hidden"}`}>
                <NavButton LinkTo="/resume">Resume</NavButton >
                <NavButton LinkTo="/blog">Blog</NavButton >
                <NavButton LinkTo="/portfolio">Portfolio</NavButton>
                <NavButton LinkTo="/service">lwdService</NavButton>
            </nav>
        </header>
    )
}

export default Header;