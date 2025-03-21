import { motion } from "framer-motion";
import React, { useEffect, useState } from "react";
import { FaFacebook, FaGithub, FaInstagram, FaLinkedin, FaTwitter } from "react-icons/fa";
import { useNavigate } from "react-router-dom";
import image1 from "../assets/portfolio.png";

const icons = [
    { icon: FaFacebook, link: "https://facebook.com" },
    { icon: FaTwitter, link: "https://twitter.com" },
    { icon: FaInstagram, link: "https://instagram.com" },
    { icon: FaLinkedin, link: "https://linkedin.com" },
    { icon: FaGithub, link: "https://github.com" }
];

const Hero = () => {
    const roles = ["Frontend Developer", "Java Developer", "Web Developer", "React Expert"];
    const [text, setText] = useState("");
    const [roleIndex, setRoleIndex] = useState(0);
    const [charIndex, setCharIndex] = useState(0);
    const [isDeleting, setIsDeleting] = useState(false);

    const navigate = useNavigate();

    useEffect(() => {
        const currentRole = roles[roleIndex];
        let typingSpeed = isDeleting ? 75 : 150;

        const typingEffect = setTimeout(() => {
            if (!isDeleting && charIndex < currentRole.length) {
                setText((prev) => prev + currentRole[charIndex]);
                setCharIndex((prev) => prev + 1);
            } else if (isDeleting && charIndex > 0) {
                setText((prev) => prev.slice(0, -1));
                setCharIndex((prev) => prev - 1);
            } else {
                setIsDeleting(!isDeleting);
                if (!isDeleting) {
                    setRoleIndex((prev) => (prev + 1) % roles.length);
                }
            }
        }, typingSpeed);

        return () => clearTimeout(typingEffect);
    }, [charIndex, isDeleting, roleIndex]);

    return (
        <div className="bg-[#0d1b2a] relative text-white h-screen flex flex-col space-x-20 md:flex-row items-center justify-center px-6 md:px-12">
            {/* Profile Image with Enhanced Glow and Rotation */}
            <motion.div
                initial={{ opacity: 0, scale: 0.8, rotate: -10 }}
                animate={{ opacity: 1, scale: 1, rotate: 0 }}
                transition={{ duration: 1, ease: "easeOut", delay: 0.5 }}
                className="relative"
            >
                {motion}
                <motion.img
                    whileHover={{ scale: 1.1, rotate: 5 }}
                    transition={{ type: "spring", stiffness: 100, damping: 10 }}
                    src={image1}
                    alt="Profile"
                    className="relative object-cover border-4 border-[#64ffda] rounded-full shadow-2xl w-80 h-96"
                />
                {/* Background Glow Animation */}
                <motion.div
                    className="absolute inset-0 bg-[#64ffdbc8] rounded-full w-72 h-80 opacity-20 blur-3xl"
                    animate={{ scale: [1, 1.1, 1], opacity: [0.2, 0.3, 0.2] }}
                    transition={{ repeat: Infinity, duration: 3, ease: "easeInOut" }}
                />
            </motion.div>

            {/* Hero Text with Enhanced Animations */}
            <motion.div
                initial={{ opacity: 0, x: 50 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 1, ease: "easeOut", delay: 0.8 }}
                className="mt-6 text-center md:mt-0 md:ml-12 md:text-left"
            >
                {/* Greeting Text */}
                <motion.p
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 1, delay: 1 }}
                    className="text-lg font-light text-[#ccd6f6]"
                >
                    Hello, I'm
                </motion.p>

                {/* Name with Hover Animation */}
                <motion.h1
                    initial={{ opacity: 0, y: 40 }}
                    animate={{ opacity: 1, y: 0 }}
                    whileHover={{ scale: 1.05, color: "#64ffda" }}
                    transition={{ duration: 1, ease: "easeInOut", delay: 1.2 }}
                    className="text-4xl font-bold text-[#e6f1ff]"
                >
                    Aasif Nazir
                </motion.h1>

                {/* Typing Effect with Cursor Animation */}
                <motion.h2
                    initial={{ opacity: 0, y: 40 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 1, ease: "easeInOut", delay: 1.4 }}
                    className="mt-2 text-2xl font-semibold text-[#64ffda]"
                >
                    And I'm a{" "}
                    <motion.span
                        className="text-[#528cef]"
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ duration: 0.5, delay: 1.6 }}
                    >
                        {text}
                        <motion.span
                            className="text-white"
                            animate={{ opacity: [0, 1, 0] }}
                            transition={{ repeat: Infinity, duration: 0.7 }}
                        >
                            |
                        </motion.span>
                    </motion.span>
                </motion.h2>

                {/* Description Text */}
                <motion.p
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 1, delay: 1.8 }}
                    className="max-w-md mt-4 text-[#8892b0]"
                >
                    a passionate Full-Stack Java Developer skilled in Spring Boot, React, and PostgreSQL. I specialize in backend development, microservices architecture, and RESTful APIs, with a passion for building scalable and efficient applications.<br/>
                    💡 Coming from a non-IT background, I’ve mastered Java, Hibernate, Spring Security, WebSockets, and have basic knowledge of Python and Golang (Gin, net/http). I enjoy problem-solving, backend optimization, and creating interactive UIs with React and Tailwind CSS.<br/>
                    🚀 Always eager to learn and explore new technologies, I’m open to exciting opportunities and collaborations!
                </motion.p>

                {/* Social Icons with Pop Animation */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 1, delay: 2 }}
                    className="flex justify-center mt-6 space-x-5 md:justify-start"
                >
                    {icons.map(({ icon: Icon, link }, index) => (
                        <motion.a
                            key={index}
                            href={link}
                            target="_blank"
                            rel="noopener noreferrer"
                            whileHover={{ scale: 1.3, color: "#64ffda" }}
                            whileTap={{ scale: 0.9 }}
                            initial={{ opacity: 0, y: 10 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: index * 0.2, type: "spring", stiffness: 100 }}
                            className="text-3xl text-[#8892b0] transition-all duration-300 hover:text-[#64ffda]"
                        >
                            <Icon size={24} />
                        </motion.a>
                    ))}
                </motion.div>

                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 1, delay: 2 }}
                    className="flex space-x-4 md:flex-row"
                >
                    {/* Explore More Button */}
                    <motion.button
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 1, delay: 2 }}
                        className="px-4 py-2 mt-6 font-semibold text-[#64ffda] border-2 border-[#64ffda] rounded-full hover:bg-[#64ffda] hover:text-black"
                        onClick={() => navigate("/about")}
                    >
                        Explore More...
                    </motion.button>

                    {/* Services Button */}
                    <motion.button
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 1, delay: 2 }}
                        className="px-4 py-2 mt-6 font-semibold text-[#64ffda] border-2 border-[#64ffda] rounded-full hover:bg-[#64ffda] hover:text-black"
                        onClick={() => navigate("/services")}
                    >
                        Services
                    </motion.button>
                </motion.div>
            </motion.div>
        </div>
    );
};

export default Hero;