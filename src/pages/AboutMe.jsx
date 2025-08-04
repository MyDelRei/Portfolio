import React, { useState, useEffect, useRef, useCallback } from 'react';
import { animate } from 'motion';

const AboutMe = () => {
    const sectionsOrder = ['Who I Am', 'How I Think', 'What I Enjoy', 'What I Value'];

    const [activeSection, setActiveSection] = useState(sectionsOrder[0]);
    const sectionRefs = useRef({});

    // Set refs for each section
    const setRef = (section) => (el) => {
        sectionRefs.current[section] = el;
    };

    // Animate content fade-in on activeSection change
    useEffect(() => {
        const container = sectionRefs.current[activeSection];
        if (!container) return;

        animate(container, { opacity: [0, 1], y: [20, 0] }, { duration: 0.5, easing: 'ease-in-out' });
    }, [activeSection]);

    // Scroll to section inside the scrollable right content div
    const scrollToSection = useCallback((section) => {
        const contentDiv = document.getElementById('scrollable-content');
        const el = sectionRefs.current[section];
        if (contentDiv && el) {
            const paddingTop = parseInt(window.getComputedStyle(contentDiv).paddingTop) || 0;
            contentDiv.scrollTo({
                top: el.offsetTop - paddingTop,
                behavior: 'smooth',
            });
        }
    }, []);

    // Scroll handler on the right content div
    useEffect(() => {
        const contentDiv = document.getElementById('scrollable-content');
        if (!contentDiv) return;

        const onScroll = () => {
            const scrollPos = contentDiv.scrollTop + contentDiv.clientHeight / 3;

            let current = sectionsOrder[0];
            for (const section of sectionsOrder) {
                const el = sectionRefs.current[section];
                if (el) {
                    const offsetTop = el.offsetTop;
                    if (scrollPos >= offsetTop) {
                        current = section;
                    }
                }
            }
            setActiveSection(current);
        };

        contentDiv.addEventListener('scroll', onScroll);
        onScroll(); // initialize

        return () => contentDiv.removeEventListener('scroll', onScroll);
    }, [sectionsOrder]);

    // Handle keyboard navigation for up and down arrow keys
    useEffect(() => {
        const handleKeyDown = (e) => {
            const currentIndex = sectionsOrder.indexOf(activeSection);
            let newSection;

            if (e.key === 'ArrowDown') {
                e.preventDefault(); // Prevent default scroll behavior
                const nextIndex = Math.min(currentIndex + 1, sectionsOrder.length - 1);
                newSection = sectionsOrder[nextIndex];
            } else if (e.key === 'ArrowUp') {
                e.preventDefault(); // Prevent default scroll behavior
                const prevIndex = Math.max(currentIndex - 1, 0);
                newSection = sectionsOrder[prevIndex];
            }

            if (newSection && newSection !== activeSection) {
                setActiveSection(newSection);
                scrollToSection(newSection);
            }
        };

        window.addEventListener('keydown', handleKeyDown);
        return () => window.removeEventListener('keydown', handleKeyDown);
    }, [activeSection, sectionsOrder, scrollToSection]);


    const sectionsContent = {
        'Who I Am': (
            <div ref={setRef('Who I Am')} className="mb-[100px]">
                <p className="text-gray-300 mb-4 leading-relaxed font-palanquin-custom-light" style={{ fontSize: '30px' }}>
                    Hey, I’m <strong>Leang Panha Miko</strong> — friends call me <strong>Myko</strong>. I’m 19 and currently studying Computer Science and Engineering at ACLEDA University of Business.
                    I'm the kind of person who learns best by experimenting, building, and sometimes breaking things to see how they work. I'm curious, independent, and I enjoy deep conversations over small talk.
                </p>
            </div>
        ),
        'How I Think': (
            <div ref={setRef('How I Think')} className="mb-[100px]">
                <p className="text-gray-300 leading-relaxed font-palanquin-custom-light" style={{ fontSize: '30px' }}>
                    I’m a quiet thinker — someone who pays attention to detail and prefers logic over noise. I like to understand how things work beneath the surface, not just what they look like.
                    I believe that patience and consistency matter more than talent, and I always try to approach challenges with an open mind, even if I don't get things right the first time.
                </p>
            </div>
        ),
        'What I Enjoy': (
            <div ref={setRef('What I Enjoy')} className="mb-[100px]">
                <p className="text-gray-300 mb-4 leading-relaxed font-palanquin-custom-light" style={{ fontSize: '30px' }}>
                    Outside of coding, I like:
                </p>
                <ul className="list-disc list-inside text-gray-300 space-y-2 leading-relaxed font-palanquin-custom-light" style={{ fontSize: '30px' }}>
                    <li>Listening to music (especially when I need to focus or wind down)</li>
                    <li>Learning random useful things — from terminal commands to productivity hacks</li>
                    <li>Exploring design — I enjoy using tools like Figma just to experiment with visual ideas</li>
                    <li>Sometimes just scrolling through UI animations or watching dev videos for fun</li>
                </ul>
                <p className="text-gray-300 mt-4 leading-relaxed font-palanquin-custom-light" style={{ fontSize: '30px' }}>
                    I'm not into flashy stuff — I like calm energy, subtle creativity, and working on things that make sense to me.
                </p>
            </div>
        ),
        'What I Value': (
            <div ref={setRef('What I Value')} className="mb-[400px]">
                <p className="text-gray-300 leading-relaxed font-palanquin-custom-light" style={{ fontSize: '30px' }}>
                    I care about honesty, depth, and progress. I like people who are real, who say “I don’t know” when they don’t, and who stay humble even when they’re good at something.
                    I’m still figuring out life like anyone else, but I know I want to build things that matter — not just in code, but in how I live.
                </p>
            </div>
        ),
    };

    // Disable body scroll when this component is mounted
    useEffect(() => {
        const originalOverflow = document.body.style.overflow;
        document.body.style.overflow = 'hidden';
        return () => {
            document.body.style.overflow = originalOverflow;
        };
    }, []);

    return (
        <div
            className="bg-[#151515] min-h-screen flex flex-col md:flex-row font-newsreader-custom text-white"
            style={{
                height: '100vh',
                paddingTop: '120px',
                paddingBottom: '100px',
                paddingLeft: '100px',
                paddingRight: '100px',
            }}
        >
            {/* Left Navigation - sticky, centered */}
            <nav
                className="w-full md:w-1/4 md:border-r border-gray-700 flex flex-col items-center justify-center"
                style={{
                    position: 'sticky',
                    top: '120px',
                    alignSelf: 'flex-start',
                    height: 'calc(100vh - 220px)',
                    padding: '1rem',
                    boxSizing: 'border-box',
                    borderRightWidth: '2px',
                    borderColor: '#4B5563',
                }}
            >
                <ul className="space-y-4 w-full">
                    {sectionsOrder.map((section) => (
                        <li key={section} className="relative">
                            <button
                                className={`text-[30px] md:text-[40px] lg:text-[40px] text-center w-full transition-colors duration-300 ${
                                    activeSection === section ? 'text-white font-bold' : 'text-gray-500 hover:text-white'
                                } font-newsreader-custom`}
                                onClick={() => scrollToSection(section)}
                                style={{ fontSize: '30px' }}
                            >
                                {section}
                            </button>
                        </li>
                    ))}
                </ul>
            </nav>

            {/* Right Content - scrollable */}
            <main
                id="scrollable-content"
                className="w-full md:w-3/4 overflow-y-auto"
                style={{
                    padding: '0 2rem',
                    scrollBehavior: 'smooth',
                    height: 'calc(100vh - 220px)',
                    boxSizing: 'border-box',
                    /* Hide scrollbar for Chrome, Safari and Opera */
                    WebkitOverflowScrolling: 'touch',
                    WebkitTransform: 'translateZ(0)',
                    WebkitMaskImage: '-webkit-radial-gradient(white, black)',
                    /* Hide scrollbar for IE, Edge and Firefox */
                    msOverflowStyle: 'none',
                    scrollbarWidth: 'none',
                }}
            >
                <h2
                    className="text-white mb-8 font-newsreader-custom"
                    style={{
                        fontSize: '70px',
                        textAlign: 'center',
                        marginBottom: '2rem',
                    }}
                >
                    About me
                </h2>
                {sectionsOrder.map((section) => sectionsContent[section])}
            </main>
        </div>
    );
};

export default AboutMe;
