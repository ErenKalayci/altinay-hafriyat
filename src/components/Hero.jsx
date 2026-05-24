import "../css/Hero.css";

function Hero() {
  return (
    <section className="hero" id="home">
      <div className="container hero-content">
        <h1>
          Güçlü Ekipman <br />
          Profesyonel Hizmet
        </h1>

        <p>
          Hafriyat, yıkım, kazı ve altyapı çalışmalarında güvenilir çözümler
          sunuyoruz.
        </p>
        <a href="#contact">
          <button>Hemen İletişime Geç</button>
        </a>
      </div>
    </section>
  );
}

export default Hero;
