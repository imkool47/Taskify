import Logo from "../assets/logo.png";
import "./Header.css";

export const Header = () => {
  return (
    <header>
      <div className="logo">
        <img src={Logo} alt="Taskify Logo" />
        <span>Taskify</span>
      </div>
      <div className="themeSelector">
        <span className="light"></span>
        <span className="medium"></span>
        <span className="gOne"></span>
        <span className="gTwo"></span>
        <span className="gThree"></span>
      </div>
    </header>
  );
};
