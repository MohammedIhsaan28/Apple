'use client';
import Hero from "@/components/Hero";
import Navbar from "@/components/Navbar";
import Product from "@/components/Product";
import { ScrollTrigger,SplitText } from "gsap/all";
import gsap from "gsap";
import Showcase from "@/components/Showcase";
import Performance from "@/components/Performance";
import Features from "@/components/Features";
import Highlight from "@/components/Highlight";
import Footer from "@/components/Footer";

gsap.registerPlugin(ScrollTrigger,SplitText);
export default function Home() {
  return (
      <main>
        <Navbar/>
        <Hero/>
        <Product/>
        <Showcase/>
        <Performance/>
        <Features/>
        <Highlight/>
        <Footer/>
      </main>
  );
}
