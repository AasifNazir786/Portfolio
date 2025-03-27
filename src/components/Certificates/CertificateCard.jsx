import { motion } from "framer-motion";

export default function CertificateCard({ img }) {
    return (
        <motion.div
        className="flex flex-col items-center p-4 transition-all bg-gray-800 rounded-lg shadow-lg cursor-pointer hover:bg-gray-700"
        whileHover={{ scale: 1.05 }}
        >

        {motion}
        <img src={img} alt="Certificate" className="w-full rounded-md" />
        </motion.div>
    );
}
