"use client";

import React from "react";
import Link from "next/link";
import { motion } from "framer-motion";

const Navbar = () => {
    const navLinks = [
        { name: "About", href: "#about" },
        { name: "Projects", href: "#projects" },
        { name: "Skills", href: "#skills" },
        { name: "Contact", href: "#contact" },
    ];

    return (
        <motion.header
            initial={{ y: -100, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="fixed top-0 left-0 w-full z-50 px-6 py-4"
        >
            <nav className="max-w-7xl mx-auto flex justify-between items-center glass rounded-full px-8 py-3">
                <Link href="/" className="text-2xl font-display font-bold text-gradient">
                    THAKUR
                </Link>
                <ul className="hidden md:flex gap-8">
                    {navLinks.map((link) => (
                        <li key={link.name}>
                            <Link
                                href={link.href}
                                className="text-sm font-medium hover:text-primary transition-colors text-slate-300"
                            >
                                {link.name}
                            </Link>
                        </li>
                    ))}
                </ul>
                <Link
                    href="#contact"
                    className="bg-primary hover:bg-primary/80 text-background px-6 py-2 rounded-full font-semibold transition-all hover:scale-105 active:scale-95"
                >
                    Hire Me
                </Link>
            </nav>
        </motion.header>
    );
};

export default Navbar;
