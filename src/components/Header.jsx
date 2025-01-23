import Logo from "../assets/logo.png"

export const Header = () => {
  return (
    <header className="header">
        <img src={Logo} alt="logo" className="logo" />
            <h1>Taskify</h1>
        <a href="/" className="home-link">Home</a>
    </header>
  )
}