import FeaturesDesktop from "./features.desktop";
import FeaturesMobile from "./features.mobile";

export default function Features() {
  return (
    <div className="bg-gray pb-16 lg:p-0">
      <p className="bg-dark text-light text-center text-3xl lg:py-24 px-8 py-16 font-semibold lg:text-5xl">
        You make music. We do the rest.
      </p>

      <FeaturesMobile />
      <FeaturesDesktop />
    </div>
  );
}

export function FeatureHero({
  heading,
  provider,
  text,
  heroImage,
  className,
}: {
  provider: string;
  heading: string;
  text: string;
  heroImage?: string;
  className?: string;
}) {
  return (
    <div className={`flex flex-col items-center ${className}`}>
      <span className="border-2 border-dark px-3 py-1 bg-light mx-auto">
        {provider}
      </span>

      <p className="text-center text-2xl font-semibold mx-6 mt-8 lg:mb-4 lg:text-3xl">
        {heading}
      </p>

      <p className="text-center lg:text-xl">{text}</p>

      {heroImage && <img src={heroImage} className="mt-3" alt="" />}
    </div>
  );
}