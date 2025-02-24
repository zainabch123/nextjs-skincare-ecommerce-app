import Image from "next/image";
import heroImg from "../../public/heroImages/heroImg9.jpg";

export default function HeroImg() {
  return (
    <section className="w-full h-[75vh]">
      <Image
        className="w-full h-full object-cover object-left-top"
        src={heroImg}
        width={5998}
        height={2608}
        alt="Skincare Hero Image"
      />
    </section>
  );
}
