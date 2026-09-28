'use client';

import { motion, useReducedMotion, type Variants } from "framer-motion";

type ExperienceEntry = {
    date: string;
    position: string;
    organization: string;
    bullets: string[];
};

// Entries mirror the CV, most recent first.
const experience: ExperienceEntry[] = [
    {
        date: "April 2025 – September 2025",
        position: "IT Intern",
        organization: "Advertising Regulatory Council of Nigeria (ARCON)",
        bullets: [
            "Supported IT operations, systems maintenance, and internal digital tools within a government regulatory body.",
            "Assisted with software deployment, troubleshooting, and documentation of IT workflows.",
        ],
    },
    {
        date: "November 2024 – February 2025",
        position: "Frontend Developer Intern",
        organization: "Cakkie Foods Ltd",
        bullets: [
            "Developed and maintained responsive UI components for the company's web platform.",
            "Collaborated with the design team to implement Figma prototypes using React and Tailwind CSS.",
            "Participated in code reviews and applied best practices for performance and accessibility.",
        ],
    },
    {
        date: "August 2023 – March 2024",
        position: "Computer Instructor",
        organization: "Beautiful Beginners Nursery and Primary School",
        bullets: [
            "Taught foundational computer science concepts and practical web skills to students.",
            "Built a responsive school website using HTML, CSS and JavaScript as a hands-on learning project for students.",
        ],
    },
];

const container: Variants = {
    hidden: {},
    show: { transition: { staggerChildren: 0.15 } },
};

const item: Variants = {
    hidden: { opacity: 0, y: 20 },
    show: { opacity: 1, y: 0, transition: { duration: 0.5, ease: "easeOut" } },
};

const Experience = () => {
    const shouldReduceMotion = useReducedMotion();

    return (
        <section id="experience" className="relative border-t border-neutral-900 bg-neutral-950 py-24 sm:py-32">
            <div className="mx-auto max-w-6xl px-6 md:px-8">
                <motion.h2
                    initial={shouldReduceMotion ? undefined : { opacity: 0, y: 12 }}
                    whileInView={shouldReduceMotion ? undefined : { opacity: 1, y: 0 }}
                    viewport={{ once: true, margin: "-80px" }}
                    transition={{ duration: 0.5, ease: "easeOut" }}
                    className="text-3xl font-semibold tracking-tight text-white sm:text-4xl"
                >
                    Where I&apos;ve worked
                </motion.h2>

                <motion.ol
                    variants={container}
                    initial={shouldReduceMotion ? undefined : "hidden"}
                    whileInView={shouldReduceMotion ? undefined : "show"}
                    viewport={{ once: true, margin: "-80px" }}
                    className="relative mt-14 max-w-2xl border-l border-neutral-800 pl-8"
                >
                    {experience.map((entry, i) => (
                        <motion.li
                            key={`${entry.position}-${entry.date}`}
                            variants={item}
                            className={`relative ${i === experience.length - 1 ? "" : "pb-12"}`}
                        >
                            <span
                                aria-hidden="true"
                                className="absolute -left-[calc(2rem+3.5px)] top-1.5 h-2.5 w-2.5 rounded-full bg-emerald-500 ring-4 ring-neutral-950"
                            />
                            <p className="font-mono text-sm text-emerald-400">{entry.date}</p>
                            <h3 className="mt-1 text-lg font-semibold text-white">{entry.position}</h3>
                            <p className="text-sm text-neutral-400">{entry.organization}</p>
                            <ul className="mt-3 space-y-2">
                                {entry.bullets.map((bullet) => (
                                    <li
                                        key={bullet}
                                        className="flex items-start gap-2.5 text-sm leading-relaxed text-neutral-400"
                                    >
                                        <span aria-hidden="true" className="mt-2 h-1 w-1 shrink-0 rounded-full bg-neutral-600" />
                                        {bullet}
                                    </li>
                                ))}
                            </ul>
                        </motion.li>
                    ))}
                </motion.ol>
            </div>
        </section>
    );
};

export default Experience;