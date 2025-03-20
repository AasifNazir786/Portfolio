import { AnimatePresence, motion } from "framer-motion";
import { useState } from "react";

const ServiceCard = ({ title, role, shortDescription, fullDescription, icon, skills }) => {
    const [showFull, setShowFull] = useState(false);

    return (
        <motion.div
            className="relative flex flex-col items-center p-6 text-center text-white transition-all duration-300 bg-gray-900 border-2 border-transparent rounded-lg shadow-lg cursor-pointer w-80"
            whileHover={{
                scale: 1.05,
                boxShadow: "0px 10px 20px rgba(0, 255, 255, 0.5)",
                borderColor: "rgba(0, 255, 255, 0.8)",
            }}
            whileTap={{ scale: 0.95 }}
            style={{
                perspective: 1000,
                transformStyle: "preserve-3d",
            }}
        >
            {motion}
            {/* Background Glow Effect */}
            <div className="absolute inset-0 w-full h-full transition-opacity duration-300 opacity-0 bg-gradient-to-br from-blue-500 to-cyan-500 blur-xl group-hover:opacity-20"></div>

            {/* 3D Tilt Effect */}
            <motion.div
                className="w-full h-full"
                initial={{ rotateX: 0, rotateY: 0 }}
                whileHover={{ rotateX: 5, rotateY: 5 }}
                transition={{ type: "spring", stiffness: 150, damping: 10 }}
            >
                {/* Icon At Top */}
                <motion.div
                    className="text-4xl"
                    initial={{ opacity: 0, y: -10 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.2, type: "spring", stiffness: 120 }}
                >
                    {icon}
                </motion.div>

                {/* title, role, description section... */}
                <h3 className="mt-4 text-xl font-semibold">{title}</h3>
                <h4 className="mt-1 text-sm text-blue-400">{role}</h4>
                <p className="mt-2 text-gray-300">{showFull ? fullDescription : shortDescription}</p>

                {/* Animate the full description and skills */}
                <AnimatePresence>
                    {showFull && (
                        <motion.div
                            initial={{ opacity: 0, height: 0 }}
                            animate={{ opacity: 1, height: "auto" }}
                            exit={{ opacity: 0, height: 0 }}
                            transition={{ duration: 0.4 }}
                            className="mt-3 overflow-hidden text-sm text-gray-400"
                        >
                            <ul className="text-left">
                                {skills.map((skill, index) => (
                                    <motion.li
                                        initial={{ opacity: 0, x: -20 }}
                                        whileInView={{ opacity: 1, x: 0 }}
                                        transition={{ delay: index * 0.2, ease: "easeIn" }}
                                        key={index}
                                        className="mb-1"
                                    >
                                        ✅ {skill}
                                    </motion.li>
                                ))}
                            </ul>
                        </motion.div>
                    )}
                </AnimatePresence>

                {/* Button for showing full description/Closing it */}
                <motion.button
                    className="px-4 py-2 mt-4 text-white transition bg-blue-500 rounded-lg shadow-lg hover:bg-blue-600"
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.9 }}
                    onClick={() => setShowFull(!showFull)}
                >
                    {showFull ? "Show Less" : "Read More"}
                </motion.button>
            </motion.div>
        </motion.div>
    );
};

export default ServiceCard;
