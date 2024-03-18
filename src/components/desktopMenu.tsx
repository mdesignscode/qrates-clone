import { useState } from "react";
import ChevronDownIcon from "./icons/ChevronDownIcon";

export default function DesktopMenu() {
  const [discoveringMusic, setDiscoveringMusic] = useState(false);

  return (
    <nav className="hidden lg:flex items-center gap-6 link-secondary">
      <div className="relative">
        <button
          className="flex items-center gap-1 link-secondary"
          id="discover-music-button"
          aria-controls="discover-music"
          aria-expanded={discoveringMusic}
          onClick={() => setDiscoveringMusic(!discoveringMusic)}
        >
          Discover music
          <ChevronDownIcon
            className={`spring ${
              discoveringMusic ? "-rotate-180" : "rotate-[360deg]"
            }`}
          />
        </button>

        <div
          id="discover-music"
          aria-hidden={!discoveringMusic}
          aria-labelledby="discover-music-button"
          className={`text-lg whitespace-nowrap flex flex-col normal-case px-6 gap-3 spring absolute bg-dark text-light ${
            discoveringMusic
              ? "h-auto visible py-6 opacity-100"
              : "opacity-0 h-0 invisible"
          }`}
        >
          <a href="#">Records</a>
          <a href="#">Cassettes</a>
          <a href="#">Stories</a>
          <a href="#">Qrates Curated</a>
        </div>
      </div>

      <a className="uppercase" href="#">
        For arists
      </a>
      <a className="uppercase" href="#">
        For fans
      </a>
    </nav>
  );
}
