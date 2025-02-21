import Header from "@/app/components/header";
import NavBar from "./components/navBar";
import HeroImg from "./components/heroImg";

export default function Home() {
  return (
    <main>
      <Header />
      <NavBar />
      <div className="overflow-container">
        <HeroImg />

        <footer>This is the footer</footer>
      </div>
    </main>
  );
}
