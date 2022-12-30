import React, { useState } from 'react';
import {FaBars, FaTimes} from 'react-icons/fa';
import {Link} from 'react-scroll';

const Navbar = () => {
    const [nav, setNav] = useState(false);

    const links = [
        {
            id: 1,
            link: "home"
        },
        {
            id: 2,
            link: "about"
        },
        {
            id: 3,
            link: "portfolio"
        },
        {
            id: 4,
            link: "experience"
        },
        {
            id: 5,
            link: "contact"
        },
    ]
  return (
    <div className="flex justify-between items-center w-full h-20 text-white bg-blue-900 px-4 fixed">
        <div>
            <ul>
                <Link to="home" smooth duration={500} >
                <button><h1 className="text-5xl font-signature font-bold ml-2 hover:scale-110 cursor-pointer">Olosko</h1></button>
                </Link>
            </ul>
        </div>
            <ul className="hidden md:flex">
                {links.map(({id,link}) => (

                    <Link to={link} smooth duration={500} >

                    <li key={id} className="px-4 cursor-pointer capitalize font-medium text-gray-300 hover:scale-110 duration-200">
                        {link}
                    </li>
                    </Link>
                ))}
            </ul>
        <div onClick={() => setNav(!nav)}className="flex md:hidden pr-2 z-10 cursor-pointer text-gray-300">

            {nav ? <FaTimes size={30}/> : <FaBars size={30}/>}
       </div>
            {nav && (

            <ul className="flex flex-col justify-center items-center absolute
             top-0 left-0 w-full h-screen bg-gradient-to-b from-blue-900 to-blue-600 text-gray-300">

                {links.map(({id,link}) => (

                    <Link onClick={() => setNav(!nav)} to={link} smooth duration={500}>
                    <li key={id} className="px-4 cursor-pointer capitalize py-6 text-4xl">
                            {link}
                    </li>
                    </Link>
                ))}
            </ul>
                )}
    </div>
  )
}

export default Navbar