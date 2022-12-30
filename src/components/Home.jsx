import React from 'react'
import Hero from '../assets/hero.jpg';
import {CgArrowRight} from 'react-icons/cg';
import { Link } from 'react-scroll';

const Home = () => {
  return (
    <div name="home" className="h-screen w-full bg-gradient-to-b from-blue-600 via-blue-700 to to-blue-900">

      <div className="max-w-screen-lg mx-auto flex flex-col items-center justify-center h-full px-4 md:flex-row">
        <div className="flex flex-col justify-center h-full">
          <h2 className="text-4xl sm:text-6xl font-bold text-gray-300">I'm Collins <br /> A Full Stack Developer</h2>
          <p className="py-4 text-gray-200 max-w-md">I have 3 years of experience building and designing software.
            Currently, I love working on web applications using technologies
            like React, Next JS, Tailwind CSS and Material UI.
          </p>
          <div className="">
            <Link to="portfolio" smooth duration={500} className=" group text-gray-300 w-fit px-6 py-3 my-2 flex items-center rounded-md bg-black">
              Portfolio <span className="group-hover:rotate-90 duration-300 ml-2"><CgArrowRight /></span>
            </Link>
          </div>
        </div>
          <div>
            <img src={Hero} alt="" className="rounded-2xl mx-auto w-2/3 md:w-full" />
          </div>
      </div>
    </div>
  )
}

export default Home