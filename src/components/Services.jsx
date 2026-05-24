import "../css/Services.css";

function Services() {
  const services = [
    {
      title: "Hafriyat",
      text: "Profesyonel ekipmanlarla güvenli hafriyat çalışmaları.",
    },
    {
      title: "Yıkım",
      text: "Kontrollü ve güvenilir bina yıkım hizmetleri.",
    },
    {
      title: "Altyapı",
      text: "Kanalizasyon, drenaj ve altyapı çözümleri.",
    },
  ];

  return (
    <section className="services" id="services">
      <div className="container">
        <div className="section-title">
          <h2>Hizmetlerimiz</h2>
          <p>Profesyonel çözümler sunuyoruz.</p>
        </div>

        <div className="services-grid">
          {services.map((service, index) => (
            <div className="service-card" key={index}>
              <h3>{service.title}</h3>
              <p>{service.text}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Services;
