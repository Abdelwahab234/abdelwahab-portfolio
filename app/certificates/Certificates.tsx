import React from "react";

export default function Certificates() {
  const certificates = [
    {
      title: "Mastering Nodejs, TypeScript, PostgreSQL, MVC, Express.js, and Nest.js",
      issuer: "Udemy",
      link: "https://www.udemy.com/certificate/UC-0735c629-a1bf-4107-92c0-300ce7e4864b/",
      delay: 100
    },
    {
      title: "CS50: Introduction to Computer Science",
      issuer: "Harvard University",
      link: "https://certificates.cs50.io/8878513d-b173-44a8-a988-8514ffddff26.pdf?size=letter",
      delay: 300
    },
    {
      title: "Virtual Internship Program in Cyber Security",
      issuer: "DecodeLabs",
      link: "https://drive.google.com/file/d/1CZysuW8bNm04WJVbhMoG4FSqP6l6bc9Y/view?usp=drivesdk",
      delay: 500
    }
  ];

  return (
    <section className="certificates-section" id="certificates">
      <h2 data-aos="fade-up" style={{ textAlign: 'center', fontSize: '3rem', marginBottom: '50px' }}>
        Certificates
      </h2>
      <div className="certs-grid">
        {certificates.map((cert, index) => (
          <a key={index} href={cert.link} target="_blank" rel="noreferrer" className="cert-card" data-aos="fade-up" data-aos-delay={cert.delay}>
            <div className="cert-content">
              <h3>{cert.title}</h3>
              <p>Issued by: <strong>{cert.issuer}</strong></p>
              <span className="view-btn">View Certificate ↗</span>
            </div>
          </a>
        ))}
      </div>
    </section>
  );
}
