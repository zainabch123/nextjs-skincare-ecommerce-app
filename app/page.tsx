"use client"

import { useState } from "react";

import Header from "@/app/components/header";
import HeroImg from "./components/heroImg";
import NavBar from "./components/navBar";
import NewInSection from "./components/newInSection";
import TrendingSection from "./components/trendingSection";
import RecentlyViewedSection from "./components/recentlyViewedSection";
import { BasketItem } from "./lib/definitions";

export default function Home() {
   const [basket, setBasket] = useState<BasketItem[]>([]);

   console.log("set Basket:", setBasket)
  // const addToBasket = (item: BasketItem) => {
  //   setBasket([...basket, item]);
  // };
  return (
    <main className="h-screen grid grid-rows-[75px_40px_1fr]">
      <Header basket={basket}/>
      <NavBar />
      <div className="overflow-scroll overflow-x-hidden">
        <HeroImg/>
        <NewInSection /*addToBasket={addToBasket}*/ />
        <TrendingSection />
        <RecentlyViewedSection />
        <footer>This is the footer section</footer>
      </div>
    </main>
  );
}
