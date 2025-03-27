import { motion } from "framer-motion";
import SkillCard from "./SkillCard";

const techStack = [
    { name: "Java", img: "https://cdn-icons-png.flaticon.com/512/5968/5968282.png" },
    { name: "Spring Boot", img: "https://cdn-icons-png.flaticon.com/512/5968/5968322.png" },
    { name: "GoLang", img: "https://cdn-icons-png.flaticon.com/512/919/919850.png" },
    { name: "Gin (Go Framework)", img: "https://upload.wikimedia.org/wikipedia/commons/4/45/Go_Logo_Blue.svg" },
    { name: "Python", img: "https://cdn-icons-png.flaticon.com/512/5968/5968350.png" },
    { name: "Flask", img: "https://upload.wikimedia.org/wikipedia/commons/3/3c/Flask_logo.svg" },
    { name: "JavaScript", img: "https://cdn-icons-png.flaticon.com/512/5968/5968292.png" },
    { name: "HTML", img: "https://cdn-icons-png.flaticon.com/512/888/888859.png" },
    { name: "CSS", img: "https://cdn-icons-png.flaticon.com/512/888/888847.png" },
    { name: "PostgreSQL", img: "https://cdn-icons-png.flaticon.com/512/5968/5968342.png" },
    { name: "MySQL", img: "https://cdn-icons-png.flaticon.com/512/5968/5968313.png" },
    { name: "ReactJS", img: "https://cdn-icons-png.flaticon.com/512/1126/1126012.png" },
    { name: "Vercel", img: "https://assets.vercel.com/image/upload/v1662130559/nextjs/Icon_dark_background.png" },
    { name: "Tailwind CSS", img: "https://cdn.worldvectorlogo.com/logos/tailwind-css-2.svg" }
];

export default function TechStack() {
    return (
        <div className="flex flex-col items-center min-h-screen p-10 text-white bg-gray-900">
            {motion}
            <h1 className="mt-10 text-4xl font-bold">Tech Stack</h1>
            <motion.div
                className="grid grid-cols-2 gap-6 mt-6 md:grid-cols-4"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 1 }}
            >
                {techStack.map((tech, index) => (
                <SkillCard key={index} name={tech.name} img={tech.img} />
                ))}
            </motion.div>
        </div>
    );
}
