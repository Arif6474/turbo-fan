"use client";

import React, { useState } from "react";
import Image from "next/image";
import { CheckCircle2, Minus, Plus, User, Phone, MapPin, Truck, ShieldCheck, Lock } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import { PRODUCT } from "../constants";

const OrderForm = () => {
    const [items, setItems] = useState(
        PRODUCT.colors.map((color, index) => ({
            color: color,
            selected: index === 0, // default select first item
            qty: 1
        }))
    );

    const [district, setDistrict] = useState("dhaka");
    const [info, setInfo] = useState({ name: "", phone: "", address: "" });

    const selectedItems = items.filter(item => item.selected);
    const totalQty = selectedItems.reduce((sum, item) => sum + item.qty, 0);
    const delivery = district === "dhaka" ? 60 : 120;
    const subtotal = PRODUCT.price * totalQty;
    const total = totalQty > 0 ? subtotal + delivery : 0;

    const toggleItemSelection = (index) => {
        const newItems = [...items];
        newItems[index].selected = !newItems[index].selected;
        setItems(newItems);
    };

    const updateItemQty = (index, newQty) => {
        if (newQty < 1) return;
        const newItems = [...items];
        newItems[index].qty = newQty;
        if (newQty > 0) newItems[index].selected = true;
        setItems(newItems);
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        if (selectedItems.length === 0) return alert("দয়া করে অন্তত একটি প্রোডাক্ট সিলেক্ট করুন!");

        let productsText = "";
        selectedItems.forEach(item => {
            productsText += `- ${item.color.name}: ${item.qty} পিস\n`;
        });

        const text = `নুতন অর্ডার\n---\nপণ্য: ${PRODUCT.name}\n${productsText}\nনাম: ${info.name}\nমোবাইল: ${info.phone}\nঠিকানা: ${info.address}\nজেলা: ${district === 'dhaka' ? 'ঢাকা' : 'ঢাকার বাইরে'}\nসর্বমোট টাকা: ${total}৳`;
        window.open(`https://wa.me/8801234567890?text=${encodeURIComponent(text)}`);
    };

    return (
        <section id="order" className="py-16 md:py-24 px-4 bg-[#f9f9f9] border-t border-zinc-200">
            <div className="max-w-3xl mx-auto space-y-10">
                {/* Header */}
                <div className="text-center">
                    <h2 className="text-2xl md:text-3xl font-black text-teal-600 mb-2 leading-tight">
                        অর্ডার করতে সঠিক তথ্য দিয়ে<br />নিচের ফর্ম টি পূরণ করুন
                    </h2>
                </div>

                <form onSubmit={handleSubmit} className="space-y-10">
                    {/* Your Products Section */}
                    <div className="space-y-6">
                        <div className="flex items-center justify-between">
                            <h3 className="text-xl md:text-2xl font-black text-zinc-800">Your Products</h3>
                            <span className="bg-teal-50 text-teal-700 text-xs font-bold px-3 py-1 rounded-full border border-teal-100">
                                {selectedItems.length} সিলেক্ট করা হয়েছে
                            </span>
                        </div>

                        <div className="grid grid-cols-1 gap-4">
                            {items.map((item, idx) => (
                                <div
                                    key={idx}
                                    onClick={() => toggleItemSelection(idx)}
                                    className={`group relative bg-white border-2 rounded-3xl p-4 md:p-5 flex gap-4 md:gap-6 transition-all duration-500 cursor-pointer overflow-hidden ${item.selected
                                        ? 'border-teal-600 shadow-xl shadow-teal-900/5 bg-teal-50/10'
                                        : 'border-zinc-100 hover:border-teal-200'
                                        }`}
                                >
                                    {/* Selection Indicator Badge */}
                                    <AnimatePresence>
                                        {item.selected && (
                                            <motion.div
                                                initial={{ scale: 0, opacity: 0 }}
                                                animate={{ scale: 1, opacity: 1 }}
                                                exit={{ scale: 0, opacity: 0 }}
                                                className="absolute top-3 right-3 w-6 h-6 bg-teal-600 rounded-full flex items-center justify-center text-white z-20 shadow-lg shadow-teal-600/20"
                                            >
                                                <CheckCircle2 className="w-4 h-4" />
                                            </motion.div>
                                        )}
                                    </AnimatePresence>
                                    <AnimatePresence>
                                        {!item.selected && (
                                            <motion.div
                                                initial={{ scale: 0, opacity: 0 }}
                                                animate={{ scale: 1, opacity: 1 }}
                                                exit={{ scale: 0, opacity: 0 }}
                                                className="absolute top-3 right-3 w-6 h-6 bg-teal-600 rounded-full flex items-center justify-center text-white z-20 shadow-lg shadow-teal-600/20"
                                            >
                                               <div className="w-4 h-4 bg-white rounded-full"></div>
                                            </motion.div>
                                        )}
                                    </AnimatePresence>

                                    {/* Image Container */}
                                    <div className="relative w-24 h-24 md:w-32 md:h-32 bg-zinc-50 rounded-2xl overflow-hidden shrink-0 border border-zinc-100 group-hover:shadow-inner transition-all duration-500">
                                        <Image
                                            src={item.color.image}
                                            alt={item.color.name}
                                            fill
                                            className={`object-cover p-2 mix-blend-multiply transition-transform duration-700 ${item.selected ? 'scale-110' : 'group-hover:scale-110'}`}
                                        />
                                        {!item.selected && (
                                            <div className="absolute inset-0 bg-black/0 group-hover:bg-black/5 transition-colors duration-500"></div>
                                        )}
                                    </div>

                                    {/* Details & Controls */}
                                    <div className="flex-1 flex flex-col justify-between">
                                        <div>
                                            <div className="flex justify-between items-start">
                                                <h4 className={`max-w-54 md:max-w-full font-black text-lg md:text-xl transition-colors duration-300 ${item.selected ? 'text-teal-900' : 'text-zinc-800'}`}>
                                                    {PRODUCT.nameBn}
                                                    <span className={`block text-sm font-bold mt-0.5 transition-colors ${item.selected ? 'text-teal-600' : 'text-zinc-500'}`}>
                                                        কালার: {item.color.name}
                                                    </span>
                                                </h4>
                                            </div>
                                            {/* <p className="text-xs md:text-sm text-zinc-500 mt-2 leading-relaxed line-clamp-2 md:line-clamp-none">
                                                প্রিমিয়াম কোয়ালিটি টারবাইন নেক ফ্যান। ৫টি স্পিড কন্ট্রোল এবং ডিজিটাল ডিসপ্লে প্যানেল।
                                            </p> */}
                                        </div>

                                        <div className="flex items-center justify-between mt-4 md:mt-2" onClick={(e) => e.stopPropagation()}>
                                            {/* Qty Counter */}
                                            <div className="flex items-center bg-white border border-zinc-200 rounded-xl overflow-hidden shadow-sm hover:border-teal-300 transition-colors">
                                                <button
                                                    type="button"
                                                    onClick={() => updateItemQty(idx, item.qty - 1)}
                                                    className="p-2 md:p-2.5 text-zinc-400 hover:text-teal-600 hover:bg-teal-50 transition-all active:scale-90"
                                                >
                                                    <Minus className="w-4 h-4" />
                                                </button>
                                                <span className="w-10 md:w-12 text-center font-black text-zinc-800 text-sm md:text-base border-x border-zinc-100">
                                                    {item.qty}
                                                </span>
                                                <button
                                                    type="button"
                                                    onClick={() => updateItemQty(idx, item.qty + 1)}
                                                    className="p-2 md:p-2.5 text-zinc-400 hover:text-teal-600 hover:bg-teal-50 transition-all active:scale-90"
                                                >
                                                    <Plus className="w-4 h-4" />
                                                </button>
                                            </div>

                                            {/* Pricing Info */}
                                            <div className="text-right flex flex-col">
                                                <span className="text-[10px] md:text-xs font-bold text-zinc-400 line-through">
                                                    ৳{(PRODUCT.regularPrice * item.qty).toFixed(2)}
                                                </span>
                                                <span className={`font-black text-lg md:text-2xl transition-colors duration-300 ${item.selected ? 'text-teal-600' : 'text-zinc-900'}`}>
                                                    ৳{(PRODUCT.price * item.qty).toFixed(2)}
                                                </span>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>

                    {/* Billing & Shipping Section */}
                    <div className="space-y-8 pt-10 mt-10 border-t border-zinc-100">
                        <div className="space-y-2">
                            <h3 className="text-2xl md:text-3xl font-black text-zinc-900">Billing & Shipping</h3>
                            <p className="text-zinc-500 font-medium">ডেলিভারির তথ্য দিয়ে অর্ডারটি সম্পন্ন করুন।</p>
                        </div>

                        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                            <div className="space-y-2">
                                <label className="text-sm font-bold text-zinc-700 flex items-center gap-2 ml-1">
                                    <User className="w-4 h-4 text-teal-600" /> Name <span className="text-red-500">*</span>
                                </label>
                                <div className="relative group">
                                    <input
                                        required
                                        value={info.name}
                                        onChange={e => setInfo({ ...info, name: e.target.value })}
                                        className="w-full bg-white border-2 border-zinc-100 rounded-3xl px-6 py-4 focus:ring-4 focus:ring-teal-500/10 focus:border-teal-600 outline-none transition-all font-bold text-lg text-zinc-800 shadow-sm placeholder:text-zinc-300"
                                        placeholder="আপনার নাম লিখুন"
                                    />
                                </div>
                            </div>

                            <div className="space-y-2">
                                <label className="text-sm font-bold text-zinc-700 flex items-center gap-2 ml-1">
                                    <Phone className="w-4 h-4 text-teal-600" /> Phone <span className="text-red-500">*</span>
                                </label>
                                <div className="relative group">
                                    <input
                                        required
                                        type="tel"
                                        value={info.phone}
                                        onChange={e => setInfo({ ...info, phone: e.target.value })}
                                        className="w-full bg-white border-2 border-zinc-100 rounded-3xl px-6 py-4 focus:ring-4 focus:ring-teal-500/10 focus:border-teal-600 outline-none transition-all font-bold text-lg text-zinc-800 shadow-sm placeholder:text-zinc-300"
                                        placeholder="০১৭XXXXXXXX"
                                    />
                                </div>
                            </div>

                            <div className="space-y-2 md:col-span-2">
                                <label className="text-sm font-bold text-zinc-700 flex items-center gap-2 ml-1">
                                    <MapPin className="w-4 h-4 text-teal-600" /> Address <span className="text-red-500">*</span>
                                </label>
                                <div className="relative group">
                                    <textarea
                                        required
                                        value={info.address}
                                        onChange={e => setInfo({ ...info, address: e.target.value })}
                                        className="w-full bg-white border-2 border-zinc-100 rounded-3xl px-6 py-4 focus:ring-4 focus:ring-teal-500/10 focus:border-teal-600 outline-none transition-all font-bold text-lg text-zinc-800 h-32 resize-none shadow-sm placeholder:text-zinc-300"
                                        placeholder="আপনার সম্পূর্ণ ঠিকানা লিখুন (গ্রাম, ডাকঘর, থানা, জেলা)"
                                    ></textarea>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Shipping Choice */}
                    <div className="space-y-6 pt-10 mt-10 border-t border-zinc-100">
                        <div className="space-y-2">
                            <h3 className="text-2xl md:text-3xl font-black text-zinc-900">Shipping</h3>
                            <p className="text-zinc-500 font-medium">আপনার ডেলিভারি এলাকা নির্বাচন করুন।</p>
                        </div>

                        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                            <label
                                onClick={() => setDistrict('dhaka')}
                                className={`flex items-center gap-4 p-5 rounded-3xl border-2 cursor-pointer transition-all duration-300 group ${district === 'dhaka'
                                    ? 'border-teal-600 bg-teal-50/50 shadow-lg shadow-teal-900/5'
                                    : 'bg-white border-zinc-100 hover:border-teal-200'
                                    }`}
                            >
                                <div className={`w-12 h-12 rounded-2xl flex items-center justify-center transition-colors ${district === 'dhaka' ? 'bg-teal-600 text-white' : 'bg-zinc-50 text-zinc-400 group-hover:bg-teal-50 group-hover:text-teal-600'}`}>
                                    <Truck className="w-6 h-6" />
                                </div>
                                <div className="flex-1">
                                    <div className="flex items-center justify-between">
                                        <span className={`font-black text-lg ${district === 'dhaka' ? 'text-teal-900' : 'text-zinc-800'}`}>ঢাকার ভেতরে</span>
                                        <input type="radio" checked={district === 'dhaka'} readOnly className="w-5 h-5 accent-teal-600" />
                                    </div>
                                    <p className="text-sm font-bold text-teal-600 mt-0.5">ডেলিভারি চার্জ: ৳৬০.০০</p>
                                </div>
                            </label>

                            <label
                                onClick={() => setDistrict('outside')}
                                className={`flex items-center gap-4 p-5 rounded-3xl border-2 cursor-pointer transition-all duration-300 group ${district === 'outside'
                                    ? 'border-teal-600 bg-teal-50/50 shadow-lg shadow-teal-900/5'
                                    : 'bg-white border-zinc-100 hover:border-teal-200'
                                    }`}
                            >
                                <div className={`w-12 h-12 rounded-2xl flex items-center justify-center transition-colors ${district === 'outside' ? 'bg-teal-600 text-white' : 'bg-zinc-50 text-zinc-400 group-hover:bg-teal-50 group-hover:text-teal-600'}`}>
                                    <Truck className="w-6 h-6" />
                                </div>
                                <div className="flex-1">
                                    <div className="flex items-center justify-between">
                                        <span className={`font-black text-lg ${district === 'outside' ? 'text-teal-900' : 'text-zinc-800'}`}>ঢাকার বাইরে</span>
                                        <input type="radio" checked={district === 'outside'} readOnly className="w-5 h-5 accent-teal-600" />
                                    </div>
                                    <p className="text-sm font-bold text-teal-600 mt-0.5">ডেলিভারি চার্জ: ৳১২০.০০</p>
                                </div>
                            </label>
                        </div>
                    </div>

                    {/* Order Summary & Checkout */}
                    <div className="space-y-8 pt-10 mt-10 border-t border-zinc-100 font-hind-siliguri">
                        <h3 className="text-2xl md:text-3xl font-black text-zinc-900">Your order</h3>

                        <div className="bg-white rounded-3xl border border-zinc-100 shadow-sm overflow-hidden p-6 md:p-8">
                            <table className="w-full text-left">
                                <thead>
                                    <tr className="border-b-2 border-zinc-50">
                                        <th className="pb-4 font-black text-zinc-400 text-sm uppercase tracking-wider">Product</th>
                                        <th className="pb-4 font-black text-zinc-400 text-sm uppercase tracking-wider text-right">Subtotal</th>
                                    </tr>
                                </thead>
                                <tbody className="divide-y divide-zinc-50">
                                    {selectedItems.map((item, idx) => (
                                        <tr key={idx} className="group">
                                            <td className="py-5 pr-3 flex items-center gap-4">
                                                <div className="w-14 h-14 relative bg-zinc-50 border border-zinc-100 rounded-xl shrink-0 p-1 group-hover:shadow-md transition-all duration-300">
                                                    <Image src={item.color.image} alt="prod" fill className="object-cover rounded-lg mix-blend-multiply" />
                                                </div>
                                                <div className="font-black text-zinc-800 text-base leading-tight">
                                                    {PRODUCT.nameBn}
                                                    <div className="text-teal-600 text-sm font-bold mt-1">
                                                        {item.color.name} <span className="text-zinc-400 ml-1">× {item.qty}</span>
                                                    </div>
                                                </div>
                                            </td>
                                            <td className="py-5 font-black text-zinc-900 text-right text-lg">
                                                ৳ {(PRODUCT.price * item.qty).toFixed(2)}
                                            </td>
                                        </tr>
                                    ))}

                                    <tr className="bg-zinc-50/30">
                                        <td className="py-5 px-3 font-bold text-zinc-500">Subtotal</td>
                                        <td className="py-5 px-3 font-black text-zinc-900 text-right">৳ {subtotal.toFixed(2)}</td>
                                    </tr>

                                    <tr className="bg-zinc-50/30">
                                        <td className="py-5 px-3 font-bold text-zinc-500">Delivery Fee</td>
                                        <td className="py-5 px-3 font-black text-teal-600 text-right">৳ {delivery.toFixed(2)}</td>
                                    </tr>

                                    <tr className="border-t-2 border-teal-600/10">
                                        <td className="py-6 px-3 font-black text-zinc-900 text-xl md:text-2xl">Total</td>
                                        <td className="py-6 px-3 font-black text-teal-600 text-right text-2xl md:text-3xl">৳ {total.toFixed(2)}</td>
                                    </tr>
                                </tbody>
                            </table>
                        </div>

                        <div className="space-y-6">
                            <div className="space-y-4">
                                <div className="flex items-center gap-2 px-1">
                                    <ShieldCheck className="w-5 h-5 text-teal-600" />
                                    <p className="font-black text-zinc-800">Cash on delivery</p>
                                </div>
                                <div className="bg-[#f8f8f8] p-6 relative text-zinc-500 font-bold text-sm md:text-base rounded-3xl border-l-[6px] border-l-zinc-300 shadow-inner">
                                    <div className="absolute -top-2 left-8 w-4 h-4 bg-[#f8f8f8] rotate-45 transform origin-center border-l border-t border-zinc-100 hidden md:block"></div>
                                    <span className="relative z-10 leading-relaxed">Pay with cash upon delivery. অর্ডার কনফার্ম করতে নিচের বাটনে ক্লিক করুন।</span>
                                </div>
                            </div>

                            <button
                                type="submit"
                                className="group w-full bg-teal-600 hover:bg-teal-700 text-white text-xl md:text-2xl font-black py-6 rounded-3xl shadow-[0_20px_40px_-15px_rgba(13,148,136,0.5)] flex items-center justify-center gap-4 transition-all duration-300 hover:-translate-y-1 active:scale-[0.98]"
                            >
                                <div className="bg-white/20 p-2 rounded-xl group-hover:scale-110 transition-transform">
                                    <Lock className="w-5 h-5 md:w-6 md:h-6" />
                                </div>
                                <span>Place Order ৳{total.toFixed(2)}</span>
                            </button>
                        </div>
                    </div>
                </form>
            </div>
        </section>
    );
};

export default OrderForm;
