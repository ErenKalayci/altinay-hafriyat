import "../css/Contact.css";

function Contact() {
  return (
    <section className="contact" id="contact">
      <div className="container contact-container">
        <div className="contact-info">
          <h2>İletişime Geçin</h2>
          <p>
            Hafriyat, yıkım ve altyapı işleriniz için bizimle iletişime
            geçebilirsiniz.
          </p>

          <div className="contact-item">
            <strong>Telefon:</strong>
            <span>+90 532 653 17 65</span>
          </div>

          <div className="contact-item">
            <strong>E-posta:</strong>
            <span>info@altinayhafriyat.com</span>
          </div>

          <div className="contact-item">
            <strong>Adres:</strong>
            <span>
              İstanbul Caddesi, Kınalı Kavşağı, Mezbaha Sokak, No:23
              Silivri/İstanbul
            </span>
          </div>
        </div>

        <form className="contact-form">
          <input type="text" placeholder="Adınız Soyadınız" />
          <input type="email" placeholder="E-posta Adresiniz" />
          <textarea placeholder="Mesajınız"></textarea>
          <button type="button">Mesaj Gönder</button>
        </form>
      </div>
    </section>
  );
}

export default Contact;
