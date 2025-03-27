import { motion } from "framer-motion";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import Particles from "react-tsparticles";
import { loadFull } from "tsparticles";

const AboutMe = () => {
    const [isVisible, setIsVisible] = useState(false);
    const [likeCount, setLikeCount] = useState(919);
    const [isLiked, setIsLiked] = useState(false);
    const navigate = useNavigate();

    useEffect(() => {
        const timer = setTimeout(() => setIsVisible(true), 300);
        return () => clearTimeout(timer);
    }, []);

    const particlesInit = async (engine) => {
        await loadFull(engine);
    };

    const handleLike = () => {
        setLikeCount((prev) => (isLiked ? prev - 1 : prev + 1));
        setIsLiked((prev) => !prev);
    };

    return (
        <div className="relative z-0 flex flex-col items-center justify-center p-4 overflow-hidden text-white bg-[#0a192f]">
            {/* Particle Background */}
            <Particles
                id="tsparticles"
                init={particlesInit}
                options={{
                    fpsLimit: 60,
                    interactivity: {
                        events: { onHover: { enable: true, mode: "repulse" } },
                    },
                    particles: {
                        color: { value: "#9f7aea" },
                        links: {
                            color: "#9f7aea",
                            distance: 150,
                            enable: true,
                            opacity: 0.3,
                            width: 1,
                        },
                        move: { enable: true, speed: 1, outModes: "bounce" },
                        number: { density: { enable: true, area: 800 }, value: 60 },
                        opacity: { value: 0.3 },
                        shape: { type: "circle" },
                        size: { value: { min: 1, max: 3 } },
                    },
                    detectRetina: true,
                }}
            />

            {/* Background Glow Effect */}
            <div className="absolute inset-0 bg-gradient-to-br from-gray-900 via-purple-900 to-transparent opacity-20 blur-3xl"></div>

            {/* Animated Title */}
            <motion.h1
                className="relative mb-6 text-4xl font-extrabold text-white md:text-5xl"
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

            {/* Animated Card */}
            <motion.div
                className={`w-full max-w-4xl text-center p-6 md:p-8 rounded-xl shadow-2xl transition-all duration-1000 ease-in-out transform ${
                    isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
                }`}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 1, delay: 0.5 }}
                style={{
                    border: "2px solid transparent",
                    background:
                        "linear-gradient(#0a192f, #0a192f) padding-box, linear-gradient(145deg, #9f7aea, #ec4899) border-box",
                }}
            >
                {/* Name & Heading */}
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

                {/* Description */}
                <motion.p
                    className="mt-4 text-base leading-relaxed text-left text-gray-300 md:text-lg"
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 1, delay: 1 }}
                >
                    🚀 Passionate **Full-Stack Java Developer** with expertise in **Spring Boot, React, and PostgreSQL**.  
                    I specialize in building **scalable backend systems, dynamic frontend experiences, and integrating microservices**  
                    to create seamless, high-performance applications.
                    <br /><br />
                    💡 Coming from a **non-IT background**, I embraced technology and mastered **Java, REST APIs, Spring Security, Hibernate, and WebSockets**.  
                    I love solving complex problems and optimizing backend architectures.
                    <br /><br />
                    🔥 Currently working on **real-time chat applications, stock trading simulations, and e-commerce platforms**,  
                    while actively exploring **Docker, Bash scripting, and microservices**.
                    <br /><br />
                    ⚡ From designing **RESTful APIs** and optimizing **SQL databases** to crafting **interactive UIs** with **React & Tailwind**,  
                    I am committed to building high-quality, efficient, and user-centric applications.
                    <br /><br />
                    📩 Open to **exciting opportunities, collaborations, and tech discussions!**  
                </motion.p>


                {/* Buttons */}
                <motion.div
                    className="flex flex-wrap justify-center gap-4 mt-8"
                    initial={{ opacity: 0, scale: 0.8 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 1, delay: 1.2 }}
                >
                    {[
                        { text: "Tech Stack", link:'/techStack', scrollTo: 600 },
                        { text: "Certificates", link:'/certificates', scrollTo: 1200 },
                        { text: "Contact", link: "/contacts" },
                    ].map(({ text, scrollTo, link }, index) => (
                        <motion.button
                            key={index}
                            whileHover={{ scale: 1.05 }}
                            whileTap={{ scale: 0.95 }}
                            onClick={() =>
                                link ? navigate(link) : window.scrollTo({ top: scrollTo, behavior: "smooth" })
                            }
                            className="px-6 py-2 text-white transition-all transform rounded-lg shadow-lg bg-gradient-to-r from-purple-500 to-pink-500 hover:shadow-purple-500/50"
                        >
                            {text}
                        </motion.button>
                    ))}
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
                    onClick={handleLike}
                >
                    {isLiked ? "❤️" : "👍"}
                </motion.div>
                <span className="text-lg">{likeCount}</span>
            </motion.div>
            {motion}
        </div>
    );
};

export default AboutMe;