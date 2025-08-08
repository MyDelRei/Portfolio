import React, { useEffect, useRef } from 'react';
import { animate, scroll, inView, stagger } from 'motion';
import icon1 from '../assets/icon1.png';
import icon2 from '../assets/icon2.png';
import icon3 from '../assets/icon3.png';
import icon4 from '../assets/icon4.png';
import icon5 from '../assets/icon5.png';

const customFontStyles = `
    .font-irish-grover-custom {
        font-family: 'Irish Grover', cursive;
    }
    .font-newsreader-custom {
        font-family: 'Newsreader', serif;
    }
    .font-palanquin-custom {
        font-family: 'Palanquin', sans-serif;
    }
`;

const OfferSection = () => {
    const titleRef = useRef(null);
    const paraRef = useRef(null);
    const cardRefs = useRef([]);

    useEffect(() => {
        // Animate title
        inView(titleRef.current, () => {
            animate(titleRef.current, { opacity: [0, 1], y: [-30, 0] }, { duration: 0.6, delay: 0.1 });
        });

        // Animate paragraph
        inView(paraRef.current, () => {
            animate(paraRef.current, { opacity: [0, 1], y: [-20, 0] }, { duration: 0.5, delay: 0.2 });
        });

        // Animate cards one-by-one
        inView(cardRefs.current, () => {
            animate(
                cardRefs.current,
                { opacity: [0, 1], y: [40, 0] },
                { delay: stagger(0.15), duration: 0.5, easing: 'ease-out' }
            );
        });
    }, []);

    const cardData = [
        {
            icon: icon1,
            title: "What I Bring",
            description: "A solid foundation in software development with a focus on building reliable, scalable, and maintainable applications from the ground up."
        },
        {
            icon: icon2,
            title: "My Value to the Team",
            description: "Strong problem-solving skills with a focus on clean, efficient code. I thrive in teams and enjoy turning complex challenges into simple, scalable solutions."
        },
        {
            icon: icon3,
            title: "Why Choose Me",
            description: "A continuous learner mindset, always eager to deepen my knowledge through research, documentation, browsering, and hands-on practice."
        },
        {
            icon: icon4,
            title: "My Strengths & Skills",
            description: "Adaptability to new technologies and frameworks, with a drive to deliver high-quality solutions aligned with business goals."
        },
        {
            icon: icon5,
            title: "Key Qualities I Bring",
            description: "Enthusiasm for turning complex requirements into practical, user-friendly software."
        }
    ];

    return (
        <div className="p-4">
            <style dangerouslySetInnerHTML={{ __html: customFontStyles }} />

            <section className="bg-[#151515]  rounded-3xl text-neutral-200 lg:py-[120px] flex justify-center">
                <div className="max-w-7xl w-full">
                    {/* Header Section */}
                    <div className="text-center mb-12">
                        <h2
                            ref={titleRef}
                            className="newsreader-custom text-[40px] sm:text-[40px] md:text-[60px]
                          bg-gradient-to-r from-[#FFFFFF] to-[#999999]
                         text-transparent bg-clip-text opacity-0"
                        >
                            <span className="block">What i can offer for Your Organization</span>
                        </h2>
                        <p
                            ref={paraRef}
                            className="text-[15px] md:text-[22px] font-palanquin-custom text-neutral-400 opacity-0"
                        >
                            I've built projects and collaborated with teammates during my internship – here's what I can offer.
                        </p>
                    </div>

                    {/* Grid of Cards */}
                    <div className="flex justify-center">
                        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                            {cardData.map((card, index) => (
                                <div
                                    key={index}
                                    ref={(el) => (cardRefs.current[index] = el)}
                                    className="bg-[#171717] w-[400px] h-[460px] border border-zinc-800 rounded-3xl p-8 justify-end flex flex-col items-start gap-4 transition-transform duration-300 hover:scale-105 hover:border-zinc-700 opacity-0"
                                >
                                    <img src={card.icon} alt={`Icon for ${card.title}`} className="w-16 h-16" />
                                    <h3 className="font-newsreader-custom text-[28px] mb-6 font-semibold text-white">
                                        {card.title}
                                    </h3>
                                    <p className="font-palanquin-custom text-[17px] mb-4 text-neutral-400">
                                        {card.description}
                                    </p>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default OfferSection;
