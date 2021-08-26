import React from 'react'
import { Link } from 'gatsby'
import { StaticImage } from 'gatsby-plugin-image'
import { StaticQuery,graphql } from 'gatsby'

const FooterText = ({children}) => {
    return (
        <div className="focus:ring-2 focus:ring-red-500">
            <p className="flex text-gray-500 hover:text-gray-400 ">{children}</p>
        </div>
        
    )
}
const FooterLink = ({LinkTo, children}) => {
    return (
        <FooterText><Link to={LinkTo} className="px-5">{children}</Link></FooterText>
    )
}

const Footer = () => {
    return (
        <StaticQuery 
            query={graphql`
                query MyQuery {
                    site {
                        siteMetadata {
                            title
                            ICPlicense
                            PSBeian
                            PSBeianURL
                        }
                    }
                }
            `}
            render={data => 
                <footer className="p-1 bg-gray-100 shadow-sm rounded-lg" >
                    <div className="inline-flex space-x-2 h-auto px-8 py-2">
                        <StaticImage 
                        src="../images/lwd-stamp.png"
                        alt="Liwen Duan's Logo"
                        layout="fixed"
                        width={30}
                        height={30}
                        />
                        <span className="inline-flex py-1 text-lg font-serif">{data.site.siteMetadata.title}</span>
                    </div>
                    <div className="flex p-8">
                        <FooterText>Copyright © {new Date().getFullYear()} Liwen Duan</FooterText>
                        <FooterLink LinkTo="/tos">Terms of Service</FooterLink>
                        <FooterLink LinkTo="http://beian.miit.gov.cn/">{data.site.siteMetadata.ICPlicense}</FooterLink>
                        <FooterLink LinkTo={data.site.siteMetadata.PSBeianURL}>{data.site.siteMetadata.PSBeian}</FooterLink>                      
                    </div>
                </footer>
            }
        />
    )
}

export default Footer