"use client";

import React from "react";
import Header from "./components/Header";
import Gallery from "./components/Gallery";
import Features from "./components/Features";
import Description from "./components/Description";
import Specs from "./components/Specs";
import Reviews from "./components/Reviews";
import OrderForm from "./components/OrderForm";
import FAQ from "./components/FAQ";
import Footer from "./components/Footer";
import StickyButton from "./components/StickyButton";

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
