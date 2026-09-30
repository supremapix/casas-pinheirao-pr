import React, { useState } from 'react';
import { Star, CheckCircle2, ChevronLeft, ChevronRight, Quote } from 'lucide-react';
import { TESTIMONIALS } from '../data';

export const TestimonialsCarousel: React.FC = () => {
  const [currentPage, setCurrentPage] = useState(0);
  const itemsPerPage = 3;
  const totalPages = Math.ceil(TESTIMONIALS.length / itemsPerPage);

  const currentTestimonials = TESTIMONIALS.slice(
    currentPage * itemsPerPage,
    (currentPage + 1) * itemsPerPage
  );

  return (
    <section className="py-20 md:py-28 bg-white border-t border-gray-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-14 gap-6">
          <div className="max-w-2xl">
            <p className="text-xs font-bold uppercase tracking-[0.25em] text-pinheirao-green mb-2">
              Avaliações de Clientes
            </p>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-black text-pinheirao-black uppercase tracking-tight leading-[1.1]">
              Mais de 300 famílias que realizaram o sonho.
            </h2>
          </div>

          {/* Navigation Controls */}
          <div className="flex items-center gap-3 self-start md:self-end">
            <button
              onClick={() => setCurrentPage((prev) => (prev > 0 ? prev - 1 : totalPages - 1))}
              className="p-3 rounded border border-gray-200 text-pinheirao-black hover:bg-pinheirao-green hover:text-white hover:border-pinheirao-green transition-all"
              aria-label="Depoimentos anteriores"
            >
              <ChevronLeft size={20} />
            </button>
            <span className="text-xs font-bold uppercase tracking-widest text-pinheirao-gray">
              {currentPage + 1} / {totalPages}
            </span>
            <button
              onClick={() => setCurrentPage((prev) => (prev < totalPages - 1 ? prev + 1 : 0))}
              className="p-3 rounded border border-gray-200 text-pinheirao-black hover:bg-pinheirao-green hover:text-white hover:border-pinheirao-green transition-all"
              aria-label="Próximos depoimentos"
            >
              <ChevronRight size={20} />
            </button>
          </div>
        </div>

        {/* Testimonials Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
          {currentTestimonials.map((testimonial) => (
            <div
              key={testimonial.id}
              className="bg-gray-50 p-6 sm:p-8 rounded-sm border border-gray-100 flex flex-col justify-between hover:border-pinheirao-green/40 transition-colors shadow-sm"
            >
              <div>
                <div className="flex items-center justify-between mb-4">
                  <div className="flex gap-1 text-amber-500">
                    {[...Array(5)].map((_, i) => (
                      <Star key={i} size={16} className="fill-amber-400 text-amber-400" />
                    ))}
                  </div>
                  <Quote size={20} className="text-gray-300" />
                </div>
                
                <p className="text-gray-700 text-sm leading-relaxed font-medium mb-6">
                  "{testimonial.text}"
                </p>
              </div>

              <div className="pt-4 border-t border-gray-200/60 flex items-center justify-between">
                <div>
                  <h4 className="text-sm font-bold uppercase tracking-wide text-pinheirao-black">
                    {testimonial.name}
                  </h4>
                  <p className="text-xs text-pinheirao-gray">
                    {testimonial.city}
                  </p>
                </div>
                <div className="inline-flex items-center gap-1 px-2 py-1 bg-pinheirao-green/10 text-pinheirao-green rounded text-[10px] font-bold uppercase tracking-wider">
                  <CheckCircle2 size={12} />
                  <span>Obra Entregue</span>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Pagination Dots */}
        <div className="flex justify-center gap-2 mt-10">
          {[...Array(totalPages)].map((_, i) => (
            <button
              key={i}
              onClick={() => setCurrentPage(i)}
              className={`h-1.5 rounded-full transition-all ${
                i === currentPage ? 'w-8 bg-pinheirao-green' : 'w-2 bg-gray-300'
              }`}
              aria-label={`Ir para página de depoimentos ${i + 1}`}
            />
          ))}
        </div>

      </div>
    </section>
  );
};
