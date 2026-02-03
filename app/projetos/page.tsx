"use client"

import { useState } from "react"
import Link from "next/link"
import { ChevronRight, Filter } from "lucide-react"

const ConstructionType = {
  WOOD: "Casas de Madeira",
  MASONRY: "Casas de Alvenaria",
  SOBRADO: "Sobrados",
  TRIPLEX: "Triplex",
}

const PROJECTS = [
  {
    id: "promo-45",
    title: "Casa de Alvenaria 45m² - Promoção Especial",
    type: ConstructionType.MASONRY,
    area: "45m²",
    images: ["/promocao-45m-32k.jpeg"],
    description:
      "Promoção Especial! Casa de 45m² prática e confortável por apenas R$ 32.000,00. Válido até 28/02/26 para construção até 15km da nossa unidade.",
    featured: true,
  },
  {
    id: "1",
    title: "Triplex de Alvenaria 200m²",
    type: ConstructionType.TRIPLEX,
    area: "200m²",
    images: [
      "https://customer-assets.emergentagent.com/job_080d002f-6297-4f5e-a48d-6da71945e6dc/artifacts/ivt3txaj_triplex-de-200m.png",
    ],
    description:
      "Triplex impressionante com 200m², projetado para oferecer um estilo de vida sofisticado e espaçoso.",
    featured: true,
  },
  {
    id: "2",
    title: "Triplex de Alvenaria 148.05m²",
    type: ConstructionType.TRIPLEX,
    area: "148.05m²",
    images: [
      "https://customer-assets.emergentagent.com/job_080d002f-6297-4f5e-a48d-6da71945e6dc/artifacts/toqi9yld_triplex-de-148.05m%C2%B2.png",
    ],
    description:
      "Triplex deslumbrante com 148.05m², projetado para oferecer um estilo de vida luxuoso.",
    featured: true,
  },
  {
    id: "3",
    title: "Sobrado de Alvenaria 119.91m²",
    type: ConstructionType.SOBRADO,
    area: "119.91m²",
    images: [
      "https://customer-assets.emergentagent.com/job_080d002f-6297-4f5e-a48d-6da71945e6dc/artifacts/1vofj6k0_sobrado-de-119.91m%C2%B2.png",
    ],
    description: "Sobrado excepcional com 119.91m², espaço amplo e confortável.",
    featured: true,
  },
  {
    id: "4",
    title: "Sobrado de Alvenaria 98.74m²",
    type: ConstructionType.SOBRADO,
    area: "98.74m²",
    images: [
      "https://customer-assets.emergentagent.com/job_080d002f-6297-4f5e-a48d-6da71945e6dc/artifacts/ci94bf83_Sobrado%20de%20Alvenaria%20-%2098.74m%C2%B2.png",
    ],
    description: "Sobrado espaçoso e bem projetado com 98.74m².",
    featured: true,
  },
  {
    id: "8",
    title: "Casa de Alvenaria 90m²",
    type: ConstructionType.MASONRY,
    area: "90m²",
    images: [
      "https://customer-assets.emergentagent.com/job_080d002f-6297-4f5e-a48d-6da71945e6dc/artifacts/754fqtty_Casa%20de%20Alvenaria%2090m%C2%B2.png",
    ],
    description: "Casa de alvenaria com varanda e garagem.",
    featured: true,
  },
  {
    id: "9",
    title: "Casa de Alvenaria 75m²",
    type: ConstructionType.MASONRY,
    area: "75m²",
    images: [
      "https://customer-assets.emergentagent.com/job_080d002f-6297-4f5e-a48d-6da71945e6dc/artifacts/ldjt2zen_Casa%20de%20Alvenaria%2075m%C2%B2.png",
    ],
    description: "Casa de alvenaria com varanda e garagem coberta.",
    featured: false,
  },
  {
    id: "15",
    title: "Casa de Madeira de Pinus 126.50m²",
    type: ConstructionType.WOOD,
    area: "126.50m²",
    images: [
      "https://customer-assets.emergentagent.com/job_080d002f-6297-4f5e-a48d-6da71945e6dc/artifacts/abulrdni_Casa%20de%20madeira%20de%20pinus%20medindo%20126%2C50m%C2%B2.png",
    ],
    description: "Casa de madeira ampla e elegante.",
    featured: true,
  },
  {
    id: "16",
    title: "Casa Madeira de Pinus 72.25m²",
    type: ConstructionType.WOOD,
    area: "72.25m²",
    images: ["/casa_de_madeira_pinus_6m_x_7m-noseuterreno.png"],
    description: "Casa de madeira charmosa e aconchegante.",
    featured: false,
  },
]

export default function ProjectsPage() {
  const [filter, setFilter] = useState<string | null>(null)

  const filteredProjects = filter
    ? PROJECTS.filter((p) => p.type === filter)
    : PROJECTS

  const types = Object.values(ConstructionType)

  return (
    <div className="pt-24 pb-16">
      {/* Header */}
      <section className="bg-pinheirao-black text-white py-16 sm:py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-black mb-4">
            Nossos Projetos
          </h1>
          <p className="text-white/70 max-w-2xl mx-auto">
            Explore nossa galeria de projetos e encontre a casa perfeita para
            sua família.
          </p>
        </div>
      </section>

      {/* Filters */}
      <section className="py-8 bg-white border-b border-pinheirao-concrete/20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-wrap items-center gap-3">
            <Filter size={20} className="text-pinheirao-green" />
            <button
              onClick={() => setFilter(null)}
              className={`px-4 py-2 text-xs font-bold uppercase tracking-widest rounded-sm transition-all ${
                filter === null
                  ? "bg-pinheirao-green text-white"
                  : "bg-pinheirao-concrete/10 text-pinheirao-black hover:bg-pinheirao-concrete/20"
              }`}
            >
              Todos
            </button>
            {types.map((type) => (
              <button
                key={type}
                onClick={() => setFilter(type)}
                className={`px-4 py-2 text-xs font-bold uppercase tracking-widest rounded-sm transition-all ${
                  filter === type
                    ? "bg-pinheirao-green text-white"
                    : "bg-pinheirao-concrete/10 text-pinheirao-black hover:bg-pinheirao-concrete/20"
                }`}
              >
                {type}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Projects Grid */}
      <section className="py-12 sm:py-16 bg-pinheirao-concrete/5">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
            {filteredProjects.map((project) => (
              <div
                key={project.id}
                className="group bg-white rounded-xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300 border border-pinheirao-concrete/10"
              >
                <div className="relative overflow-hidden">
                  <img
                    src={project.images[0]}
                    alt={project.title}
                    className="w-full h-48 sm:h-56 object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                  <div className="absolute top-4 left-4">
                    <span className="bg-pinheirao-green text-white text-[10px] font-black uppercase tracking-widest px-3 py-1.5 rounded-sm">
                      {project.type}
                    </span>
                  </div>
                </div>
                <div className="p-5 sm:p-6">
                  <h4 className="font-black text-pinheirao-black mb-2">
                    {project.title}
                  </h4>
                  <p className="text-pinheirao-gray text-sm mb-4 line-clamp-2">
                    {project.description}
                  </p>
                  <div className="flex justify-between items-center">
                    <span className="text-pinheirao-green font-bold text-sm">
                      {project.area}
                    </span>
                    <a
                      href="https://api.whatsapp.com/send?phone=5541996301028"
                      className="text-[10px] font-black uppercase tracking-widest text-pinheirao-black hover:text-pinheirao-green transition-colors flex items-center"
                    >
                      Solicitar orçamento
                      <ChevronRight size={14} className="ml-1" />
                    </a>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  )
}
