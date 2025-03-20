import { motion } from 'framer-motion';
import { Download } from 'lucide-react';
import React from "react";
import { useNavigate } from 'react-router-dom';

const Navbar = () => {
    const navLinks = [
        {page: 'Home', link: '/home'},
        {page: 'About', link: '/about'},
        {page: 'Skills', link: '/skills'},
        {page: 'Projects', link: '/projects'},
        {page: 'Services', link: '/services'},
        {page: 'Contact', link: '/contact'}
    ];
    const navigate = useNavigate();

    return (
        <motion.nav
            className="flex justify-between items-center px-12 py-6 bg-[#0a192f] text-white shadow-lg sticky top-0 z-50"
            initial={{ opacity: 0, y: -100, rotateX: 45, rotateY: 25 }}
            animate={{ opacity: 1, y: 0, rotateX: 0, rotateY: 0 }}
            transition={{ duration: 1.5, ease: 'easeOut' }}
        >
            {motion}
            {/* Portfolio Logo */}
            <motion.h1
                className="font-sans text-4xl italic font-extrabold text-white"
                initial={{ opacity: 0, x: -50 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8, ease: 'easeOut', delay: 0.3 }}
            >
                Port
                <span className="text-blue-400 drop-shadow-lg shadow-blue-900 font-cursive">
                    folio
                </span>
            </motion.h1>

            {/* Navigation Links */}
            <motion.ul
                className="hidden m-4 space-x-12 font-mono text-lg md:flex"
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, ease: 'easeOut', delay: 0.5 }}
            >
                {navLinks.map((item, index) => (
                    <motion.li
                        key={item}
                        className="transition-all duration-300 cursor-pointer hover:text-blue-400 hover:underline underline-offset-8"
                        whileHover={{ scale: 1.1 }}
                        whileTap={{ scale: 0.95 }}
                        initial={{ opacity: 0, y: -10 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5, delay: index * 0.1 }}
                        onClick={() => navigate(item.link)}
                    >
                        {item.page}
                    </motion.li>
                ))}
            </motion.ul>

            {/* Download CV Button */}
            <motion.button
                className="px-6 py-2 text-white transition-all duration-300 rounded-full shadow-lg bg-gradient-to-r from-pink-500 to-purple-600 hover:from-pink-600 hover:to-purple-700"
                onClick={() => console.log("CV downloaded")}
                initial={{ opacity: 0, x: 50 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 1, ease: 'easeOut', delay: 0.8 }}
            >
                <motion.a
                    className='flex space-x-4'
                    whileTap={{ scale: 0.9 }}
                    href='https://drive.google.com/file/d/1PokX-nCeTHXwnhxIV-5FScfXJYq092XU/view?usp=drive_link'
                >
                    <p>Download CV</p>
                    {<Download size={20}/>}
                </motion.a>
            </motion.button>
        </motion.nav>
    );
};

export default Navbar;