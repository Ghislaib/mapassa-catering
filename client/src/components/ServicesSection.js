import services from '../data/services.json';

export default function ServicesSection() {
  return (
    <section id="services" className="py-12 bg-gray-50">
      <div className="container mx-auto text-center">
        <h2 className="text-3xl font-bold mb-8">Our Services</h2>
        <div className="grid md:grid-cols-3 gap-6">
          {services.map((s) => (
            <div
              key={s.id}
              className="bg-white rounded-lg p-6 shadow hover:shadow-lift transition"
            >
              <div className="mb-4 text-red-600 text-4xl">{s.icon}</div>
              <h3 className="font-semibold text-xl mb-2">{s.title}</h3>
              <p className="text-gray-700">{s.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
