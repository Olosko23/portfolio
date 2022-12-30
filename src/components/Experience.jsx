import React from 'react'
import Github from '../assets/GitHub.png';
import CSS from '../assets/CSS.png';
import React1 from '../assets/React.png';
import Material from '../assets/Material UI.png';
import JavaScript from '../assets/JavaScript.png';
import Tailwind from '../assets/Tailwind.png';
import Html from '../assets/html1.png';
import GraphQL from '../assets/graphql.png';

const Experience = () => {
    const techs = [
        {
            id: 1,
            src: Html,
            title: "HTML",
            style: "shadow-orange-500"
        },
        {
            id: 2,
            src: CSS,
            title: "CSS",
            style: "shadow-blue-500"
        },
        {
            id: 3,
            src: JavaScript,
            title: "JavaScript",
            style: "shadow-yellow-500"
        },
        {
            id: 4,
            src: React1,
            title: "React",
            style: "shadow-blue-600"
        },
        {
            id: 5,
            src: Tailwind,
            title: "Tailwind",
            style: "shadow-sky-400"
        },
        {
            id: 6,
            src: Material,
            title: "Material UI",
            style: "shadow-gray-200"
        },
        {
            id: 7,
            src: GraphQL,
            title: "GraphQL",
            style: "shadow-pink-400"
        },
        {
            id: 8,
            src: Github,
            title: "GitHub",
            style: "shadow-gray-400"
        },
    ]
  return (
    <div name="experience" className="bg-gradient-to-b from-blue-900 via-blue-700 to-blue-600 w-full h-screen">
        <div className="max-w-screen-lg mx-auto p-4 flex flex-col justify-center w-full h-full text-white">
            <div>
                <p className="text-4xl font-bold border-b-4 border-black inline md:pt-10">Experience</p>
                <p className="py-6">These are the technologies I've worked with</p>
            </div>
            <div className="w-full grid grid-cols-2 sm:grid-cols-3 gap-8 text-center py-8 px-12 sm:px-0">

                {techs.map(({id,src,title,style})=> (

                     <div key={id} className={`shadow-md hover:scale-105 duration-500 py-2 rounded-lg ${style}`}>
                     <img src={src} alt="" 
                     className="w-20 mx-auto"/>
                     <p className="mt-4 ">{title}</p>
                 </div>
                ))}
            </div>
        </div>
    </div>
  )
}

export default Experience