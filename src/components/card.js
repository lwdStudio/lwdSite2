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