import { useState } from "react";
import "../styles/hamburger.css";
import "../styles/navbar.css"
import cartIcon from "../assets/bx-cart.svg"
import qRatesLogo from "../assets/qrates-logo.svg";
import searchIcon from "../assets/bx-search.svg";

export default function Navbar() {
  const [showNav, setShowNav] = useState(false);

  return (
    <header>
      <img src={qRatesLogo} alt="" width={30} height={45} />
      <button
        onClick={() => setShowNav(!showNav)}
        className={`hamburger hamburger--squeeze ${showNav && "is-active"}`}
        type="button"
      >
        <span className="hamburger-box">
          <span className="hamburger-inner"></span>
        </span>
      </button>
    </header>
  );
}
