export default function Stats() {
  return (
    <section className="py-24 bg-primary text-white">
      <div className="max-w-6xl mx-auto px-6 grid md:grid-cols-4 gap-12 text-center">
        <div>
          <p className="text-5xl font-bold">20+</p>
          <p className="mt-2 text-sm opacity-80">Years Experience</p>
        </div>
        <div>
          <p className="text-5xl font-bold">30+</p>
          <p className="mt-2 text-sm opacity-80">Publications</p>
        </div>
        <div>
          <p className="text-5xl font-bold">RM7M+</p>
          <p className="mt-2 text-sm opacity-80">Research Grants</p>
        </div>
        <div>
          <p className="text-5xl font-bold">10+</p>
          <p className="mt-2 text-sm opacity-80">Awards</p>
        </div>
      </div>
    </section>
  );
}