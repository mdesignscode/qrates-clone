import hero1 from "../assets/images/hero-1.avif";
import hero2 from "../assets/images/hero-2.avif";

export default function Hero() {
  return (
    <div className="py-10 px-4 text-light w-full overflow-x-hidden lg:px-12 lg:py-20">
      <div className="lg:w-[52%]">
        <span className="text-light border-2 border-light uppercase px-3 py-2 font-semibold">
          For artists
        </span>
        <h1 className="text-3xl font-bold mr-10 mt-12 mb-6 lg:mb-12 lg:mt-10 lg:text-6xl">
          Music in your hands. Without the barriers.
        </h1>
        <p className="text-lg lg:text-2xl lg:mr-32">
          Full-service production, a global retail network, customer support - and
          you keep up to 85% of profits. ↓
        </p>
      </div>

      <div className="relative w-full flex justify-center mt-8 h-max">
        <div className="w-[46%] -rotate-[10deg] mt-16 border-2 border-dark">
          <img src={hero1} alt="" width="100%" height="auto" />
        </div>
        <div className="w-[44%] -ml-8 border-2 lg:-translate-y-[68%] border-dark h-max rotate-[12deg]">
          <img src={hero2} alt="" width="100%" height="auto" />
        </div>
      </div>
    </div>
  );
}
