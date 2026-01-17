import { LINKS } from "../lib/links";

export default function Footer() {
  return (
    <footer className="bg-primary text-white">

      {/* DIVIDER ATAS FOOTER */}
      <div className="h-px bg-gradient-to-r from-transparent via-white/40 to-transparent"></div>

      <div className="max-w-6xl mx-auto px-6 py-16 text-center">

        {/* ACADEMIC PROFILES BAR */}
        <div className="flex justify-center gap-8 mb-10 flex-wrap">

          {/* GOOGLE SCHOLAR */}
          <a
            href={LINKS.googleScholar}
            target="_blank"
            rel="noopener noreferrer"
            className="group relative"
          >
            <svg
              className="w-6 h-6 icon-glow text-white mx-auto"
              viewBox="0 0 24 24"
              fill="currentColor"
            >
              <path d="M12 0L1.5 9l1.6 1.2L12 4l8.9 6.2L22.5 9 12 0z" />
              <path d="M5 10v6c0 3.3 3.1 6 7 6s7-2.7 7-6v-6l-7 5-7-5z" />
            </svg>
            <span className="tooltip">Google Scholar</span>
          </a>

          {/* SCOPUS */}
          <a
            href={LINKS.scopus}
            target="_blank"
            rel="noopener noreferrer"
            className="group relative"
          >
            <div className="w-6 h-6 rounded-full bg-white text-primary flex items-center justify-center font-bold text-xs icon-glow mx-auto">
              S
            </div>
            <span className="tooltip">Scopus Profile</span>
          </a>

          {/* ORCID */}
          <a
            href={LINKS.orcid}
            target="_blank"
            rel="noopener noreferrer"
            className="group relative"
          >
            <div className="w-6 h-6 rounded-full bg-green-600 flex items-center justify-center text-xs font-bold icon-glow mx-auto">
              iD
            </div>
            <span className="tooltip">ORCID iD</span>
          </a>
        </div>

        {/* COPYRIGHT */}
        <p className="text-sm opacity-80 leading-relaxed">
          © {new Date().getFullYear()} Maz Jamilah Masnan <br className="md:hidden" />
          Universiti Malaysia Perlis (UniMAP)
        </p>
      </div>
    </footer>
  );
}