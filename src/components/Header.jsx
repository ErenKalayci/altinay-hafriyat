import "../css/Header.css";
import logo from "../assets/logo1.png";

function Header() {
  return (
    <header className="header">
      <div className="container header-container">
        <div className="logo-area">
          <img src={logo} alt="Altınay Logo" />

          <div className="logo-text">
            <h2>Altınay</h2>
            <span>Hafriyat Nakliyat</span>
          </div>
        </div>

        <nav className="nav">
          <a href="#home">Ana Sayfa</a>
          <a href="#services">Hizmetler</a>
          <a href="#about">Hakkımızda</a>
          <a href="#proje">Projeler</a>
          <a href="#contact">İletişim</a>
        </nav>
      </div>
    </header>
  );
}

export default Header;
