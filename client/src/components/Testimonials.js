import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';

const data = [
  { name: 'Jane Doe', quote: 'They nailed our wedding menu!', rating: 5 },
  { name: 'Acme Corp', quote: 'Timely, professional, delicious.', rating: 5 },
];

export default function Testimonials() {
  return (
    <section id="testimonials" className="bg-gray-50 py-12">
      <h2 className="text-3xl font-bold text-center mb-8">What Clients Say</h2>
      <Swiper loop autoplay={{ delay: 5000 }} className="max-w-2xl mx-auto">
        {data.map((t, i) => (
          <SwiperSlide key={i} className="p-6 bg-white rounded shadow">
            <p className="italic mb-4">“{t.quote}”</p>
            <p className="font-semibold">— {t.name}</p>
          </SwiperSlide>
        ))}
      </Swiper>
    </section>
  );
}
