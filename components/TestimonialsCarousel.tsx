import React, { useEffect, useRef, useState } from 'react';
import { Star } from 'lucide-react';
import { TESTIMONIALS } from '../data';

const getInitials = (name: string): string => {
  const parts = name.split(' ');
  if (parts.length >= 2) {
    return `${parts[0][0]}${parts[1][0]}`.toUpperCase();
  }
  return name.substring(0, 2).toUpperCase();
};

const avatarColors = [
  '#4285F4',
  '#EA4335',
  '#FBBC04',
  '#34A853',
  '#9C27B0',
  '#FF6B6B',
  '#3498db',
  '#e74c3c',
  '#f39c12',
  '#1abc9c',
  '#e67e22',
  '#95a5a6'
];

const getAvatarColor = (index: number): string => {
  return avatarColors[index % avatarColors.length];
};

const StarRating: React.FC<{ rating: number }> = ({ rating }) => {
  const fullStars = Math.floor(rating);
  const hasHalfStar = rating % 1 !== 0;
  const emptyStars = 5 - Math.ceil(rating);

  return (
    <div className="flex gap-1 mb-4">
      {[...Array(fullStars)].map((_, i) => (
        <Star key={`full-${i}`} size={16} className="fill-[#FFD700] text-[#FFD700]" />
      ))}
      {hasHalfStar && (
        <div className="relative">
          <Star size={16} className="text-[#FFD700]" />
          <div className="absolute inset-0 overflow-hidden w-1/2">
            <Star size={16} className="fill-[#FFD700] text-[#FFD700]" />
          </div>
        </div>
      )}
      {[...Array(emptyStars)].map((_, i) => (
        <Star key={`empty-${i}`} size={16} className="text-gray-300" />
      ))}
    </div>
  );
};

interface TestimonialCardProps {
  testimonial: typeof TESTIMONIALS[0];
  index: number;
}

const TestimonialCard: React.FC<TestimonialCardProps> = ({ testimonial, index }) => {
  const initials = getInitials(testimonial.name);
  const avatarColor = getAvatarColor(index);

  return (
    <div className="testimonial-card bg-white p-8 rounded-lg border-t-4 border-pinheirao-green shadow-md hover:shadow-xl transition-all duration-300 hover:-translate-y-1 min-h-[280px] flex flex-col">
      <StarRating rating={testimonial.rating} />
      <p className="text-gray-600 mb-6 leading-relaxed italic text-sm flex-grow">
        "{testimonial.text}"
      </p>
      <div className="flex items-center gap-4 mt-auto">
        <div
          className="w-12 h-12 rounded-full flex items-center justify-center text-white font-bold text-lg flex-shrink-0"
          style={{ backgroundColor: avatarColor }}
        >
          {initials}
        </div>
        <div>
          <h4 className="font-bold text-sm text-gray-800 uppercase tracking-wide">
            {testimonial.name}
          </h4>
          <p className="text-xs text-pinheirao-green font-semibold">
            {testimonial.city}
          </p>
        </div>
      </div>
    </div>
  );
};

interface ColumnProps {
  testimonials: typeof TESTIMONIALS;
  speed: number;
  reverse?: boolean;
}

const Column: React.FC<ColumnProps> = ({ testimonials, speed, reverse = false }) => {
  const [isPaused, setIsPaused] = useState(false);
  const scrollRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const scrollElement = scrollRef.current;
    if (!scrollElement) return;

    const scrollHeight = scrollElement.scrollHeight / 2;
    let animationId: number;
    let currentScroll = reverse ? scrollHeight : 0;

    const animate = () => {
      if (!isPaused && scrollElement) {
        if (reverse) {
          currentScroll -= speed;
          if (currentScroll <= 0) {
            currentScroll = scrollHeight;
          }
        } else {
          currentScroll += speed;
          if (currentScroll >= scrollHeight) {
            currentScroll = 0;
          }
        }
        scrollElement.scrollTop = currentScroll;
      }
      animationId = requestAnimationFrame(animate);
    };

    animationId = requestAnimationFrame(animate);

    return () => cancelAnimationFrame(animationId);
  }, [speed, isPaused, reverse]);

  const duplicatedTestimonials = [...testimonials, ...testimonials];

  return (
    <div
      ref={scrollRef}
      className="overflow-hidden h-[600px] hide-scrollbar"
      onMouseEnter={() => setIsPaused(true)}
      onMouseLeave={() => setIsPaused(false)}
    >
      <div className="flex flex-col gap-5">
        {duplicatedTestimonials.map((testimonial, index) => (
          <TestimonialCard
            key={`${testimonial.id}-${index}`}
            testimonial={testimonial}
            index={parseInt(testimonial.id) - 1}
          />
        ))}
      </div>
    </div>
  );
};

export const TestimonialsCarousel: React.FC = () => {
  const column1 = TESTIMONIALS.slice(0, 5);
  const column2 = TESTIMONIALS.slice(5, 10);
  const column3 = TESTIMONIALS.slice(10, 15);

  return (
    <section className="py-24 bg-gradient-to-b from-gray-50 to-white relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-white pointer-events-none z-10"></div>
      <div className="absolute top-0 left-0 right-0 h-24 bg-gradient-to-b from-white to-transparent pointer-events-none z-10"></div>
      <div className="absolute bottom-0 left-0 right-0 h-24 bg-gradient-to-t from-white to-transparent pointer-events-none z-10"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-16 text-center relative z-20">
        <h2 className="text-xs font-black uppercase tracking-[0.3em] text-pinheirao-green mb-4">
          Prova Social
        </h2>
        <h3 className="text-4xl font-black text-pinheirao-black mb-4">
          A voz de quem realizou o sonho com a gente.
        </h3>
        <p className="text-gray-600 text-lg max-w-2xl mx-auto">
          Mais de 500 famílias já realizaram o sonho da casa própria com a Casas Pinheirão
        </p>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="hidden lg:grid lg:grid-cols-3 gap-6">
          <Column testimonials={column1} speed={0.3} />
          <Column testimonials={column2} speed={0.4} reverse />
          <Column testimonials={column3} speed={0.35} />
        </div>

        <div className="hidden md:grid md:grid-cols-2 lg:hidden gap-6">
          <Column testimonials={[...column1, ...column2.slice(0, 2)]} speed={0.3} />
          <Column testimonials={[...column2.slice(2), ...column3]} speed={0.35} reverse />
        </div>

        <div className="md:hidden">
          <Column testimonials={TESTIMONIALS} speed={0.25} />
        </div>
      </div>

      <style>{`
        .hide-scrollbar {
          scrollbar-width: none;
          -ms-overflow-style: none;
        }
        .hide-scrollbar::-webkit-scrollbar {
          display: none;
        }
      `}</style>
    </section>
  );
};
