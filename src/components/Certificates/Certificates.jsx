import { motion } from "framer-motion";
import image3 from '../../assets/fstCert.png';
import image2 from '../../assets/go(Basic).png';
import image4 from '../../assets/internCert.png';
import image1 from '../../assets/java(Basic).png';
import CertificateCard from "./CertificateCard";

const certificates = [
    {img: image3},
    {img: image1},
    {img: image2},
    {img: image4},
];

    export default function Certificates() {
    return (
        <div className="flex flex-col items-center min-h-screen p-10 mt-16 text-white bg-gray-900">
        <h1 className="mb-10 text-4xl font-bold">Certificates</h1>
        <motion.div 
            className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1 }}
        >
            {motion}
            {certificates.map((img, index) => (
            <CertificateCard key={index} img={img.img} />
            ))}
        </motion.div>
        </div>
    );
}
