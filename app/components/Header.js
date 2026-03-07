"use client";

import React from "react";
import { ChevronRight, Zap } from "lucide-react";
import { motion } from "framer-motion";

const Header = () => (
    <div className="fixed top-0 left-0 right-0 z-50">
        <div className="bg-teal-600 text-white py-2 px-4 text-center text-xs md:text-sm font-bold tracking-wide flex items-center justify-center gap-2 overflow-hidden relative border-b border-teal-500/30">
            <motion.div
                animate={{ opacity: [0.7, 1, 0.7] }}
                transition={{ duration: 2, repeat: Infinity, ease: "linear" }}
                className="flex items-center gap-2"
            >
                <Zap className="w-3.5 h-3.5 fill-yellow-400 text-yellow-400" />
                সীমিত সময়ের অফার! আজকের অর্ডারে পাচ্ছেন ২০% স্পেশাল ছাড়!
                <Zap className="w-3.5 h-3.5 fill-yellow-400 text-yellow-400" />
            </motion.div>
        </div>
        {/* <header className="bg-white/95 backdrop-blur-md border-b border-zinc-100 py-3 px-4 flex justify-between items-center w-full shadow-sm">
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
        </header> */}
    </div>
);

export default Header;
