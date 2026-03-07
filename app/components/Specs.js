"use client";

import React from "react";
import Image from "next/image";
import { PRODUCT } from "../constants";

const Specs = () => (
    <section className="py-20 px-4 bg-zinc-900 text-white overflow-hidden relative">
        <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-teal-600/20 rounded-full blur-[100px] -mr-64 -mt-64"></div>
        <div className="absolute bottom-0 left-0 w-[300px] h-[300px] bg-blue-600/20 rounded-full blur-[80px] -ml-32 -mb-32"></div>

        <div className="max-w-5xl mx-auto relative z-10">
            <div className="text-center mb-14">
                <h2 className="text-3xl md:text-4xl font-black mb-4">টেকনিক্যাল স্পেসিফিকেশন</h2>
                <div className="w-20 h-1 bg-teal-500 mx-auto rounded-full opacity-50"></div>
            </div>

            <div className="grid md:grid-cols-2 gap-10">
                <div className="space-y-2 bg-white/5 p-8 lg:p-10 rounded-[2.5rem] backdrop-blur-md border border-white/10 shadow-2xl">
                    {PRODUCT.specs.map((s, i) => (
                        <div key={i} className="flex justify-between py-4 border-b border-white/10 last:border-0 hover:bg-white/5 px-4 transition-colors rounded-xl">
                            <span className="text-zinc-400 font-medium">{s.label}</span>
                            <span className="font-bold tracking-wide">{s.value}</span>
                        </div>
                    ))}
                </div>

                <div className="relative aspect-square md:aspect-auto rounded-[2.5rem] overflow-hidden border border-white/20">
                    <Image src="/images/O1CN01qspn9Y1iBLTmGHblB_!!2220650294374-0-cib.jpg" alt="Spec view" fill className="object-cover opacity-90" />
                </div>
            </div>
        </div>
    </section>
);

export default Specs;
