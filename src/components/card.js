import React from 'react'
import {Link} from 'gatsby'
// import {GatsbyImage} from 'gatsby-plugin-image'


export const BlogCard = ({tags, link, title, excerpt, imgSrc, imgAlt}) => {
    return (
        <div className="flex flex-col md:flex-row rounded-lg shadow-md mb-5">
            <img 
                className="w-auto md:h-32 rounded-lg"
                src={imgSrc}
                alt={imgAlt}
            />
            <div className="flex-col p-5 content-center">
                {
                console.log(tags)
                // tags.map((tag) => {
                //     return(<span className="text-sm font-bold text-green-500">#{tag}</span>)
                // })}
                }
                <h2 className="text-2xl font-bold text-blue-700 py-1"><Link to={link} className="hover:text-black focus:text-black hover:bg-gray-200 focus:bg-yellow-300 rounded-md p-0.5">{title}</Link></h2>
                <div className="text-md font-regular text-gray-500">{excerpt}</div>
            </div>
        </div>
    )
}

export const PageCard = ({tag, link, title}) => {
    return (
        <div className="flex flex-col md:flex-row rounded-lg shadow-md mb-5">
            <div className="flex-col p-5 content-center">
              <h2 className="text-2xl font-bold text-blue-700 py-1"><Link to={link} className="hover:text-black focus:text-black hover:bg-gray-200 focus:bg-yellow-300 rounded-md p-0.5">{title}</Link></h2>
            </div>
        </div>
    )
}

export const PortfolioCard = ({tags, link, title, excerpt, imgSrc, imgAlt}) => {
    return (
        <div className="flex flex-col md:flex-row rounded-lg shadow-md mb-5">
            <img 
                className="w-auto md:h-56 rounded-lg"
                src={imgSrc}
                alt={imgAlt}
            />
            <div className="flex-col p-5 content-center">
                {
                console.log(tags)
                // tags.map((tag) => {
                //     return(<span className="text-sm font-bold text-green-500">#{tag}</span>)
                // })}
                }
                <h2 className="text-2xl font-bold text-blue-700 py-1"><Link to={link} className="hover:text-black focus:text-black hover:bg-gray-200 focus:bg-yellow-300 rounded-md p-0.5">{title}</Link></h2>
                <div className="text-md font-regular text-gray-500">{excerpt}</div>
            </div>
        </div>
    )
}

export const LwdServiceCard = ({iconUrl, iconAlt, ServiceName, ServiceUrl, ServiceDescription, ServiceStatus, ServicePoweredBy, ServicePoweredByUrl}) => {
    return (
        <div className="flex flex-col w-64 h-auto rounded-lg shadow-md m-5">
            <div className="w-64 h-32 rounded-lg shadow-md">
                <img className="w-60 h-32 object-scale-down align-center p-5"
                    src={iconUrl}
                    alt={iconAlt}
                />
            </div>
            <div className="flex-col p-5 content-center">
                <span className="text-sm font-bold text-green-500">{ServiceDescription}</span>
                <h2 className={`text-2xl font-bold py-1 ${ServiceStatus==="operational" ? "text-blue-700" : "text-red-500"}`}>
                    <a href={ServiceUrl} className="hover:text-black focus:text-black hover:bg-gray-200 focus:bg-yellow-300 rounded-md p-0.5" target="_blank" rel="noreferrer">{ServiceName}</a>                 
                </h2>
                <p>Powered by <a href={ServicePoweredByUrl} target="_blank" rel="noreferrer" className="hover:text-black focus:text-black hover:bg-gray-200 focus:bg-yellow-300 rounded-md">{ServicePoweredBy}</a></p>
            </div>
        </div>
    )
}