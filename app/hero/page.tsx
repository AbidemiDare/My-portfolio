'use client';

import type { SVGProps } from "react";
import { motion, useReducedMotion, type Variants } from "framer-motion";
import { ArrowRight, Download} from "lucide-react";
import Link from "next/link";
import { FaGithubAlt, FaLinkedinIn } from "react-icons/fa";

const XIcon = (props: SVGProps<SVGSVGElement>) => (
    <svg viewBox="0 0 24 24" fill="currentColor" {...props}>
        <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
    </svg>
);

const socialLinks = [
    { name: "GitHub", href: "https://github.com/", icon: FaGithubAlt },
    { name: "LinkedIn", href: "https://linkedin.com/in/", icon: FaLinkedinIn },
    { name: "X", href: "https://x.com/", icon: XIcon },
];

const stack = ["React", "Next.js", "TypeScript"];

// TODO: point these at the real files/links
const CV_HREF = "";

const container: Variants = {
    hidden: {},
    show: { transition: { staggerChildren: 0.08, delayChildren: 0.1 } },
};

const item: Variants = {
    hidden: { opacity: 0, y: 14 },
    show: { opacity: 1, y: 0, transition: { duration: 0.5, ease: "easeOut" } },
};

const Hero = () => {
    const shouldReduceMotion = useReducedMotion();

    return (
        <section className="relative overflow-hidden bg-neutral-950 pt-32 pb-24 sm:pt-40 sm:pb-32">
            {/* Background: faint grid, masked so it fades toward the edges */}
            <div
                aria-hidden="true"
                className="pointer-events-none absolute inset-0 [background-image:linear-gradient(to_right,rgba(255,255,255,0.05)_1px,transparent_1px),linear-gradient(to_bottom,rgba(255,255,255,0.05)_1px,transparent_1px)] [background-size:64px_64px] [mask-image:radial-gradient(ellipse_70%_60%_at_50%_0%,black_40%,transparent_100%)] [-webkit-mask-image:radial-gradient(ellipse_70%_60%_at_50%_0%,black_40%,transparent_100%)]"
            />
            {/* Soft, static radial glow behind the code card */}
            <div
                aria-hidden="true"
                className="pointer-events-none absolute left-1/2 top-0 h-144 w-144 -translate-x-1/2 rounded-full bg-emerald-500/10 blur-[120px]"
            />

            <div className="relative mx-auto grid max-w-6xl grid-cols-1 items-center gap-16 px-6 md:grid-cols-2 md:px-8">
                <motion.div
                    variants={container}
                    initial={shouldReduceMotion ? undefined : "hidden"}
                    animate={shouldReduceMotion ? undefined : "show"}
                >
                    <motion.div
                        variants={item}
                        className="inline-flex items-center gap-2 rounded-full border border-neutral-800 bg-neutral-900/60 px-3 py-1 text-xs font-medium tracking-wide text-neutral-300"
                    >
                        <span className="relative flex h-2 w-2">
                            <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-emerald-500 opacity-75" />
                            <span className="relative inline-flex h-2 w-2 rounded-full bg-emerald-500" />
                        </span>
                        Available for opportunities
                    </motion.div>

                    <motion.h1
                        variants={item}
                        className="mt-6 text-4xl font-semibold leading-[1.1] tracking-tight text-white sm:text-5xl lg:text-6xl"
                    >
                        I build digital experiences that look good and work even better.
                    </motion.h1>

                    <motion.p variants={item} className="mt-6 max-w-md text-base leading-relaxed text-neutral-400">
                        I&apos;m Damilare, a Frontend Developer focused on building responsive, accessible and engaging web applications with React, Next.js and TypeScript.
                    </motion.p>

                    <motion.div variants={item} className="mt-8 flex flex-wrap items-center gap-4">
                        <Link
                            href="#projects"
                            className="group inline-flex items-center gap-2 rounded-full bg-emerald-500 px-5 py-2.5 text-sm font-semibold text-neutral-950 transition-colors hover:bg-emerald-400 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-emerald-400 focus-visible:ring-offset-2 focus-visible:ring-offset-neutral-950"
                        >
                            View My Work
                            <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5" aria-hidden="true" />
                        </Link>
                        <Link
                            href={CV_HREF}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="inline-flex items-center gap-2 rounded-full border border-neutral-700 px-5 py-2.5 text-sm font-semibold text-neutral-200 transition-colors hover:border-neutral-500 hover:text-white focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-neutral-400 focus-visible:ring-offset-2 focus-visible:ring-offset-neutral-950"
                        >
                            Download CV
                            <Download className="h-4 w-4" aria-hidden="true" />
                        </Link>
                    </motion.div>

                    <motion.div variants={item} className="mt-10 flex items-center gap-5">
                        {socialLinks.map(({ name, href, icon: Icon }) => (
                            <Link
                                key={name}
                                href={href}
                                target="_blank"
                                rel="noopener noreferrer"
                                aria-label={name}
                                className="rounded-sm text-neutral-500 transition-colors hover:text-white focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-neutral-400 focus-visible:ring-offset-2 focus-visible:ring-offset-neutral-950"
                            >
                                <Icon className="h-5 w-5" aria-hidden="true" />
                            </Link>
                        ))}
                    </motion.div>
                </motion.div>

                {/* Visual: code-editor composition instead of a stock illustration */}
                <motion.div
                    initial={shouldReduceMotion ? undefined : { opacity: 0, y: 20 }}
                    animate={shouldReduceMotion ? undefined : { opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: 0.3, ease: "easeOut" }}
                    className="relative mx-auto w-full max-w-md"
                >
                    <div className="overflow-hidden rounded-xl border border-neutral-800 bg-neutral-900/80 shadow-2xl shadow-black/40 backdrop-blur-sm">
                        <div className="flex items-center gap-2 border-b border-neutral-800 bg-neutral-900 px-4 py-3">
                            <span className="h-3 w-3 rounded-full bg-neutral-700" />
                            <span className="h-3 w-3 rounded-full bg-neutral-700" />
                            <span className="h-3 w-3 rounded-full bg-neutral-700" />
                            <span className="ml-2 font-mono text-xs text-neutral-500">damilare.dev</span>
                        </div>
                        <div className="space-y-1 px-5 py-6 font-mono text-[13px] leading-relaxed sm:text-sm">
                            <p className="text-neutral-500">
                                <span className="text-emerald-400">const</span> developer = {"{"}
                            </p>
                            <p className="pl-4 text-neutral-300">
                                name: <span className="text-amber-300">&quot;Damilare&quot;</span>,
                            </p>
                            <p className="pl-4 text-neutral-300">
                                role: <span className="text-amber-300">&quot;Frontend Developer&quot;</span>,
                            </p>
                            <p className="pl-4 text-neutral-300">
                                stack: [<span className="text-amber-300">&quot;React&quot;</span>,{" "}
                                <span className="text-amber-300">&quot;Next.js&quot;</span>,{" "}
                                <span className="text-amber-300">&quot;TypeScript&quot;</span>],
                            </p>
                            <p className="pl-4 text-neutral-300">
                                available: <span className="text-emerald-400">true</span>,
                            </p>
                            <p className="text-neutral-500">
                                {"}"}
                                <motion.span
                                    aria-hidden="true"
                                    className="ml-1 inline-block h-4 w-0.5 translate-y-0.5 bg-emerald-400 align-middle"
                                    animate={shouldReduceMotion ? undefined : { opacity: [1, 0] }}
                                    transition={
                                        shouldReduceMotion
                                            ? undefined
                                            : { duration: 0.8, repeat: Infinity, repeatType: "reverse" }
                                    }
                                />
                            </p>
                        </div>
                    </div>

                    {/* Floating stack chip */}
                    <motion.div
                        className="absolute -bottom-5 -left-5 hidden items-center gap-2 rounded-lg border border-neutral-800 bg-neutral-900/90 px-3 py-2 shadow-lg shadow-black/30 backdrop-blur-sm sm:flex"
                        animate={shouldReduceMotion ? undefined : { y: [0, -6, 0] }}
                        transition={shouldReduceMotion ? undefined : { duration: 4, repeat: Infinity, ease: "easeInOut" }}
                    >
                        {stack.map((tech) => (
                            <span
                                key={tech}
                                className="rounded-full bg-neutral-800 px-2.5 py-1 text-xs font-medium text-neutral-300"
                            >
                                {tech}
                            </span>
                        ))}
                    </motion.div>
                </motion.div>
            </div>
        </section>
    );
};

export default Hero;