export default function Navbar() {
  return (
    <header className="fixed top-0 w-full bg-white/90 backdrop-blur border-b z-50">
      <div className="max-w-6xl mx-auto px-6 py-4 flex justify-between">
        <span className="font-semibold text-primary">
          Maz Jamilah Masnan
        </span>

        <nav className="flex gap-6 text-sm text-textSoft">
          {["Profile", "Research", "Publications", "Contact"].map((item) => (
            <a
              key={item}
              href={`#${item.toLowerCase()}`}
              className="relative after:absolute after:left-0 after:-bottom-1 after:h-0.5 after:w-0 after:bg-primary after:transition-all hover:after:w-full"
            >
              {item}
            </a>
          ))}
        </nav>
      </div>
    </header>
  );
}