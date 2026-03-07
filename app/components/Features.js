"use client";

import React from "react";
import { motion } from "framer-motion";
import { PRODUCT } from "../constants";

const Features = () => (
    <section className="bg-zinc-50 py-20 px-4">
        <div className="max-w-5xl mx-auto">
            <div className="text-center mb-14">
                <h2 className="text-3xl md:text-4xl font-black text-zinc-900 mb-4">মূল বৈশিষ্ট্য সমূহ</h2>
                <div className="w-24 h-1.5 bg-teal-600 mx-auto rounded-full"></div>
            </div>
            <div className="grid grid-cols-2 md:grid-cols-3 gap-4 md:gap-6">
                {PRODUCT.features.map((feat, idx) => (
                    <motion.div
                        whileHover={{ y: -5 }}
                        key={idx}
                        className="bg-white p-6 md:p-8 rounded-3xl shadow-sm border border-zinc-100 flex flex-col items-center text-center gap-5 group hover:border-teal-100 hover:shadow-xl hover:shadow-teal-900/5 transition-all"
                    >
                        <div className="w-16 h-16 bg-zinc-50 group-hover:bg-teal-50 text-teal-600 rounded-2xl flex items-center justify-center transition-colors">
                            {feat.icon}
                        </div>
                        <h3 className="font-bold text-zinc-800 lg:text-lg">{feat.title}</h3>
                    </motion.div>
                ))}
            </div>
        </div>
    </section>
);

export default Features;
