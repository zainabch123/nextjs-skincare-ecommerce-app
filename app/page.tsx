import Header from "@/app/components/header";
import NavBar from "./components/navBar";
import HeroImg from "./components/heroImg";
import NewInSection from "./components/newInSection";
import TrendingSection from "./components/trendingSection";
import RecentlyViewedSection from "./components/recentlyViewedSection";

export default function Home() {
  return (
    <main className="h-screen grid grid-rows-[75px_40px_1fr]">
      <Header />
      <NavBar />
      <div className="overflow-scroll overflow-x-hidden">
        <HeroImg />
        <NewInSection />
        <TrendingSection/>
        <RecentlyViewedSection />
        <footer>This is the footer</footer>
      </div>
    </main>
  );
}
