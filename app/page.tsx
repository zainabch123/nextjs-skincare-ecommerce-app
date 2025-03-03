"use client"

// import Image from "next/image";
import { useState } from "react";

import Header from "@/app/components/header";
import HeroImg from "./components/heroImg";
import NavBar from "./components/navBar";
import NewInSection from "./components/newInSection";
import TrendingSection from "./components/trendingSection";
import RecentlyViewedSection from "./components/recentlyViewedSection";
// import heroImg from "../public/heroImages/heroImg9.jpg";

export default function Home() {
  const [basket, setBasket] = useState([]);

  console.log(basket)
  console.log(setBasket)
  return (
    <main className="h-screen grid grid-rows-[75px_40px_1fr]">
      <Header />
      <NavBar />
      <div className="overflow-scroll overflow-x-hidden">
        <HeroImg/>
        <NewInSection />
        <TrendingSection />
        <RecentlyViewedSection />
        <footer>This is the footer</footer>
      </div>
    </main>
  );
}
