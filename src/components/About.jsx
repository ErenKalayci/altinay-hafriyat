import "../css/About.css";

function About() {
  return (
    <section className="about" id="about">
      <div className="container about-container">
        <div className="about-image">
          <img
            src="https://images.unsplash.com/photo-1513828583688-c52646db42da?q=80&w=2070&auto=format&fit=crop"
            alt="Hafriyat çalışması"
          />
        </div>

        <div className="about-content">
          <h2>Hakkımızda</h2>

          <p>
            Altınay Hafriyat olarak yıllardır hafriyat, kazı, yıkım ve altyapı
            alanlarında profesyonel hizmet sunuyoruz.
          </p>

          <p>
            Güçlü makine parkurumuz ve deneyimli ekibimizle projeleri zamanında
            ve güvenli şekilde tamamlıyoruz.
          </p>

          <button>Daha Fazla Bilgi</button>
        </div>
      </div>
    </section>
  );
}

export default About;
