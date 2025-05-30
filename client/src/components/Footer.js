export default function Footer() {
  return (
    <footer className="bg-gray-800 text-gray-300 py-8">
      <div className="container mx-auto grid md:grid-cols-3 gap-6">
        <div>
          <img
            src="/img/logo.png"
            alt="Mapassa Catering"
            className="h-10 mb-4"
          />
          <p>
            Delicious menus for weddings, corporate events & private parties.
          </p>
        </div>
      </div>
      <p className="text-center text-sm mt-6">
        © {new Date().getFullYear()} Mapassa Catering
      </p>
    </footer>
  );
}
