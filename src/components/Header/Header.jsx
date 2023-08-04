import React from "react";
import "./Header.scss";
import NetflixIcon from "../../assets/netflix-logo.svg";

export default function Header() {
  return (
    <>
      <header className="header">
        <div className="header__card card">
          <span className="header__card-logo">
            <img src={NetflixIcon} className="nf-logo" alt="Netflix Logo" />
          </span>
          <span className="header__card-lang">
            <label htmlFor="select-lang"></label>
            <select name="" id="select-lanf">
              <option value="en-In" label="Engilsh" lang="en">
                English
              </option>
              <option value="hi-IN" label="हिन्दी">
                हिन्दी
              </option>
            </select>
          </span>
          <span className="header__card-sign">
            <a href="/login" className="header-login-link" role="button">
              Sign In
            </a>
          </span>
        </div>
      </header>
    </>
  );
}
