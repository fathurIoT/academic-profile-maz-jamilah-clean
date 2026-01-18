import Image from "next/image";
import { LINKS } from "../lib/links";

export default function Hero() {
  return (
    <section className="min-h-screen flex items-center bg-gradient-to-b from-bgSoft to-white">
      <div className="max-w-6xl mx-auto px-6 grid md:grid-cols-2 gap-16 items-center">

        {/* LEFT CONTENT */}
        <div>
          <h1 className="text-5xl md:text-6xl font-bold leading-tight">
            Maz Jamilah Masnan
          </h1>

          <p className="mt-6 text-lg text-textSoft">
            Associate Professor <br />
            Universiti Malaysia Perlis (UniMAP)
          </p>

          <p className="mt-4 text-textSoft">
            Statistics • Data Analytics • Decision Science
          </p>

          {/* ACADEMIC PROFILES */}
          <div className="mt-6 flex gap-6 items-center">

            {/* GOOGLE SCHOLAR */}
            <a
              href={LINKS.googleScholar}
              target="_blank"
              rel="noopener noreferrer"
              className="group relative flex items-center gap-2"
            >
              <svg
                className="w-5 h-5 icon-glow text-primary"
                viewBox="0 0 24 24"
                fill="currentColor"
              >
                <path d="M12 0L1.5 9l1.6 1.2L12 4l8.9 6.2L22.5 9 12 0z"/>
                <path d="M5 10v6c0 3.3 3.1 6 7 6s7-2.7 7-6v-6l-7 5-7-5z"/>
              </svg>
              <span className="text-sm">Scholar</span>
              <span className="tooltip">Google Scholar</span>
            </a>

            {/* SCOPUS */}
            <a
              href={LINKS.scopus}
              target="_blank"
              rel="noopener noreferrer"
              className="group relative flex items-center gap-2"
            >
              <div className="w-5 h-5 rounded-full bg-primary text-white flex items-center justify-center text-xs font-bold icon-glow">
                S
              </div>
              <span className="text-sm">Scopus</span>
              <span className="tooltip">Scopus Profile</span>
            </a>

            {/* ORCID */}
            <a
              href={LINKS.orcid}
              target="_blank"
              rel="noopener noreferrer"
              className="group relative flex items-center gap-2"
            >
              <div className="w-5 h-5 rounded-full bg-green-600 text-white flex items-center justify-center text-xs font-bold icon-glow">
                iD
              </div>
              <span className="text-sm">ORCID</span>
              <span className="tooltip">ORCID iD</span>
            </a>
          </div>

          {/* CTA */}
          <div className="mt-10">
            <a
              href="/cv/CV_Maz_Jamilah_Masnan.pdf"
              className="inline-block bg-primary text-white px-8 py-4 rounded-lg hover:bg-secondary transition"
            >
              Download CV
            </a>
          </div>
        </div>

        {/* RIGHT IMAGE */}
        <div className="flex justify-center md:justify-end">
          <div className="rounded-2xl overflow-hidden shadow-xl">
            <Image
              src="/images/gambar-ibu.jpeg"
              alt="Maz Jamilah Masnan"
              width={420}
              height={520}
              priority
            />
          </div>
        </div>
        
        {/* SCROLL INDICATOR */}
<div className="absolute bottom-8 left-1/2 -translate-x-1/2">
  <a href="#profile" className="flex flex-col items-center gap-1 group">
    <span className="text-xs text-textSoft tracking-widest uppercase">
      Scroll
    </span>

    <svg
      className="w-5 h-5 text-primary animate-bounce-soft"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      viewBox="0 0 24 24"
    >
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M19 9l-7 7-7-7"
      />
    </svg>
  </a>
</div>

      </div>
    </section>
  );
}
