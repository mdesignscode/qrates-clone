import sol from "../assets/images/artist_sol.avif";
import mason from "../assets/images/artist_mason.avif";
import { useState } from "react";
import { HeroTitle } from "./features";

const testimonies = [
  {
    image: sol,
    review:
      "The response was overwhelming. It made me wonder why I hadn't pressed any records on vinyl before now. It felt like something that people had been waiting for for a long time.",
    name: "SOL",
    bg: "#fff804",
  },
  {
    bg: "#ff6711",
    image: mason,
    review:
      "We hit our goal of 100 Records in the first 32 minutes. And I have to be honest, I didn't expect that. There's no world where I would have thought that we were about to sell north of 2800 copies.",
    name: "Mason Lieberman (The Real Folk Blues, 2020)",
  },
];

export default function Testimonies() {
  const [activeSlide, setActiveSlide] = useState(testimonies[0]);

  return (
    <div
      className={`flex flex-col lg:flex-row-reverse px-4 pb-8 lg:py-12 lg:px-10 transition-all duration-700 lg:h-screen`}
      style={{ backgroundColor: activeSlide.bg }}
    >
      <div className="border-2 border-dark my-8 lg:my-0 mx-2 aspect-square overflow-y-hidden relative lg:flex-1">
        <img
          src={activeSlide.image}
          alt=""
          className="absolute top-1/3 -translate-y-1/3 lg:top-1/2 lg:-translate-y-1/2"
        />
      </div>

      <div className="flex flex-col items-start gap-6 lg:flex-1 lg:justify-around">
        <HeroTitle textSize="sm" isCenter={false} title="ARTISTS ON QRATES" />

        <div className="space-y-6">
          <p className="font-medium lg:text-xl mr-16 lg:mr-28">
            &quot;{activeSlide.review}&quot;
          </p>
          <p className="text-sm lg:text-base">—{activeSlide.name}</p>
        </div>

        <div className="flex gap-4 mt-10 lg:mt-0">
          {testimonies.map((_, i) => (
            <button
              onClick={() => setActiveSlide(testimonies[i])}
              className={`flex-none w-10 h-10 lg:w-12 lg:h-12 rounded-full border-2 ${
                i === testimonies.indexOf(activeSlide)
                  ? "bg-dark text-light border-transparent"
                  : "bg-transparent text-dark border-dark"
              }`}
            >
              {i + 1}
            </button>
          ))}
        </div>
      </div>
    </div>
  );
}
