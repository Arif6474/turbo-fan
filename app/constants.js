import { Zap, Smartphone, BatteryCharging, Wind, VolumeX, Package } from "lucide-react";

export const PRODUCT = {
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
