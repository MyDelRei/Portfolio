import React, { useState, useEffect, useRef } from "react";
import { BsThreeDots } from "react-icons/bs";
import { FaGithub } from "react-icons/fa";
import { MdEmail } from "react-icons/md";
import { AnimatePresence, motion, animate } from "motion/react";
import { Link } from "react-router-dom";

const NavBar = () => {
    const [isDropdownOpen, setIsDropdownOpen] = useState(false);
    const [scrolled, setScrolled] = useState(false);

    useEffect(() => {
        const onScroll = () => {
            setScrolled(window.scrollY > 80);
            if (window.scrollY > 80) setIsDropdownOpen(false);
        };
        window.addEventListener("scroll", onScroll);
        return () => window.removeEventListener("scroll", onScroll);
    }, []);

    const toggleDropdown = () => setIsDropdownOpen(!isDropdownOpen);

    const logoRef = useRef(null);
    const navRef = useRef(null);

    useEffect(() => {
        if (logoRef.current) {
            animate(
                logoRef.current,
                { x: [-200, 0], opacity: [0, 1] },
                { duration: 0.6, easing: "ease-in-out" }
            );
        }
        if (navRef.current) {
            animate(
                navRef.current,
                { x: [200, 0], opacity: [0, 1] },
                { duration: 0.6, easing: "ease-in-out" }
            );
        }
    }, []);

    const dropdownMenuWithNavButtons = (
        <motion.div
            key="dropdown-menu-with-navbuttons"
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            transition={{ duration: 0.25 }}
            className="w-[220px] h-[360px] flex flex-col justify-center space-y-2 p-4 absolute right-0 mt-[25px] bg-[#232323] border border-[#444444] rounded-[22px] shadow-lg z-10"
        >
            <Link to="/about" onClick={() => setIsDropdownOpen(false)} className="rounded-full hover:bg-[#D6D6D6] hover:text-[#806032] transition-colors duration-200 font-palanquin-custom text-[#D6D6D6] text-[20px] font-medium px-4 py-2 hover:rounded-full">
                About
            </Link>
            <Link to="/highlights" className="text-[#D6D6D6] text-[20px] font-palanquin-custom font-medium px-4 py-2 rounded-full hover:bg-[#D6D6D6] hover:text-[#806032] transition-colors duration-200">
                Tech stack
            </Link>

            <Link to="/highlights" onClick={() => setIsDropdownOpen(false)} className="rounded-full hover:bg-[#D6D6D6] hover:text-[#806032] transition-colors duration-200 font-palanquin-custom text-[#D6D6D6] text-[20px] font-medium px-4 py-2 hover:rounded-full">
                Projects
            </Link>
            <Link to="/resume" onClick={() => setIsDropdownOpen(false)} className="rounded-full hover:bg-[#D6D6D6] hover:text-[#806032] transition-colors duration-200 font-palanquin-custom text-[#D6D6D6] text-[20px] font-medium px-4 py-2 hover:rounded-full">
                Resume
            </Link>
            <a href="https://github.com/MyDelRei" target="_blank" className="flex items-center px-4 py-2 text-white rounded-full hover:bg-[#D6D6D6] hover:text-[#806032] transition-colors duration-200 font-palanquin-custom">
                <span className="text-[26px] pr-[15px]"><FaGithub /></span>
                <span className="text-[20px]">Github</span>
            </a>
            <a
                href="#footer"
                className="flex items-center px-4 py-2 text-white rounded-full hover:bg-[#D6D6D6] hover:text-[#806032] transition-colors duration-200 font-palanquin-custom"
            >
                <span className="text-[26px] pr-[15px]"><MdEmail /></span>
                <span className="text-[20px]">Contact</span>
            </a>


        </motion.div>
    );

    const dropdownMenuIconsOnly = (
        <motion.div
            key="dropdown-menu-icons-only"
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            transition={{ duration: 0.25 }}
            className="w-[200px] h-[180px] flex flex-col justify-center space-y-2 p-4 absolute right-0 mt-[25px] bg-[#232323] border border-[#444444] rounded-[22px] shadow-lg z-10"
        >
            <a href="https://github.com/MyDelRei" target="_blank"  className="flex items-center px-4 py-2 text-white rounded-full hover:bg-[#D6D6D6] hover:text-[#806032] transition-colors duration-200 font-palanquin-custom">
                <span className="text-[26px] pr-[15px]"><FaGithub /></span>
                <span className="text-[20px]">Github</span>
            </a>
            <Link
                to="/contact"
                className="flex items-center px-4 py-2 text-white rounded-full hover:bg-[#D6D6D6] hover:text-[#806032] transition-colors duration-200 font-palanquin-custom"
            >
                <span className="text-[26px] pr-[15px]"><MdEmail /></span>
                <span className="text-[20px]">Contact</span>
            </Link>


        </motion.div>
    );

    return (
        <>
            <AnimatePresence>
                {!scrolled && (
                    <motion.nav
                        initial={{ opacity: 0, y: -20 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: -20 }}
                        transition={{ duration: 0.4 }}
                        className="fixed top-0 left-0 w-full z-50 bg-transparent flex justify-between items-center py-4 px-6"
                    >
                        <Link to="/" ref={logoRef} className="text-[50px] font-irish-grover-custom text-white py-[30px] px-[70px] mobile:px-0 mobile:py-0 mobile:text-[40px] mobile:text-center">
                            Saovordy
                        </Link>
                        <div ref={navRef} className="hidden md:flex items-center lg:mr-[58px]">
                            <div className="w-[440px] h-[60px] flex items-center space-x-1 bg-[#303030] p-2 rounded-full border-2 border-[#444444] shadow-lg">
                                <Link to="/about" className="text-[#D6D6D6] text-[20px] font-palanquin-custom font-medium px-4 py-2 rounded-full hover:bg-[#D6D6D6] hover:text-[#806032] transition-colors duration-200">About</Link>
                                <Link to="/highlights" className="text-[#D6D6D6] text-[20px] font-palanquin-custom font-medium px-4 py-2 rounded-full hover:bg-[#D6D6D6] hover:text-[#806032] transition-colors duration-200">Tech </Link>
                                <Link to="/highlights" className="text-[#D6D6D6] text-[20px] font-palanquin-custom font-medium px-4 py-2 rounded-full hover:bg-[#D6D6D6] hover:text-[#806032] transition-colors duration-200">Projects</Link>
                                <Link to="/resume" className="text-[#D6D6D6] text-[20px] font-palanquin-custom font-medium px-4 py-2 rounded-full hover:bg-[#D6D6D6] hover:text-[#806032] transition-colors duration-200">Resume</Link>
                                <div className="relative">
                                    <button
                                        onClick={toggleDropdown}
                                        className="flex items-center justify-center w-[40px] h-[40px] rounded-full bg-[#505050] focus:outline-none focus:ring-1 focus:ring-offset-2 focus:ring-offset-[#444444] focus:ring-[#444444] transition-colors duration-200"
                                        aria-expanded={isDropdownOpen}
                                    >
                                        <span className="text-[#D9D9D9] text-xl"><BsThreeDots /></span>
                                    </button>
                                    <AnimatePresence>
                                        {isDropdownOpen && dropdownMenuIconsOnly}
                                    </AnimatePresence>
                                </div>
                            </div>
                        </div>

                        <div className="md:hidden relative">
                            <button
                                onClick={toggleDropdown}
                                className="flex items-center justify-center w-10 h-10 rounded-full bg-[#505050] hover:bg-[#444444] transition-colors duration-200"
                                aria-expanded={isDropdownOpen}
                            >
                                <span className="text-white text-xl"><BsThreeDots /></span>
                            </button>
                            <AnimatePresence>
                                {isDropdownOpen && dropdownMenuWithNavButtons}
                            </AnimatePresence>
                        </div>
                    </motion.nav>
                )}
            </AnimatePresence>

            <AnimatePresence>
                {scrolled && (
                    <motion.nav
                        initial={{ opacity: 0, y: -40 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: -40 }}
                        transition={{ duration: 0.4 }}
                        className="fixed top-0 left-0 z-50 w-full flex justify-between items-center py-2 px-4 shadow-md bg-[#151515]"
                    >
                        <div className="text-2xl font-irish-grover-custom text-white">Saovordy</div>
                        <div className="relative">
                            <button
                                onClick={toggleDropdown}
                                className="flex items-center justify-center w-10 h-10 rounded-full bg-[#505050] hover:bg-[#444444] transition-colors duration-200"
                                aria-expanded={isDropdownOpen}
                            >
                                <span className="text-white text-xl"><BsThreeDots /></span>
                            </button>
                            <AnimatePresence>
                                {isDropdownOpen && dropdownMenuWithNavButtons}
                            </AnimatePresence>
                        </div>
                    </motion.nav>
                )}
            </AnimatePresence>
        </>
    );
};

export default NavBar;
