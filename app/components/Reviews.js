"use client";

import React from "react";
import { Star } from "lucide-react";

const Reviews = () => (
    <section className="py-24 px-4 bg-zinc-50 border-t border-zinc-200/50">
        <div className="max-w-5xl mx-auto">
            <div className="text-center mb-16">
                <h2 className="text-3xl md:text-4xl font-black text-zinc-900 mb-4">গ্রাহকরা যা বলছেন</h2>
                <div className="flex justify-center gap-1 mb-4">
                    {[...Array(5)].map((_, idx) => (
                        <Star key={idx} className="w-6 h-6 fill-yellow-400 text-yellow-400 shadow-sm" />
                    ))}
                </div>
                <p className="text-zinc-600 font-medium">৪.৯/৫ এভারেজ রেটিং</p>
            </div>

            <div className="grid md:grid-cols-3 gap-6 md:gap-8">
                {[
                    { name: "রাকিব হাসান", text: "ছোট কিন্তু অনেক পাওয়ারফুল! গরমে খুব কাজের। ৫ স্পিডের বাতাস বেশ কাজে দেয় যখন ভীড়ের মধ্যে থাকি।", rating: 5, date: "৩ দিন আগে" },
                    { name: "নাহিদ আহমেদ", text: "অফিসে ব্যবহারের জন্য এর থেকে ভালো প্রোডাক্ট আর হতে পারে না। দেখতেও খুব স্টাইলিশ, ডিজিটাল ডিসপ্লেটা অসাম!", rating: 5, date: "১ সপ্তাহ আগে" },
                    { name: "সুমাইয়া ইসলাম", text: "খুবই হালকা আর আরামদায়ক। গায়ের জোরে বাতাস মুখে লাগে না বরং চারপাশ দিয়ে ঠান্ডা বাতাস আসে।", rating: 5, date: "২ সপ্তাহ আগে" }
                ].map((r, i) => (
                    <div key={i} className="bg-white p-8 rounded-4xl shadow-sm border border-zinc-100 flex flex-col justify-between hover:shadow-2xl hover:shadow-zinc-200/50 transition-all duration-300">
                        <div className="space-y-4">
                            <div className="flex gap-1 bg-yellow-50 w-fit px-3 py-1.5 rounded-full">
                                {[...Array(5)].map((_, idx) => (
                                    <Star key={idx} className="w-4 h-4 fill-yellow-400 text-yellow-400" />
                                ))}
                            </div>
                            <p className="text-zinc-700 font-medium leading-relaxed text-lg">"{r.text}"</p>
                        </div>
                        <div className="mt-8 pt-6 border-t border-zinc-50 flex justify-between items-center">
                            <div className="flex items-center gap-3">
                                <div className="w-10 h-10 bg-teal-50 text-teal-700 rounded-full flex items-center justify-center font-black text-lg">
                                    {r.name[0]}
                                </div>
                                <p className="font-bold text-zinc-900 leading-none">{r.name}</p>
                            </div>
                            <span className="text-xs text-zinc-400 font-medium">{r.date}</span>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    </section>
);

export default Reviews;
