import ChevronDownIcon from "./icons/ChevronDownIcon";

type THero =
  | {
      type: "image";
      content: string;
    }
  | {
      type: "text";
      content: {
        heading: string;
        text: string;
      };
      extraContent?: {
        heading: string;
        text: string;
      };
    };

interface IProcessStepProps {
  heading: string;
  subheading: string;
  text: string;
  hero?: THero;
  stepNumber?: number;
  learnMore?: boolean;
  decorationImage?: string;
  side?: "right" | "left";
  boldSubheading?: boolean;
}

export default function ProcessStep({
  text,
  subheading,
  heading,
  hero,
  stepNumber,
  learnMore,
  decorationImage,
  side,
  boldSubheading,
}: IProcessStepProps) {
  return (
    <div
      className={`flex gap-2 lg:flex-1 ${
        !!side && side === "left" ? "lg:text-right" : "lg:text-left"
      }`}
    >
      <div className="flex flex-col items-center relative lg:hidden">
        <span className="font-bold text-2xl bg-light border-4 border-dark rounded-full size-12 text-center grid place-content-center flex-none">
          {stepNumber}
        </span>

        <svg aria-hidden="true" width="5" className="flex-1">
          <line
            x1="2.5"
            y1="0"
            x2="2.5"
            y2="100%"
            stroke-width="5"
            className="stroke-dark"
          />
        </svg>

        <ChevronDownIcon className="absolute -bottom-4 size-12" />
      </div>

      <div>
        <p className="text-xl font-bold mb-2 lg:text-2xl">{heading}</p>

        <p
          className={`text-lg font-medium lg:font-semibold lg:mb-2 ${
            boldSubheading && "lg:text-2xl"
          }`}
        >
          {subheading}
        </p>

        <p>{text}</p>

        {!!hero &&
          (hero.type === "image" ? (
            <img src={hero.content} />
          ) : (
            <>
              <div className="mt-3">
                <p className="text-lg font-bold">{hero.content.heading}</p>
                <p>{hero.content.text}</p>
              </div>

              {hero.extraContent && (
                <div className="mt-3">
                  <p className="text-lg font-bold">{hero.extraContent.heading}</p>
                  <p>{hero.extraContent.text}</p>
                </div>
              )}
            </>
          ))}

        {(learnMore || decorationImage) && (
          <div className="space-y-2 mt-4">
            {learnMore && (
              <a
                className="link-secondary underline underline-offset-2"
                href="#"
              >
                Learn more
              </a>
            )}

            {decorationImage && <img src={decorationImage} alt="" />}
          </div>
        )}
      </div>
    </div>
  );
}
