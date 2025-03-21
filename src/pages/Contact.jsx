import { motion } from "framer-motion";
import { FaEnvelope, FaGithub, FaLinkedin, FaPhone } from "react-icons/fa";

const Contact = () => {
    return (
        <motion.div
            className="flex items-center justify-center min-h-screen p-6 bg-gradient-to-br from-gray-900 to-gray-800"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1 }}
        >
            {motion}
            <motion.div
                className="w-full max-w-lg p-8 text-center bg-gray-900 border border-gray-700 shadow-2xl bg-opacity-90 rounded-2xl backdrop-blur-md"
                initial={{ scale: 0.8, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                transition={{ type: "spring", stiffness: 100, damping: 10 }}
            >
                <motion.h2
                    className="mb-4 text-3xl font-bold text-blue-400"
                    initial={{ y: -20, opacity: 0 }}
                    animate={{ y: 0, opacity: 1 }}
                    transition={{ duration: 0.5 }}
                >
                    Contact Me
                </motion.h2>
                <motion.p
                    className="mb-6 text-gray-400"
                    initial={{ y: -20, opacity: 0 }}
                    animate={{ y: 0, opacity: 1 }}
                    transition={{ delay: 0.2, duration: 0.5 }}
                >
                    Feel free to reach out to me!
                </motion.p>

                <div className="space-y-6">
                    {[
                        { icon: <FaEnvelope className="text-blue-400" />, text: "aasif.n.s786@gmail.com", link: "mailto:aasif.n.s786@gmail.com" },
                        { icon: <FaPhone className="text-green-400" />, text: "+91 7006414027" },
                        { icon: <FaGithub className="text-white" />, text: "GitHub", link: "https://github.com/AasifNazir786" },
                        { icon: <FaLinkedin className="text-blue-500" />, text: "LinkedIn", link: "https://www.linkedin.com/in/aasifnazir/" },
                    ].map((item, index) => (
                        <motion.a
                            key={index}
                            href={item.link || "#"}
                            target={item.link ? "_blank" : "_self"}
                            rel="noopener noreferrer"
                            className="flex items-center justify-start gap-4 px-4 py-3 text-lg text-gray-300 transition-all bg-gray-800 bg-opacity-50 rounded-lg shadow-md cursor-pointer hover:bg-opacity-100"
                            whileHover={{ scale: 1.07, x: 10 }}
                            transition={{ type: "spring", stiffness: 200 }}
                        >
                            {item.icon}
                            <span className="transition hover:text-blue-500">{item.text}</span>
                        </motion.a>
                    ))}
                </div>
            </motion.div>
        </motion.div>
    );
};

export default Contact;
