"use client";

import React from "react";
import Image from "next/image";
import { Wind, Truck, Package, VolumeX, BatteryCharging } from "lucide-react";

const Description = () => (
    <section className="py-24 px-4 max-w-5xl mx-auto">
        <div className="grid md:grid-cols-2 gap-12 md:gap-20 items-center">
            <div className="relative aspect-4/5 rounded-[2.5rem] overflow-hidden shadow-2xl border border-zinc-100">
                <Image src="/images/7.jpeg" alt="Lifestyle" fill className="object-cover" />
                <div className="absolute inset-x-0 bottom-0 bg-linear-to-t from-black/80 to-transparent p-8">
                    <div className="text-white font-bold text-lg flex items-center gap-3">
                        <Wind className="w-6 h-6 text-teal-400" />
                        শক্তিশালী ঠাণ্ডা বাতাস
                    </div>
                </div>
            </div>
            <div className="space-y-8">
                <div>
                    <h2 className="text-3xl md:text-4xl font-black text-zinc-900 leading-tight mb-4">গরমে বাইরে গেলে আর কষ্ট হবে না!</h2>
                    <div className="w-16 h-1.5 bg-teal-600 rounded-full"></div>
                </div>

                <p className="text-lg md:text-xl text-zinc-600 leading-relaxed font-medium">
                    গরমের এই তীব্র দহন থেকে বাঁচতে আপনার দরকার একটি পোর্টেবল ও শক্তিশালী কুলিং ডিভাইস। এই নেক ফ্যানটি আপনাকে দিবে ৩৬০ ডিগ্রি চারপাশের আরামদায়ক ঠাণ্ডা বাতাস।
                </p>

                <div className="space-y-5">
                    {[
                        { t: "ট্রাভেল, অফিস, বাসা বা আউটডোর ব্যবহারের জন্য একেবারে পারফেক্ট।", i: <Truck className="w-5 h-5 text-teal-600" /> },
                        { t: "হ্যান্ডহেল্ড বা গলায় ঝুলিয়ে খুব সহজেই ব্যবহার করা যাবে।", i: <Package className="w-5 h-5 text-teal-600" /> },
                        { t: "বিরক্তিকর শব্দ ছাড়াই পাবেন শক্তিশালী বাতাস।", i: <VolumeX className="w-5 h-5 text-teal-600" /> },
                        { t: "দীর্ঘ সময় ব্যবহারের নিশ্চয়তা।", i: <BatteryCharging className="w-5 h-5 text-teal-600" /> }
                    ].map((item, i) => (
                        <div key={i} className="flex items-start gap-4">
                            <div className="w-10 h-10 bg-teal-50 rounded-full flex items-center justify-center shrink-0 mt-1">
                                {item.i}
                            </div>
                            <p className="font-bold text-zinc-800 text-lg md:mt-2.5 leading-snug">{item.t}</p>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    </section>
);

export default Description;
