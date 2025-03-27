import { motion } from "framer-motion";

export default function SkillCard({ name, img }) {
    return (
        <motion.div
        className="flex flex-col items-center p-6 transition-all bg-gray-800 rounded-lg shadow-lg cursor-pointer hover:bg-gray-700"
        whileHover={{ scale: 1.1 }}
        >
        {motion}
        <img src={img} alt={name} className="w-16 h-16 mb-4" />
        <p className="text-lg">{name}</p>
        </motion.div>
    );
}
