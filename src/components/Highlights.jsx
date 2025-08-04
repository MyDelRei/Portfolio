import React, { useState, useEffect, useRef } from "react";
import { FaBriefcase, FaCode, FaAward, FaPalette, FaRobot, FaVial } from "react-icons/fa";
import {
    FaHtml5, FaCss3Alt, FaJs, FaReact, FaVuejs, FaAngular, FaNodeJs,
    FaPython, FaPhp, FaJava, FaLaravel, FaGithub, FaGitAlt,
    FaDocker, FaCloud, FaFigma
} from "react-icons/fa";
import { DiMsqlServer } from "react-icons/di";
import {
    SiTailwindcss,
    SiSpring,
    SiExpress,
    SiMongodb,
    SiMysql,

    SiMariadb,
    SiDotnet,
    SiDjango,

    SiTypescript,
    SiNextdotjs,
    SiNuxtdotjs,
    SiNestjs,
    SiRedux,
    SiFlutter,
    SiDart,
    SiJquery,
    SiPostman,
    SiSwagger,
    SiNetlify,
    SiVercel, SiPostgresql,

} from "react-icons/si";
import { animate } from "motion";
import { PiFileCSharpLight } from "react-icons/pi";
import {GrOracle} from "react-icons/gr";

const Highlight = () => {
    const [activeTab, setActiveTab] = useState("Tech Stack");
    const techStackRef = useRef(null);
    const projectsRef = useRef(null);

    const categorizedTechStack = [
        {
            category: "Front-End Technologies",
            items: [
                { name: "HTML", icon: <FaHtml5 />, color: "#e34f26" },
                { name: "CSS", icon: <FaCss3Alt />, color: "#264de4" },
                { name: "JavaScript (ES6)", icon: <FaJs />, color: "#f0db4f" },
                { name: "jQuery", icon: <SiJquery />, color: "#0769ad" },
                { name: "Tailwind CSS", icon: <SiTailwindcss />, color: "#38b2ac" },
                { name: "DaisyUI", icon: <FaPalette />, color: "#570df8" },  // replaced here
                { name: "React.js", icon: <FaReact />, color: "#61dbfb" },


            ],
        },
        {
            category: "Back-End Languages & Frameworks",
            items: [
                { name: "Java", icon: <FaJava />, color: "#f89820" },
                { name: "Spring", icon: <SiSpring />, color: "#6db33f" },
                { name: "C#", icon: <PiFileCSharpLight />, color: "#512bd4" },
                { name: "ASP.NET", icon: <SiDotnet />, color: "#512bd4" },
                { name: "Python", icon: <FaPython />, color: "#3776ab" },
                { name: "Django", icon: <SiDjango />, color: "#092e20" },
                { name: "PHP", icon: <FaPhp />, color: "#8892be" },
                { name: "Laravel", icon: <FaLaravel />, color: "#ff2d20" },

            ],
        },
        {
            category: "Databases",
            items: [

                { name: "PostgreSQL", icon: <SiPostgresql />, color: "#336791" },
                { name: "MySQL", icon: <SiMysql />, color: "#00758f" },
                { name: "Sql Server", icon: <DiMsqlServer />, color: "#f80000" },
                { name: "OracleDB", icon: <GrOracle />, color: "#f80000" },

            ],
        },
        {
            category: "Version Control & Tools",
            items: [
                { name: "Git", icon: <FaGitAlt />, color: "#f1502f" },
                { name: "GitHub", icon: <FaGithub />, color: "#000000" },
                { name: "Docker (intermediate level)", icon: <FaDocker />, color: "#0db7ed" },
                { name: "Postman", icon: <SiPostman />, color: "#ff6c37" },


            ],
        },
        {
            category: "Design & UI Tools",
            items: [
                { name: "Figma", icon: <FaFigma />, color: "#F24E1E" },
            ],
        },
        {
            category: "APIs & Integration",
            items: [
                { name: "RESTful APIs", icon: <FaCloud />, color: "#00bfff" },

            ],
        },
    ];

    // ... your projects and certificate remain unchanged

    const projects = [
        {
            title: "Personal Finance Tracker",
            description:
                "A tool to manage income, expenses, and savings with a clear overview of financial activity—perfect for tracking spending, setting budgets, and reaching goals.",
            image: "/img/PersonalExpensesTracker.jpg",
        },
        {
            title: "School Management System",
            description:
                "An all-in-one system to manage student records, attendance, grades, and teachers—streamlining school operations to help ensure efficiency and smooth workflow.",
            image: "/img/SMS.png",
        },
    ];

    const categorizedCertificates = [
        {
            category: "Tech study certificate",
            items: [
                {
                    name: "Alison Java Programming",
                    description:
                        "This is a sample certificate that I received from a free course on Alison after completing the Java Programming Masterclass. Due to the certification fee, which I can't afford, I was only able to obtain the sample version.",
                    image: "/img/Certi1.png",
                },
                {
                    name: "Certificate of Completion",
                    description:
                        "This certificate from the ETEC Center in Cambodia confirms my successful completion of comprehensive computer training courses. The curriculum included foundational and advanced principles of Java programming, database management with MySQL, and skills in using iReport for data visualization. I also completed project-based courses to apply these skills in a practical setting.",
                    image: "/img/Certi2.png",
                }
            ],
        },
        {
            category: "Recognition for Volunteerism",
            items: [
                {
                    name: "Certificate of Appreciation: Event Volunteer",
                    description:
                        "Certificate of Appreciation for my role as a volunteer event organizer for Miss Planet International 2024. My efforts and dedication were officially recognized as being instrumental in the successful execution of the event. This experience honed my skills in event coordination, teamwork, and contributing to high-stakes projects, all while managing diverse tasks to ensure a smooth and successful operation.",
                    image: "/img/Certi3.png",
                }

                ]
        }

    ];


    const staggerSlideIn = () => {
        let container = null;
        if (activeTab === "Tech Stack") container = techStackRef.current;
        else if (activeTab === "Projects") container = projectsRef.current;
        else return;

        if (!container) return;

        const children = Array.from(container.children);
        children.forEach((child) => {
            child.style.opacity = "0";
            child.style.transform = "translateX(40px)";
        });

        children.forEach((child, index) => {
            animate(
                child,
                { opacity: [0, 1], transform: ["translateX(40px)", "translateX(0)"] },
                { duration: 0.5, delay: index * 0.15, easing: "ease-out" }
            );
        });
    };

    useEffect(() => {
        staggerSlideIn();
    }, [activeTab]);

    return (
        <div className="container mx-auto p-4 md:p-8 lg:p-12 font-palanquin-custom mt-[100px]">
            <h2 className="newsreader-custom text-[40px] sm:text-[40px] md:text-[80px] bg-gradient-to-r from-[#FFFFFF] to-[#999999] text-transparent bg-clip-text text-center mb-8">
                <span className="block">Portfolio Highlights</span>
            </h2>

            {/* Tabs */}
            <div className="flex justify-center mb-10 space-x-2 md:space-x-4">
                {["Tech Stack", "Projects", "Certificate"].map((tab) => (
                    <button
                        key={tab}
                        className={`flex items-center justify-center px-3 py-2 md:px-6 md:py-3 rounded-full transition-colors duration-300 ${
                            activeTab === tab
                                ? "bg-[#3b3b3b] text-white"
                                : "bg-[#252525] text-gray-400 hover:bg-[#3b3b3b]"
                        }`}
                        onClick={() => setActiveTab(tab)}
                    >
                        {tab === "Tech Stack" ? <FaCode className="w-5 h-5" /> :
                            tab === "Projects" ? <FaBriefcase className="w-5 h-5" /> :
                                <FaAward className="w-5 h-5" />}
                        <span className="hidden md:inline ml-2">{tab}</span>
                    </button>
                ))}
            </div>

            {/* Content */}
            <div className="min-h-[400px]">
                {activeTab === "Tech Stack" && (
                    <div className="space-y-10" ref={techStackRef}>
                        {categorizedTechStack.map((section, i) => (
                            <div key={i}>
                                <h3 className="text-xl md:text-2xl text-white mb-4 pl-4">
                                    {section.category}
                                </h3>
                                <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-6 px-4">
                                    {section.items.map((tech) => (
                                        <div
                                            key={tech.name}
                                            className="bg-[#171717] w-[200px] h-[200px] border border-[#6C6C6C] hover:border-white rounded-xl p-4 flex flex-col items-center justify-center text-center transform transition duration-300 hover:scale-105"
                                        >
                                            <div className="text-[60px] md:text-[80px] mb-3" style={{ color: tech.color }}>
                                                {tech.icon}
                                            </div>
                                            <span className="text-gray-200 text-base md:text-lg">
                                                {tech.name}
                                            </span>
                                        </div>
                                    ))}
                                </div>
                            </div>
                        ))}
                    </div>
                )}

                {activeTab === "Projects" && (
                    <>
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

                        {/* Single Show More on GitHub Button */}
                        <div className="flex justify-center mt-8">
                            <a
                                href="https://github.com/MyDelRei?tab=repositories" // Put your GitHub profile or repo link here
                                target="_blank"
                                rel="noopener noreferrer"
                                className="inline-block border border-slate-50 text-white font-semibold py-3 px-8 rounded-lg transition duration-300"
                            >
                                Show More on GitHub
                            </a>
                        </div>
                    </>
                )}



                {activeTab === "Certificate" && (
                    <div className="space-y-10 px-4">
                        {categorizedCertificates.map((section, i) => (
                            <div key={i}>
                                <h3 className="newsreader-custom text-2xl md:text-3xl text-white mb-4 pl-4 text-center">
                                    {section.category}
                                </h3>
                                <div className="grid grid-cols-1 gap-6 px-4">
                                    {section.items.map((cert) => (
                                        <div
                                            key={cert.name}
                                            className="group bg-[#171717] border border-[#6C6C6C] hover:border-white transition duration-300 rounded-3xl shadow-xl overflow-hidden max-w-3xl mx-auto"
                                        >
                                            <img
                                                src={cert.image}
                                                alt={cert.name}
                                                className="w-full h-auto object-contain bg-black rounded-t-3xl"
                                            />
                                            <div className="p-4 md:p-6">
                                                <h3 className="text-lg md:text-xl text-white mb-2 font-palanquin-custom">
                                                    {cert.name}
                                                </h3>
                                                <p className="text-[#CDCDCD] text-sm md:text-base leading-relaxed font-light font-palanquin-custom">
                                                    {cert.description}
                                                </p>
                                            </div>
                                        </div>
                                    ))}
                                </div>
                            </div>
                        ))}
                    </div>
                )}


            </div>
        </div>
    );
};

export default Highlight;
