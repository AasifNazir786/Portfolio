import { motion } from "framer-motion";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

const AboutMe = () => {
    const [isVisible, setIsVisible] = useState(false);
    const navigate = useNavigate();

    useEffect(() => {
        setTimeout(() => setIsVisible(true), 300);
    }, []);

    return (
        <div className="relative flex flex-col items-center justify-center min-h-screen p-6 overflow-hidden text-white bg-[#0a192f]">
        
        {/* Background Glow Effect */}
        <div className="absolute inset-0 bg-gradient-to-br from-gray-900 via-purple-900 to-transparent opacity-30 blur-3xl"></div>

        {/* Animated "About Me" Title */}
        <motion.h1
            className="relative mb-8 text-5xl font-extrabold text-white md:text-6xl"
            initial={{ opacity: 0, y: -50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1 }}
        >
            <span className="relative">
            About Me
            <span className="absolute inset-0 text-purple-500 blur-lg animate-pulse">
                About Me
            </span>
            </span>
        </motion.h1>

        {/* Main Content with Animation */}
        <motion.div
            className={`w-full max-w-4xl text-center bg-[#0a192f]/80 backdrop-blur-md p-6 md:p-8 rounded-xl shadow-2xl transition-all duration-1000 ease-in-out transform ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
            }`}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.5 }}
        >
            {/* Heading */}
            <motion.h2
            className="mb-6 text-3xl font-bold md:text-4xl"
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 1, delay: 0.8 }}
            >
            Hello👋, I'm <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-600">
                Aasif Nazir
            </span>
            </motion.h2>

            {/* Description with Animation */}
            <motion.p
            className="mt-4 text-base leading-relaxed text-left text-gray-300 md:text-lg"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 1 }}
            >
                A passionate Full-Stack Java Developer with expertise in Spring Boot, React, and PostgreSQL. I specialize in building scalable backend systems, crafting dynamic frontend experiences, and integrating microservices architecture to create seamless applications<br /><br />
                💡 My journey into tech began from a non-IT background, but my curiosity and dedication led me to master Java, REST APIs, Spring Security, Hibernate, and WebSockets. I love solving complex problems, optimizing performance, and continuously learning new technologies like Docker, Bash scripting, and microservices.<br /><br />
                🚀 Currently, I'm focusing on full-stack development, exploring real-time chat applications, stock trading simulations, and e-commerce platforms. In addition to Java, I also have basic knowledge of Python and Golang (Gin and net/http frameworks), which helps me explore backend development beyond Spring Boot.<br /><br />
                🔍 Whether it's designing RESTful APIs, managing SQL databases, or developing interactive UIs with React and Tailwind CSS, I strive to deliver high-quality, efficient, and user-friendly applications.<br /><br />
                📩 Feel free to reach out—I'm always open to exciting opportunities, collaborations, and tech discussions!
            </motion.p>

            {/* Buttons with Hover Animation */}
            <motion.div
                className="flex mt-8 space-x-16"
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 1, delay: 1.2 }}
            >
                <motion.button
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    onClick={() => window.scrollTo({ top: 600, behavior: "smooth" })}
                    className="px-6 py-2 text-white transition-all transform rounded-lg shadow-lg bg-gradient-to-r from-purple-500 to-pink-500 hover:shadow-purple-500/50"
                >
                    Tech Stack
                </motion.button>
                {motion}
                <motion.button
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    onClick={() => window.scrollTo({ top: 1200, behavior: "smooth" })}
                    className="px-6 py-2 text-white transition-all transform rounded-lg shadow-lg bg-gradient-to-r from-purple-500 to-pink-500 hover:shadow-purple-500/50"
                >
                    Certificates
                </motion.button>
                <motion.button
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    onClick={() => navigate('/contacts')}
                    className="px-6 py-2 text-white transition-all transform rounded-lg shadow-lg bg-gradient-to-r from-purple-500 to-pink-500 hover:shadow-purple-500/50"
                >
                    Contact
                </motion.button>
            </motion.div>
        </motion.div>

        {/* Like Button */}
        <motion.div
            className="fixed flex flex-col items-center text-white right-6 bottom-6"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 1.5 }}
        >
            <motion.div 
            whileHover={{ scale: 1.2 }} 
            whileTap={{ scale: 0.9 }}
            className="text-3xl cursor-pointer"
            >
            👍
            </motion.div>
            <span className="text-lg">919</span>
        </motion.div>
        </div>
    );
};

export default AboutMe;