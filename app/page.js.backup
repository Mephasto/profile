"use client";

import { useState, useEffect } from "react";

export default function Home() {
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const [activeSection, setActiveSection] = useState("hero");

    useEffect(() => {
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
                    <div className="nav-brand">NAG</div>
                    <ul className={`nav-menu ${isMenuOpen ? "active" : ""}`}>
                        <li>
                            <a
                                onClick={() => scrollToSection("hero")}
                                className={
                                    activeSection === "hero" ? "active" : ""
                                }
                            >
                                Inicio
                            </a>
                        </li>
                        <li>
                            <a
                                onClick={() => scrollToSection("about")}
                                className={
                                    activeSection === "about" ? "active" : ""
                                }
                            >
                                Sobre Mí
                            </a>
                        </li>
                        <li>
                            <a
                                onClick={() => scrollToSection("skills")}
                                className={
                                    activeSection === "skills" ? "active" : ""
                                }
                            >
                                Habilidades
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
                                Experiencia
                            </a>
                        </li>
                        <li>
                            <a
                                onClick={() => scrollToSection("projects")}
                                className={
                                    activeSection === "projects" ? "active" : ""
                                }
                            >
                                Proyectos
                            </a>
                        </li>
                        <li>
                            <a
                                onClick={() => scrollToSection("contact")}
                                className={
                                    activeSection === "contact" ? "active" : ""
                                }
                            >
                                Contacto
                            </a>
                        </li>
                    </ul>
                    <div
                        className={`hamburger ${isMenuOpen ? "active" : ""}`}
                        onClick={() => setIsMenuOpen(!isMenuOpen)}
                    >
                        <span></span>
                        <span></span>
                        <span></span>
                    </div>
                </div>
            </nav>

            {/* Hero Section */}
            <section id="hero" className="hero">
                <div className="hero-content">
                    <h1 className="hero-title">
                        <span className="greeting">Hola, soy</span>
                        <span className="name">Nicolás Alejandro González</span>
                    </h1>
                    <p className="hero-subtitle">
                        <span className="typing-text">
                            Socio Ejecutivo en IT Partner | Desarrollador &
                            Diseñador
                        </span>
                    </p>
                    <p className="hero-description">
                        Mezclando pasiones por el IT, software y diseño de
                        organizaciones
                    </p>
                    <div className="hero-buttons">
                        <button
                            onClick={() => scrollToSection("contact")}
                            className="btn btn-primary"
                        >
                            Contactar
                        </button>
                        <button
                            onClick={() => scrollToSection("projects")}
                            className="btn btn-secondary"
                        >
                            Ver Proyectos
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
                    <h2 className="section-title">Sobre Mí</h2>
                    <div className="about-content">
                        <div className="about-text">
                            <p className="lead">
                                Socio ejecutivo en IT Partner, combinando mi
                                pasión por la tecnología, el desarrollo de
                                software y el diseño organizacional para crear
                                soluciones que realmente funcionen.
                            </p>
                            <p>
                                Con más de 18 años de experiencia en la
                                industria, he trabajado desde diseño web y
                                desarrollo frontend hasta la creación de
                                visualizaciones de datos complejas. Mi
                                trayectoria incluye empresas reconocidas como
                                Gameloft, Etermax y Socialmetrix, donde he
                                aplicado mi enfoque multidisciplinario que
                                combina diseño, desarrollo y gestión.
                            </p>
                            <p>
                                Mi formación en Arte Multimedial y Diseño me
                                permite abordar los desafíos tecnológicos con
                                una perspectiva creativa única. Creo en la
                                organización efectiva tanto de código como de
                                equipos humanos, buscando siempre la mejor
                                sinergia entre computadoras y personas.
                            </p>
                            <div className="about-stats">
                                <div className="stat-item">
                                    <span className="stat-number">18+</span>
                                    <span className="stat-label">
                                        Años de Experiencia
                                    </span>
                                </div>
                                <div className="stat-item">
                                    <span className="stat-number">50+</span>
                                    <span className="stat-label">
                                        Proyectos Completados
                                    </span>
                                </div>
                                <div className="stat-item">
                                    <span className="stat-number">12</span>
                                    <span className="stat-label">
                                        Años en IT Partner
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
                    <h2 className="section-title">Habilidades Técnicas</h2>
                    <div className="skills-grid">
                        {/* Frontend */}
                        <div className="skill-category">
                            <h3>
                                <i className="fas fa-code"></i> Frontend
                            </h3>
                            <div className="skill-items">
                                <SkillBar name="HTML5 & CSS3" progress={95} />
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
                                <i className="fas fa-server"></i> Backend
                            </h3>
                            <div className="skill-items">
                                <SkillBar name="Node.js" progress={85} />
                                <SkillBar name="AWS" progress={80} />
                                <SkillBar
                                    name="Prisma (Mongo, PostgreSQL)"
                                    progress={82}
                                />
                                <SkillBar name="Linux / DevOps" progress={75} />
                            </div>
                        </div>

                        {/* Tools & Others */}
                        <div className="skill-category">
                            <h3>
                                <i className="fas fa-tools"></i> Herramientas &
                                Desarrollo
                            </h3>
                            <div className="skill-items">
                                <SkillBar name="Git & GitHub" progress={88} />
                                <SkillBar
                                    name="Adobe Creative Suite"
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
            <section id="experience" className="experience">
                <div className="container">
                    <h2 className="section-title">Experiencia Profesional</h2>
                    <div className="timeline">
                        <TimelineItem
                            title="Socio Ejecutivo"
                            company="IT Partner"
                            date="Enero 2014 - Presente"
                            description={[
                                "Liderazgo estratégico y operativo de la empresa",
                                "Diseño y desarrollo de soluciones tecnológicas integrales",
                                "Gestión de equipos multidisciplinarios",
                                "Arquitectura de software y diseño organizacional",
                                "Consultoría en transformación digital",
                            ]}
                            technologies={[
                                "React",
                                "Node.js",
                                "AWS",
                                "Design Thinking",
                            ]}
                        />

                        <TimelineItem
                            title="Desarrollador de Software Freelance"
                            company="Independiente"
                            date="Mayo 2013 - Presente"
                            description={[
                                "Desarrollo de aplicaciones web y móviles para diversos clientes",
                                "Diseño de interfaces de usuario y experiencia",
                                "Consultoría técnica y arquitectura de software",
                                "Proyectos de desarrollo full stack",
                            ]}
                            technologies={[
                                "JavaScript",
                                "React",
                                "Node.js",
                                "UI/UX",
                            ]}
                        />

                        <TimelineItem
                            title="UI & Data Visualization"
                            company="Socialmetrix"
                            date="Abril 2012 - Junio 2013"
                            description={[
                                "Desarrollo de interfaces de usuario para análisis de datos",
                                "Creación de visualizaciones de datos complejas e interactivas",
                                "Diseño de dashboards y reportes analíticos",
                                "Trabajo con grandes volúmenes de datos en tiempo real",
                            ]}
                            technologies={[
                                "D3.js",
                                "JavaScript",
                                "Data Visualization",
                                "UI Design",
                            ]}
                        />

                        <TimelineItem
                            title="Diseñador Web"
                            company="Etermax S.A."
                            date="Octubre 2011 - Mayo 2012"
                            description={[
                                "Diseño de interfaces web y mobile apps",
                                "Creación de experiencias de usuario para aplicaciones móviles",
                                "Diseño UI para juegos y aplicaciones interactivas",
                                "Colaboración con equipos de desarrollo y producto",
                            ]}
                            technologies={[
                                "HTML/CSS",
                                "JavaScript",
                                "Mobile UI",
                                "Photoshop",
                            ]}
                        />

                        <TimelineItem
                            title="Diseñador Web"
                            company="Gameloft"
                            date="Octubre 2009 - Octubre 2011"
                            description={[
                                "Diseño de micrositios para iPhone y PC dedicados a juegos",
                                "Colaboración con el portal principal de Gameloft",
                                "Diseño de shops y sitios promocionales",
                                "Creación de assets digitales para múltiples plataformas",
                            ]}
                            technologies={[
                                "HTML/CSS",
                                "JavaScript",
                                "Flash",
                                "Adobe Creative Suite",
                            ]}
                        />

                        <TimelineItem
                            title="Diseñador Web y Programador Freelance"
                            company="Independiente"
                            date="Enero 2007 - Octubre 2009"
                            description={[
                                "Trabajos independientes de diseño web y programación",
                                "Desarrollo de sitios web para pequeñas y medianas empresas",
                                "Diseño de identidad digital y branding online",
                            ]}
                            technologies={[
                                "HTML/CSS",
                                "JavaScript",
                                "PHP",
                                "MySQL",
                            ]}
                        />

                        <TimelineItem
                            title="Diseñador Web, Programador"
                            company="Ideas 2"
                            date="Enero 2004 - Diciembre 2007"
                            description={[
                                "Diseño de sitios web para PyMEs argentinas y españolas",
                                "Desarrollo de módulo administrador de contenido (CMS)",
                                "Programación y diseño de soluciones web personalizadas",
                            ]}
                            technologies={[
                                "HTML/CSS",
                                "JavaScript",
                                "PHP",
                                "CMS",
                            ]}
                        />
                    </div>
                </div>
            </section>

            {/* Projects Section */}
            <section id="projects" className="projects">
                <div className="container">
                    <h2 className="section-title">Proyectos Destacados</h2>
                    <div className="projects-grid">
                        <ProjectCard
                            icon="fa-chart-line"
                            title="Data Visualization Platform"
                            description="Plataforma de visualización de datos para análisis de social media en Socialmetrix. Dashboards interactivos con métricas en tiempo real."
                            technologies={[
                                "D3.js",
                                "JavaScript",
                                "Data Viz",
                                "UI Design",
                            ]}
                        />

                        <ProjectCard
                            icon="fa-gamepad"
                            title="Gaming Microsites"
                            description="Diseño y desarrollo de micrositios promocionales para juegos de Gameloft y Etermax. Experiencias interactivas multiplataforma."
                            technologies={[
                                "HTML/CSS",
                                "JavaScript",
                                "Responsive Design",
                                "Adobe CS",
                            ]}
                        />

                        <ProjectCard
                            icon="fa-building"
                            title="IT Partner Solutions"
                            description="Soluciones tecnológicas integrales para empresas, desde desarrollo de software hasta diseño organizacional y transformación digital."
                            technologies={[
                                "React",
                                "Node.js",
                                "Cloud",
                                "Consulting",
                            ]}
                        />

                        <ProjectCard
                            icon="fa-mobile-alt"
                            title="UI/UX Design Projects"
                            description="Diseño de interfaces para aplicaciones web y móviles. Portfolio de proyectos para startups y empresas establecidas en Argentina y España."
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
                    <h2 className="section-title">Contacto</h2>
                    <p className="contact-subtitle">
                        ¿Tienes un proyecto en mente? ¡Hablemos!
                    </p>

                    <div className="contact-content">
                        <div className="contact-info">
                            <div className="contact-item">
                                <i className="fas fa-envelope"></i>
                                <div>
                                    <h4>Email</h4>
                                    <a href="mailto:nicdakka@gmail.com">
                                        nicdakka@gmail.com
                                    </a>
                                </div>
                            </div>
                            <div className="contact-item">
                                <i className="fas fa-map-marker-alt"></i>
                                <div>
                                    <h4>Ubicación</h4>
                                    <p>Buenos Aires, Argentina</p>
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

                        <ContactForm />
                    </div>
                </div>
            </section>

            {/* Footer */}
            <footer className="footer">
                <div className="container">
                    <p>
                        &copy; 2024 Nicolás Alejandro González. Todos los
                        derechos reservados.
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
function ProjectCard({ icon, title, description, technologies }) {
    return (
        <div className="project-card">
            <div className="project-image">
                <i className={`fas ${icon}`}></i>
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
            </div>
        </div>
    );
}

// Componente ContactForm
function ContactForm() {
    const [formData, setFormData] = useState({
        name: "",
        email: "",
        subject: "",
        message: "",
    });

    const handleSubmit = (e) => {
        e.preventDefault();
        // Aquí puedes agregar la lógica para enviar el formulario
        console.log("Formulario enviado:", formData);
        alert(
            "¡Mensaje enviado! (Esta es una demo, configura tu backend para enviar emails reales)",
        );
    };

    const handleChange = (e) => {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value,
        });
    };

    return (
        <form className="contact-form" onSubmit={handleSubmit}>
            <div className="form-group">
                <label htmlFor="name">Nombre</label>
                <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                />
            </div>
            <div className="form-group">
                <label htmlFor="email">Email</label>
                <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                />
            </div>
            <div className="form-group">
                <label htmlFor="subject">Asunto</label>
                <input
                    type="text"
                    id="subject"
                    name="subject"
                    value={formData.subject}
                    onChange={handleChange}
                    required
                />
            </div>
            <div className="form-group">
                <label htmlFor="message">Mensaje</label>
                <textarea
                    id="message"
                    name="message"
                    rows="5"
                    value={formData.message}
                    onChange={handleChange}
                    required
                ></textarea>
            </div>
            <button type="submit" className="btn btn-primary">
                Enviar Mensaje
            </button>
        </form>
    );
}
