import { motion } from "framer-motion";
import React from "react";

const stats = [
    { value: "Fresher", label: "Aspiring Full-Stack Developer" },
    { value: "10+", label: "Projects Completed" },
    { value: "5+", label: "Technologies Mastered" },
    { value: "Intern", label: "Gained Industry Experience" }
];


const Footer = () => {
    return (
        <div className="bg-[#0d1b2a] text-white py-8">
            {/* Animated Footer Stats */}
            {motion}
            <motion.div
                initial="hidden"
                animate="visible"
                variants={{
                    hidden: { opacity: 0, y: 30 },
                    visible: { opacity: 1, y: 0, transition: { staggerChildren: 0.3, duration: 1 } }
                }}
                className="flex flex-col items-center justify-around max-w-6xl mx-auto space-y-6 text-center md:flex-row md:text-left md:space-y-0"
            >
                {stats.map((item, index) => (
                    <motion.div
                        key={index}
                        variants={{
                            hidden: { opacity: 0, y: 20 },
                            visible: { opacity: 1, y: 0 }
                        }}
                        whileHover={{ scale: 1.1, color: "#00b4d8", textShadow: "0px 0px 8px #00b4d8" }}
                        transition={{ type: "spring", stiffness: 50 }}
                        className="flex flex-col items-center px-8 border-l border-x-cyan-800 md:items-start"
                    >
                        <h2 className="text-4xl font-extrabold">{item.value}</h2>
                        <p className="text-gray-400">{item.label}</p>
                    </motion.div>
                ))}
            </motion.div>
        </div>
    );
};

export default Footer;
