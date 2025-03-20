import { motion } from "framer-motion";
import ServiceCard from "./ServiceCard";

const services = [
    {
        title: "Full Stack Development",
        role: "Full Stack Developer",
        shortDescription: "Building end-to-end applications with frontend and backend integration.",
        fullDescription: "I develop full-stack applications using React, Spring Boot, PostgreSQL, ensuring scalable and responsive UI/UX.",
        icon: "🌐",
        skills: ["React", "Spring Boot", "PostgreSQL", "REST APIs"],
    },
    {
        title: "Web Development",
        role: "Web Developer",
        shortDescription: "Creating responsive and interactive websites.",
        fullDescription: "Building fast, SEO-optimized, and user-friendly websites with React, Tailwind CSS, and JavaScript.",
        icon: "💻",
        skills: ["HTML", "CSS", "JavaScript", "Tailwind CSS", "React"],
    },
    {
        title: "Backend Development",
        role: "Backend Developer",
        shortDescription: "Designing secure, scalable backend systems.",
        fullDescription: "Developing REST APIs with Spring Boot and PostgreSQL, focusing on high performance and security.",
        icon: "🔧",
        skills: ["Java", "Spring Boot", "PostgreSQL", "JWT Authentication"],
    },
    {
        title: "Microservices Architecture",
        role: "Microservices Developer",
        shortDescription: "Developing scalable microservices applications.",
        fullDescription: "Designing microservices with Spring Cloud, Eureka, Kafka, and Docker.",
        icon: "⚙️",
        skills: ["Spring Boot", "Spring Cloud", "Eureka", "Service Registry", "Gateway"],
    },
];

const Services = () => {
    return (
        // Main Container
        <section className="py-12 bg-gray-800">
            {motion}
            {/* Heading Section.... */}
            <div className="mb-16 text-center">
                <motion.h2
                    className="text-3xl font-bold text-white"
                    initial={{ opacity: 0, y: -20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, ease: "easeOut" }}
                >
                    My <span className="text-blue-500">Services</span>
                </motion.h2>
            </div>


            {/* Body Section... */}
            <motion.div
                className="container flex flex-wrap justify-center gap-8 px-6 mx-auto"
            >
                {services.map((service, index) => (
                    <motion.div
                        key={index}
                        initial={{ opacity: 0, x: index % 2 === 0 ? -100 : 100 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ delay: index * 0.3, type: "spring", stiffness: 40 }}
                    >
                        <ServiceCard {...service} />
                    </motion.div>
                ))}
            </motion.div>
        </section>
    );
};

export default Services;
