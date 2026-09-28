'use client';

import { motion, useReducedMotion, type Variants } from "framer-motion";
import { ArrowRight, Mail, MapPin } from "lucide-react";
import Link from "next/link";

// TODO: replace with your real email and LinkedIn profile URL
const EMAIL = "oluwadamilareadewakun@gmail.com";
const LINKEDIN_HREF = "https://www.linkedin.com/in/adewakun-oluwadamilare-641b22281/";

const container: Variants = {
    hidden: {},
    show: { transition: { staggerChildren: 0.1 } },
};

const item: Variants = {
    hidden: { opacity: 0, y: 16 },
    show: { opacity: 1, y: 0, transition: { duration: 0.5, ease: "easeOut" } },
};

const focusRing =
    "focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-offset-neutral-950";

const Contact = () => {
    const shouldReduceMotion = useReducedMotion();

    return (
        <section id="contact" className="relative border-t border-neutral-900 bg-neutral-950 py-24 sm:py-32">
            <div className="mx-auto max-w-6xl px-6 md:px-8">
                <div className="relative overflow-hidden rounded-2xl border border-neutral-800 bg-neutral-900/40 px-6 py-16 sm:px-12 sm:py-24">
                    {/* Background: faint grid + soft glow, echoing the Hero */}
                    <div
                        aria-hidden="true"
                        className="pointer-events-none absolute inset-0 [background-image:linear-gradient(to_right,rgba(255,255,255,0.05)_1px,transparent_1px),linear-gradient(to_bottom,rgba(255,255,255,0.05)_1px,transparent_1px)] [background-size:48px_48px] [mask-image:radial-gradient(ellipse_60%_70%_at_50%_50%,black_30%,transparent_100%)] [-webkit-mask-image:radial-gradient(ellipse_60%_70%_at_50%_50%,black_30%,transparent_100%)]"
                    />
                    <div
                        aria-hidden="true"
                        className="pointer-events-none absolute left-1/2 top-1/2 h-80 w-80 -translate-x-1/2 -translate-y-1/2 rounded-full bg-emerald-500/10 blur-[100px]"
                    />

                    <motion.div
                        variants={container}
                        initial={shouldReduceMotion ? undefined : "hidden"}
                        whileInView={shouldReduceMotion ? undefined : "show"}
                        viewport={{ once: true, margin: "-80px" }}
                        className="relative mx-auto flex max-w-2xl flex-col items-center text-center"
                    >
                        <motion.h2
                            variants={item}
                            className="text-4xl font-semibold leading-[1.1] tracking-tight text-white sm:text-5xl lg:text-6xl"
                        >
                            Let&apos;s build something useful.
                        </motion.h2>

                        <motion.p variants={item} className="mt-6 max-w-xl text-base leading-relaxed text-neutral-400 sm:text-lg">
                            I&apos;m currently open to frontend development opportunities, internships, freelance
                            projects and interesting collaborations.
                        </motion.p>

                        <motion.div variants={item} className="mt-10 flex flex-wrap items-center justify-center gap-4">
                            <a
                                href={`mailto:${EMAIL}`}
                                className={`group inline-flex items-center gap-2 rounded-full bg-emerald-500 px-6 py-3 text-sm font-semibold text-neutral-950 transition-colors hover:bg-emerald-400 focus-visible:ring-emerald-400 ${focusRing}`}
                            >
                                Email Me
                                <ArrowRight
                                    className="h-4 w-4 transition-transform group-hover:translate-x-0.5"
                                    aria-hidden="true"
                                />
                            </a>
                            <Link
                                href={LINKEDIN_HREF}
                                target="_blank"
                                rel="noopener noreferrer"
                                className={`group inline-flex items-center gap-2 rounded-full border border-neutral-700 px-6 py-3 text-sm font-semibold text-neutral-200 transition-colors hover:border-neutral-500 hover:text-white focus-visible:ring-neutral-400 ${focusRing}`}
                            >
                                LinkedIn
                                <ArrowRight
                                    className="h-4 w-4 transition-transform group-hover:translate-x-0.5"
                                    aria-hidden="true"
                                />
                            </Link>
                        </motion.div>

                        {/* Contact information */}
                        <motion.div
                            variants={item}
                            className="mt-14 flex w-full flex-col items-center justify-center gap-6 border-t border-neutral-800 pt-8 sm:flex-row sm:gap-12"
                        >
                            <div className="flex items-center gap-3 text-left">
                                <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-lg bg-neutral-800/60 text-emerald-400">
                                    <Mail className="h-4 w-4" aria-hidden="true" />
                                </span>
                                <div>
                                    <p className="text-xs text-neutral-500">Email</p>
                                    <a
                                        href={`mailto:${EMAIL}`}
                                        className={`rounded-sm text-sm text-neutral-200 transition-colors hover:text-white focus-visible:ring-neutral-400 ${focusRing}`}
                                    >
                                        oluwadamilareadewakun@gmail.com
                                    </a>
                                </div>
                            </div>
                            <div className="flex items-center gap-3 text-left">
                                <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-lg bg-neutral-800/60 text-emerald-400">
                                    <MapPin className="h-4 w-4" aria-hidden="true" />
                                </span>
                                <div>
                                    <p className="text-xs text-neutral-500">Based in</p>
                                    <p className="text-sm text-neutral-200">Lagos, Nigeria</p>
                                </div>
                            </div>
                        </motion.div>
                    </motion.div>
                </div>
            </div>
        </section>
    );
};

export default Contact;