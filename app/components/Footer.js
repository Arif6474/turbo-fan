"use client";

import React from "react";
import { Facebook, MessageCircle, Smartphone, ChevronRight } from "lucide-react";

const Footer = () => (
    <footer className="bg-zinc-950 text-zinc-400 pt-20 pb-10 px-4 mt-10">
        <div className="max-w-5xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 lg:gap-8 mb-16">

            <div className="space-y-6 lg:col-span-2 pr-0 lg:pr-12">
                <div className="flex items-center gap-3">
                    <div className="w-12 h-12 bg-teal-600 rounded-2xl flex items-center justify-center text-white font-black text-2xl shadow-lg shadow-teal-700/20">N</div>
                    <span className="font-extrabold text-white tracking-tight text-2xl">Neck Fan Store</span>
                </div>
                <p className="text-lg leading-relaxed text-zinc-400 font-medium max-w-sm">আমরা দিচ্ছি প্রিমিয়াম কোয়ালিটি পণ্য ও দ্রুত ডেলিভারি সাপোর্ট। যেকোনো প্রয়োজনে আমাদের সাথে সরাসরি যোগাযোগ করুন।</p>
                <div className="flex gap-4 pt-2">
                    <a href="#" className="w-10 h-10 bg-white/5 hover:bg-teal-600 text-white rounded-full flex items-center justify-center transition-all"><Facebook className="w-5 h-5" /></a>
                    <a href="#" className="w-10 h-10 bg-white/5 hover:bg-teal-600 text-white rounded-full flex items-center justify-center transition-all"><MessageCircle className="w-5 h-5" /></a>
                </div>
            </div>

            <div>
                <h4 className="text-white font-black text-lg mb-8 tracking-wide">সরাসরি যোগাযোগ</h4>
                <ul className="space-y-5">
                    <li className="flex items-center gap-4 hover:text-white transition-colors cursor-pointer font-medium group text-lg">
                        <div className="w-10 h-10 bg-white/5 group-hover:bg-teal-600 rounded-full flex items-center justify-center transition-colors">
                            <MessageCircle className="w-4 h-4 text-teal-500 group-hover:text-white" />
                        </div>
                        01234 567 890
                    </li>
                    <li className="flex items-center gap-4 hover:text-white transition-colors cursor-pointer font-medium group text-lg">
                        <div className="w-10 h-10 bg-white/5 group-hover:bg-teal-600 rounded-full flex items-center justify-center transition-colors">
                            <Smartphone className="w-4 h-4 text-teal-500 group-hover:text-white" />
                        </div>
                        09876 543 210
                    </li>
                </ul>
            </div>

            <div>
                <h4 className="text-white font-black text-lg mb-8 tracking-wide">প্রয়োজনীয় লিঙ্ক</h4>
                <ul className="space-y-4">
                    <li><a href="#" className="hover:text-teal-400 transition-colors font-medium text-lg inline-flex items-center justify-between w-full group">রিটার্ন পলিসি <ChevronRight className="w-4 h-4 opacity-0 group-hover:opacity-100 -translate-x-2 group-hover:translate-x-0 transition-all text-teal-400" /></a></li>
                    <li><a href="#" className="hover:text-teal-400 transition-colors font-medium text-lg inline-flex items-center justify-between w-full group">প্রাইভেসি পলিসি <ChevronRight className="w-4 h-4 opacity-0 group-hover:opacity-100 -translate-x-2 group-hover:translate-x-0 transition-all text-teal-400" /></a></li>
                    <li><a href="#" className="hover:text-teal-400 transition-colors font-medium text-lg inline-flex items-center justify-between w-full group">ডেলিভারি ট্র্যাকিং <ChevronRight className="w-4 h-4 opacity-0 group-hover:opacity-100 -translate-x-2 group-hover:translate-x-0 transition-all text-teal-400" /></a></li>
                </ul>
            </div>

        </div>

        <div className="max-w-5xl mx-auto h-px bg-linear-to-r from-transparent via-white/10 to-transparent my-8"></div>
        <p className="text-center text-sm font-medium tracking-wide">© ২০২৪ Neck Fan Store. সর্বস্বত্ব সংরক্ষিত।</p>
    </footer>
);

export default Footer;
