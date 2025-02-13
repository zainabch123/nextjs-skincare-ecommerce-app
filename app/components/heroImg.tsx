import Image from "next/image";
import heroImg from "../../public/heroImages/heroImg9.jpg";

export default function HeroImg() {
  return (
    <section className="hero-image-carousel">
      <Image className="hero-image" src={heroImg} alt="Skincare Hero Image" />
    </section>
  );
}
