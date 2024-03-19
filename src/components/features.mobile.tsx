import ProcessStep from "./processStep";
import vinyl from "../assets/images/qrates-studio.png";
import frame from "../assets/images/Frame 451.png";
import frame2 from "../assets/images/Frame 451 (2).png";
import frame3 from "../assets/images/Frame 451 (3).png";
import { FeatureHero } from "./features";

export default function FeaturesMobile() {
  return (
    <div className="flex flex-col px-4 lg:hidden">
      <div className="px-4 py-8">
        <FeatureHero
          heading="Focus on making music"
          provider="You"
          text="You can focus on your music production with peace of mind: the
            Artist Toolkit has lots of information about music production,
            knowledge about vinyl records and cassettes, and tips on how to sell
            your music. Artist Toolkit"
        />

        <div className="flex flex-col py-8 gap-6">
          <ProcessStep
            stepNumber={1}
            heading="Express your work on Qrates"
            subheading="Qrates studio"
            text="Your product details should match the details of your music. Tweak and customize your vinyl, sleeve, jacket, and more. "
            hero={{ content: vinyl, type: "image" }}
          />

          <ProcessStep
            stepNumber={2}
            heading="Start a Qrates page, confirm and pay for production costs."
            subheading="Pay up front? Crowdfunding?"
            text="Pay for the production of your product in advance and start production immediately, or choose the crowdfunding option and press as many copies you like with pledges you collect from your fans."
            hero={{
              content: {
                heading: "Qrates page and Artist page",
                text: "The Qrates page is your storefront on Qrates to sell your music. The Artist page is your profile page. Upload your images to the template provided and fill in the form to set it up.",
              },
              type: "text",
            }}
          />
        </div>
      </div>

      <div className="mb-8 px-4 pt-12 bg-primary border-2 border-dark">
        <FeatureHero
          heading="We'll take care of the hassle"
          provider="Qrates"
          text="Qrates supports a wide range of artists while eliminating the
            hassles, costs and risks associated with pressing records, giving
            artists more time and income back in their hands."
        />

        <div className="flex flex-col py-8 gap-6">
          <ProcessStep
            stepNumber={3}
            heading="Wholesale distribution network"
            subheading="You can sell wholesale directly to record stores worldwide"
            text="Simply start selling on your Qrates page and receive orders from over 150 record stores and distributors worldwide that we partner with. "
            hero={{ content: frame, type: "image" }}
          />

          <ProcessStep
            stepNumber={4}
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

          <ProcessStep
            stepNumber={5}
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
          />

          <ProcessStep
            learnMore={true}
            stepNumber={6}
            heading="Warehousing and Distribution"
            subheading="Free warehousing"
            text="When you sell records or cassettes on Qrates, you can store your products for free in one of our three worldwide distribution centers (USA, UK, Japan). "
            hero={{
              content: {
                heading: "Speedy delivery time",
                text: "When a product is purchased from a customer, Qrates carefully packages the product and ships it worldwide. We can also ship products to any designated location.",
              },
              type: "text",
            }}
            decorationImage={frame2}
          />

          <ProcessStep
            learnMore={true}
            stepNumber={7}
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
          />
        </div>
      </div>

      <FeatureHero
        className="lg:hidden"
        heading="Receive revenue"
        provider="You"
        text="Make a request to receive your revenue. We can deposit your funds to your pre-registered bank account or Paypal account."
        heroImage={frame3}
      />
    </div>
  );
}
