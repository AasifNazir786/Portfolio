import { motion } from "framer-motion";
import React, { useEffect, useState } from "react";
import { FaFacebook, FaGithub, FaInstagram, FaLinkedin, FaTwitter } from "react-icons/fa";
import { useNavigate } from "react-router-dom";
import image1 from '../assets/Portfolio.png';

const icons = [
    { icon: FaFacebook, link: "https://facebook.com" },
    { icon: FaTwitter, link: "https://twitter.com" },
    { icon: FaInstagram, link: "https://instagram.com" },
    { icon: FaLinkedin, link: "https://www.linkedin.com/in/aasif-nazir-shah-94a811322/" },
    { icon: FaGithub, link: "https://github.com/AasifNazir786/AasifNazir786" }
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
        <div className="bg-[#0d1b2a] relative text-white min-h-screen flex flex-col md:flex-row items-center justify-center px-6 md:px-12 pt-28 pb-16">
            {/* Profile Image */}
            <motion.div
                initial={{ opacity: 0, scale: 0.8, rotate: -10 }}
                animate={{ opacity: 1, scale: 1, rotate: 0 }}
                transition={{ duration: 1, ease: "easeOut", delay: 0.5 }}
                className="relative mt-4"
            >
                <motion.img
                    whileHover={{ scale: 1.1, rotate: 5 }}
                    transition={{ type: "spring", stiffness: 100, damping: 10 }}
                    src={image1}
                    alt="Profile"
                    className="relative object-cover border-4 border-[#64ffda] rounded-full shadow-2xl w-64 h-64 md:w-80 md:h-96"
                />
                {/* Background Glow */}
                <motion.div
                    className="absolute inset-0 bg-[#64ffdbc8] rounded-full w-60 h-60 md:w-72 md:h-80 opacity-20 blur-3xl"
                    animate={{ scale: [1, 1.1, 1], opacity: [0.2, 0.3, 0.2] }}
                    transition={{ repeat: Infinity, duration: 3, ease: "easeInOut" }}
                />
            </motion.div>

            {/* Hero Text */}
            <motion.div
                initial={{ opacity: 0, x: 50 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 1, ease: "easeOut", delay: 0.8 }}
                className="max-w-lg mt-6 text-center md:mt-0 md:ml-12 md:text-left"
            >
                <motion.p className="text-lg font-light text-[#ccd6f6]">Hello, I'm</motion.p>

                {/* Name */}
                <motion.h1
                    initial={{ opacity: 0, y: 40 }}
                    animate={{ opacity: 1, y: 0 }}
                    whileHover={{ scale: 1.05, color: "#64ffda" }}
                    transition={{ duration: 1, ease: "easeInOut", delay: 1.2 }}
                    className="text-4xl font-bold text-[#e6f1ff]"
                >
                    Aasif Nazir
                </motion.h1>

                {/* Typing Effect */}
                <motion.h2 className="mt-2 text-2xl font-semibold text-[#64ffda]">
                    And I'm a{" "}
                    <motion.span className="text-[#528cef]">{text}</motion.span>
                    <motion.span
                        className="text-white"
                        animate={{ opacity: [0, 1, 0] }}
                        transition={{ repeat: Infinity, duration: 0.7 }}
                    >
                        |
                    </motion.span>
                </motion.h2>
                {motion}
                {/* Description */}
                <motion.p className="max-w-md mt-4 text-[#8892b0]">
                    I'm a passionate <i className="text-[#6c8db6]">Full-Stack Java Developer</i> with expertise in
                    <i className="text-[#6c8db6]"> Spring Boot</i>, <i className="text-[#6c8db6]">React</i>, and
                    <i className="text-[#6c8db6]"> PostgreSQL</i>. My focus is on backend development,
                    <i className="text-[#6c8db6]"> microservices architecture</i>, and
                    <i className="text-[#6c8db6]"> RESTful APIs</i>, where I build scalable and efficient applications.
                    <br /><br />
                    💡 Coming from a non-IT background, I have honed my skills in
                    <i className="text-[#6c8db6]"> Java</i>, <i className="text-[#6c8db6]"> Hibernate</i>,
                    <i className="text-[#6c8db6]"> Spring Security</i>, and <i className="text-[#6c8db6]"> WebSockets</i>.
                    Additionally, I have a foundational understanding of
                    <i className="text-[#6c8db6]"> Python</i> and <i className="text-[#6c8db6]"> Golang</i> (Gin, net/http).
                    I thrive on <i className="text-[#6c8db6]"> problem-solving</i>, backend optimization,
                    and crafting dynamic user experiences using <i className="text-[#6c8db6]"> React </i>
                    and <i className="text-[#6c8db6]"> Tailwind CSS</i>.
                    <br /><br />
                    🚀 Constantly exploring new technologies, I am eager for exciting opportunities
                    and collaborations to innovate and grow in the tech industry!
                </motion.p>


                {/* Social Icons */}
                <motion.div className="flex justify-center mt-6 space-x-5 md:justify-start">
                    {icons.map(({ icon: Icon, link }, index) => (
                        <motion.a
                            key={index}
                            href={link}
                            target="_blank"
                            rel="noopener noreferrer"
                            whileHover={{ scale: 1.3, color: "#64ffda" }}
                            whileTap={{ scale: 0.9 }}
                            transition={{ delay: index * 0.2, type: "spring", stiffness: 100 }}
                            className="text-3xl text-[#8892b0] transition-all duration-300 hover:text-[#64ffda]"
                        >
                            <Icon size={24} />
                        </motion.a>
                    ))}
                </motion.div>

                {/* Buttons */}
                <motion.div className="flex flex-col space-y-4 md:flex-row md:space-x-4">
                    <motion.button
                        className="px-4 py-2 mt-6 font-semibold text-[#64ffda] border-2 border-[#64ffda] rounded-full hover:bg-[#64ffda] hover:text-black"
                        onClick={() => navigate("/about")}
                    >
                        Explore More...
                    </motion.button>

                    <motion.button
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
