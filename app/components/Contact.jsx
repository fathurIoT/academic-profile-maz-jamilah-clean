export default function Contact() {
  return (
    <section id="contact" className="py-20">
      <div className="max-w-5xl mx-auto px-6 text-center">
        <h2 className="text-2xl font-semibold text-blue-900 mb-6">
          Contact Information
        </h2>

        <p className="text-gray-700 mb-1">
          Department of Mathematical Sciences
        </p>
        <p className="text-gray-700 mb-1">
          Faculty of Intelligent Computing
        </p>
        <p className="text-gray-700 mb-4">
          Universiti Malaysia Perlis (UniMAP)
        </p>

        <p className="text-gray-700 mb-6">
          Email:{" "}
          <a
            href="mailto:mazjamilah@unimap.edu.my"
            className="text-blue-900 hover:underline"
          >
            mazjamilah@unimap.edu.my
          </a>
        </p>

        {/* DOWNLOAD CV BUTTON */}
        <a
          href="/cv/CV_Maz_Jamilah_Masnan.pdf"
          target="_blank"
          rel="noopener noreferrer"
          className="inline-block bg-blue-900 text-white px-6 py-3 rounded hover:bg-blue-800 transition"
        >
          Download Full CV (PDF)
        </a>
      </div>
    </section>
  );
}