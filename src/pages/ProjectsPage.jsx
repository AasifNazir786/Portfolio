import { motion } from "framer-motion";
import ProjectCard from "../components/Projects/ProjectCard";

const projects = [
  {
    title: "Hotel Booking App",
    description: "A backend hotel booking system built using Java, Spring Boot, Spring Data JPA, and PostgreSQL. It provides APIs for managing hotels, rooms, bookings, customers, and payments.",
    imageUrl: "imageUrl.jpg",
    moreInfo: {
      fullDescription: "This project is a backend hotel booking system designed to handle hotel, room, booking, customer, and payment management efficiently. It provides a well-structured REST API using Spring Boot and follows best practices for scalability and maintainability.",
      techStack: "Backend: Java, Spring Boot, Spring Data JPA, PostgreSQL | Build Tools: Maven | Other: Lombok, REST APIs",
      keyFeatures: "🏨 Hotel Management – Create, update, and delete hotels | 🏠 Room Management – Add, modify, and retrieve rooms | 📅 Booking System – Handle room reservations with CRUD operations | 👤 Customer Management – Store and manage customer details | 💳 Payment Handling – Process and track payments | 🔍 Search & Filters – Query hotels and rooms efficiently"
    },
    githubLink: "https://github.com/AasifNazir786/Hotel-Booking-App.git"
  },
  {
    title: "Book Store App",
    description: "A backend online bookstore built with Spring Boot. It provides seamless book browsing, author management, order placement, and customer handling through RESTful APIs.",
    imageUrl: "imageUrl.jpg",
    moreInfo: {
      fullDescription: "This project is a modern online bookstore application designed to manage books, authors, customers, and orders efficiently. The backend is built with Spring Boot, providing a robust and scalable RESTful API.",
      techStack: "Backend: Spring Boot, Hibernate, PostgreSQL/MySQL | Security: JWT-based authentication, role-based access control | API Communication: RESTful APIs",
      keyFeatures: "📚 Book Management – Browse, add, update, and delete books | ✍️ Author Management – Store and manage author details | 🛒 Order Processing – Place, track, and manage book orders | 👤 User Authentication – Secure login & signup with JWT | 👨‍💼 Admin Panel – Manage books, authors, and orders efficiently"
    },
    githubLink: "https://github.com/AasifNazir786/Online-Book-Store.git"
  },
  {
    title: "Banking App",
    description: "A backend banking application built with Golang and PostgreSQL. It provides APIs for user authentication, transactions, deposits, withdrawals, and account management.",
    imageUrl: "imageUrl.jpg",
    moreInfo: {
      fullDescription: "This project is a backend banking system designed to handle user accounts, transactions, deposits, withdrawals, and transfers efficiently. It follows a microservices-inspired architecture, ensuring modularity and scalability.",
      techStack: "Backend: Golang | Database: PostgreSQL | Security: JWT Authentication | API Framework: Gin | Logging: Built-in Golang Logger | Middleware: Authentication & Authorization",
      keyFeatures: "🏦 User Authentication – Secure login with JWT | 💰 Deposit & Withdrawal – Manage account balance efficiently | 🔄 Fund Transfer – Transfer money between accounts securely | 📜 Transaction History – Track all transactions per account | 🛡️ Authorization – Middleware for secure API access | 📊 PostgreSQL Integration – Persistent storage for banking data"
    },
    githubLink: "https://github.com/AasifNazir786/Banking-App.git"
  },
  {
    title: "Real-Time Chat Application",
    description: "A full-stack real-time chat application built using Java, Spring Boot, WebSocket, React, and Tailwind CSS. It features user authentication, secure messaging, and a responsive UI.",
    imageUrl: "imageUrl.jpg",
    moreInfo: {
      fullDescription: "This project is a modern real-time chat application designed with WebSocket for instant messaging, JWT-based authentication for secure user access, and a clean, responsive UI using React and Tailwind CSS. It supports user login, one-on-one messaging, and chat history management.",
      techStack: "Backend: Java, Spring Boot, WebSocket, Spring Security, JWT | Frontend: React, Tailwind CSS | Database: PostgreSQL | API Communication: REST APIs & WebSockets",
      keyFeatures: "💬 Real-Time Messaging – Instant communication using WebSockets | 🔐 Secure Authentication – JWT-based user authentication | 📜 Chat History – Store and retrieve message history | 👤 User Management – Register, login, and manage users | 🎨 Modern UI – Responsive and interactive chat interface | ⚡ Fast & Scalable – Optimized backend with Spring Boot"
    },
    githubLink: "https://github.com/AasifNazir786/Chat_App.git"
  },
  {
    title: "Project Management System",
    description: "A web-based project management application built with Java, Spring Boot, and Thymeleaf. It allows users to create, manage, and track projects and tasks efficiently using a structured MVC architecture.",
    imageUrl: "imageUrl.jpg",
    moreInfo: {
      fullDescription: "This project provides a streamlined project management system using Spring Boot, Spring Data JPA, and Thymeleaf. It enables users to create projects, add tasks, edit and delete entries, and track progress with a clean and user-friendly UI.",
      techStack: "Backend: Java, Spring Boot, Spring Data JPA | Frontend: Thymeleaf, HTML, CSS | Database: PostgreSQL/MySQL | Architecture: MVC",
      keyFeatures: "📌 Project Management – Create, update, and delete projects | ✅ Task Management – Assign and track tasks within projects | 🎨 User-Friendly UI – Developed using Thymeleaf and CSS | 🗂 CRUD Operations – Fully functional project and task handling | 🏗 MVC Architecture – Well-structured code for maintainability"
    },
    githubLink: "https://github.com/AasifNazir786/ProjectManagement.git"
  },
  {
    title: "To-Do List App",
    description: "A lightweight To-Do List application built using Go and the Gin framework. It allows users to manage tasks efficiently with in-memory storage.",
    imageUrl: "imageUrl.jpg",
    moreInfo: {
      fullDescription: "This To-Do List app is designed for simplicity and performance, leveraging Go's speed and the Gin framework's lightweight web capabilities. Tasks are stored in memory, making it fast but temporary.",
      techStack: "Backend: Go, Gin Framework | Middleware: Gin Middleware for logging & authentication | Storage: In-memory storage | Architecture: RESTful API",
      keyFeatures: "📌 Task Management – Perform CRUD operations on tasks | ⚡ Fast & Lightweight – No database, only in-memory storage | 🚀 RESTful APIs – Structured API endpoints | 🔥 Middleware – Implemented logging and authentication"
    },
    githubLink: "https://github.com/AasifNazir786/ToDo-List-App.git"
  }
];

const ProjectPage = () => {
  return (
    <div className="bg-[#0d1b2a] text-white py-20 px-6 sm:px-10 min-h-screen">
      {motion}
      <motion.h2
        initial={{ opacity: 0, y: -200, x: -100, rotateX: 45, rotateY: 40 }}
        animate={{ opacity: 1, y: 0, x: 0, rotateX: 7, rotateY: 5 }}
        whileHover={{scale:1.1, rotateX: 10, rotateY: -10}}
        transition={{ duration: 1.1 }}
        className="mb-12 text-6xl font-bold text-center"
      >
        Latest <span className="text-[#64ffda]">Projects</span>
      </motion.h2>

      <div className="grid grid-cols-1 gap-12 sm:grid-cols-2 lg:grid-cols-3 place-items-center">
        {projects.map((project, index) => (
          <ProjectCard key={index} {...project} />
        ))}
      </div>
    </div>
  );
};

export default ProjectPage;
