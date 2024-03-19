import { HeroTitle } from "./features";
import sample from "../assets/images/sample_female.png";
import { PrimaryLink } from "./newProject";

export default function Preview() {
  return (
    <div className="border-t-2 border-light ring ring-dark">
      <div className="text-light flex flex-col text-center px-4 py-10  gap-4 lg:w-[50%] lg:mx-auto lg:items-center">
        <HeroTitle isDark={true} textSize="sm" title="TRY IT NOW" />
        <p className="font-bold text-xl">Make it real with Qrates Studio</p>
        <p>
          Design the look and feel of your vinyl and cassette and use the profit
          calculator to immediately see how much your project will cost, and how
          much you'll earn.
        </p>
        <div className="w-[60%] mx-auto my-10">
          <img src={sample} alt="" />
        </div>
        <PrimaryLink
          y="1"
          textSize="xs"
          text="try it now"
          border="transparent"
          bg="primary"
          color="dark"
        />
      </div>
    </div>
  );
}
