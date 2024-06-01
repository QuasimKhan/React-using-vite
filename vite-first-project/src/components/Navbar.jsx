import React, { useState } from 'react';
import '../index.css';

const Navbar = () => {
    const [isOpen, setIsOpen] = useState(false);

    const toggleMenu = () => {
        setIsOpen(!isOpen);
    };

    return (
        <nav className="bg-blue-500 p-4">
            <div className="container mx-auto flex justify-between items-center">
                <a href="#" className="text-white text-lg font-bold">MyWebsite</a>
                <div className="md:hidden">
                    <button onClick={toggleMenu} className="text-white focus:outline-none">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16m-7 6h7" />
                        </svg>
                    </button>
                </div>
                <ul className="hidden md:flex space-x-6">
                    <li><a href="#" className="text-white hover:text-gray-300">Home</a></li>
                    <li><a href="#" className="text-white hover:text-gray-300">About</a></li>
                    <li><a href="#" className="text-white hover:text-gray-300">Services</a></li>
                    <li><a href="#" className="text-white hover:text-gray-300">Contact</a></li>
                </ul>
            </div>
            <div className={`md:hidden ${isOpen ? 'block' : 'hidden'}`}>
                <ul className="text-center py-3 space-y-2">
                    <li><a href="#" className="block text-white hover:text-gray-300">Home</a></li>
                    <li><a href="#" className="block text-white hover:text-gray-300">About</a></li>
                    <li><a href="#" className="block text-white hover:text-gray-300">Services</a></li>
                    <li><a href="#" className="block text-white hover:text-gray-300">Contact</a></li>
                </ul>
            </div>
        </nav>
    );
};

export default Navbar;
