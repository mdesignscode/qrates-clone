import { useState } from "react";
import "../styles/hamburger.css";
// import "../styles/navbar.css";
import MobileMenu from "./mobileMenu";
import QratesLogo from "./icons/QratesLogo";
import SearchIcon from "./icons/SearchIcon";
import CartIcon from "./icons/CartIcon";
import DesktopMenu from "./desktopMenu";

export default function Navbar() {
  const [showNav, setShowNav] = useState(false);

  return (
    <>
      <header className="sticky flex flex-col">
        <div className="h-[65px] bg-light flex px-6 py-1 lg:px-10 lg:py-14 gap-8 items-center">
          <div className="flex items-center flex-1 gap-6">
            <span className="mr-auto lg:mr-0">
              <QratesLogo />
            </span>

            <DesktopMenu />

            <SearchIcon />
            <span className="lg:mr-auto">
              <CartIcon />
            </span>
          </div>

          <div className="header-right">
            <button
              id="mobile-navbar"
              aria-label={showNav ? "Hide menu" : "Show menu"}
              onClick={() => setShowNav(!showNav)}
              className={`hamburger hamburger--squeeze grid place-content-center lg:hidden ${
                showNav && "is-active"
              }`}
              type="button"
            >
              <span className="hamburger-box">
                <span className="hamburger-inner"></span>
              </span>
            </button>

            <div className="lg:flex gap-4 items-center hidden">
              <a href="#" className="link-secondary">
                Log in
              </a>
              <a
                href="#"
                className="link-primary opacity-30 pointer-events-none"
              >
                Make you own
              </a>
            </div>
          </div>
        </div>
      </header>

      <MobileMenu showNav={showNav} />
    </>
  );
}
