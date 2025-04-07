import { AnimatePresence, motion } from "framer-motion";
import { useState } from "react";

const ServiceCard = ({ title, role, shortDescription, fullDescription, icon, skills }) => {
    const [showFull, setShowFull] = useState(false);

    return (
        <motion.div
            className="relative flex flex-col items-center p-6 text-center text-white transition-all duration-300 bg-gray-900 border-2 border-transparent rounded-lg shadow-lg cursor-pointer group w-80"
            whileHover={{
                scale: 1.05,
                boxShadow: "0px 10px 20px rgba(0, 255, 255, 0.5)",
                borderColor: "rgba(0, 255, 255, 0.8)",
            }}
            whileTap={{ scale: 0.95 }}
        >
            {motion}
            {/* Background Glow Effect */}
            <div className="absolute inset-0 z-0 w-full h-full transition-opacity duration-300 opacity-0 bg-gradient-to-br from-blue-500 to-cyan-500 blur-xl group-hover:opacity-20"></div>

            {/* Content */}
            <div className="relative z-10">
                {/* Icon */}
                <motion.div
                    className="text-4xl"
                    initial={{ opacity: 0, y: -10 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.2, type: "spring", stiffness: 120 }}
                >
                    {icon}
                </motion.div>

                <h3 className="mt-4 text-xl font-semibold">{title}</h3>
                <h4 className="mt-1 text-sm text-blue-400">{role}</h4>
                <p className="mt-2 text-gray-300">
                    {showFull ? fullDescription : shortDescription}
                </p>

                {/* Button */}
                <motion.button
                    className="px-4 py-2 mt-4 text-white transition bg-blue-500 rounded-lg shadow-lg hover:bg-blue-600"
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.9 }}
                    onClick={() => setShowFull(prev => !prev)}
                >
                    {showFull ? "Show Less" : "Read More"}
                </motion.button>
            </div>

            {/* Animate Presence OUTSIDE motion.div */}
            <AnimatePresence>
                {showFull && (
                    <motion.div
                        initial={{ opacity: 0, height: 0 }}
                        animate={{ opacity: 1, height: "auto" }}
                        exit={{ opacity: 0, height: 0 }}
                        transition={{ duration: 0.4 }}
                        className="w-full mt-3 overflow-hidden text-sm text-left text-gray-400"
                    >
                        <ul>
                            {skills.map((skill, index) => (
                                <motion.li
                                    key={index}
                                    initial={{ opacity: 0, x: -10 }}
                                    animate={{ opacity: 1, x: 0 }}
                                    transition={{ delay: index * 0.1 }}
                                    className="mb-1"
                                >
                                    ✅ {skill}
                                </motion.li>
                            ))}
                        </ul>
                    </motion.div>
                )}
            </AnimatePresence>
        </motion.div>
    );
};

export default ServiceCard;
