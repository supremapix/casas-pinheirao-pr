"use client"

import Link from "next/link"
import { Tag, ChevronRight, MessageSquare, Clock, Star } from "lucide-react"

const promotions = [
  {
    id: "1",
    title: "Casa de Madeira 36m²",
    originalPrice: "R$ 45.000",
    promoPrice: "R$ 38.900",
    discount: "14%",
    image: "/casa_de_madeira_pinus_6m_x_6m-construida-no-seu-terreno.png",
    description:
      "Casa compacta e charmosa, perfeita para casais ou casa de campo.",
    features: ["6m x 6m", "1 quarto", "Sala integrada", "Cozinha"],
    limited: true,
  },
  {
    id: "2",
    title: "Casa de Alvenaria 48m²",
    originalPrice: "R$ 65.000",
    promoPrice: "R$ 55.900",
    discount: "14%",
    image:
      "https://customer-assets.emergentagent.com/job_080d002f-6297-4f5e-a48d-6da71945e6dc/artifacts/d2hb63zo_Casa%20de%20Alvenaria%20-%2048m%C2%B2.jpg",
    description: "Solução inteligente para terrenos compactos.",
    features: ["6m x 8m", "2 quartos", "Sala", "Cozinha", "Banheiro"],
    limited: true,
  },
  {
    id: "3",
    title: "Casa de Madeira 60m²",
    originalPrice: "R$ 72.000",
    promoPrice: "R$ 62.500",
    discount: "13%",
    image: "/casa_de_madeira_pinus_5m_x_8m-noseuterreno.png",
    description: "Conforto térmico natural e beleza rústica.",
    features: ["5m x 8m", "2 quartos", "Sala", "Cozinha", "Banheiro"],
    limited: false,
  },
]

export default function PromocoesPage() {
  return (
    <div className="pt-24 pb-16">
      {/* Header */}
      <section className="bg-gradient-to-br from-pinheirao-green to-pinheirao-deep text-white py-16 sm:py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="inline-flex items-center gap-2 bg-white/20 px-4 py-2 rounded-full mb-6">
            <Tag size={18} />
            <span className="text-xs font-black uppercase tracking-widest">
              Ofertas Especiais
            </span>
          </div>
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-black mb-4">
            Promoções Imperdíveis
          </h1>
          <p className="text-white/80 max-w-2xl mx-auto">
            Aproveite condições especiais para realizar o sonho da casa própria.
            Ofertas por tempo limitado!
          </p>
        </div>
      </section>

      {/* Promotions Grid */}
      <section className="py-12 sm:py-16 bg-pinheirao-concrete/5">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
            {promotions.map((promo) => (
              <div
                key={promo.id}
                className="bg-white rounded-xl overflow-hidden shadow-lg hover:shadow-2xl transition-all border border-pinheirao-concrete/10 group"
              >
                <div className="relative overflow-hidden">
                  <img
                    src={promo.image}
                    alt={promo.title}
                    className="w-full h-48 sm:h-56 object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                  <div className="absolute top-4 left-4 flex gap-2">
                    <span className="bg-red-500 text-white text-xs font-black px-3 py-1.5 rounded-sm">
                      -{promo.discount}
                    </span>
                    {promo.limited && (
                      <span className="bg-yellow-500 text-white text-xs font-black px-3 py-1.5 rounded-sm flex items-center gap-1">
                        <Clock size={12} />
                        Limitado
                      </span>
                    )}
                  </div>
                </div>
                <div className="p-5 sm:p-6">
                  <h3 className="font-black text-pinheirao-black text-lg mb-2">
                    {promo.title}
                  </h3>
                  <p className="text-pinheirao-gray text-sm mb-4">
                    {promo.description}
                  </p>

                  <div className="flex flex-wrap gap-2 mb-4">
                    {promo.features.map((feature, idx) => (
                      <span
                        key={idx}
                        className="bg-pinheirao-concrete/10 text-pinheirao-gray text-[10px] font-bold px-2 py-1 rounded"
                      >
                        {feature}
                      </span>
                    ))}
                  </div>

                  <div className="flex items-end gap-3 mb-4">
                    <span className="text-pinheirao-gray line-through text-sm">
                      {promo.originalPrice}
                    </span>
                    <span className="text-pinheirao-green font-black text-2xl">
                      {promo.promoPrice}
                    </span>
                  </div>

                  <a
                    href={`https://api.whatsapp.com/send?phone=5541996301028&text=Olá! Tenho interesse na promoção: ${promo.title} por ${promo.promoPrice}`}
                    className="w-full bg-pinheirao-green text-white py-3 rounded-sm font-black text-xs uppercase tracking-widest hover:bg-pinheirao-deep transition-all flex items-center justify-center"
                  >
                    <MessageSquare size={16} className="mr-2" />
                    Quero essa oferta
                  </a>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Info Section */}
      <section className="py-12 sm:py-16 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <Star size={48} className="text-pinheirao-green mx-auto mb-6" />
          <h2 className="text-2xl sm:text-3xl font-black text-pinheirao-black mb-4">
            Condições Especiais
          </h2>
          <p className="text-pinheirao-gray mb-8">
            Todas as promoções incluem condições especiais de pagamento.
            Financiamento facilitado disponível. Entre em contato para saber
            mais detalhes.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="https://api.whatsapp.com/send?phone=5541996301028"
              className="bg-pinheirao-green text-white px-8 py-4 rounded-sm font-black text-xs uppercase tracking-widest hover:bg-pinheirao-deep transition-all flex items-center justify-center"
            >
              <MessageSquare size={18} className="mr-2" />
              Falar com Consultor
            </a>
            <Link
              href="/projetos"
              className="bg-pinheirao-black text-white px-8 py-4 rounded-sm font-black text-xs uppercase tracking-widest hover:bg-pinheirao-gray transition-all flex items-center justify-center"
            >
              Ver Todos os Projetos
              <ChevronRight size={16} className="ml-2" />
            </Link>
          </div>
        </div>
      </section>
    </div>
  )
}
