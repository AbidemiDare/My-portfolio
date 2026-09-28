'use client';

import type { StaticImageData } from "next/image";
import Image from "next/image";
import { User } from "lucide-react";
import { motion, useReducedMotion, type Variants } from "framer-motion";

// NOTE: the two numeric stats below are placeholders — swap in your real
// numbers before this goes live. The two role stats are safe as-is.
const stats = [
    { value: "2+", label: "Years Experience" },
    { value: "5+", label: "Projects Built" },
    { value: "React", label: "Developer" },
    { value: "Next.js", label: "Developer" },
];

const container: Variants = {
    hidden: {},
    show: { transition: { staggerChildren: 0.1 } },
};

const item: Variants = {
    hidden: { opacity: 0, y: 16 },
    show: { opacity: 1, y: 0, transition: { duration: 0.5, ease: "easeOut" } },
};

type AboutProps = {
    photoSrc?: string | StaticImageData;
};

const About = ({ photoSrc }: AboutProps) => {
    const shouldReduceMotion = useReducedMotion();

    return (
        <section id="about" className="relative border-t border-neutral-900 bg-neutral-950 py-24 sm:py-32">
            <div className="mx-auto max-w-6xl px-6 md:px-8">
                <motion.h2
                    initial={shouldReduceMotion ? undefined : { opacity: 0, y: 12 }}
                    whileInView={shouldReduceMotion ? undefined : { opacity: 1, y: 0 }}
                    viewport={{ once: true, margin: "-80px" }}
                    transition={{ duration: 0.5, ease: "easeOut" }}
                    className="text-3xl font-semibold tracking-tight text-white sm:text-4xl"
                >
                    A little about me
                </motion.h2>

                <div className="mt-12 grid grid-cols-1 gap-12 md:grid-cols-[minmax(0,320px)_1fr] md:gap-16">
                    {/* Photo */}
                    <motion.div
                        initial={shouldReduceMotion ? undefined : { opacity: 0, y: 16 }}
                        whileInView={shouldReduceMotion ? undefined : { opacity: 1, y: 0 }}
                        viewport={{ once: true, margin: "-80px" }}
                        transition={{ duration: 0.5, ease: "easeOut" }}
                        className="relative mx-auto w-full max-w-70 md:mx-0"
                    >
                        <div aria-hidden="true" className="absolute -inset-3 -z-10 rounded-2xl border border-neutral-800" />
                        <div className="aspect-[4/5] w-full overflow-hidden rounded-2xl border border-neutral-800 bg-neutral-900">
                            {photoSrc ? (
                                <Image
                                    src={photoSrc}
                                    alt="Portrait of Damilare"
                                    width={320}
                                    height={400}
                                    className="h-full w-full object-cover"
                                />
                            ) : (
                                <div className="flex h-full w-full items-center justify-center bg-linear-to-br from-neutral-900 to-neutral-950">
                                    <User className="h-16 w-16 text-neutral-700" aria-hidden="true" />
                                </div>
                            )}
                        </div>
                    </motion.div>

                    {/* Bio + stats */}
                    <motion.div
                        variants={container}
                        initial={shouldReduceMotion ? undefined : "hidden"}
                        whileInView={shouldReduceMotion ? undefined : "show"}
                        viewport={{ once: true, margin: "-80px" }}
                    >
                        <motion.p variants={item} className="max-w-xl text-base leading-relaxed text-neutral-400 sm:text-lg">
                            I&apos;m a frontend developer who enjoys turning designs into interfaces that actually feel good to use — translating Figma mockups into clean, responsive React and Next.js code, with an eye for the small UI details most people skip.
                        </motion.p>
                        <motion.p variants={item} className="mt-5 max-w-xl text-base leading-relaxed text-neutral-400 sm:text-lg">
                            Lately I&apos;ve been exploring where AI fits into the products I build, from integrating AI-driven features into real applications to experimenting with recommendation systems — always with the goal of shipping things people can actually use, not just prototypes.
                        </motion.p>

                        {/* Stats */}
                        <motion.div
                            variants={item}
                            className="mt-10 grid grid-cols-2 gap-4 sm:grid-cols-4 sm:gap-0 sm:divide-x sm:divide-neutral-800 sm:rounded-xl sm:border sm:border-neutral-800"
                        >
                            {stats.map((stat) => (
                                <div
                                    key={stat.label}
                                    className="rounded-xl border border-neutral-800 px-5 py-5 text-center sm:rounded-none sm:border-none sm:text-left"
                                >
                                    <p className="text-2xl font-semibold tracking-tight text-white">{stat.value}</p>
                                    <p className="mt-1 text-sm text-neutral-500">{stat.label}</p>
                                </div>
                            ))}
                        </motion.div>
                    </motion.div>
                </div>
            </div>
        </section>
    );
};

export default About;