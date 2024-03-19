import frame4 from "../assets/images/21cfb683-2a30-4f51-8fea-3fa2acb9d637_Frame+451.avif";
import frame2 from "../assets/images/Frame 451 (2).png";
import frame3 from "../assets/images/Frame 451 (3).png";
import frame from "../assets/images/Frame 451.png";
import frame5 from "../assets/images/d405f120-87ed-4136-aea5-3b0c903a5a45_Frame+440.avif";
import vinyl from "../assets/images/qrates-studio.png";
import { FeatureHero } from "./features";
import ChevronDownIcon from "./icons/ChevronDownIcon";
import ProcessStep from "./processStep";

export default function FeaturesDesktop() {
  const containerStyles = "flex w-full justify-center px-28 gap-48 pt-12";

  return (
    <div className="hidden lg:block relative overflow-y-hidden pb-16">
      <div className="bg-primary w-1/2 h-full z-0 absolute right-0 top-0"></div>

      <div className={containerStyles}>
        <FeatureHero
          heading="Focus on making music"
          provider="You"
          text="You can focus on your music production with peace of mind: the
            Artist Toolkit has lots of information about music production,
            knowledge about vinyl records and cassettes, and tips on how to sell
            your music. Artist Toolkit"
          className="flex-1"
        />

        <FeatureHero
          heading="We'll take care of the hassle"
          provider="Qrates"
          text="Qrates supports a wide range of artists while eliminating the
            hassles, costs and risks associated with pressing records, giving
            artists more time and income back in their hands."
          className="flex-1 relative z-10"
        />
      </div>

      <div className={`${containerStyles} relative z-10`}>
        <ProcessStep
          side="left"
          heading="Express your work on Qrates"
          subheading="Qrates studio"
          text="Your product details should match the details of your music. Tweak and customize your vinyl, sleeve, jacket, and more. "
        />

        <ProcessStep
          boldSubheading={true}
          side="right"
          heading="Over 120,000 customization possibilities"
          subheading="3D Visualizer"
          text="Choose from vinyl or cassette, each with a wide range of options including colors, packaging, obi strips, download cards, etc. There are over 120,000 variations of colors and specs for vinyl and cassette that can be customized in the Qrates Studio."
          hero={{ content: vinyl, type: "image" }}
        />

        <StepNumber index={1} />
      </div>

      <div className={`${containerStyles} relative z-10`}>
        <ProcessStep
          side="left"
          heading="Start a Qrates page, confirm and pay for production costs."
          subheading="Pay up front? Crowdfunding?"
          text="Pay for the production of your product in advance and start production immediately, or choose the crowdfunding option and press as many copies you like with pledges you collect from your fans."
          hero={{
            type: "text",
            content: {
              text: "The Qrates page is your storefront on Qrates to sell your music. The Artist page is your profile page. Upload your images to the template provided and fill in the form to set it up.",
              heading: "Qrates page and Artist page",
            },
          }}
          boldSubheading={true}
          decorationImage={frame4}
        />

        <ProcessStep
          side="right"
          heading="We support a wide range of artists' needs"
          subheading="Small production minimums"
          text="Vinyl records can be made from 100 copies, and cassette tapes from 50 copies."
          hero={{
            content: {
              heading: "Select the payment option",
              text: "You can pay for the production of your product in advance and begin the production process immediately. We also have a pre-order function, which allows you to take orders during production until completion, and the crowdfunding method, which allows you to collect orders in advance and then begin the manufacturing process. If you don't want to pay for the production costs upfront, or if you want to collect orders from your fans before deciding on the final number of pieces to be produced, try crowdfunding. No risk, no waste.",
            },
            type: "text",
            extraContent: {
              heading: "Easily customizable your Qrates page and artist page",
              text: "Qrates provides easy-to-setup templates for the Qrates page and the artist profile page. The Qrates page for selling your music can be set up to include audio samples, embedded videos, and comments from fans, making it a great promotional tool.",
            },
          }}
        />

        <StepNumber index={2} />
      </div>

      <div className={`${containerStyles} relative z-10`}>
        <ProcessStep
          side="left"
          subheading=""
          heading="Collect orders from fans"
          text="Pay for the production of your product in advance and start production immediately, or choose the crowdfunding option and press as many copies you like with pledges you collect from your fans."
        />

        <ProcessStep
          side="right"
          heading="Wholesale distribution network"
          subheading="You can sell wholesale directly to record stores worldwide"
          text="Simply start selling on your Qrates page and receive orders from over 150 record stores and distributors worldwide that we partner with."
          hero={{
            content: frame,
            type: "image",
          }}
        />

        <StepNumber index={3} />
      </div>

      <div className={`${containerStyles} relative z-10`}>
        <ProcessStep
          side="left"
          heading="Upload your product assets and start production"
          subheading=""
          text="Prepare your audio and print files required for production."
        />

        <ProcessStep
          side="right"
          heading="Professional audio mastering and artwork support."
          subheading="Audio mastering service"
          text="Qrates offers a audio mastering service with a partner professional audio engineer to support optimal sound creation."
          hero={{
            content: {
              heading: "Artwork support",
              text: "We help ensure that your artwork conforms to printing standards and that your product is as beautiful as possible.",
            },
            type: "text",
          }}
        />

        <StepNumber index={4} />
      </div>

      <div className={`${containerStyles} relative z-10`}>
        <ProcessStep
          side="left"
          subheading=""
          heading=""
          text=""
          decorationImage={frame5}
        />

        <ProcessStep
          side="right"
          heading="Pressing records and making cassette tapes"
          subheading="Trusted production partners"
          text="We partner with factories that have a long history of manufacturing vinyl records and cassette tapes with proven technical capabilities and produce world-class quality products."
          hero={{
            content: {
              heading: "Speedy delivery time",
              text: "Vinyl records are shipped from our factory within an average of 16 weeks after ordering. Cassette tapes can be shipped from the factory in an average of 8 weeks or less.",
            },
            type: "text",
          }}
          learnMore={true}
        />

        <StepNumber index={5} />
      </div>

      <div className={`${containerStyles} relative z-10`}>
        <ProcessStep side="left" subheading="" heading="" text="" />

        <ProcessStep
          side="right"
          heading="Warehousing and Distribution"
          subheading="Free warehousing"
          text="When you sell records or cassettes on Qrates, you can store your products for free in one of our three worldwide distribution centers (USA, UK, Japan)."
          hero={{
            content: {
              heading: "Shipping",
              text: "When a product is purchased from a customer, Qrates carefully packages the product and ships it worldwide. We can also ship products to any designated location.",
            },
            type: "text",
          }}
          learnMore={true}
          decorationImage={frame2}
        />

        <StepNumber index={6} />
      </div>

      <div className={`${containerStyles} relative z-10`}>
        <ProcessStep
          side="left"
          subheading=""
          heading="Receive revenue"
          text="Make a request to receive your revenue. We can deposit your funds to your pre-registered bank account or Paypal account."
          decorationImage={frame3}
        />

        <ProcessStep
          side="right"
          heading="Continue selling on Qrates"
          subheading="Selling on Qrates"
          text="By storing your inventory in the Qrates warehouse, you can continue to sell your work on Qrates. You can manufacture the exact number of copies as your project collected at the end of the crowdfunding campaign, or you can make more copies and continue to sell them on Qrates."
          hero={{
            content: {
              heading: "Repress",
              text: "Repressing records is always easy. Master stampers can be stored at the factory for 18 months at no charge, so there is no need to make new stampers within that time frame. Use the repress requests from fans as a signal on when to repress more records.",
            },
            type: "text",
          }}
          learnMore={true}
        />

        <StepNumber index={7} />
      </div>
    </div>
  );
}

function StepNumber({ index }: { index: number }) {
  return (
    <div className="absolute left-1/2 -translate-x-1/2 flex flex-col items-center h-full">
      <span className="font-bold text-5xl bg-light border-4 border-dark rounded-full size-24 text-center grid place-content-center flex-none ">
        {index}
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
      <ChevronDownIcon className="relative bottom-7" size="size-12" />
    </div>
  );
}
