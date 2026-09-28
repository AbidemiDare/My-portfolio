'use client';

import { useCallback, useEffect, useState } from "react";
import { AnimatePresence, motion, useReducedMotion } from "framer-motion";
import { Download, Menu, X } from "lucide-react";
import Link from "next/link";

const navLinks = [
    { name: "About", href: "#about" },
    { name: "Skills", href: "#skills" },
    { name: "Experience", href: "#experience" },
    { name: "Projects", href: "#projects" },
    { name: "Contact", href: "#contact" },
];

// TODO: point this at the actual resume file (e.g. "/resume.pdf")
const RESUME_HREF = "/Adewakun_Resume.pdf";

const focusRing =
    "focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-neutral-900/60 focus-visible:ring-offset-2 dark:focus-visible:ring-white/60 dark:focus-visible:ring-offset-neutral-950";

const Navbar = () => {
    const [isOpen, setIsOpen] = useState(false);
    const [scrolled, setScrolled] = useState(false);
    const [activeHref, setActiveHref] = useState(navLinks[0].href);
    const shouldReduceMotion = useReducedMotion();

    // Subtle chrome change once the page has scrolled a bit
    useEffect(() => {
        const onScroll = () => setScrolled(window.scrollY > 8);
        onScroll();
        window.addEventListener("scroll", onScroll, { passive: true });
        return () => window.removeEventListener("scroll", onScroll);
    }, []);

    // Scroll-spy: highlight the link for whichever section is in view
    useEffect(() => {
        const sections = navLinks
            .map((link) => document.querySelector(link.href))
            .filter((el): el is Element => Boolean(el));

        if (sections.length === 0) return;

        const observer = new IntersectionObserver(
            (entries) => {
                const visible = entries
                    .filter((entry) => entry.isIntersecting)
                    .sort((a, b) => b.intersectionRatio - a.intersectionRatio)[0];

                if (visible?.target?.id) {
                    setActiveHref(`#${visible.target.id}`);
                }
            },
            { rootMargin: "-45% 0px -45% 0px", threshold: [0, 0.25, 0.5, 0.75, 1] }
        );

        sections.forEach((section) => observer.observe(section));
        return () => observer.disconnect();
    }, []);

    // Lock scroll + allow Escape to close the mobile menu
    useEffect(() => {
        if (!isOpen) return;
        const onKeyDown = (e: KeyboardEvent) => {
            if (e.key === "Escape") setIsOpen(false);
        };
        const previousOverflow = document.body.style.overflow;
        document.body.style.overflow = "hidden";
        window.addEventListener("keydown", onKeyDown);
        return () => {
            document.body.style.overflow = previousOverflow;
            window.removeEventListener("keydown", onKeyDown);
        };
    }, [isOpen]);

    const closeMenu = useCallback(() => setIsOpen(false), []);

    return (
        <header
            className={`fixed inset-x-0 top-0 z-50 transition-colors text-black duration-300 ${
                scrolled
                    ? "border-b border-neutral-200/80 bg-white/80 backdrop-blur-md dark:border-neutral-800/80 dark:bg-neutral-950/80"
                    : "border-b border-transparent bg-transparent"
            }`}
        >
            <nav className="mx-auto flex max-w-6xl items-center justify-between px-4 py-4 sm:px-6 md:px-8">
                <Link
                    href="/"
                    aria-label="Damilare's portfolio, back to top"
                    className={`rounded-sm text-base font-semibold tracking-tight text-neutral-900 transition-colors hover:text-neutral-600 dark:text-white dark:hover:text-neutral-300 ${focusRing}`}
                >
                    Damilare<span className="text-emerald-600">.</span>
                </Link>

                {/* Desktop links */}
                <ul className="hidden items-center gap-1 md:flex">
                    {navLinks.map((link) => {
                        const isActive = activeHref === link.href;
                        return (
                            <li key={link.name} className="relative">
                                <Link
                                    href={link.href}
                                    aria-current={isActive ? "page" : undefined}
                                    className={`relative block rounded-full px-4 py-2 text-sm font-medium transition-colors ${focusRing} ${
                                        isActive
                                            ? "text-neutral-900 dark:text-white"
                                            : "text-neutral-500 hover:text-neutral-900 dark:text-neutral-400 dark:hover:text-white"
                                    }`}
                                >
                                    <span className="relative z-10">{link.name}</span>
                                    {isActive && (
                                        <motion.span
                                            layoutId="active-nav-pill"
                                            className="absolute inset-0 rounded-full bg-neutral-100 dark:bg-neutral-800"
                                            transition={
                                                shouldReduceMotion
                                                    ? { duration: 0 }
                                                    : { type: "spring", stiffness: 380, damping: 30 }
                                            }
                                        />
                                    )}
                                </Link>
                            </li>
                        );
                    })}
                </ul>

                <div className="flex items-center gap-2">
                    <Link
                        href={RESUME_HREF}
                        target="_blank"
                        rel="noopener noreferrer"
                        className={`hidden items-center gap-2 rounded-full border border-neutral-200 px-4 py-2 text-sm font-medium text-neutral-700 transition-colors hover:border-neutral-900 hover:text-neutral-900 md:inline-flex dark:border-neutral-700 dark:text-neutral-300 dark:hover:border-white dark:hover:text-white ${focusRing}`}
                    >
                        Download Resume
                        <Download className="h-4 w-4" aria-hidden="true" />
                    </Link>

                    <Link
                        href={RESUME_HREF}
                        target="_blank"
                        rel="noopener noreferrer"
                        aria-label="Download resume"
                        className={`inline-flex h-9 w-9 items-center justify-center rounded-full border border-neutral-200 text-neutral-700 transition-colors hover:border-neutral-900 hover:text-neutral-900 md:hidden dark:border-neutral-700 dark:text-neutral-300 dark:hover:border-white dark:hover:text-white ${focusRing}`}
                    >
                        <Download className="h-4 w-4" aria-hidden="true" />
                    </Link>

                    <button
                        type="button"
                        onClick={() => setIsOpen((prev) => !prev)}
                        aria-expanded={isOpen}
                        aria-controls="mobile-menu"
                        aria-label={isOpen ? "Close menu" : "Open menu"}
                        className={`inline-flex h-9 w-9 items-center justify-center rounded-full border border-neutral-200 text-neutral-700 transition-colors hover:border-neutral-900 hover:text-neutral-900 md:hidden dark:border-neutral-700 dark:text-neutral-300 dark:hover:border-white dark:hover:text-white ${focusRing}`}
                    >
                        <AnimatePresence mode="wait" initial={false}>
                            <motion.span
                                key={isOpen ? "close" : "open"}
                                initial={shouldReduceMotion ? false : { opacity: 0, rotate: -45 }}
                                animate={{ opacity: 1, rotate: 0 }}
                                exit={shouldReduceMotion ? undefined : { opacity: 0, rotate: 45 }}
                                transition={{ duration: 0.15 }}
                                className="flex"
                            >
                                {isOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
                            </motion.span>
                        </AnimatePresence>
                    </button>
                </div>
            </nav>

            {/* Mobile menu */}
            <AnimatePresence>
                {isOpen && (
                    <motion.div
                        id="mobile-menu"
                        initial={shouldReduceMotion ? false : { opacity: 0, height: 0 }}
                        animate={{ opacity: 1, height: "auto" }}
                        exit={shouldReduceMotion ? undefined : { opacity: 0, height: 0 }}
                        transition={{ duration: 0.25, ease: "easeInOut" }}
                        className="overflow-hidden border-t border-neutral-200 bg-white/95 backdrop-blur-md md:hidden dark:border-neutral-800 dark:bg-neutral-950/95"
                    >
                        <ul className="flex flex-col gap-1 px-4 py-4 sm:px-6">
                            {navLinks.map((link, i) => {
                                const isActive = activeHref === link.href;
                                return (
                                    <motion.li
                                        key={link.name}
                                        initial={shouldReduceMotion ? false : { opacity: 0, x: -8 }}
                                        animate={{ opacity: 1, x: 0 }}
                                        transition={{ delay: shouldReduceMotion ? 0 : i * 0.03 }}
                                    >
                                        <Link
                                            href={link.href}
                                            onClick={closeMenu}
                                            aria-current={isActive ? "page" : undefined}
                                            className={`block rounded-lg px-3 py-2.5 text-base font-medium transition-colors ${focusRing} ${
                                                isActive
                                                    ? "bg-neutral-100 text-neutral-900 dark:bg-neutral-800 dark:text-white"
                                                    : "text-neutral-600 hover:bg-neutral-50 hover:text-neutral-900 dark:text-neutral-400 dark:hover:bg-neutral-900 dark:hover:text-white"
                                            }`}
                                        >
                                            {link.name}
                                        </Link>
                                    </motion.li>
                                );
                            })}
                        </ul>
                    </motion.div>
                )}
            </AnimatePresence>
        </header>
    );
};

export default Navbar;

