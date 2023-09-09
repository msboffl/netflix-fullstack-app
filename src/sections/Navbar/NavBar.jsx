import "./Navbar.scss";
import { Button, Logo } from "../../components";
import { Globe } from "../../Assets/icons";

const NavBar = () => {
  return (
    <header className="header">
      <div className="card-header">
        <span className="logo">
          <Logo />
        </span>
        <span className="language">
          <img src={Globe} alt="Globe" className="globe" />
          <label htmlFor="language-picker"></label>
          <select name="Language" id="language-picker">
            <option value="en-IN">English</option>
            <option value="hi-IN">हिन्दी</option>
          </select>
        </span>
        <span className="button">
          <Button btnName="Sign In" />
        </span>
      </div>
    </header>
  );
};

export default NavBar;
