import React, { useState } from 'react';
import { Link } from 'react-scroll';

const Nav = () => {
    const [isOpen, setIsOpen] = useState(false);

    const toggleMenu = () => {
        setIsOpen(!isOpen);
    };

    return (
        <nav className="p-2 pt-6">
            <div className="container mx-auto flex items-center fixed">
                <div className=" flex justify-center md:justify-start">
                   
                    {/* <Link to="hero" smooth={true} duration={500} className="text-white text-2xl font-bold">
                        MyPortfolio
                    </Link> */}
                </div>
                <div className="hidden md:flex flex-1 justify-center space-x-8  font-bold">
                    <Link to="hero" smooth={true} duration={500} className="text-white hover:text-gray-400">Home</Link>
                    <Link to="about" smooth={true} duration={500} className="text-white hover:text-gray-400">About</Link>
                    <Link to="experience" smooth={true} duration={500} className="text-white hover:text-gray-400">Experience</Link>
                    <Link to="projects" smooth={true} duration={500} className="text-white hover:text-gray-400">Projects</Link>
                    <Link to="technologies" smooth={true} duration={500} className="text-white hover:text-gray-400">Technologies</Link>
                    <Link to="contact" smooth={true} duration={500} className="text-white hover:text-gray-400">Contact</Link>
                </div>
                <button 
                    onClick={toggleMenu} 
                    className="md:hidden text-white focus:outline-none">
                    <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16"></path>
                    </svg>
                </button>
            </div>
            <div className={`md:hidden ${isOpen ? 'block' : 'hidden'} text-center`}>
                <Link to="hero" smooth={true} duration={500} className="block text-white px-4 py-2 hover:bg-gray-700">Home</Link>
                <Link to="about" smooth={true} duration={500} className="block text-white px-4 py-2 hover:bg-gray-700">About</Link>
                <Link to="experience" smooth={true} duration={500} className="block text-white px-4 py-2 hover:bg-gray-700">Experience</Link>
                <Link to="projects" smooth={true} duration={500} className="block text-white px-4 py-2 hover:bg-gray-700">Projects</Link>
                <Link to="technologies" smooth={true} duration={500} className="block text-white px-4 py-2 hover:bg-gray-700">Technologies</Link>
                <Link to="contact" smooth={true} duration={500} className="block text-white px-4 py-2 hover:bg-gray-700">Contact</Link>
            </div>
        </nav>
    );
};

export default Nav;
