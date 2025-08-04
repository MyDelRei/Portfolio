import { IoIosTimer } from "react-icons/io";
import {
    FaBehance,
    FaDribbble,
    FaFacebookF,
    FaInstagram,
    FaTwitter,
    FaLinkedinIn,
    FaVimeoV, FaGithub,
} from "react-icons/fa";
import React from "react";

const socialIconClass =
    "p-3 bg-[#2a2a2a] rounded-full hover:bg-white hover:text-black transition-colors duration-300";

const Contact = () => {
    return (
        <div className=" text-white pt-24 font-palanquin-custom relative overflow-hidden mt-[150px]">
            {/* Curved top section */}
            <div className="absolute top-0 left-0 w-full h-12  rounded-t-full transform -translate-y-1/2"></div>

            <div className="max-w-7xl mx-auto px-4 md:px-8 lg:px-12 text-center pb-8">
                <h3 className="text-sm font-light text-gray-400 mb-2">Your cup of tea?</h3>
                <h2 className="text-5xl font-normal mb-10 text-white font-irish-grover-custom">
                    Let's start Talking
                </h2>

                <div className="flex flex-col md:flex-row justify-center items-center space-y-8 md:space-y-0 md:space-x-12 lg:space-x-24">
                    <div className="text-lg md:text-xl font-newsreader-custom">
                        <a href="https://mail.google.com/mail/?view=cm&to=Saovdyleang@gmail.com"
                           target="_blank"
                           rel="noopener noreferrer" className="text-[40px] font-bold hover:underline">
                            saovdyleang@gmail.com
                        </a>
                    </div>

                    <div className="flex items-center  space-x-3 text-lg md:text-xl">
                        <IoIosTimer className="text-4xl text-white" />
                        <div className="text-left  font-newsreader-custom">
                            <div className="font-bold text-[40px]">Cambodia</div>
                            <div className="text-sm text-gray-400 text-[20px]"> / Kandal / Cambodia </div>
                        </div>
                    </div>
                </div>
            </div>

            <div className=" py-6 mt-16">
                <div className="flex justify-center space-x-4">

                    <a
                        href="https://www.linkedin.com/in/leang-panhasaovordy-24280b34a/?trk=opento_sprofile_topcard"
                        className={socialIconClass}
                        target="_blank"
                        rel="noopener noreferrer"
                    >
                        <FaLinkedinIn className="text-xl" />
                    </a>


                    <a
                        href="https://github.com/MyDelRei"
                        className={socialIconClass}
                        target="_blank"
                        rel="noopener noreferrer"
                    >
                        <FaGithub className="text-xl" />
                    </a>





                </div>
            </div>
        </div>
    );
};

export default Contact;
