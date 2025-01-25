import Logo from "../assets/logo.png";
import "./Header.css";

export const Header = () => {

    return (
    <header>
        <img src={Logo} alt="" />
        <h1>Taskify</h1>
        <a href="/">Home</a>
    </header>
  )
}
