import "../css/Projects.css";

function Projects() {
  const projects = [
    {
      image:
        "https://images.unsplash.com/photo-1504307651254-35680f356dfd?q=80&w=1974&auto=format&fit=crop",
      title: "Yol Çalışması",
    },
    {
      image:
        "https://images.unsplash.com/photo-1541888946425-d81bb19240f5?q=80&w=2070&auto=format&fit=crop",
      title: "Bina Yıkım Projesi",
    },
    {
      image:
        "https://images.unsplash.com/photo-1517048676732-d65bc937f952?q=80&w=2070&auto=format&fit=crop",
      title: "Altyapı Kazı Çalışması",
    },
  ];

  return (
    <section className="projects">
      <div className="container">
        <div className="section-title">
          <h2>Projelerimiz</h2>
          <p>Tamamladığımız bazı çalışmalar.</p>
        </div>

        <div className="projects-grid">
          {projects.map((project, index) => (
            <div className="project-card" key={index}>
              <img src={project.image} alt={project.title} />

              <div className="project-overlay">
                <h3>{project.title}</h3>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Projects;
