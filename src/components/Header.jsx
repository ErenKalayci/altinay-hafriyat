import "../css/Header.css";

function Header() {
  return (
    <header className="header">
      <div className="container header-container">
        <div className="logo">
          <span>Altınay</span> Hafriyat
        </div>

        <nav className="nav">
          <a href="#home">Ana Sayfa</a>
          <a href="#services">Hizmetler</a>
          <a href="#about">Hakkımızda</a>
          <a href="#contact">İletişim</a>
        </nav>
      </div>
    </header>
  );
}

export default Header;
