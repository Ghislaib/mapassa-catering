import services from '../data/services.json';

import { FaRing, FaBuilding, FaBirthdayCake } from 'react-icons/fa';

const iconMapping = {
  wedding: <FaRing className="w-12 h-12 text-red-600" />,
  corporate: <FaBuilding className="w-12 h-12 text-red-600" />,
  private: <FaBirthdayCake className="w-12 h-12 text-red-600" />,
};

export default function ServicesSection() {
  return (
    <section id="services" className="py-20 bg-gray-50 scroll-mt-20">
      <div className="container mx-auto text-center px-4">
        <h2 className="text-4xl font-bold mb-12">Our Services</h2>
        <div className="grid md:grid-cols-3 gap-8">
          {services.map((s) => (
            <div
              key={s.id}
              className="bg-white rounded-xl p-8 shadow-md hover:shadow-lg transition-shadow"
            >
              <div className="mb-6 flex justify-center">
                {/* Using icon mapping for consistency and customization */}
                {iconMapping[s.id]}
              </div>
              <h3 className="text-2xl font-semibold mb-4">{s.title}</h3>
              <p className="text-gray-600 mb-4">{s.desc}</p>
              {/* <a
                href="#contact"
                className="text-red-600 hover:text-red-700 font-medium"
              >
                Learn More
              </a> */}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
