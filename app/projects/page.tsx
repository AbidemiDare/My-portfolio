'use client';

import type { StaticImageData } from "next/image";
import Image from "next/image";
import Link from "next/link";
import { ArrowRight, ArrowUpRight, Plus } from "lucide-react";
import { motion, useReducedMotion, type Variants } from "framer-motion";
import { FaGithub } from "react-icons/fa6";

type Project = {
    title: string;
    kicker?: string;
    description: string;
    tech: string[];
    highlights?: string[];
    caseStudyHref: string;
    githubHref: string;
    image?: string | StaticImageData;
    featured?: boolean;
};

const projects: Project[] = [
    {
        title: "AI Student Project Recommendation System",
        description:
            "AI-powered platform that recommends final-year project ideas based on a student's skills and interests.",
        tech: ["Next.js", "TypeScript", "Gemini", "Supabase"],
        highlights: [
            "AI-powered recommendations",
            "Personalized onboarding",
            "Preference-based matching",
            "Recommendation scoring",
            "Responsive dashboard",
        ],
        image: "/Sprs.png",
        caseStudyHref: "/projects/student-recommendation-system",
        githubHref: "https://github.com/AbidemiDare/Recommendation-System", // TODO: add repo link
        featured: true,
    },
    {
        title: "Rapha Homes & Properties",
        kicker: "Real Estate Property Platform",
        description:
            "A modern real estate platform designed to help users discover properties, explore listings and connect with agents.",
        tech: ["Next.js", "TypeScript", "Tailwind CSS", "Web3Forms"],
        image: "/Rapha.png",
        caseStudyHref: "/projects/rapha-homes",
        githubHref: "https://github.com/AbidemiDare/Real-Estate", // TODO: add repo link
    },
];

const container: Variants = {
    hidden: {},
    show: { transition: { staggerChildren: 0.12 } },
};

const item: Variants = {
    hidden: { opacity: 0, y: 20 },
    show: { opacity: 1, y: 0, transition: { duration: 0.5, ease: "easeOut" } },
};

const ProjectCard = ({ project, className = "" }: { project: Project; className?: string }) => (
    <motion.article
        variants={item}
        className={`group relative flex flex-col overflow-hidden rounded-xl border border-neutral-800 bg-neutral-900/40 ${className}`}
    >
        <div className={`relative overflow-hidden ${project.featured ? "aspect-[16/9]" : "aspect-[4/3]"}`}>
            {project.image ? (
                <Image
                    src={project.image}
                    alt={`${project.title} screenshot`}
                    fill
                    sizes="(min-width: 1024px) 50vw, 100vw"
                    className="object-cover transition-transform duration-300 ease-out group-hover:scale-[1.03] motion-reduce:transform-none"
                />
            ) : (
                <div className="flex h-full w-full items-center justify-center bg-gradient-to-br from-neutral-900 to-neutral-950 transition-transform duration-300 ease-out group-hover:scale-[1.03] motion-reduce:transform-none">
                    <span className="font-mono text-xs uppercase tracking-widest text-neutral-700">Screenshot</span>
                </div>
            )}
            <div className="absolute inset-0 flex items-end justify-center bg-neutral-950/0 pb-6 opacity-0 transition-all duration-300 group-hover:bg-neutral-950/40 group-hover:opacity-100">
                <span className="translate-y-2 rounded-full bg-white px-4 py-2 text-sm font-medium text-neutral-950 transition-transform duration-300 group-hover:translate-y-0">
                    View Project →
                </span>
            </div>
        </div>

        <div className="flex flex-1 flex-col p-6">
            {project.kicker && <p className="text-sm font-medium text-emerald-400">{project.kicker}</p>}
            <h3 className={`mt-1 font-semibold text-white ${project.featured ? "text-2xl" : "text-lg"}`}>
                {project.title}
            </h3>
            <p className="mt-3 max-w-lg text-sm leading-relaxed text-neutral-400">{project.description}</p>

            {project.highlights && (
                <ul className="mt-4 grid grid-cols-1 gap-x-6 gap-y-1.5 sm:grid-cols-2">
                    {project.highlights.map((point) => (
                        <li key={point} className="flex items-start gap-2 text-sm text-neutral-300">
                            <span className="mt-0.5 text-emerald-400" aria-hidden="true">
                                ✓
                            </span>
                            {point}
                        </li>
                    ))}
                </ul>
            )}

            <ul className="mt-5 flex flex-wrap gap-2">
                {project.tech.map((tech) => (
                    <li
                        key={tech}
                        className="rounded-full border border-neutral-800 bg-neutral-800/40 px-3 py-1 text-xs text-neutral-300"
                    >
                        {tech}
                    </li>
                ))}
            </ul>

            <div className="mt-6 flex items-center gap-5 pt-1">
                <Link
                    href={project.caseStudyHref}
                    className="inline-flex items-center gap-1.5 rounded-sm text-sm font-medium text-white transition-colors hover:text-emerald-400 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-emerald-400 focus-visible:ring-offset-2 focus-visible:ring-offset-neutral-950"
                >
                    View Case Study
                    <ArrowRight className="h-4 w-4" aria-hidden="true" />
                </Link>
                <Link
                    href={project.githubHref}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={`${project.title} on GitHub`}
                    className="inline-flex items-center gap-1.5 rounded-sm text-sm font-medium text-neutral-400 transition-colors hover:text-white focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-neutral-400 focus-visible:ring-offset-2 focus-visible:ring-offset-neutral-950"
                >
                    <FaGithub/>
                    GitHub
                    <ArrowUpRight className="h-3.5 w-3.5" aria-hidden="true" />
                </Link>
            </div>
        </div>
    </motion.article>
);

const PlaceholderCard = () => (
    <motion.div
        variants={item}
        className="flex min-h-[320px] flex-col items-center justify-center rounded-xl border border-dashed border-neutral-800 p-8 text-center"
    >
        <span className="flex h-10 w-10 items-center justify-center rounded-full border border-neutral-800 text-neutral-600">
            <Plus className="h-4 w-4" aria-hidden="true" />
        </span>
        <h3 className="mt-4 font-medium text-neutral-300">Your next flagship project</h3>
        <p className="mt-2 max-w-xs text-sm leading-relaxed text-neutral-500">
            Reserved for whichever project shows off the most sophisticated UI — a dashboard, booking flow, or
            e-commerce experience. Swap this card in once it&apos;s ready.
        </p>
    </motion.div>
);

const Projects = () => {
    const shouldReduceMotion = useReducedMotion();
    const featured = projects.find((p) => p.featured);
    const rest = projects.filter((p) => !p.featured);

    return (
        <section id="projects" className="relative border-t border-neutral-900 bg-neutral-950 py-24 sm:py-32">
            <div className="mx-auto max-w-6xl px-6 md:px-8">
                <motion.h2
                    initial={shouldReduceMotion ? undefined : { opacity: 0, y: 12 }}
                    whileInView={shouldReduceMotion ? undefined : { opacity: 1, y: 0 }}
                    viewport={{ once: true, margin: "-80px" }}
                    transition={{ duration: 0.5, ease: "easeOut" }}
                    className="text-3xl font-semibold tracking-tight text-white sm:text-4xl"
                >
                    Things I&apos;ve built
                </motion.h2>
                <motion.p
                    initial={shouldReduceMotion ? undefined : { opacity: 0, y: 12 }}
                    whileInView={shouldReduceMotion ? undefined : { opacity: 1, y: 0 }}
                    viewport={{ once: true, margin: "-80px" }}
                    transition={{ duration: 0.5, ease: "easeOut", delay: 0.05 }}
                    className="mt-4 max-w-xl text-base leading-relaxed text-neutral-400 sm:text-lg"
                >
                    A selection of applications where development, design and problem-solving come together.
                </motion.p>

                <motion.div
                    variants={container}
                    initial={shouldReduceMotion ? undefined : "hidden"}
                    whileInView={shouldReduceMotion ? undefined : "show"}
                    viewport={{ once: true, margin: "-80px" }}
                    className="mt-14 grid grid-cols-1 gap-8 lg:grid-cols-2"
                >
                    {featured && <ProjectCard project={featured} className="lg:col-span-2" />}
                    {rest.map((project) => (
                        <ProjectCard key={project.title} project={project} />
                    ))}
                    <PlaceholderCard />
                </motion.div>
            </div>
        </section>
    );
};

export default Projects;