import FacebookIcon from "./icons/FacebookIcon";
import FooterLogo from "./icons/FooterLogo";
import InstagramIcon from "./icons/InstagramIcon";
import TwitterIcon from "./icons/TwitterIcon";

export default function Footer() {
  const Socials = ({ isMobile }: { isMobile: boolean }) => (
    <div className={`flex gap-4 items-center ${isMobile ? "lg:hidden" : "hidden lg:flex"} w-max mx-auto mt-8 lg:mr-0`}>
      <a href="#">
        <FacebookIcon />
      </a>
      <a href="#">
        <InstagramIcon fill="#fff" path="#000" />
      </a>
      <a href="#">
        <TwitterIcon />
      </a>
    </div>
  );

  return (
    <footer className="text-light px-8 pt-6 pb-20">
      <div className="flex flex-col lg:flex-row gap-10 lg:gap-0 lg:w-[90%] mx-auto">
        <div className="grid grid-cols-2 lg:flex-1">
          <ul>
            <p className="mb-3 font-bold">FOR ARTISTS</p>

            <li>For Artists</li>
            <li>How it Works</li>
            <li>Artist Toolkit</li>
            <li>Referral Program</li>
          </ul>
          <ul>
            <p className="mb-3 font-bold">FOR FANS</p>

            <li>For Fans</li>
            <li>Records</li>
            <li>Cassettes</li>
            <li>Stories</li>
            <li>Qrates Curated</li>
          </ul>
        </div>

        <div className="grid grid-cols-2 lg:flex-1">
          <ul>
            <p className="mb-3 font-bold">OUR COMPANY</p>

            <li>About Qrates</li>
            <li>Careers</li>
            <li>Partners</li>
          </ul>
          <ul>
            <p className="mb-3 font-bold">HELP</p>

            <li>Support Center</li>
            <li>Contact Us</li>
            <li>Returns</li>
            <li>Shipping</li>
          </ul>
        </div>

        <Socials isMobile={true} />
      </div>

      <div className="flex flex-col lg:flex-row mt-28 lg:mt-44 lg:justify-between lg:px-20">
        <FooterLogo />

        <div className="lg:space-y-4">
          <Socials isMobile={false} />

          <div className="text-sm flex justify-between lg:gap-4">
            <a href="#">Terms of Service</a>
            <a href="#">Privacy Policy</a>
            <a href="#">Legal Information</a>
          </div>
        </div>
      </div>
    </footer>
  );
}
