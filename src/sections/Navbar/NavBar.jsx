import "./Navbar.scss";
import { Button, Logo } from "../../components";

const NavBar = () => {
  return (
    <header className="header">
      <div className="card-header">
        <span className="logo">
          <Logo />
        </span>
        <span className="language">
          {/* <img src="" alt="Globe" /> */}
          <label htmlFor="language-picker"></label>
          <select
            name="Language"
            id="language-picker"
            style={{ color: "black" }}
          >
            <option value="en-IN">English</option>
            <option value="hi-IN">हिन्दी</option>
          </select>
        </span>
        <span className="button">
          <Button name="Sign In" />
        </span>
      </div>
    </header>
  );
};

export default NavBar;
