import { motion } from "framer-motion";
import ProjectCard from "../components/Projects/ProjectCard";

const projects = [
  {
    title: "Book Store App",
    description:
      "A full-stack online bookstore built with Spring Boot (backend) and React (frontend). It provides seamless book browsing, author management, order placement, and customer handling with a modern UI and secure authentication.",
    imageUrl: "imageUrl.jpg",
    moreInfo: {
      fullDescription:
        "This project is a modern, full-stack online bookstore application designed to manage books, authors, customers, and orders efficiently. The backend is built with Spring Boot, providing a robust and scalable RESTful API, while the frontend is developed using React and Tailwind CSS, ensuring a smooth and interactive user experience.",
      techStack:
        "Backend: Spring Boot, Hibernate, PostgreSQL/MySQL | Frontend: React, Tailwind CSS | Authentication & Security: JWT-based authentication, role-based access control | API Communication: RESTful APIs",
      keyFeatures:
        "📚 Book Management – Browse, add, update, and delete books | ✍️ Author Management – Store and manage author details | 🛒 Order Processing – Place, track, and manage book orders | 👤 User Authentication – Secure login & signup with JWT | 👨‍💼 Admin Panel – Manage books, authors, and orders efficiently | 🛠 Modern UI & UX – Responsive design using Tailwind CSS",
    },
    githubLink: "https://github.com/AasifNazir786/Online-Book-Store.git",
  },
  {
    title: "1984",
    description: "A novel by George Orwell",
    imageUrl: "https://source.unsplash.com/400x300/?book,vintage",
    moreInfo:
      "1984 is a dystopian novel that explores totalitarian government control, surveillance, and the manipulation of truth.",
    githubLink: "https://github.com/example/1984",
  },
  {
    title: "To Kill a Mockingbird",
    description: "A novel by Harper Lee",
    imageUrl: "https://source.unsplash.com/400x300/?book,reading",
    moreInfo:
      "To Kill a Mockingbird is a novel about racial injustice in the Deep South, seen through the eyes of a young girl named Scout Finch.",
    githubLink: "https://github.com/example/to-kill-a-mockingbird",
  },
];

const ProjectPage = () => {
  return (
    <div className="bg-[#0d1b2a] text-white py-20 px-6 sm:px-10 min-h-screen">
      {motion}
      <motion.h2
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="mb-12 text-4xl font-bold text-center"
      >
        Latest <span className="text-[#64ffda]">Projects</span>
      </motion.h2>

      <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3 place-items-center">
        {projects.map((project, index) => (
          <ProjectCard key={index} {...project} />
        ))}
      </div>
    </div>
  );
};

export default ProjectPage;
