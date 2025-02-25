import Image from "next/image";
import productData from "../lib/data";

export default function Carousel() {
  return (
    <section className="text-center justify-items-center pt-[50px] pr-[100px] pl-[100px]">
      <h1 className="text-2xl font-bold">New In</h1>
      <div className="flex relative items-center max-w-full">
        <button className="p-[30px] rounded-[15px] opacity-75 font-semibold text-4xl bg-stone-200 hover:bg-stone-100">
          {"<"}
        </button>
        <ul className="flex flex-row max-w-[1150px] m-auto scroll-smooth overflow-hidden p-[20px] gap-[30px]">
          {productData.map((product, index) => {
            return (
              <li
                key={index}
                className="w-[350px] shrink-[0] grid grid-rows-[400px_1fr_60px] rounded-[20px] bg-stone-200 "
              >
                <div className="carousel-card-img">
                  <Image
                    className="w-full h-full object-cover rounded-[20px_20px_0px_0px]"
                    src={product.imageSrc}
                    alt={product.name}
                  />
                </div>
                <div className="text-center p-[10px] text-base">
                  <h3>{product.name}</h3>

                </div>
                <div className="carousel-card-button">
                  <button className="p-[7px] bg-black text-white w-[140px] rounded-[12px] text-sm hover:bg-stone-400">
                    Add To Bag
                  </button>
                </div>
              </li>
            );
          })}
        </ul>
        <button className="p-[30px] rounded-[15px] opacity-75 font-semibold text-4xl bg-stone-200 hover:bg-stone-100">
          {">"}
        </button>
      </div>
    </section>
  );
}
