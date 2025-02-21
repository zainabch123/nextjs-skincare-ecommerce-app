import Header from "@/app/components/header";
import NavBar from "./components/navBar";
import HeroImg from "./components/heroImg";

export default function Home() {
  return (
    <main className="h-screen grid grid-rows-[75px_40px_1fr]">
      <Header />
      <NavBar />
      <div className="overflow-scroll overflow-x-hidden">
        <HeroImg />

        <footer>This is the footer</footer>
      </div>
    </main>
  );
}
