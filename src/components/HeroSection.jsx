import React, { useEffect, useRef, useState } from "react";
import { animate } from "motion";
import { MdDownload, MdContactSupport } from "react-icons/md";

const HeroSection = () => {
    const sectionRef = useRef(null);
    const headingRef = useRef(null);
    const picRef = useRef(null);
    const pRef = useRef(null);            // <-- Add ref for <p>
    const buttonsRef = useRef([]);
    const [isVisible, setIsVisible] = useState(true);

    useEffect(() => {
        const observer = new IntersectionObserver(
            ([entry]) => {
                setIsVisible(entry.isIntersecting);
            },
            {
                threshold: 0.4,
            }
        );

        if (sectionRef.current) observer.observe(sectionRef.current);
        return () => sectionRef.current && observer.unobserve(sectionRef.current);
    }, []);

    useEffect(() => {
        if (isVisible) {
            // ENTRANCE
            animate(
                picRef.current,
                { scale: [0.8, 1], opacity: [0, 1], y: [20, 0] },
                { duration: 0.8, easing: "ease-out" }
            );

            animate(
                headingRef.current,
                { opacity: [0, 1], y: [20, 0] },
                { duration: 1, delay: 0.3, easing: "ease-out" }
            );

            animate(
                pRef.current,
                { opacity: [0, 1], y: [20, 0] },       // <-- Animate paragraph
                { duration: 1, delay: 0.5, easing: "ease-out" }
            );

            buttonsRef.current.forEach((el, i) => {
                animate(
                    el,
                    { opacity: [0, 1], y: [20, 0] },
                    { duration: 0.6, delay: 0.6 + i * 0.15, easing: "ease-out" }
                );
            });
        } else {
            // EXIT
            animate(
                picRef.current,
                { opacity: [1, 0], y: [0, 20], scale: [1, 0.95] },
                { duration: 0.5, easing: "ease-in" }
            );

            animate(
                headingRef.current,
                { opacity: [1, 0], y: [0, 20] },
                { duration: 0.5, delay: 0.1, easing: "ease-in" }
            );

            animate(
                pRef.current,
                { opacity: [1, 0], y: [0, 20] },       // <-- Animate paragraph exit
                { duration: 0.5, delay: 0.2, easing: "ease-in" }
            );

            buttonsRef.current.forEach((el, i) => {
                animate(
                    el,
                    { opacity: [1, 0], y: [0, 20] },
                    { duration: 0.4, delay: 0.15 * i, easing: "ease-in" }
                );
            });
        }
    }, [isVisible]);

    return (
        <section
            ref={sectionRef}
            className="bg-[#151515] text-white flex items-start justify-start sm:px-8 md:px-[100px] mt-[100px] pb-0 pt-[80px] mb-[100px]"
        >
            <div className="flex flex-col items-center sm:items-center md:items-start gap-8 max-w-5xl w-full text-center sm:text-center md:text-left">
                <img
                    ref={picRef}
                    src="/img/pfp.jpeg"
                    alt="Profile"
                    className="w-40 h-40 sm:w-48 sm:h-48 rounded-full object-cover border-4 border-zinc-700"
                />

                <div className="flex flex-col items-center sm:items-center md:items-start">
                    <h1
                        ref={headingRef}
                        className="newsreader-custom text-[40px] sm:text-[60px] md:text-[80px] leading-[1] tracking-[-0.03em] max-w-full sm:max-w-[600px] md:max-w-[870px] bg-gradient-to-r from-[#FFFFFF] to-[#999999] text-transparent bg-clip-text"
                    >
                        <span className="block">Hi I'm Saovordy, Software</span>
                        <span className="block -mt-2 sm:-mt-3 md:-mt-4 leading-[1]">Developer</span>
                    </h1>

                    <p
                        ref={pRef}
                        className="text-[16px] sm:text-[18px] md:text-[22px] mt-[20px] sm:mt-[30px] text-[#AFAFAF] px-2 font-palanquin-custom font-light max-w-full sm:max-w-[600px] md:max-w-[900px]"
                    >
                        I'm Saovordy, a software developer who enjoys turning ideas into clean, efficient
                        software. I love{' '}
                        <span className="font-bold text-white">building applications</span> from the ground
                        up and constantly learning through documentaries and reading to inspire my growth.
                    </p>

                    <div className="flex flex-wrap justify-center sm:justify-center md:justify-start gap-4 mt-4 w-full max-w-[450px] mx-auto md:mx-0">
                        <a
                            ref={(el) => (buttonsRef.current[0] = el)}
                            href="https://www.linkedin.com/in/leang-panhasaovordy-24280b34a/?trk=opento_sprofile_topcard"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="inline-flex items-center justify-center gap-2 bg-zinc-800 text-neutral-200 px-6 py-3 rounded-full border border-zinc-700 hover:bg-zinc-700 transition-colors font-palanquin-custom font-medium w-[215px] h-[72px]"
                        >
                            <span className="text-[18px] sm:text-[20px]">Get in touch</span>
                            <MdContactSupport className="ml-2 w-6 h-6 sm:w-7 sm:h-7" />
                        </a>


                        <a
                            ref={(el) => (buttonsRef.current[1] = el)}
                            href="#"
                            className="inline-flex items-center justify-center gap-2 bg-zinc-800 text-neutral-200 px-6 py-3 rounded-full border border-zinc-700 hover:bg-zinc-700 transition-colors font-palanquin-custom font-medium w-[215px] h-[72px]"
                        >
                            <span className="text-[18px] sm:text-[20px]">Download CV</span>
                            <MdDownload className="ml-2 w-6 h-6 sm:w-7 sm:h-7" />
                        </a>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default HeroSection;
