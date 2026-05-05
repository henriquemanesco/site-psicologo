import "./globals.css";

export const metadata = {
  title: "Henrique Manesco | Psicólogo em São Paulo – Vila Prudente",
  description:
    "Psicoterapia para adultos em São Paulo (Vila Prudente) e online. Atendimento clínico com foco em afetos, conflitos e autoconhecimento.",

  keywords: [
    "psicólogo São Paulo",
    "psicólogo Vila Prudente",
    "psicoterapia São Paulo",
    "psicólogo zona leste SP",
    "psicoterapia online"
  ],

  authors: [{ name: "Henrique Manesco" }],

  openGraph: {
    title: "Henrique Manesco | Psicólogo em São Paulo",
    description:
      "Atendimento psicológico em São Paulo (Vila Prudente) e online.",
    url: "https://seusite.com",
    siteName: "Henrique Manesco Psicólogo",
    locale: "pt_BR",
    type: "website",
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="pt-BR">
      <body>{children}</body>
    </html>
  );
}