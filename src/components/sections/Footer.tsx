import React from "react";
import Link from "next/link";

const Footer = () => {
    return (
        <footer className="w-full py-12 px-6 border-t border-white/5 bg-black/20">
            <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center gap-8 text-center md:text-left">
                <div>
                    <h2 className="text-2xl font-display font-bold text-gradient mb-2">
                        THAKUR
                    </h2>
                    <p className="text-slate-400 max-w-xs">
                        Crafting premium web experiences with modern technologies and a passion for design.
                    </p>
                </div>
                <div className="flex flex-col md:flex-row gap-12">
                    <div className="flex flex-col gap-4">
                        <h3 className="font-semibold text-white">Navigation</h3>
                        <ul className="space-y-2 text-slate-400">
                            <li><Link href="#about" className="hover:text-primary">About</Link></li>
                            <li><Link href="#projects" className="hover:text-primary">Projects</Link></li>
                            <li><Link href="#skills" className="hover:text-primary">Skills</Link></li>
                        </ul>
                    </div>
                    <div className="flex flex-col gap-4">
                        <h3 className="font-semibold text-white">Connect</h3>
                        <ul className="space-y-2 text-slate-400">
                            <li><Link href="#" className="hover:text-primary">GitHub</Link></li>
                            <li><Link href="#" className="hover:text-primary">LinkedIn</Link></li>
                            <li><Link href="#" className="hover:text-primary">Twitter</Link></li>
                        </ul>
                    </div>
                </div>
            </div>
            <div className="max-w-7xl mx-auto mt-12 pt-8 border-t border-white/5 text-center text-slate-500 text-sm">
                &copy; {new Date().getFullYear()} Thakur. All rights reserved.
            </div>
        </footer>
    );
};

export default Footer;
