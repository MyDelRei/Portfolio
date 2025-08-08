import React, { useState, useEffect, useRef } from "react";
import { FaBriefcase, FaCode, FaAward } from "react-icons/fa";
import {
    FaHtml5,
    FaCss3Alt,
    FaJsSquare,
    FaReact,
    FaJava,
    FaGit,
    FaDocker,
    FaBootstrap,
} from "react-icons/fa";
import {
    SiSpring,
    SiMysql,
    SiPostgresql,
    SiTailwindcss,
    SiJquery,
    SiPhp,
    SiLaravel,
    SiApachemaven,
    SiGradle,
    SiPostman,
} from "react-icons/si";
import { GrOracle } from "react-icons/gr";
import { animate } from "motion";
import {Link} from "react-router-dom";
import Certi1 from "../assets/Certi1.png";
import SMS from "../assets/SMS.png";
import PersonalExpensesTracker from "../assets/PersonalExpensesTracker.jpg";

const PortfolioHighlights = () => {
    const [activeTab, setActiveTab] = useState("Tech Stack");
    const techStackRef = useRef(null);
    const projectsRef = useRef(null);

    const techStack = [
        { name: "HTML", icon: <FaHtml5 />, color: "#e34f26" },
        { name: "CSS", icon: <FaCss3Alt />, color: "#264de4" },
        { name: "JavaScript", icon: <FaJsSquare />, color: "#f0db4f" },
        { name: "React.js", icon: <FaReact />, color: "#61DBFB" },
        { name: "Tailwind CSS", icon: <SiTailwindcss />, color: "#38bdf8" },
        { name: "Bootstrap", icon: <FaBootstrap />, color: "#563d7c" },
        { name: "jQuery (legacy)", icon: <SiJquery />, color: "#0769ad" },
        { name: "Java", icon: <FaJava />, color: "#f89820" },
        { name: "Spring Boot", icon: <SiSpring />, color: "#6db33f" },
        { name: "Maven", icon: <SiApachemaven />, color: "#c71a36" },
        { name: "Gradle", icon: <SiGradle />, color: "#02303a" },
        { name: "MySQL", icon: <SiMysql />, color: "#00758f" },
        { name: "PostgreSQL", icon: <SiPostgresql />, color: "#336791" },
        { name: "OracleDB", icon: <GrOracle />, color: "#f80000" },
        { name: "Git", icon: <FaGit />, color: "#f1502f" },
        { name: "Docker", icon: <FaDocker />, color: "#0db7ed" },
        { name: "Postman", icon: <SiPostman />, color: "#ff6c37" },
    ];

    const projects = [
        {
            title: "Personal Finance Tracker",
            description:
                "A tool to manage income, expenses, and savings with a clear overview of financial activity—perfect for tracking spending, setting budgets, and reaching goals.",
            image: PersonalExpensesTracker,
        },
        {
            title: "School Management System",
            description:
                "An all-in-one system to manage student records, attendance, grades, and teachers—streamlining school operations to help ensure efficiency and smooth workflow.",
            image: SMS,
        },
    ];

    const certificate = {
        title: "Alison Java programming",
        description:
            "This is a sample certificate that I received from a free course on Alison after completing the Java Programming Masterclass. Due to the certification fee, which I can't afford, I was only able to obtain the sample version.",
        image: Certi1,
    };

    // Slide-in stagger animation for cards inside active tab
    const staggerSlideIn = () => {
        let container = null;
        if (activeTab === "Tech Stack") container = techStackRef.current;
        else if (activeTab === "Projects") container = projectsRef.current;
        else return; // no stagger for certificate tab

        if (!container) return;

        const children = Array.from(container.children);
        if (children.length === 0) return;

        // Reset styles once before animating
        children.forEach((child) => {
            child.style.opacity = "0";
            child.style.transform = "translateX(40px)";
        });

        // Animate each child with stagger delay
        children.forEach((child, index) => {
            animate(
                child,
                { opacity: [0, 1], transform: ["translateX(40px)", "translateX(0)"] },
                {
                    duration: 0.5,
                    delay: index * 0.15,
                    easing: "ease-out",
                }
            );
        });
    };

    // Run slide-in animation when activeTab changes
    useEffect(() => {
        staggerSlideIn();
    }, [activeTab]);

    return (
        <div className="container mx-auto p-4 md:p-8 lg:p-12 font-palanquin-custom">
            {/* Title */}
            <h2
                className="newsreader-custom text-[40px] sm:text-[40px] md:text-[80px]
        bg-gradient-to-r from-[#FFFFFF] to-[#999999]
        text-transparent bg-clip-text text-center mb-8"
            >
                <span className="block">Portfolio Highlights</span>
            </h2>

            {/* Tab Navigation */}
            <div className="flex justify-center mb-10 space-x-2 md:space-x-4">
                <button
                    className={`flex items-center justify-center px-3 py-2 md:px-6 md:py-3 rounded-full transition-colors duration-300 ${
                        activeTab === "Tech Stack"
                            ? "bg-[#3b3b3b] text-white"
                            : "bg-[#252525] text-gray-400 hover:bg-[#3b3b3b]"
                    }`}
                    onClick={() => setActiveTab("Tech Stack")}
                >
                    <FaCode className="w-5 h-5" />
                    <span className="hidden md:inline ml-2">Tech Stack</span>
                </button>

                <button
                    className={`flex items-center justify-center px-3 py-2 md:px-6 md:py-3 rounded-full transition-colors duration-300 ${
                        activeTab === "Projects"
                            ? "bg-[#3b3b3b] text-white"
                            : "bg-[#252525] text-gray-400 hover:bg-[#3b3b3b]"
                    }`}
                    onClick={() => setActiveTab("Projects")}
                >
                    <FaBriefcase className="w-5 h-5" />
                    <span className="hidden md:inline ml-2">Projects</span>
                </button>

                <button
                    className={`flex items-center justify-center px-3 py-2 md:px-6 md:py-3 rounded-full transition-colors duration-300 ${
                        activeTab === "Certificate"
                            ? "bg-[#3b3b3b] text-white"
                            : "bg-[#252525] text-gray-400 hover:bg-[#3b3b3b]"
                    }`}
                    onClick={() => setActiveTab("Certificate")}
                >
                    <FaAward className="w-5 h-5" />
                    <span className="hidden md:inline ml-2">Certificate</span>
                </button>
            </div>

            {/* Content Section */}
            <div  className="min-h-[400px]">
                {activeTab === "Tech Stack" && (
                    <div
                        ref={techStackRef}
                        className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 xl:grid-cols-5 gap-6 px-4"
                    >
                        {techStack.map((tech, index) => (
                            <div
                                key={index}
                                className="bg-[#171717] w-[200px] h-[200px] border border-[#6C6C6C] hover:border-white rounded-xl p-4 flex flex-col items-center justify-center text-center transform transition duration-300 hover:scale-105"
                            >
                                <div
                                    className="text-[60px] md:text-[80px] mb-3"
                                    style={{ color: tech.color }}
                                >
                                    {tech.icon}
                                </div>
                                <span className="text-gray-200 text-base md:text-lg">
                  {tech.name}
                </span>
                            </div>
                        ))}
                    </div>
                )}

                {activeTab === "Projects" && (
                    <div
                        ref={projectsRef}
                        className="grid grid-cols-1 lg:grid-cols-2 gap-6 lg:gap-8 px-4"
                    >
                        {projects.map((project, index) => (
                            <div
                                key={index}
                                className="group bg-[#171717] border border-[#6C6C6C] hover:border-white transition duration-300 rounded-3xl shadow-xl flex flex-col overflow-hidden"
                            >
                                <img
                                    src={project.image}
                                    alt={project.title}
                                    className="w-full h-64 object-cover rounded-t-3xl"
                                />

                                <div className="p-6 lg:p-10 flex flex-col justify-between flex-grow">
                                    <h3 className="text-[24px] md:text-[27px] text-white mb-4 font-palanquin-custom">
                                        {project.title}
                                    </h3>

                                    <p className="text-[#CDCDCD] text-base md:text-[17px] leading-relaxed font-light font-palanquin-custom">
                                        {project.description}
                                    </p>
                                </div>
                            </div>
                        ))}
                    </div>
                )}

                {activeTab === "Certificate" && (
                    <div className="px-4">
                        <div className="group bg-[#171717] border border-[#6C6C6C] hover:border-white transition duration-300 rounded-3xl shadow-xl overflow-hidden max-w-3xl mx-auto">
                            <img
                                src={certificate.image}
                                alt={certificate.title}
                                className="w-full h-auto object-contain bg-black"
                            />
                            <div className="p-4 md:p-6">
                                <h3 className="text-lg md:text-xl text-white mb-2 font-palanquin-custom">
                                    {certificate.title}
                                </h3>
                                <p className="text-[#CDCDCD] text-sm md:text-base leading-relaxed font-light font-palanquin-custom">
                                    {certificate.description}
                                </p>
                            </div>
                        </div>
                    </div>
                )}
            </div>

            {/* Show More Button */}
            <div className="flex justify-center mt-10">
                <Link className="flex items-center px-6 py-3 rounded-full bg-[#252525] text-white transition-all duration-300 hover:bg-[#3b3b3b] hover:shadow-lg" to="/highlights">
                    Show more
                    <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className="h-5 w-5 ml-2"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                        strokeWidth={2}
                    >
                        <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            d="M17 8l4 4m0 0l-4 4m4-4H3"
                        />
                    </svg>
                </Link>
            </div>
        </div>
    );
};

export default PortfolioHighlights;
