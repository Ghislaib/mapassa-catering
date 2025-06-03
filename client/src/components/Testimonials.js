import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/autoplay';
import 'swiper/css/navigation';
import { Autoplay, Navigation } from 'swiper/modules';
import { useRef } from 'react';

const data = [
  {
    name: 'Lena Rodriguez',
    quote:
      'The best catering we’ve had for our office party. Everyone was raving about the jollof rice!',
    rating: 4,
  },
  {
    name: 'The Green Market',
    quote: 'Fresh ingredients, beautiful presentation, and great service.',
    rating: 5,
  },
  {
    name: 'Sarah Ali',
    quote:
      'They handled everything for our baby shower and made it so stress-free. Highly recommend!',
    rating: 5,
  },
  {
    name: 'David Kim',
    quote:
      'Loved the attention to detail. You can tell they care about their food and customers.',
    rating: 4,
  },
  {
    name: 'Nia Osei',
    quote:
      'Authentic African flavors, warm service, and timely delivery. Will book again!',
    rating: 5,
  },
];

export default function Testimonials() {
  const prevRef = useRef(null);
  const nextRef = useRef(null);

  const renderStars = (rating) => '★'.repeat(rating) + '☆'.repeat(5 - rating);

  return (
    <section id="testimonials" className="bg-gray-50 py-12 px-4 scroll-mt-20">
      <h2 className="text-3xl font-bold text-center mb-8">What Clients Say</h2>

      <div className="relative max-w-2xl mx-auto">
        {/* Arrows: visible only on md+ screens */}
        <button
          ref={prevRef}
          className="hidden md:flex absolute left-0 top-1/2 transform -translate-y-1/2 z-10 bg-white border p-2 rounded-full shadow hover:bg-gray-100"
        >
          ◀
        </button>
        <button
          ref={nextRef}
          className="hidden md:flex absolute right-0 top-1/2 transform -translate-y-1/2 z-10 bg-white border p-2 rounded-full shadow hover:bg-gray-100"
        >
          ▶
        </button>

        <Swiper
          modules={[Autoplay, Navigation]}
          loop={true}
          autoplay={{ delay: 5000 }}
          navigation={{
            prevEl: prevRef.current,
            nextEl: nextRef.current,
          }}
          onBeforeInit={(swiper) => {
            swiper.params.navigation.prevEl = prevRef.current;
            swiper.params.navigation.nextEl = nextRef.current;
          }}
        >
          {data.map((t, i) => (
            <SwiperSlide
              key={i}
              className="p-6 bg-white rounded-lg flex flex-col items-center text-center"
            >
              <p className="italic mb-4">“{t.quote}”</p>
              <p className="font-semibold mb-1">— {t.name}</p>
              <div className="text-yellow-500 text-lg">
                {renderStars(t.rating)}
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </section>
  );
}
