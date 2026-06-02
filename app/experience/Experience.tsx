import React from "react";

export default function Experience() {
  const timelineData = [
    {
      role: "Backend Engineer",
      company: "Compilo Startup, Egypt",
      date: "January 2025 - January 2026",
      description: "Developing scalable backend systems and real-time APIs.",
      type: "Experience"
    },
    {
      role: "PR",
      company: "GDG Modern Academy",
      date: "January 2024 - January 2025",
      description: "Public Relations and community management.",
      type: "Experience"
    },
    {
      role: "Software Engineering Intern",
      company: "ALX Software Engineering",
      date: "May 2023 - March 2024",
      description: "Intensive 12-month software engineering training program focusing on C, Python, JavaScript, and systems engineering.",
      type: "Internship"
    }
  ];

  return (
    <section className="experience-section" id="experience">
      <h2 data-aos="fade-up" style={{ textAlign: 'center', fontSize: '3rem', marginBottom: '50px' }}>
        Experience & Internships
      </h2>
      <div className="timeline">
        {timelineData.map((item, index) => (
          <div key={index} className="timeline-item" data-aos="fade-up" data-aos-delay={index * 100}>
            <div className="timeline-dot"></div>
            <div className="timeline-content">
              <span className="timeline-date">{item.date}</span>
              <h3>{item.role}</h3>
              <h4>{item.company} <span className="badge">{item.type}</span></h4>
              <p>{item.description}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
