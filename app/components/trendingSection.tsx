import Carousel from "./carousel";

export default function TrendingSection() {
    return (
      <section className="text-center justify-items-center pt-[50px] pr-[100px] pl-[100px]">
        <h1 className="text-2xl font-bold">Trending</h1>
        <Carousel/>
      </section>
    );
}