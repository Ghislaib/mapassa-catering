export default function HeroSection() {
  return (
    <section
      id="home"
      className="relative h-screen bg-cover bg-center"
      style={{ backgroundImage: 'url(/img/hero.jpg)' }}
    >
      <div className="absolute inset-0 bg-black opacity-40"></div>
      <div className="relative z-10 flex flex-col items-center justify-center h-full text-center text-white px-4">
        <h1 className="text-5xl font-bold mb-4">Mapassa Catering</h1>
        <p className="mb-8 max-w-xl">
          Farm-to-table African & fusion menus crafted to delight your guests.
        </p>
        <a
          href="#services"
          className="bg-red-600 hover:bg-red-700 text-white px-6 py-3 rounded"
          onClick={(e) => {
            e.preventDefault();
            document
              .getElementById('services')
              .scrollIntoView({ behavior: 'smooth' });
          }}
        >
          Our Services
        </a>
      </div>
    </section>
  );
}
