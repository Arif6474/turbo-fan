"use client";

import React, { useState } from "react";
import Image from "next/image";
import { ChevronRight, ChevronLeft, Star, ShieldCheck, Truck, X } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import { PRODUCT } from "../constants";

const Gallery = () => {
    const [current, setCurrent] = useState(0);
    const [zoomOpen, setZoomOpen] = useState(false);

    const next = () => setCurrent((c) => (c + 1) % PRODUCT.images.length);
    const prev = () => setCurrent((c) => (c - 1 + PRODUCT.images.length) % PRODUCT.images.length);

    return (
        <section className="pt-24 pb-12 px-4 max-w-5xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-10 items-center">
            {/* Product Image Slider */}
            <div className="relative group w-full">
                <div className="aspect-square bg-zinc-50 rounded-[2rem] overflow-hidden relative cursor-zoom-in border border-zinc-100 shadow-xl shadow-zinc-200/50" onClick={() => setZoomOpen(true)}>
                    <AnimatePresence mode="wait">
                        <motion.div
                            key={current}
                            initial={{ opacity: 0, scale: 0.95 }}
                            animate={{ opacity: 1, scale: 1 }}
                            exit={{ opacity: 0, scale: 1.05 }}
                            transition={{ duration: 0.2 }}
                            className="w-full h-full relative"
                        >
                            <Image
                                src={PRODUCT.images[current]}
                                alt={PRODUCT.nameBn}
                                fill
                                className="object-cover"
                                priority
                            />
                        </motion.div>
                    </AnimatePresence>

                    <button type="button" onClick={(e) => { e.stopPropagation(); prev(); }} className="absolute left-4 top-1/2 -translate-y-1/2 w-10 h-10 bg-white/90 rounded-full flex items-center justify-center shadow-lg hover:bg-white transition-all active:scale-90 z-10">
                        <ChevronLeft className="w-6 h-6 text-zinc-800 ml-[-2px]" />
                    </button>
                    <button type="button" onClick={(e) => { e.stopPropagation(); next(); }} className="absolute right-4 top-1/2 -translate-y-1/2 w-10 h-10 bg-white/90 rounded-full flex items-center justify-center shadow-lg hover:bg-white transition-all active:scale-90 z-10">
                        <ChevronRight className="w-6 h-6 text-zinc-800 mr-[-2px]" />
                    </button>
                </div>

                <div className="flex gap-3 mt-4 justify-center overflow-x-auto pb-2 px-1 scrollbar-hide">
                    {PRODUCT.images.map((img, idx) => (
                        <button
                            key={idx}
                            type="button"
                            onClick={() => setCurrent(idx)}
                            className={`w-16 h-16 shrink-0 rounded-2xl border-2 overflow-hidden transition-all duration-300 ${current === idx ? "border-teal-600 shadow-md shadow-teal-600/20 scale-105" : "border-transparent opacity-50 hover:opacity-100"}`}
                        >
                            <Image src={img} alt="thumbnail" width={64} height={64} className="object-cover w-full h-full" />
                        </button>
                    ))}
                </div>
            </div>

            {/* Hero Content */}
            <div className="flex flex-col gap-6">
                <div className="inline-flex items-center gap-2 px-4 py-1.5 bg-teal-50 text-teal-700 rounded-full text-xs font-bold w-fit tracking-wider border border-teal-100 shadow-sm">
                    <Star className="w-3.5 h-3.5 fill-teal-600" /> TOP SELLING
                </div>

                <h1 className="text-3xl md:text-4xl lg:text-5xl font-extrabold text-zinc-900 leading-tight">
                    {PRODUCT.nameBn}
                </h1>

                <p className="text-lg md:text-xl text-zinc-600 font-medium leading-relaxed bg-zinc-50 p-4 rounded-2xl border-l-4 border-teal-600">
                    গরমে আর কষ্ট নয়! এখনই ব্যবহার করুন High Speed Turbine Mini Neck Fan
                </p>

                <div className="flex items-end gap-3 bg-teal-50/50 p-4 rounded-3xl border border-teal-100 w-fit">
                    <div className="flex flex-col">
                        <div className="flex items-center gap-3">
                            <span className="text-xl text-zinc-400 line-through font-bold">৳{PRODUCT.regularPrice}</span>
                            <span className="bg-red-500 text-white px-2 py-0.5 rounded text-xs font-black shadow-sm">Save ৳{PRODUCT.regularPrice - PRODUCT.price}</span>
                        </div>
                        <div className="text-[2.75rem] font-black text-teal-600 leading-none mt-1">
                            ৳{PRODUCT.price}
                        </div>
                    </div>
                </div>

                <div className="grid grid-cols-2 gap-4">
                    <div className="flex items-center gap-3 text-zinc-700 font-bold text-sm bg-zinc-50 p-3 rounded-2xl">
                        <ShieldCheck className="w-6 h-6 text-teal-600 shrink-0" /> প্রিমিয়াম কোয়ালিটি
                    </div>
                    <div className="flex items-center gap-3 text-zinc-700 font-bold text-sm bg-zinc-50 p-3 rounded-2xl">
                        <Truck className="w-6 h-6 text-teal-600 shrink-0" /> ক্যাশ অন ডেলিভারি
                    </div>
                </div>

                <a href="#order" className="w-full bg-teal-600 hover:bg-teal-700 text-white text-xl font-black py-5 rounded-2xl text-center shadow-[0_12px_24px_-8px_rgba(13,148,136,0.6)] transform active:scale-[0.98] transition-all flex justify-center items-center gap-2 mt-2">
                    এখনই অর্ডার করুন <ChevronRight className="w-6 h-6" />
                </a>
            </div>

            {/* Lightbox */}
            {zoomOpen && (
                <div className="fixed inset-0 z-[100] bg-black/95 flex items-center justify-center p-4 backdrop-blur-sm" onClick={() => setZoomOpen(false)}>
                    <button type="button" className="absolute top-6 right-6 text-white p-3 hover:bg-white/10 rounded-full transition-colors z-50 border border-white/10">
                        <X className="w-8 h-8" />
                    </button>
                    <div className="relative w-full max-w-4xl aspect-[4/5] md:aspect-square" onClick={(e) => e.stopPropagation()}>
                        <Image src={PRODUCT.images[current]} alt="Full view" fill className="object-contain" />
                    </div>
                </div>
            )}
        </section>
    );
};

export default Gallery;
