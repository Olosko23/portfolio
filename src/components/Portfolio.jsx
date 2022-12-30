import React from 'react';
import installNode from '../assets/portfolio/installNode.jpg';
import navbar from '../assets/portfolio/navbar.jpg';
import arrayDestruct from '../assets/portfolio/arrayDestruct.jpg';
import usestate from '../assets/portfolio/usestate.jpg';
import reactParallax from '../assets/portfolio/reactParallax.jpg';
import reactWeather from '../assets/portfolio/reactWeather.jpg';


const Portfolio = () => {
    const portfolios = [
        {
            id: 1,
            src: installNode
        },
        {
            id: 2,
            src: navbar
        },
        {
            id: 3,
            src: arrayDestruct
        },
        {
            id: 4,
            src:usestate
        },
        {
            id: 5,
            src: reactParallax
        },
        {
            id: 6,
            src:reactWeather
        },
    ]
  return (
    <div name="portfolio" className="bg-gradient-to-b from-blue-600 via-blue-700 to-blue-900 w-full
     text-white md:h-screen md:pt-10">
        <div className="max-w-screen-lg p-4 mx-auto flex flex-col justify-center w-full h-full ">
            <div className="pb-8">
                <p className="text-4xl font-bold inline border-b-4 border-black">Portfolio</p>
                <p className="py-6">Check out my other projects</p>
            </div>
            <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-8 px-12 sm:px-0">
                    {portfolios.map(({id, src}) => (
                    <div key={id}className="shadow-md shadow-black rounded-lg">
                    <img src= {src} alt=""  
                    className="rounded-md duration-250 hover:scale-105"/>
                    <div className="flex items-center justify-center">
                        <button className="w-1/2 px-6 py-3 m-4 duration-250 hover:scale-105">Demo</button>
                        <button className="w-1/2 px-6 py-3 m-4 duration-250 hover:scale-105">Code</button>
                    </div>
                </div>
            ))}
            </div>

        </div>
    </div>
  )
}

export default Portfolio;