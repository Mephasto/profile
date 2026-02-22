"use client";

import { useState, useEffect } from "react";
import { translations } from "./translations";

export default function Home() {
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const [activeSection, setActiveSection] = useState("hero");
    const [isDarkMode, setIsDarkMode] = useState(false);
    const [language, setLanguage] = useState("en");

    const handleExportPDF = () => {
        window.print();
    };

    useEffect(() => {
        // Check localStorage for dark mode preference
        const savedMode = localStorage.getItem("darkMode");
        if (savedMode === "true") {
            setIsDarkMode(true);
            document.documentElement.classList.add("dark-mode");
        }

        // Check localStorage for language preference
        const savedLanguage = localStorage.getItem("language");
        if (
            savedLanguage &&
            (savedLanguage === "en" || savedLanguage === "es")
        ) {
            setLanguage(savedLanguage);
        }

        const handleScroll = () => {
            const sections = [
                "hero",
                "about",
                "skills",
                "experience",
                "projects",
                "contact",
            ];
            const current = sections.find((section) => {
                const element = document.getElementById(section);
                if (element) {
                    const rect = element.getBoundingClientRect();
                    return rect.top <= 100 && rect.bottom >= 100;
                }
                return false;
            });
            if (current) setActiveSection(current);
        };

        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    const toggleDarkMode = () => {
        setIsDarkMode(!isDarkMode);
        if (!isDarkMode) {
            document.documentElement.classList.add("dark-mode");
            localStorage.setItem("darkMode", "true");
        } else {
            document.documentElement.classList.remove("dark-mode");
            localStorage.setItem("darkMode", "false");
        }
    };

    const toggleLanguage = () => {
        const newLanguage = language === "en" ? "es" : "en";
        setLanguage(newLanguage);
        localStorage.setItem("language", newLanguage);
    };

    const t = translations[language];

    const scrollToSection = (sectionId) => {
        const element = document.getElementById(sectionId);
        if (element) {
            element.scrollIntoView({ behavior: "smooth" });
        }
        setIsMenuOpen(false);
    };

    return (
        <>
            {/* Navigation */}
            <nav className="navbar">
                <div className="container">
                    <div className="nav-brand">{t.nav.brand}</div>
                    <ul className={`nav-menu ${isMenuOpen ? "active" : ""}`}>
                        <li>
                            <a
                                onClick={() => scrollToSection("hero")}
                                className={
                                    activeSection === "hero" ? "active" : ""
                                }
                            >
                                {t.nav.home}
                            </a>
                        </li>
                        <li>
                            <a
                                onClick={() => scrollToSection("about")}
                                className={
                                    activeSection === "about" ? "active" : ""
                                }
                            >
                                {t.nav.about}
                            </a>
                        </li>
                        <li>
                            <a
                                onClick={() => scrollToSection("skills")}
                                className={
                                    activeSection === "skills" ? "active" : ""
                                }
                            >
                                {t.nav.skills}
                            </a>
                        </li>
                        <li>
                            <a
                                onClick={() => scrollToSection("experience")}
                                className={
                                    activeSection === "experience"
                                        ? "active"
                                        : ""
                                }
                            >
                                {t.nav.experience}
                            </a>
                        </li>
                        <li>
                            <a
                                onClick={() => scrollToSection("projects")}
                                className={
                                    activeSection === "projects" ? "active" : ""
                                }
                            >
                                {t.nav.projects}
                            </a>
                        </li>
                        <li>
                            <a
                                onClick={() => scrollToSection("contact")}
                                className={
                                    activeSection === "contact" ? "active" : ""
                                }
                            >
                                {t.nav.contact}
                            </a>
                        </li>
                    </ul>
                    <div className="nav-actions">
                        <button
                            className="language-toggle"
                            onClick={toggleLanguage}
                            aria-label="Toggle language"
                        >
                            {language === "en" ? "ES" : "EN"}
                        </button>
                        <button
                            className="theme-toggle"
                            onClick={toggleDarkMode}
                            aria-label="Toggle dark mode"
                        >
                            <i
                                className={`fas ${isDarkMode ? "fa-sun" : "fa-moon"}`}
                            ></i>
                        </button>
                        <div
                            className={`hamburger ${isMenuOpen ? "active" : ""}`}
                            onClick={() => setIsMenuOpen(!isMenuOpen)}
                        >
                            <span></span>
                            <span></span>
                            <span></span>
                        </div>
                    </div>
                </div>
            </nav>

            {/* Hero Section */}
            <section id="hero" className="hero">
                <div className="hero-content">
                    <h1 className="hero-title">
                        <span className="greeting">{t.hero.greeting}</span>
                        <span className="name">{t.hero.name}</span>
                    </h1>
                    <p className="hero-subtitle">
                        <span className="typing-text">{t.hero.subtitle}</span>
                    </p>
                    <p className="hero-description">{t.hero.description}</p>
                    <div className="hero-buttons">
                        <button
                            onClick={() => scrollToSection("contact")}
                            className="btn btn-primary"
                        >
                            {t.hero.contactButton}
                        </button>
                        <button
                            onClick={() => scrollToSection("projects")}
                            className="btn btn-secondary"
                        >
                            {t.hero.projectsButton}
                        </button>
                        <button
                            onClick={handleExportPDF}
                            className="btn btn-secondary"
                            style={{
                                display: "flex",
                                alignItems: "center",
                                gap: "0.5rem",
                            }}
                        >
                            <i className="fas fa-file-pdf"></i>
                            {t.hero.downloadCV || "Download CV"}
                        </button>
                    </div>
                    <div className="social-links">
                        <a
                            href="https://www.linkedin.com/in/nicolas-alejandro-gonzalez-3b386510/"
                            target="_blank"
                            rel="noopener noreferrer"
                            aria-label="LinkedIn"
                        >
                            <i className="fab fa-linkedin"></i>
                        </a>
                        <a
                            href="https://github.com/mephasto"
                            target="_blank"
                            rel="noopener noreferrer"
                            aria-label="GitHub"
                        >
                            <i className="fab fa-github"></i>
                        </a>
                        <a href="mailto:nicdakka@gmail.com" aria-label="Email">
                            <i className="fas fa-envelope"></i>
                        </a>
                    </div>
                </div>
                <div
                    className="scroll-indicator"
                    onClick={() => scrollToSection("about")}
                >
                    <span></span>
                </div>
            </section>

            {/* About Section */}
            <section id="about" className="about">
                <div className="container">
                    <h2 className="section-title">{t.about.title}</h2>
                    <div className="about-content">
                        <div className="about-text">
                            <p className="lead">{t.about.lead}</p>
                            <p>{t.about.paragraph1}</p>
                            <p>{t.about.paragraph2}</p>
                            <div className="about-stats">
                                <div className="stat-item">
                                    <span className="stat-number">18+</span>
                                    <span className="stat-label">
                                        {t.about.stats.experience}
                                    </span>
                                </div>
                                <div className="stat-item">
                                    <span className="stat-number">50+</span>
                                    <span className="stat-label">
                                        {t.about.stats.projects}
                                    </span>
                                </div>
                                <div className="stat-item">
                                    <span className="stat-number">30+</span>
                                    <span className="stat-label">
                                        {t.about.stats.clients}
                                    </span>
                                </div>
                            </div>
                        </div>
                        <div className="about-image">
                            <img
                                src="/images/photo.jpeg"
                                alt="Nicolás Alejandro González"
                                style={{
                                    width: "250px",
                                    height: "250px",
                                    borderRadius: "50%",
                                    objectFit: "cover",
                                    boxShadow:
                                        "0 20px 60px rgba(59, 130, 246, 0.3)",
                                }}
                            />
                        </div>
                    </div>
                </div>
            </section>

            {/* Skills Section */}
            <section id="skills" className="skills">
                <div className="container">
                    <h2 className="section-title">{t.skills.title}</h2>
                    <div className="skills-grid">
                        {/* Frontend */}
                        <div className="skill-category">
                            <h3>
                                <i className="fas fa-code"></i>{" "}
                                {t.skills.categories.frontend}
                            </h3>
                            <div className="skill-items">
                                <SkillBar name="Next.js" progress={95} />
                                <SkillBar
                                    name="JavaScript (ES6+)"
                                    progress={90}
                                />
                                <SkillBar name="React.js" progress={85} />
                                <SkillBar
                                    name="D3.js / Data Viz"
                                    progress={88}
                                />
                                <SkillBar name="UI/UX Design" progress={90} />
                            </div>
                        </div>

                        {/* Backend */}
                        <div className="skill-category">
                            <h3>
                                <i className="fas fa-server"></i>{" "}
                                {t.skills.categories.backend}
                            </h3>
                            <div className="skill-items">
                                <SkillBar name="TypeScript" progress={90} />
                                <SkillBar name="Node.js" progress={85} />
                                <SkillBar name="AWS" progress={80} />
                                <SkillBar
                                    name="Prisma (Mongo, PostgreSQL)"
                                    progress={82}
                                />
                                <SkillBar name="Linux / DevOps" progress={75} />
                            </div>
                        </div>

                        {/* Design */}
                        <div className="skill-category">
                            <h3>
                                <i className="fas fa-palette"></i>{" "}
                                {t.skills.categories.design}
                            </h3>
                            <div className="skill-items">
                                <SkillBar name="Git & GitHub" progress={88} />
                                <SkillBar
                                    name="Vibe Coding Enthusiast"
                                    progress={85}
                                />
                                <SkillBar name="Next.js" progress={85} />
                                <SkillBar
                                    name="Responsive Design"
                                    progress={95}
                                />
                            </div>
                        </div>

                        {/* Management & Business */}
                        <div className="skill-category">
                            <h3>
                                <i className="fas fa-briefcase"></i> Management
                                & Business
                            </h3>
                            <div className="skill-items">
                                <SkillBar
                                    name="Team Leadership"
                                    progress={92}
                                />
                                <SkillBar
                                    name="Organizational Design"
                                    progress={90}
                                />
                                <SkillBar name="Management" progress={88} />
                                <SkillBar
                                    name="International Business"
                                    progress={85}
                                />
                                <SkillBar name="Agile / Scrum" progress={85} />
                            </div>
                        </div>

                        {/* Languages */}
                        <div className="skill-category">
                            <h3>
                                <i className="fas fa-language"></i> Idiomas
                            </h3>
                            <div className="skill-items">
                                <SkillBar name="Español" progress={100} />
                                <SkillBar name="Inglés" progress={85} />
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Experience Section */}
            <section id="experience" className="experience page-break-before">
                <div className="container">
                    <h2 className="section-title">{t.experience.title}</h2>
                    <div className="timeline">
                        <TimelineItem
                            title={t.experience.itpartner.title}
                            company={t.experience.itpartner.company}
                            date={t.experience.itpartner.date}
                            description={t.experience.itpartner.description}
                            technologies={t.experience.itpartner.technologies}
                        />

                        <TimelineItem
                            title={t.experience.freelance.title}
                            company={t.experience.freelance.company}
                            date={t.experience.freelance.date}
                            description={t.experience.freelance.description}
                            technologies={t.experience.freelance.technologies}
                        />

                        <TimelineItem
                            title={t.experience.socialmetrix.title}
                            company={t.experience.socialmetrix.company}
                            date={t.experience.socialmetrix.date}
                            description={t.experience.socialmetrix.description}
                            technologies={
                                t.experience.socialmetrix.technologies
                            }
                        />

                        <TimelineItem
                            title={t.experience.etermax.title}
                            company={t.experience.etermax.company}
                            date={t.experience.etermax.date}
                            description={t.experience.etermax.description}
                            technologies={t.experience.etermax.technologies}
                        />

                        <TimelineItem
                            title={t.experience.gameloft.title}
                            company={t.experience.gameloft.company}
                            date={t.experience.gameloft.date}
                            description={t.experience.gameloft.description}
                            technologies={t.experience.gameloft.technologies}
                        />

                        <TimelineItem
                            title={t.experience.ideas2.title}
                            company={t.experience.ideas2.company}
                            date={t.experience.ideas2.date}
                            description={t.experience.ideas2.description}
                            technologies={t.experience.ideas2.technologies}
                        />
                    </div>
                </div>
            </section>

            {/* Projects Section */}
            <section id="projects" className="projects page-break-before">
                <div className="container">
                    <h2 className="section-title">{t.projects.title}</h2>
                    <div className="projects-grid">
                        <ProjectCard
                            image="/images/pfm.png"
                            title={t.projects.paperforge.title}
                            description={t.projects.paperforge.description}
                            technologies={[
                                "Next.js 15",
                                "TypeScript",
                                "PostgreSQL",
                                "Prisma",
                                "JWT Auth",
                                "AWS S3",
                                "Tailwind CSS",
                                "bcrypt",
                            ]}
                            link="https://www.paperforgeminis.com"
                            linkText={t.projects.viewSite}
                        />

                        <ProjectCard
                            image="/images/itpartner.png"
                            title={t.projects.itpartnerProj.title}
                            description={t.projects.itpartnerProj.description}
                            technologies={[
                                "React",
                                "Node.js",
                                "Cloud",
                                "Consulting",
                            ]}
                        />

                        <ProjectCard
                            image="/images/assethub.png"
                            title={t.projects.assetManagement.title}
                            description={t.projects.assetManagement.description}
                            technologies={[
                                "Next.js 14",
                                "TypeScript",
                                "PostgreSQL",
                                "Prisma",
                                "NextAuth",
                                "Tailwind CSS",
                            ]}
                            link="https://asset-management-woad.vercel.app/"
                            linkText={t.projects.viewSite}
                        />

                        <ProjectCard
                            image="/images/socialmetrix.png"
                            title={t.projects.dataViz.title}
                            description={t.projects.dataViz.description}
                            technologies={[
                                "D3.js",
                                "JavaScript",
                                "Data Viz",
                                "UI Design",
                            ]}
                        />

                        <ProjectCard
                            icon="fa-gamepad"
                            title={t.projects.gaming.title}
                            description={t.projects.gaming.description}
                            technologies={[
                                "HTML/CSS",
                                "JavaScript",
                                "Responsive Design",
                                "Adobe CS",
                            ]}
                        />

                        <ProjectCard
                            icon="fa-mobile-alt"
                            title={t.projects.uiux.title}
                            description={t.projects.uiux.description}
                            technologies={[
                                "UI/UX",
                                "Photoshop",
                                "Illustrator",
                                "Prototyping",
                            ]}
                        />
                    </div>
                </div>
            </section>

            {/* Contact Section */}
            <section id="contact" className="contact">
                <div className="container">
                    <h2 className="section-title">{t.contact.title}</h2>
                    <p className="contact-subtitle">{t.contact.subtitle}</p>

                    <div className="contact-content">
                        <div className="contact-info">
                            <div className="contact-item">
                                <i className="fas fa-envelope"></i>
                                <div>
                                    <h4>{t.contact.email}</h4>
                                    <a href="mailto:nicdakka@gmail.com">
                                        nicdakka@gmail.com
                                    </a>
                                </div>
                            </div>
                            <div className="contact-item">
                                <i className="fas fa-map-marker-alt"></i>
                                <div>
                                    <h4>{t.contact.location}</h4>
                                    <p>{t.contact.locationValue}</p>
                                </div>
                            </div>
                            <div className="contact-item">
                                <i className="fab fa-linkedin"></i>
                                <div>
                                    <h4>LinkedIn</h4>
                                    <a
                                        href="https://www.linkedin.com/in/nicolas-alejandro-gonzalez-3b386510/"
                                        target="_blank"
                                        rel="noopener noreferrer"
                                    >
                                        Ver Perfil
                                    </a>
                                </div>
                            </div>
                        </div>

                        <ContactForm t={t.contact.form} />
                    </div>
                </div>
            </section>

            {/* Footer */}
            <footer className="footer">
                <div className="container">
                    <p>
                        {new Date().getFullYear()} Nicolás Alejandro González.
                        Todos los derechos reservados.
                    </p>
                    <div className="footer-links">
                        <a
                            href="https://www.linkedin.com/in/nicolas-alejandro-gonzalez-3b386510/"
                            target="_blank"
                            rel="noopener noreferrer"
                        >
                            <i className="fab fa-linkedin"></i>
                        </a>
                        <a
                            href="https://github.com/mephasto"
                            target="_blank"
                            rel="noopener noreferrer"
                        >
                            <i className="fab fa-github"></i>
                        </a>
                        <a href="mailto:nicdakka@gmail.com">
                            <i className="fas fa-envelope"></i>
                        </a>
                    </div>
                </div>
            </footer>
        </>
    );
}

// Componente SkillBar
function SkillBar({ name, progress }) {
    const [width, setWidth] = useState(0);

    useEffect(() => {
        const timer = setTimeout(() => setWidth(progress), 100);
        return () => clearTimeout(timer);
    }, [progress]);

    return (
        <div className="skill-item">
            <span className="skill-name">{name}</span>
            <div className="skill-bar">
                <div
                    className="skill-progress"
                    style={{ width: `${width}%` }}
                ></div>
            </div>
        </div>
    );
}

// Componente TimelineItem
function TimelineItem({ title, company, date, description, technologies }) {
    return (
        <div className="timeline-item">
            <div className="timeline-marker"></div>
            <div className="timeline-content">
                <h3>{title}</h3>
                <h4>{company}</h4>
                <span className="timeline-date">{date}</span>
                <ul>
                    {description.map((item, index) => (
                        <li key={index}>{item}</li>
                    ))}
                </ul>
                <div className="tech-tags">
                    {technologies.map((tech, index) => (
                        <span key={index} className="tag">
                            {tech}
                        </span>
                    ))}
                </div>
            </div>
        </div>
    );
}

// Componente ProjectCard
function ProjectCard({
    icon,
    title,
    description,
    technologies,
    link,
    image,
    linkText,
}) {
    return (
        <div className="project-card">
            <div
                className="project-image"
                style={
                    image
                        ? {
                              backgroundImage: `url(${image})`,
                              backgroundSize: "cover",
                              backgroundPosition: "center",
                          }
                        : {}
                }
            >
                {!image && <i className={`fas ${icon}`}></i>}
            </div>
            <div className="project-content">
                <h3>{title}</h3>
                <p>{description}</p>
                <div className="tech-tags">
                    {technologies.map((tech, index) => (
                        <span key={index} className="tag">
                            {tech}
                        </span>
                    ))}
                </div>
                {link && (
                    <div className="project-links">
                        <a
                            href={link}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="project-link"
                        >
                            <i className="fas fa-external-link-alt"></i>{" "}
                            {linkText || "View Site"}
                        </a>
                    </div>
                )}
            </div>
        </div>
    );
}

// Componente ContactForm
function ContactForm({ t }) {
    const [formData, setFormData] = useState({
        name: "",
        email: "",
        subject: "",
        message: "",
    });
    const [isSubmitting, setIsSubmitting] = useState(false);
    const [isSuccess, setIsSuccess] = useState(false);

    const handleSubmit = async (e) => {
        e.preventDefault();
        setIsSubmitting(true);

        // Simular envío del formulario
        await new Promise((resolve) => setTimeout(resolve, 1500));

        console.log("Formulario enviado:", formData);

        setIsSubmitting(false);
        setIsSuccess(true);

        // Limpiar el formulario
        setFormData({
            name: "",
            email: "",
            subject: "",
            message: "",
        });

        // Ocultar mensaje de éxito después de 5 segundos
        setTimeout(() => {
            setIsSuccess(false);
        }, 5000);
    };

    const handleChange = (e) => {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value,
        });
    };

    return (
        <div style={{ position: "relative" }}>
            {isSuccess && (
                <div
                    style={{
                        position: "absolute",
                        top: "-60px",
                        left: "0",
                        right: "0",
                        backgroundColor: "var(--geist-success)",
                        color: "white",
                        padding: "1rem",
                        borderRadius: "8px",
                        display: "flex",
                        alignItems: "center",
                        gap: "0.5rem",
                        animation: "slideDown 0.3s ease-out",
                        boxShadow: "0 4px 12px rgba(0, 112, 243, 0.3)",
                    }}
                >
                    <i
                        className="fas fa-check-circle"
                        style={{ fontSize: "1.25rem" }}
                    ></i>
                    <span style={{ fontWeight: "500" }}>
                        {t.successMessage ||
                            "Message sent successfully! I'll get back to you soon."}
                    </span>
                </div>
            )}
            <form className="contact-form" onSubmit={handleSubmit}>
                <div className="form-group">
                    <label htmlFor="name">{t.name}</label>
                    <input
                        type="text"
                        id="name"
                        name="name"
                        value={formData.name}
                        onChange={handleChange}
                        disabled={isSubmitting}
                        required
                    />
                </div>
                <div className="form-group">
                    <label htmlFor="email">{t.email}</label>
                    <input
                        type="email"
                        id="email"
                        name="email"
                        value={formData.email}
                        onChange={handleChange}
                        disabled={isSubmitting}
                        required
                        pattern="[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,}$"
                        title="Please enter a valid email address"
                    />
                </div>
                <div className="form-group">
                    <label htmlFor="subject">{t.subject}</label>
                    <input
                        type="text"
                        id="subject"
                        name="subject"
                        value={formData.subject}
                        onChange={handleChange}
                        disabled={isSubmitting}
                        required
                    />
                </div>
                <div className="form-group">
                    <label htmlFor="message">{t.message}</label>
                    <textarea
                        id="message"
                        name="message"
                        rows="5"
                        value={formData.message}
                        onChange={handleChange}
                        disabled={isSubmitting}
                        required
                    ></textarea>
                </div>
                <button
                    type="submit"
                    className="btn btn-primary"
                    disabled={isSubmitting}
                    style={{
                        opacity: isSubmitting ? 0.7 : 1,
                        cursor: isSubmitting ? "not-allowed" : "pointer",
                        display: "flex",
                        alignItems: "center",
                        gap: "0.5rem",
                        justifyContent: "center",
                    }}
                >
                    {isSubmitting ? (
                        <>
                            <i
                                className="fas fa-spinner"
                                style={{
                                    animation: "spin 1s linear infinite",
                                }}
                            ></i>
                            {t.sending || "Sending..."}
                        </>
                    ) : (
                        <>
                            <i className="fas fa-paper-plane"></i>
                            {t.send}
                        </>
                    )}
                </button>
            </form>
        </div>
    );
}
