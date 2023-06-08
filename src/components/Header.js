import logo from "../img/logo.svg";

function Header() {
  return (
    <header className="header">
      <a href="https://www.SoftFormance.com">
        <img src={logo} className="logo" alt="logo" />
      </a>
    </header>
  );
}

export default Header;
