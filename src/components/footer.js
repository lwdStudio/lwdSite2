import React from 'react'
import { Link } from 'gatsby'
import { StaticImage } from 'gatsby-plugin-image'
import { StaticQuery,graphql } from 'gatsby'
import { Breadcrumb } from "gatsby-plugin-breadcrumb"

const FooterText = ({children}) => {
    return (
        <div className="px-5 py-1 md:py-0">
            <p className="flex text-gray-500 hover:text-gray-400 justify-center lg:justify-start">{children}</p>
        </div>
        
    )
}
const FooterLink = ({LinkTo, children}) => {
    return (
        <FooterText><Link to={LinkTo} >{children}</Link></FooterText>
    )
}

const Footer = ({location, crumbLabel}) => {
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
                    <div className="flex space-x-2 h-auto px-8 py-2 justify-center lg:justify-start">
                        <StaticImage 
                        src="../images/lwd-stamp.png"
                        alt="Liwen Duan's Logo"
                        placeholder="blurred"
                        layout="constrained"
                        width={35}
                        height={35}
                        transformOptions={{fit: "cover"}}
                        />
                        <span className="inline-flex py-1 text-lg font-serif">{data.site.siteMetadata.title}</span>
                    </div>
                    {/* <Breadcrumb location={location} crumbLabel={crumbLabel} crumbSeparator=" > "></Breadcrumb> */}
                    <div className="grid grid-flow-row auto-rows-max lg:grid-flow-col lg:auto-cols-max p-5">
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