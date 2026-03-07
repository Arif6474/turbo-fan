"use client";

import React, { useState } from "react";
import { Plus } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

const FAQ = () => {
    const [open, setOpen] = useState(0);
    const items = [
        { q: "চার্জ কতক্ষণ থাকে?", a: "পুরো চার্জ দিলে ফ্যানটি বাতাসের স্পিড অনুযায়ী প্রায় ১ থেকে ৩ ঘণ্টা পর্যন্ত ব্যবহার করা যায়।" },
        { q: "কিভাবে চার্জ দিতে হয়?", a: "বক্সের সাথে থাকা টাইপ-সি ক্যাবল দিয়ে মোবাইল চার্জারের মাধ্যমে বা পাওয়ার ব্যাংক দিয়ে চার্জ দিতে পারবেন।" },
        { q: "এই ফ্যানের মোটর কেমন?", a: "এতে উন্নতমানের ব্রাশলেস টারবাইন মোটর ব্যবহার করা হয়েছে যা সাধারণ ফ্যানের থেকে অনেক বেশি শক্তিশালী বাতাস দিতে সক্ষম এবং শব্দ খুবই কম হয়।" },
        { q: "ওয়ারেন্টি আছে কি?", a: "হ্যাঁ, প্রোডাক্ট রিসিভ করার পর কোন সমস্যা হলে ৭ দিনের রিপ্লেসমেন্ট গ্যারান্টি পাবেন।" }
    ];

    return (
        <section className="py-24 px-4">
            <div className="max-w-3xl mx-auto space-y-5">
                <h2 className="text-3xl md:text-4xl font-black text-center mb-16 text-zinc-900">সাধারণ কিছু প্রশ্ন (FAQ)</h2>
                {items.map((item, i) => (
                    <div key={i} className={`rounded-4xl border transition-all duration-300 overflow-hidden ${open === i ? "border-teal-200 bg-teal-50/30 shadow-lg shadow-teal-900/5" : "border-zinc-200 bg-white hover:border-teal-200"}`}>
                        <button type="button" onClick={() => setOpen(open === i ? -1 : i)} className="w-full text-left p-6 md:p-8 flex justify-between items-center outline-none">
                            <span className={`font-black text-lg md:text-xl pr-8 ${open === i ? "text-teal-700" : "text-zinc-800"}`}>{item.q}</span>
                            <div className={`w-10 h-10 shrink-0 rounded-full flex items-center justify-center transition-all duration-300 ${open === i ? "bg-teal-600 text-white rotate-45" : "bg-zinc-100 text-zinc-600"}`}>
                                <Plus className="w-6 h-6" />
                            </div>
                        </button>
                        <AnimatePresence>
                            {open === i && (
                                <motion.div initial={{ height: 0, opacity: 0 }} animate={{ height: "auto", opacity: 1 }} exit={{ height: 0, opacity: 0 }} className="overflow-hidden">
                                    <div className="px-6 md:px-8 pb-8 pt-0 text-zinc-600 font-medium leading-relaxed text-lg">{item.a}</div>
                                </motion.div>
                            )}
                        </AnimatePresence>
                    </div>
                ))}
            </div>
        </section>
    );
};

export default FAQ;
