'use client';

import { Code2, Database, Palette, Sparkles, Terminal } from "lucide-react";
import { motion, useReducedMotion, type Variants } from "framer-motion";

const skillCategories = [
    {
        name: "Frontend",
        icon: Code2,
        skills: ["HTML", "CSS", "JavaScript", "TypeScript", "React", "Next.js"],
    },
    {
        name: "UI / Styling",
        icon: Palette,
        skills: ["Tailwind CSS", "Framer Motion", "Responsive Design", "Figma"],
    },
    {
        name: "Backend / Data",
        icon: Database,
        skills: ["Node.js", "REST APIs", "Supabase"],
    },
    {
        name: "Tools",
        icon: Terminal,
        skills: ["Git", "GitHub", "VS Code", "Vercel", "Netlify"],
    },
    {
        name: "AI",
        icon: Sparkles,
        description: "Working knowledge — exploring how AI fits into real products, not a primary ML focus.",
        skills: ["Gemini API", "Python", "scikit-learn", "Pandas"],
    },
];

const container: Variants = {
    hidden: {},
    show: { transition: { staggerChildren: 0.08 } },
};

const item: Variants = {
    hidden: { opacity: 0, y: 16 },
    show: { opacity: 1, y: 0, transition: { duration: 0.45, ease: "easeOut" } },
};

const Skills = () => {
    const shouldReduceMotion = useReducedMotion();

    return (
        <section id="skills" className="relative border-t border-neutral-900 bg-neutral-950 py-24 sm:py-32">
            <div className="mx-auto max-w-6xl px-6 md:px-8">
                <motion.h2
                    initial={shouldReduceMotion ? undefined : { opacity: 0, y: 12 }}
                    whileInView={shouldReduceMotion ? undefined : { opacity: 1, y: 0 }}
                    viewport={{ once: true, margin: "-80px" }}
                    transition={{ duration: 0.5, ease: "easeOut" }}
                    className="max-w-lg text-3xl font-semibold tracking-tight text-white sm:text-4xl"
                >
                    Tools I use to bring ideas to life.
                </motion.h2>

                <motion.div
                    variants={container}
                    initial={shouldReduceMotion ? undefined : "hidden"}
                    whileInView={shouldReduceMotion ? undefined : "show"}
                    viewport={{ once: true, margin: "-80px" }}
                    className="mt-12 grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3"
                >
                    {skillCategories.map((category) => (
                        <motion.div
                            key={category.name}
                            variants={item}
                            className="rounded-xl border border-neutral-800 bg-neutral-900/40 p-6"
                        >
                            <div className="flex items-center gap-3">
                                <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-lg bg-neutral-800/60 text-emerald-400">
                                    <category.icon className="h-4 w-4" aria-hidden="true" />
                                </span>
                                <h3 className="font-medium text-white">{category.name}</h3>
                            </div>

                            {category.description && (
                                <p className="mt-3 text-sm leading-relaxed text-neutral-500">{category.description}</p>
                            )}

                            <ul className="mt-4 flex flex-wrap gap-2">
                                {category.skills.map((skill) => (
                                    <li
                                        key={skill}
                                        className="rounded-full border border-neutral-800 bg-neutral-800/40 px-3 py-1 text-sm text-neutral-300"
                                    >
                                        {skill}
                                    </li>
                                ))}
                            </ul>
                        </motion.div>
                    ))}
                </motion.div>
            </div>
        </section>
    );
};

export default Skills;