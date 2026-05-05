"use client";

import Image from "next/image";
import { useState, useEffect } from "react";

export default function Home() {

const imagens = [
{ src: "/abordagem1.jpg", position: "center 40%" },
{ src: "/abordagem2.jpg", position: "center" },
{ src: "/abordagem3.jpg", position: "center 20%" },
{ src: "/abordagem4.jpg", position: "center 30%" }
];

const [index, setIndex] = useState(0);
const [fade, setFade] = useState(true);

// autoplay
useEffect(() => {
const interval = setInterval(() => {
proxima();
}, 5000);
return () => clearInterval(interval);
}, []);

function proxima() {
setFade(false);
setTimeout(() => {
  setIndex((prev) => (prev + 1) % imagens.length);
  setFade(true);
}, 200);
}

function anterior() {
setFade(false);
setTimeout(() => {
  setIndex((prev) => (prev - 1 + imagens.length) % imagens.length);
  setFade(true);
}, 200);
}

  return (
    <main className="relative bg-[#F8F9FA] text-[#1F2A44] min-h-screen font-light overflow-hidden">

      {/* MICRO-GRADIENTE */}
      <div className="pointer-events-none fixed inset-0 z-0 bg-[radial-gradient(circle_at_20%_20%,rgba(255,255,255,0.6),transparent_40%),radial-gradient(circle_at_80%_80%,rgba(0,0,0,0.04),transparent_50%)]" />

      {/* GRAIN */}
      <div className="pointer-events-none fixed inset-0 z-0 opacity-[0.035] mix-blend-multiply">
        <div className="w-full h-full bg-[radial-gradient(circle_at_1px_1px,rgba(0,0,0,0.15)_1px,transparent_0)] bg-[size:6px_6px]" />
      </div>

      {/* BOTÃO FLUTUANTE */}
      <a
        href="https://wa.me/5511972211172"
        target="_blank"
        rel="noopener noreferrer"
        className="fixed bottom-6 right-6 z-50 bg-[#25D366] text-white px-5 py-3 rounded-full shadow-lg hover:scale-110 hover:shadow-xl transition duration-300"
      >
        WhatsApp
      </a>

      {/* NAVBAR */}
      <header className="fixed top-0 w-full bg-[#F8F9FA]/90 backdrop-blur-md border-b border-gray-200 z-40 shadow-sm">
        <div className="max-w-5xl mx-auto px-6 py-4 flex justify-between items-center text-sm">
          
          <a href="#top" className="font-semibold tracking-wide hover:opacity-70 transition text-xs md:text-sm">
            Henrique Mota Manesco – Psicólogo Clínico – CRP 06/136246
          </a>

          <nav className="space-x-6 hidden md:block">
            <a href="#sobre">Sobre mim</a>
            <a href="#abordagem">Abordagem</a>
            <a href="#atendimento">Atendimento</a>
            <a href="#contato">Contato</a>
          </nav>
        </div>
      </header>

      {/* HERO */}
      <section className="pt-32 pb-28 px-6 bg-[#AFC4E0] relative z-10">
        <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-16 items-center">

          <div>
            <h1 className="font-serif text-5xl md:text-6xl font-light leading-tight mb-8 text-[#1A2538]">
              Psicoterapia: trabalho com afetos, pensamentos e elaboração do sofrimento
            </h1>

            <p className="text-sm tracking-wide text-[#2F3E55] mb-6">
              Atendimento presencial em São Paulo – Vila Prudente e online
            </p>

            <div className="w-16 h-[2px] bg-[#5A1826] mb-8"></div>

            <p className="text-lg text-[#2F3E55] leading-relaxed text-justify max-w-xl">
              Um espaço de escuta rigorosa e respeitosa, onde experiências, conflitos
              e impasses podem ser compreendidos e transformados em reflexão e sentido.
            </p>
          </div>

          <div className="flex justify-center md:justify-end">
            <Image
              src="/hero.png"
              alt="Henrique Manesco psicólogo clínico em São Paulo"
              width={420}
              height={520}
              className="object-cover shadow-md grayscale contrast-110"
              priority
            />
          </div>

        </div>
      </section>

      {/* SOBRE */}
      <section id="sobre" className="py-28 px-6 bg-white relative z-10">
        <div className="max-w-5xl mx-auto grid md:grid-cols-2 gap-20 items-start">
          
          <div>
            <h2 className="font-serif text-3xl mb-4">Sobre</h2>
            <div className="w-12 h-[2px] bg-[#6E1E2E] mb-8"></div>

            <p className="text-[#374151] leading-relaxed text-justify mb-6 text-[17px]">
              Sou psicólogo clínico com 10 anos de experiência no acompanhamento 
              individual de adultos. Meu trabalho é orientado por uma compreensão 
              aprofundada da experiência subjetiva, considerando a complexidade 
              dos afetos e dos conflitos que estruturam a vida psíquica. A prática é fundamentada na Psicologia Complexa e na ética profissional, compreendendo 
              o processo terapêutico como um espaço de reflexão, autoconhecimento, 
              elaboração do sofrimento e construção de sentido.
            </p>

            <h3 className="font-serif text-xl font-medium mb-4">
              Formação e trajetória
            </h3>

            <ul className="space-y-3 text-[#374151] text-base leading-relaxed font-medium">
              <li>• Psicólogo – PUC-SP</li>
              <li>• Pós-graduação em Filosofia e Autoconhecimento – PUC-RS</li>
              <li>• Graduando em Filosofia – USP</li>
              <li>• CRP 06/136246</li>
              <li>• 10 anos de experiência clínica</li>
            </ul>
          </div>

          <div className="flex justify-center md:justify-end">
            <Image
              src="/sobre.png"
              alt="Henrique Manesco psicólogo em São Paulo Vila Prudente"
              width={420}
              height={520}
              className="rounded-sm object-cover shadow-md"
            />
          </div>
        </div>
      </section>

      {/* ABORDAGEM */}
      <section id="abordagem" className="py-28 px-6 bg-[#AFC4E0] relative z-10">
        <div className="max-w-4xl mx-auto">

          <h2 className="font-serif text-3xl mb-4 text-[#1A2538]">
            Abordagem clínica
          </h2>

          <h3 className="font-serif text-xl mb-8 text-[#2F3E55]">
            Psicologia analítica e desenvolvimento da consciência
          </h3>

          <div className="w-12 h-[2px] bg-[#5A1826] mb-10"></div>

          <p className="text-[#2F3E55] leading-relaxed text-justify mb-6 text-[17px]">
Minha abordagem de trabalho tem como base a Psicologia Complexa, desenvolvida por Carl Gustav Jung (1875–1961). Essa perspectiva, também conhecida como psicologia analítica ou psicologia junguiana, compreende o processo terapêutico como um caminho de desenvolvimento da individualidade e de ampliação da consciência, sempre em relação com a vida concreta e com o meio social.
          </p>

          <p className="text-[#2F3E55] leading-relaxed text-justify mb-6 text-[17px]">
Segundo palavras do próprio Jung:

"O principal objetivo da terapia psicológica não é transportar o paciente para um impossível estado de felicidade, mas sim ajudá-lo a adquirir firmeza e paciência diante do sofrimento. A vida acontece num equilíbrio entre a alegria e a dor."
          </p>

          <p className="text-[#2F3E55] leading-relaxed text-justify mb-6 text-[17px]">
Jung chama atenção para a necessidade de olhar para a alma humana diante das formas de alienação e afastamento de si mesmo que muitas vezes marcam a vida contemporânea. A saúde psíquica está profundamente ligada ao desenvolvimento da consciência individual e à responsabilidade que cada pessoa assume diante de sua própria vida. Individualidade é responsabilidade.
          </p>

          <p className="text-[#2F3E55] leading-relaxed text-justify mb-6 text-[17px]">
E como nenhum pensamento se constrói isoladamente, outras referências também compõem meu método de trabalho. Marie-Louise von Franz (1915–1998), grande colaboradora de Jung, teve papel fundamental no desenvolvimento e na transmissão da Psicologia Complexa ao longo do século XX, com sua linguagem clara, estudo aprofundado e insights clínicos valiosos.
          </p>

          <p className="text-[#2F3E55] leading-relaxed text-justify mb-12 text-[17px]">
No Brasil, o trabalho de Nise da Silveira (1905–1999) aproximou essa psicologia de nossa realidade, inspirando gerações com sua defesa da humanização do cuidado em saúde mental e sua contribuição para a transformação das práticas psiquiátricas. E como a vida também é atravessada pela arte, a literatura de Rubem Alves (1933–2014) muitas vezes oferece caminhos sensíveis para perceber e expressar aquilo que, por vezes, permanece difícil de dizer.
          </p>

          {/* CARROSSEL */}
          <div className="flex flex-col items-center">
            <div className="w-full max-w-[600px] h-[380px] relative overflow-hidden">
              <Image
                key={index}
                src={imagens[index].src}
                alt="Referências da psicologia analítica e processo terapêutico"
                fill
                style={{ objectPosition: imagens[index].position }}
                className={`object-cover transition-opacity duration-500 ${fade ? "opacity-100" : "opacity-0"}`}
              />
            </div>

            <div className="flex gap-6 mt-6">
              <button onClick={anterior} className="px-4 py-2 border">←</button>
              <button onClick={proxima} className="px-4 py-2 border">→</button>
            </div>
          </div>

        </div>
      </section>

      {/* ATENDIMENTO */}
      <section id="atendimento" className="py-28 px-6 bg-white relative z-10">
        <div className="max-w-5xl mx-auto">

          <h2 className="font-serif text-3xl mb-4">
            Atendimentos
          </h2>

          <div className="w-12 h-[2px] bg-[#6E1E2E] mb-12"></div>

          <div className="grid md:grid-cols-2 gap-8">

            <div className="border border-gray-200 p-8 shadow-sm">
              <h3 className="font-serif text-xl mb-4">
                Psicoterapia individual para adultos
              </h3>
              <p className="text-[#374151] leading-relaxed text-sm text-justify">
                Sessões com duração de 50 minutos. Acompanhamento em momentos de crise e/ou orientação psicológica pontual.
              </p>
            </div>

            <div className="border border-gray-200 p-8 shadow-sm">
              <h3 className="font-serif text-xl mb-4">
                Atendimento presencial
              </h3>
              <p className="text-[#374151] leading-relaxed text-sm text-justify">
                Consultório localizado na Vila Prudente – São Paulo.
              </p>
            </div>

            <div className="border border-gray-200 p-8 shadow-sm">
              <h3 className="font-serif text-xl mb-4">
                Atendimento online
              </h3>
              <p className="text-[#374151] leading-relaxed text-sm text-justify">
                Sessões realizadas por videoconferência, com a mesma qualidade e rigor do atendimento presencial.
              </p>
            </div>

            <div className="border border-gray-200 p-8 shadow-sm">
              <h3 className="font-serif text-xl mb-4">
                Supervisão clínica
              </h3>
              <p className="text-[#374151] leading-relaxed text-sm text-justify">
                Espaço de reflexão clínica para psicólogos recém-formados, com foco na condução de casos e amadurecimento da prática profissional.
              </p>
            </div>

          </div>

        </div>
      </section>

      {/* CONTATO */}
      <section id="contato" className="py-28 px-6 bg-[#F8F9FA] text-center relative z-10">
        <h2 className="font-serif text-3xl mb-4">Contato</h2>
        <p className="text-[#374151]">WhatsApp: (11) 97221-1172</p>
        <p className="text-[#374151]">Email: manescopsi@gmail.com</p>
      </section>

      <footer className="py-10 text-center text-xs text-gray-500 relative z-10">
        © {new Date().getFullYear()} Henrique Manesco — Psicólogo Clínico
      </footer>
<script
  type="application/ld+json"
  dangerouslySetInnerHTML={{
    __html: JSON.stringify({
      "@context": "https://schema.org",
      "@type": "Psychologist",
      name: "Henrique Manesco",
      address: {
        "@type": "PostalAddress",
        addressLocality: "São Paulo",
        addressRegion: "SP",
      },
      areaServed: "São Paulo",
      url: "https://seusite.com",
    }),
  }}
/>
    </main>
  );
}