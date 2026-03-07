"use client";

import React from "react";
import { ChevronRight } from "lucide-react";

const Header = () => (
    <header className="fixed top-0 left-0 right-0 z-50 bg-white/90 backdrop-blur-md border-b border-zinc-100 py-3 px-4 flex justify-between items-center w-full shadow-sm">
        <div className="max-w-5xl mx-auto w-full flex justify-between items-center">
            <div className="flex items-center gap-2">
                <div className="w-10 h-10 bg-teal-600 rounded-full flex items-center justify-center text-white font-bold text-xl">N</div>
                <span className="font-bold text-zinc-800 tracking-tight hidden sm:block text-xl">Neck Fan Store</span>
            </div>
            <div>
                <a href="#order" className="bg-teal-600 text-white px-6 py-2.5 rounded-full font-bold text-sm hover:bg-teal-700 transition-colors shadow-md shadow-teal-600/20 active:scale-95 flex items-center gap-2">
                    এখনই কিনুন <ChevronRight className="w-4 h-4" />
                </a>
            </div>
        </div>
    </header>
);

export default Header;
