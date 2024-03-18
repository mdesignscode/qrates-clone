import { useState } from "react";
import ChevronDownIcon from "./icons/ChevronDownIcon";
import FacebookIcon from "./icons/FacebookIcon";
import InstagramIcon from "./icons/InstagramIcon";
import TwitterIcon from "./icons/TwitterIcon";

export default function MobileMenu({ showNavbar }: { showNavbar: boolean }) {
  const [discoveringMusic, setDiscoveringMusic] = useState(false);

  return (
    <nav
      className={`${
        !showNavbar ? "h-0" : "flex-1 py-6"
      } overflow-y-auto bg-light px-6 spring lg:hidden`}
    >
      <div
        className={`${
          !showNavbar ? "h-0 opacity-0 invisible" : "opacity-1 visible"
        } spring space-y-10`}
      >
        <div className="text-3xl uppercase flex flex-col gap-8 font-bold ">
          <div>
            <button
              className="flex items-center gap-4 uppercase"
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
              className={`text-2xl flex flex-col normal-case px-4 gap-3 spring ${
                discoveringMusic
                  ? "h-auto visible pt-4 opacity-100"
                  : "opacity-0 h-0 invisible"
              }`}
            >
              <a href="#">Records</a>
              <a href="#">Cassettes</a>
              <a href="#">Stories</a>
              <a href="#">Qrates Curated</a>
            </div>
          </div>
          <a href="#">For artists</a>
          <a href="#">For Fans</a>
        </div>

        <div className="flex gap-4 items-center">
          <a href="#">
            <FacebookIcon />
          </a>
          <a href="#">
            <InstagramIcon />
          </a>
          <a href="#">
            <TwitterIcon />
          </a>
        </div>

        <div className="flex flex-col gap-3">
          <a
            href="#"
            className="uppercase h-[50px] font-bold bg-dark rounded-full text-light px-8 py-4 text-center grid place-content-center text-lg"
          >
            Make a record
          </a>

          <a
            href="#"
            className="uppercase h-[50px] font-bold border-2 border-dark rounded-full text-dark px-8 py-4 text-center grid place-content-center text-lg"
          >
            Log in
          </a>
        </div>
      </div>
    </nav>
  );
}
