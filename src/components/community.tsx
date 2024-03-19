import { HeroTitle } from "./features";
import { PrimaryLink } from "./newProject";

export default function Community() {
  return (
    <div className="bg-light text-center px-4 pt-10 pb-16 lg:py-24 border-y-2 border-dark">
      <div className="flex flex-col gap-4 lg:w-[65%] lg:items-center lg:mx-auto lg:gap-7">
        <HeroTitle title="COMMUNITY" />
        <p className="text-xl font-bold lg:text-4xl lg:my-3">
          Join a growing community.
        </p>
        <p className="lg:text-xl">
          We're building a home for the next generation vinyl lovers and
          cassette junkies. Get in front of fans, connect with artists, labels
          and stores.{" "}
        </p>
        <PrimaryLink
          text="Read more stories"
          border="dark"
          bg="light"
          color="dark"
        />
      </div>
    </div>
  );
}
