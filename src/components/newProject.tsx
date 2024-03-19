import AltArrowIcon from "./icons/AltArrow";
import artistTookit from "../assets/images/artist_toolkit.avif";
import customerSupport from "../assets/images/customer_support.avif";
import { HeroTitle } from "./features";

export default function StartNewProject() {
  return (
    <div className="bg-[#e4e5de]">
      <div className="bg-dark text-light flex flex-col lg:flex-row lg:justify-between text-center px-10 lg:px-16 py-16 gap-4">
        <div className="flex flex-col lg:flex-row lg:items-center">
          <p className="font-bold text-3xl lg:text-4xl">Start a new project</p>
          <AltArrowIcon className="size-10 mx-auto lg:-rotate-90 lg:size-12" />
        </div>

        <PrimaryLink text="Make your own" border="light" />
      </div>

      <div className="grid grid-rows-2 lg:grid-cols-2 lg:grid-rows-none">
        <div className="text-center border-y-2 border-dark lg:border-y-0 lg:border-r-2 px-4 flex flex-col gap-8 py-8 lg:py-16 lg:px-16 lg:text-lg bg-[#81836c]">
          <img
            src={artistTookit}
            alt=""
            className="aspect-video object-cover mx-auto"
          />

          <div className="flex flex-col gap-4">
            <HeroTitle title="ARTIST TOOLKIT" />
            <p className="text-3xl font-semibold lg:text-4xl mt-2">
              Take you and your works to next level.
            </p>
            <p>
              We have a lot of informations and tips about music production,
              physical format and music business for you.
            </p>
            <PrimaryLink text="Learn More" border="dark" />
          </div>
        </div>

        <div className="text-center px-4 flex flex-col gap-8 py-8 lg:py-16 lg:px-16 lg:text-lg bg-[#f8d8d8]">
          <img src={customerSupport} alt="" className=" mx-auto" />

          <div className="flex flex-col gap-4">
            <HeroTitle title="CUSTOMER SUPPORT" />
            <p className="text-3xl font-semibold lg:text-4xl mt-2">
              Here to help, whenever you need it.
            </p>

            <p>
              Whether you’re an artist in the middle of product, or a fan with
              questions about your order; our team is here to help.
            </p>
            <PrimaryLink text="Contact Us" border="dark" />
          </div>
        </div>
      </div>
    </div>
  );
}

export const PrimaryLink = ({
  border,
  text,
  bg = "dark",
  color = "light"
}: {
  border: string;
  text: string;
  bg?: string;
  color?: string
}) => (
  <a
    href="#"
    className={`uppercase border-2 border-${border} bg-${bg} text-${color} rounded-full py-4 text-sm lg:min-w-[250px] lg:h-[50px] lg:grid lg:place-content-center`}
  >
    {text}
  </a>
);
