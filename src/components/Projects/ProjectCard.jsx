import { motion } from "framer-motion";
import { useState } from "react";
import { FaGithub } from "react-icons/fa";
import ProjectModal from "./ProjectModal";

const ProjectCard = ({ title, description, imageUrl, moreInfo, githubLink }) => {
    const [isOpen, setIsOpen] = useState(false);

    return (
        <>
            {motion}
            <motion.div
                whileHover={{ scale: 1.05, boxShadow: "0px 10px 30px rgba(0, 0, 0, 0.4)" }}
                whileTap={{ scale: 0.95 }}
                initial={{ opacity: 0, y: 50 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, ease: "easeOut" }}
                className="relative mx-auto overflow-hidden bg-gray-800 shadow-2xl cursor-pointer w-80 h-96 rounded-2xl"
            >
                {/* Full-Width and Full-Height Image */}
                <img
                src={imageUrl}
                alt={title}
                className="absolute inset-0 object-cover w-full h-full rounded-2xl"
                />

                {/* Glassmorphism Overlay for Text */}
                <motion.div
                className="absolute inset-0 flex flex-col justify-end p-6 bg-black/40 backdrop-blur-sm rounded-2xl"
                whileHover={{ backdropBlur: "10px", backgroundColor: "rgba(0, 0, 0, 0.6)" }}
                >
                {/* Title and Description */}
                <div className="mb-4">
                    <h2 className="text-xl font-bold text-white">{title}</h2>
                    <p className="mt-2 text-sm text-gray-300">{description}</p>
                </div>

                {/* Buttons Section */}
                <div className="flex justify-between gap-4">
                    <motion.button
                    onClick={() => setIsOpen(true)}
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    className="flex-1 px-4 py-2 text-sm font-semibold text-white transition-all bg-blue-600 rounded-lg shadow-md hover:bg-blue-700 focus:ring-2 focus:ring-blue-400"
                    >
                    Read More
                    </motion.button>
                    <a
                    href={githubLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center justify-center flex-1 gap-2 px-4 py-2 text-sm font-semibold text-white transition-all bg-gray-700 rounded-lg shadow-md hover:bg-gray-600 focus:ring-2 focus:ring-gray-400"
                    >
                    <FaGithub className="text-lg" />
                    GitHub
                    </a>
                </div>
                </motion.div>
            </motion.div>

            {/* Render modal when needed */}
            <ProjectModal isOpen={isOpen} onClose={() => setIsOpen(false)} title={title} moreInfo={moreInfo} />
        </>
    );
};

export default ProjectCard;