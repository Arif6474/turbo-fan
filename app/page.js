"use client";

import React, { useState } from "react";
import Image from "next/image";
import {
  CheckCircle2,
  Truck,
  ShieldCheck,
  Wind,
  BatteryCharging,
  Zap,
  Smartphone,
  VolumeX,
  Package,
  MessageCircle,
  Star,
  Plus,
  Minus,
  ChevronRight,
  ChevronLeft,
  X,
  Facebook,
  Lock
} from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

const PRODUCT = {
  name: "High Speed Turbine Mini Neck Fan N607 (Digital Display)",
  nameBn: "হাই স্পিড টারবাইন মিনি নেক ফ্যান N607 (ডিজিটাল ডিসপ্লে)",
  price: 990,
  regularPrice: 1200,
  images: [
    "/images/O1CN01AyXDtE1iBLTn93MDO_!!2220650294374-0-cib.jpg",
    "/images/O1CN01YXM9i71iBLTmY97PE_!!2220650294374-0-cib.jpg",
    "/images/O1CN01qr1e8s1iBLTmSufVB_!!2220650294374-0-cib.jpg",
    "/images/O1CN01qspn9Y1iBLTmGHblB_!!2220650294374-0-cib.jpg",
    "/images/6.jpeg",
    "/images/7.jpeg"
  ],
  colors: [
    { name: "সাদা (White)", image: "/images/O1CN01AyXDtE1iBLTn93MDO_!!2220650294374-0-cib.jpg" },
    { name: "কালো (Black)", image: "/images/O1CN01qspn9Y1iBLTmGHblB_!!2220650294374-0-cib.jpg" },
    { name: "সবুজ (Green)", image: "/images/O1CN01qr1e8s1iBLTmSufVB_!!2220650294374-0-cib.jpg" }
  ],
  specs: [
    { label: "মডেল", value: "N607" },
    { label: "ব্যাটারি", value: "1000-1200mAh" },
    { label: "ব্যাকআপ", value: "১-৩ ঘণ্টা" },
    { label: "চার্জিং", value: "USB" },
    { label: "মোটর", value: "ব্রাশলেস মোটর" },
    { label: "ওজন", value: "২৭০ গ্রাম" },
    { label: "স্পিড মোড", value: "৫টি লেভেল" },
  ],
  features: [
    { icon: <Zap className="w-6 h-6" />, title: "৫টি স্পিড কন্ট্রোল" },
    { icon: <Smartphone className="w-6 h-6" />, title: "ডিজিটাল ডিসপ্লে" },
    { icon: <BatteryCharging className="w-6 h-6" />, title: "USB চার্জিং" },
    { icon: <Wind className="w-6 h-6" />, title: "শক্তিশালী টারবাইন মোটর" },
    { icon: <VolumeX className="w-6 h-6" />, title: "কম শব্দ (36db এর নিচে)" },
    { icon: <Package className="w-6 h-6" />, title: "হালকা ও বহনযোগ্য" },
  ]
};

const Header = () => (
  <header className="fixed top-0 left-0 right-0 z-50 bg-white/90 backdrop-blur-md border-b border-zinc-100 py-3 px-4 flex justify-between items-center w-full shadow-sm">
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
  </header>
);

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

          <button onClick={(e) => { e.stopPropagation(); prev(); }} className="absolute left-4 top-1/2 -translate-y-1/2 w-10 h-10 bg-white/90 rounded-full flex items-center justify-center shadow-lg hover:bg-white transition-all active:scale-90 z-10">
            <ChevronLeft className="w-6 h-6 text-zinc-800 ml-[-2px]" />
          </button>
          <button onClick={(e) => { e.stopPropagation(); next(); }} className="absolute right-4 top-1/2 -translate-y-1/2 w-10 h-10 bg-white/90 rounded-full flex items-center justify-center shadow-lg hover:bg-white transition-all active:scale-90 z-10">
            <ChevronRight className="w-6 h-6 text-zinc-800 mr-[-2px]" />
          </button>
        </div>

        <div className="flex gap-3 mt-4 justify-center overflow-x-auto pb-2 px-1 scrollbar-hide">
          {PRODUCT.images.map((img, idx) => (
            <button
              key={idx}
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
          <button className="absolute top-6 right-6 text-white p-3 hover:bg-white/10 rounded-full transition-colors z-50 border border-white/10">
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

const Description = () => (
  <section className="py-24 px-4 max-w-5xl mx-auto">
    <div className="grid md:grid-cols-2 gap-12 md:gap-20 items-center">
      <div className="relative aspect-[4/5] rounded-[2.5rem] overflow-hidden shadow-2xl border border-zinc-100">
        <Image src="/images/7.jpeg" alt="Lifestyle" fill className="object-cover" />
        <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-black/80 to-transparent p-8">
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
          <div key={i} className="bg-white p-8 rounded-[2rem] shadow-sm border border-zinc-100 flex flex-col justify-between hover:shadow-2xl hover:shadow-zinc-200/50 transition-all duration-300">
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
          <div className="space-y-4">
            <h3 className="text-xl md:text-2xl font-black text-zinc-800">Your Products</h3>
            
            <div className="space-y-4">
              {items.map((item, idx) => (
                <div key={idx} className={`bg-white border rounded-lg p-4 flex gap-4 transition-all duration-300 ${item.selected ? 'border-teal-600 shadow-sm' : 'border-zinc-200 opacity-60 hover:opacity-100'}`}>
                  
                  {/* Checkbox */}
                  <div className="pt-2 cursor-pointer flex-shrink-0" onClick={() => toggleItemSelection(idx)}>
                    <div className={`w-5 h-5 rounded flex items-center justify-center border transition-colors ${item.selected ? 'bg-teal-600 border-teal-600' : 'bg-white border-zinc-300'}`}>
                       {item.selected && <CheckCircle2 className="w-3.5 h-3.5 text-white" />}
                    </div>
                  </div>

                  {/* Details */}
                  <div className="flex-1 flex flex-col justify-between">
                    <div className="flex gap-4">
                      {/* Image */}
                      <div className="w-20 h-20 md:w-24 md:h-24 bg-zinc-50 border border-zinc-100 rounded relative overflow-hidden shrink-0">
                        <Image src={item.color.image} alt={item.color.name} fill className="object-cover p-1 mix-blend-multiply" />
                      </div>

                      <div>
                        <h4 className="font-bold text-zinc-800 text-base md:text-lg leading-tight">
                          {PRODUCT.nameBn} - 
                          <span className="text-zinc-600 block mt-1 text-sm md:inline md:mt-0 font-normal">{item.color.name}</span>
                        </h4>
                        <div className="flex items-center gap-2 mt-1 font-bold">
                           <span className="text-zinc-500 text-sm">× 1</span>
                        </div>
                        <p className="text-xs text-zinc-500 mt-2 leading-relaxed hidden md:block">
                          হাই স্পিড টারবাইন মিনি নেক ফ্যান, ৫টি স্পিড কন্ট্রোল এবং ডিজিটাল ডিসপ্লে। 
                        </p>
                      </div>
                    </div>

                    <div className="flex items-center justify-between mt-4 md:mt-2 md:pl-28">
                       {/* Qty Counter */}
                       <div className="flex items-center border border-zinc-200 rounded bg-white shadow-sm">
                         <button type="button" onClick={() => updateItemQty(idx, item.qty - 1)} className="px-3 py-1 text-zinc-500 hover:bg-zinc-50 active:bg-zinc-100 transition-colors text-lg"><Minus className="w-4 h-4" /></button>
                         <span className="px-3 py-1 font-bold text-zinc-800 border-x border-zinc-200 min-w-[2rem] text-center text-sm">{item.qty}</span>
                         <button type="button" onClick={() => updateItemQty(idx, item.qty + 1)} className="px-3 py-1 text-zinc-500 hover:bg-zinc-50 active:bg-zinc-100 transition-colors text-lg"><Plus className="w-4 h-4" /></button>
                       </div>

                       {/* Price */}
                       <div className="text-right">
                         <span className="line-through text-zinc-400 font-medium mr-2 text-xs md:text-sm">৳{(PRODUCT.regularPrice * item.qty).toFixed(2)}</span>
                         <span className="font-black text-zinc-900 text-base md:text-lg">৳{(PRODUCT.price * item.qty).toFixed(2)}</span>
                       </div>
                    </div>
                  </div>

                </div>
              ))}
            </div>
          </div>

          {/* Billing & Shipping Section */}
          <div className="space-y-6 pt-6 mt-6 md:pt-8 md:mt-8 border-t border-zinc-200">
            <h3 className="text-xl md:text-2xl font-black text-zinc-800">Billing & Shipping</h3>
            
            <div className="space-y-5">
              <div className="space-y-1.5">
                <label className="text-sm font-bold text-zinc-700">Name <span className="text-red-500">*</span></label>
                <input required value={info.name} onChange={e => setInfo({ ...info, name: e.target.value })} className="w-full bg-white border border-zinc-300 rounded px-4 py-3 focus:ring-1 focus:ring-teal-600 focus:border-teal-600 outline-none transition-all shadow-sm font-medium" placeholder="আপনার নাম লিখুন" />
              </div>
              
              <div className="space-y-1.5">
                <label className="text-sm font-bold text-zinc-700">Phone <span className="text-red-500">*</span></label>
                <input required type="tel" value={info.phone} onChange={e => setInfo({ ...info, phone: e.target.value })} className="w-full bg-white border border-zinc-300 rounded px-4 py-3 focus:ring-1 focus:ring-teal-600 focus:border-teal-600 outline-none transition-all shadow-sm font-medium" placeholder="০১৭XXXXXXXX" />
              </div>

              <div className="space-y-1.5">
                <label className="text-sm font-bold text-zinc-700">Address <span className="text-red-500">*</span></label>
                <textarea required value={info.address} onChange={e => setInfo({ ...info, address: e.target.value })} className="w-full bg-white border border-zinc-300 rounded px-4 py-3 focus:ring-1 focus:ring-teal-600 focus:border-teal-600 outline-none transition-all shadow-sm h-24 resize-none font-medium" placeholder="Street address"></textarea>
              </div>
            </div>
          </div>

          <div className="space-y-4 pt-4 hidden md:block">
             <h3 className="text-lg font-bold text-zinc-800">Additional information</h3>
          </div>

          {/* Shipping Choice */}
          <div className="space-y-4 pt-6 md:pt-0">
            <h3 className="text-xl md:text-2xl font-black text-zinc-800">Shipping</h3>
            <div className="grid grid-cols-1 gap-3">
               <label className={`flex items-center gap-4 p-4 border rounded cursor-pointer transition-all w-full ${district === 'dhaka' ? 'border-teal-600 bg-teal-50' : 'bg-white border-zinc-300 hover:border-zinc-400'}`}>
                  <input type="radio" checked={district === 'dhaka'} onChange={() => setDistrict('dhaka')} className="w-4 h-4 accent-teal-600" />
                  <span className="flex-1 font-medium text-zinc-700 text-sm md:text-base">ঢাকার ভেতরে হোম ডেলিভারি মাত্র</span>
               </label>
               <label className={`flex items-center gap-4 p-4 border rounded cursor-pointer transition-all w-full ${district === 'outside' ? 'border-teal-600 bg-teal-50' : 'bg-white border-zinc-300 hover:border-zinc-400'}`}>
                  <input type="radio" checked={district === 'outside'} onChange={() => setDistrict('outside')} className="w-4 h-4 accent-teal-600" />
                  <span className="flex-1 font-medium text-zinc-700 text-sm md:text-base">সারাদেশে হোম ডেলিভারি মাত্র</span>
               </label>
            </div>
          </div>

          {/* Order Summary & Checkout */}
          <div className="pt-2">
            <h3 className="text-xl md:text-2xl font-black text-zinc-800 mb-4">Your order</h3>
            
            <div className="bg-transparent mb-6">
              <table className="w-full text-left">
                 <thead>
                    <tr className="border-b border-dashed border-zinc-300">
                       <th className="pb-3 pt-2 font-bold text-zinc-700 text-base">Product</th>
                       <th className="pb-3 pt-2 font-bold text-zinc-700 text-base text-right">Subtotal</th>
                    </tr>
                 </thead>
                 <tbody className="divide-y divide-dashed divide-zinc-300">
                    {selectedItems.map((item, idx) => (
                       <tr key={idx}>
                          <td className="py-4 pr-3 flex items-center gap-3">
                             <div className="w-10 h-10 relative bg-white border border-zinc-200 rounded shrink-0 p-0.5 shadow-sm">
                                <Image src={item.color.image} alt="prod" fill className="object-cover rounded-sm mix-blend-multiply" />
                             </div>
                             <div className="font-bold text-zinc-700 text-sm leading-snug break-words">
                                {PRODUCT.nameBn}
                                <span className="block text-zinc-500 font-normal text-xs">{item.color.name} × {item.qty}</span>
                             </div>
                          </td>
                          <td className="py-4 font-black text-zinc-800 text-right text-sm">
                             ৳ {(PRODUCT.price * item.qty).toFixed(2)}
                          </td>
                       </tr>
                    ))}
                    
                    {/* Subtotal */}
                    <tr>
                       <td className="py-4 font-medium text-zinc-600 text-sm">Subtotal</td>
                       <td className="py-4 font-black text-zinc-800 text-right text-sm">৳ {subtotal.toFixed(2)}</td>
                    </tr>
                    
                    {/* Total Row */}
                    <tr className="border-t-2 border-dashed border-zinc-300">
                       <td className="py-4 font-black text-zinc-900 text-lg">Total</td>
                       <td className="py-4 font-black text-zinc-900 text-lg text-right">৳ {total.toFixed(2)}</td>
                    </tr>
                 </tbody>
              </table>
            </div>

            {/* Cash on Delivery & Button Block */}
            <div className="space-y-6">
              <div className="space-y-2">
                 <p className="font-medium text-zinc-700 px-1">Cash on delivery</p>
                 <div className="bg-[#ebebeb] p-4 relative text-zinc-600 font-medium text-sm rounded border-l-[3px] border-l-zinc-300">
                    <div className="absolute -top-1 left-6 w-3 h-3 bg-[#ebebeb] rotate-45 transform origin-center"></div>
                    <span className="relative z-10 w-full block">Pay with cash upon delivery.</span>
                 </div>
              </div>

              <button type="submit" className="w-full bg-teal-600 hover:bg-teal-700 text-white text-lg font-bold py-4 rounded shadow-sm flex items-center justify-center gap-2 transition-all active:scale-[0.98]">
                 <Lock className="w-5 h-5" /> Place Order ৳{total.toFixed(2)}
              </button>
            </div>
          </div>

        </form>
      </div>
    </section>
  );
};

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
          <div key={i} className={`rounded-[2rem] border transition-all duration-300 overflow-hidden ${open === i ? "border-teal-200 bg-teal-50/30 shadow-lg shadow-teal-900/5" : "border-zinc-200 bg-white hover:border-teal-200"}`}>
            <button onClick={() => setOpen(open === i ? -1 : i)} className="w-full text-left p-6 md:p-8 flex justify-between items-center outline-none">
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

    <div className="max-w-5xl mx-auto h-px bg-gradient-to-r from-transparent via-white/10 to-transparent my-8"></div>
    <p className="text-center text-sm font-medium tracking-wide">© ২০২৪ Neck Fan Store. সর্বস্বত্ব সংরক্ষিত।</p>
  </footer>
);

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

export default function Home() {
  return (
    <div className="bg-white min-h-screen text-zinc-900 selection:bg-teal-200 selection:text-teal-900">
      <style jsx global>{`
        @import url('https://fonts.googleapis.com/css2?family=Hind+Siliguri:wght@300;400;500;600;700&display=swap');
        html { scroll-behavior: smooth; }
        body { font-family: 'Hind Siliguri', sans-serif; overflow-x: hidden; }
        .scrollbar-hide::-webkit-scrollbar { display: none; }
        .scrollbar-hide { -ms-overflow-style: none; scrollbar-width: none; }
      `}</style>

      <Header />
      <main>
        <Gallery />
        <Features />
        <Description />
        <Specs />
        <Reviews />
        <OrderForm />
        <FAQ />
      </main>
      <Footer />
      <StickyButton />
    </div>
  );
}
