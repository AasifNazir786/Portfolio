import { AnimatePresence, motion } from 'framer-motion';
import { Download, Menu, X } from 'lucide-react';
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const Navbar = () => {
    const [isOpen, setIsOpen] = useState(false);
    const navigate = useNavigate();
    const navLinks = [
        { page: 'Home', link: '/home' },
        { page: 'About', link: '/about' },
        { page: 'Projects', link: '/projects' },
        { page: 'Services', link: '/services' },
        { page: 'Contact', link: '/contacts' }
    ];

    return (
        <>
            {/* Ensure no horizontal scroll */}
            <style>{`body { overflow-x: hidden; }`}</style>
            {motion}
            <motion.nav
                className="flex justify-between items-center px-6 md:px-12 py-4 bg-[#0a192f] text-white shadow-lg fixed top-0 z-50 w-full overflow-hidden"
                initial={{ opacity: 0, y: -50 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 1 }}
            >
                {/* Logo */}
                <motion.h1
                    className="text-3xl italic font-bold lg:text-5xl md:text-4xl"
                    initial={{ opacity: 0, x: -30 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.8, delay: 0.3 }}
                >
                    Port<span className="text-blue-400">folio</span>
                </motion.h1>

                {/* Desktop Navigation */}
                <motion.ul
                    className="hidden space-x-2 text-lg lg:space-x-6 md:flex"
                    initial={{ opacity: 0, y: -20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, delay: 0.5 }}
                >
                    {navLinks.map((item) => (
                        <motion.li
                            key={item.page}
                            className="px-3 py-2 transition duration-300 rounded-full cursor-pointer hover:bg-blue-500"
                            whileHover={{ scale: 1.1 }}
                            transition={{ duration: 0.3 }}
                            onClick={() => navigate(item.link)}
                        >
                            {item.page}
                        </motion.li>
                    ))}
                </motion.ul>

                {/* Download CV Button */}
                <motion.a
                    href="https://drive.google.com/file/d/1PokX-nCeTHXwnhxIV-5FScfXJYq092XU/view?usp=drive_link"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex px-2 py-2 transition duration-300 rounded-full shadow-lg bg-gradient-to-r from-pink-500 to-purple-600 hover:from-pink-600 hover:to-purple-700"
                >
                    <p className='text-sm'>Download CV</p>
                    <Download size={20} className="ml-2" />
                </motion.a>

                {/* Mobile Menu Button */}
                <button className="md:hidden" onClick={() => setIsOpen(true)}>
                    <Menu size={28} />
                </button>

                {/* Mobile Menu Overlay */}
                <AnimatePresence>
                    {isOpen && (
                        <>
                            {/* Background Overlay */}
                            {isOpen && (
                            <motion.div
                                initial={{ opacity: 0 }}
                                animate={{ opacity: 1 }}
                                exit={{ opacity: 0 }}
                                    transition={{ duration: 0.3 }}
                                    className="fixed inset-0 z-40 md:hidden bg-black/50 backdrop-blur-sm"
                                onClick={() => setIsOpen(false)}
                                />
                            )}

                            {/* Side Menu */}
                            <motion.div
                                initial={{ x: "-100%", scale: 0.9 }}
                                animate={{ x: 0, scale: 1 }}
                                exit={{ x: "-100%", scale: 0.9 }}
                                transition={{ duration: 0.4, ease: "easeInOut" }}
                                className="md:hidden fixed top-0 left-0 h-full w-4/5 max-w-xs bg-[#0a192f] text-white shadow-lg z-50 p-6 overflow-y-auto rounded-r-3xl"
                            >
                                {/* Header */}
                                <div className="flex items-center justify-between pb-4 mb-6 border-b border-gray-700">
                                    <motion.h1
                                        className="text-3xl italic font-extrabold"
                                        initial={{ opacity: 0, x: -30 }}
                                        animate={{ opacity: 1, x: 0 }}
                                        transition={{ duration: 0.6, delay: 0.2 }}
                                    >
                                        Port<span className="text-blue-400">folio</span>
                                    </motion.h1>
                                    <button onClick={() => setIsOpen(false)} className="text-white transition hover:text-red-500">
                                        <X size={28} />
                                    </button>
                                </div>

                                {/* Navigation Links */}
                                <ul className="space-y-4">
                                    {navLinks.map((item, index) => (
                                        <motion.li
                                            key={item.page}
                                            className="px-5 py-3 transition-all duration-500 rounded-lg shadow-md cursor-pointer hover:text-blue-400 hover:scale-105 hover:bg-gray-800/50 bg-gray-800/30"
                                            onClick={() => { navigate(item.link); setIsOpen(false); }}
                                            initial={{ opacity: 0, x: -40, y: -10, scale: 0.7, translateY: -20 }}
                                            animate={{ opacity: 1, x: 0, y: 0, scale: 1, translateY: 0 }}
                                            transition={{ duration: 1.5, delay: 0.2 * index, ease: "easeInOut" }}
                                        >
                                            {item.page}
                                        </motion.li>
                                    ))}
                                </ul>
                            </motion.div>
                        </>
                    )}
                </AnimatePresence>
            </motion.nav>
        </>
    );
};

export default Navbar;
