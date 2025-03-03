import Carousel from "./carousel";
// import { BasketItem } from "../lib/definitions";

// type NewInSectionProps = {
//   addToBasket: (item: BasketItem) => void; 
// };

export default function NewInSection() {
    return (
      <section className="text-center justify-items-center pt-[50px] pr-[100px] pl-[100px]">
        <h1 className="text-2xl font-bold">New In</h1>
        <Carousel/>
      </section>
    );
}