import "./globals.css";

export const metadata = {
    title: "Nicolás A. González | Socio Ejecutivo IT Partner",
    description:
        "Portfolio de Nicolás Alejandro González - Socio ejecutivo en IT Partner. Experto en desarrollo de software, diseño UI/UX, visualización de datos, management y diseño organizacional. +18 años de experiencia liderando equipos y proyectos internacionales.",
    keywords:
        "desarrollador web, diseñador ui/ux, data visualization, d3.js, react, node.js, it partner, software developer, diseño organizacional, management, international business, organizational design, team leadership, buenos aires",
    authors: [{ name: "Nicolás Alejandro González" }],
    creator: "Nicolás Alejandro González",
    openGraph: {
        title: "Nicolás A. González | Socio Ejecutivo IT Partner",
        description:
            "Experto en desarrollo de software, management y diseño organizacional con +18 años de experiencia",
        type: "website",
        locale: "es_AR",
    },
};

export default function RootLayout({ children }) {
    return (
        <html lang="es">
            <head>
                <link
                    rel="stylesheet"
                    href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.4.0/css/all.min.css"
                />
            </head>
            <body>{children}</body>
        </html>
    );
}
