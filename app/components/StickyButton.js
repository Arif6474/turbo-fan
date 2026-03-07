"use client";

import React from "react";
import { ChevronRight } from "lucide-react";
import { motion } from "framer-motion";

const StickyButton = () => (
    <div className="fixed bottom-0 left-0 right-0 p-4 z-50 pointer-events-none md:hidden backdrop-blur-sm bg-white/50 border-t border-zinc-100/50 pb-6">
        <motion.div
            initial={{ y: 100 }}
            animate={{ y: 0 }}
            transition={{ delay: 1, type: "spring", stiffness: 200, damping: 20 }}
            className="pointer-events-auto"
        >
            <a href="#order" className="w-full bg-teal-600 text-white font-black py-5 rounded-[1.5rem] text-center shadow-[0_16px_32px_-8px_rgba(13,148,136,0.6)] flex items-center justify-center gap-3 active:scale-[0.98] transition-all text-xl">
                এখনই অর্ডার করুন <ChevronRight className="w-6 h-6" />
            </a>
        </motion.div>
    </div>
);

export default StickyButton;
