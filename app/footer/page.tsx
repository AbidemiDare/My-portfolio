'use client';

import type { SVGProps } from "react";
import { motion, useReducedMotion } from "framer-motion";
import Link from "next/link";
import { FaGithub, FaLinkedin } from "react-icons/fa";

const XIcon = (props: SVGProps<SVGSVGElement>) => (
    <svg viewBox="0 0 24 24" fill="currentColor" {...props}>
        <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
    </svg>
);

// TODO: point these at your real profile URLs (kept consistent with the Hero section)
const socialLinks = [
    { name: "GitHub", href: "https://github.com/", icon: FaGithub },
    { name: "LinkedIn", href: "https://linkedin.com/in/", icon: FaLinkedin },
    { name: "X", href: "https://x.com/", icon: XIcon },
];

const Footer = () => {
    const shouldReduceMotion = useReducedMotion();
    const year = new Date().getFullYear();

    return (
        <footer className="border-t border-neutral-900 bg-neutral-950">
            <motion.div
                initial={shouldReduceMotion ? undefined : { opacity: 0, y: 12 }}
                whileInView={shouldReduceMotion ? undefined : { opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-40px" }}
                transition={{ duration: 0.5, ease: "easeOut" }}
                className="mx-auto flex max-w-6xl flex-col items-center gap-6 px-6 py-16 text-center md:px-8"
            >
                <Link
                    href="/"
                    className="rounded-sm text-lg font-semibold tracking-tight text-white transition-colors hover:text-neutral-300 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-neutral-400 focus-visible:ring-offset-2 focus-visible:ring-offset-neutral-950"
                >
                    Damilare<span className="text-emerald-600">.</span>
                </Link>

                <p className="text-sm text-neutral-400">Frontend Developer • UI/UX • AI</p>

                <div className="flex items-center gap-6">
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
                </div>

                <p className="text-xs text-neutral-600">© {year} Damilare. Built with Next.js.</p>
            </motion.div>
        </footer>
    );
};

export default Footer;