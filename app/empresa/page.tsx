"use client"

import { Shield, Users, Award, Clock, CheckCircle } from "lucide-react"

export default function EmpresaPage() {
  const values = [
    {
      icon: <Shield size={32} className="text-pinheirao-green" />,
      title: "Integridade",
      desc: "Compromisso com a honestidade e transparência em todas as nossas relações.",
    },
    {
      icon: <Users size={32} className="text-pinheirao-green" />,
      title: "Família",
      desc: "Tratamos cada cliente como parte da nossa família, com cuidado e dedicação.",
    },
    {
      icon: <Award size={32} className="text-pinheirao-green" />,
      title: "Qualidade",
      desc: "Utilizamos apenas materiais de primeira linha e mão de obra especializada.",
    },
    {
      icon: <Clock size={32} className="text-pinheirao-green" />,
      title: "Compromisso",
      desc: "Cumprimos prazos e entregamos exatamente o que prometemos.",
    },
  ]

  return (
    <div className="pt-24 pb-16">
      {/* Header */}
      <section className="bg-pinheirao-black text-white py-16 sm:py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-black mb-4">
            Nossa Empresa
          </h1>
          <p className="text-white/70 max-w-2xl mx-auto">
            Conheça a história e os valores da Casas Pinheirão.
          </p>
        </div>
      </section>

      {/* História */}
      <section className="py-16 sm:py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-[10px] sm:text-xs font-black uppercase tracking-[0.3em] text-pinheirao-green mb-4">
                Nossa História
              </h2>
              <h3 className="text-2xl sm:text-3xl md:text-4xl font-black mb-6 text-pinheirao-black">
                Mais de 20 anos realizando sonhos
              </h3>
              <p className="text-pinheirao-gray mb-4 leading-relaxed">
                Fundada em 2004, a Casas Pinheirão nasceu do sonho de ajudar
                famílias a conquistarem o tão sonhado lar próprio. Começamos
                como uma pequena empresa em Pinhais e, ao longo dos anos, nos
                tornamos referência em casas pré-fabricadas em toda Curitiba e
                Região Metropolitana.
              </p>
              <p className="text-pinheirao-gray mb-6 leading-relaxed">
                Nossa trajetória é marcada pela dedicação, qualidade e
                compromisso com cada cliente. Já entregamos mais de 300 casas e
                continuamos crescendo, sempre mantendo os valores que nos
                trouxeram até aqui.
              </p>
              <div className="grid grid-cols-2 gap-4">
                {[
                  { number: "20+", label: "Anos de Mercado" },
                  { number: "300+", label: "Casas Entregues" },
                  { number: "100%", label: "Satisfação" },
                  { number: "5", label: "Estrelas no Google" },
                ].map((stat, idx) => (
                  <div
                    key={idx}
                    className="bg-pinheirao-concrete/10 p-4 rounded-lg text-center"
                  >
                    <div className="text-2xl font-black text-pinheirao-green">
                      {stat.number}
                    </div>
                    <div className="text-xs font-bold text-pinheirao-gray uppercase tracking-widest">
                      {stat.label}
                    </div>
                  </div>
                ))}
              </div>
            </div>
            <div className="relative">
              <img
                src="/tradicao-em-pinhais.webp"
                alt="Casas Pinheirão - Nossa História"
                className="rounded-xl shadow-2xl w-full h-[500px] object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Valores */}
      <section className="py-16 sm:py-20 bg-pinheirao-concrete/5">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-[10px] sm:text-xs font-black uppercase tracking-[0.3em] text-pinheirao-green mb-4">
              Nossos Valores
            </h2>
            <h3 className="text-2xl sm:text-3xl md:text-4xl font-black text-pinheirao-black">
              O que nos move
            </h3>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {values.map((value, idx) => (
              <div
                key={idx}
                className="bg-white p-6 rounded-xl shadow-lg text-center group hover:shadow-2xl transition-all"
              >
                <div className="mb-4 flex justify-center group-hover:scale-110 transition-transform">
                  {value.icon}
                </div>
                <h4 className="font-black text-pinheirao-black mb-2">
                  {value.title}
                </h4>
                <p className="text-pinheirao-gray text-sm">{value.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Diferenciais */}
      <section className="py-16 sm:py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-[10px] sm:text-xs font-black uppercase tracking-[0.3em] text-pinheirao-green mb-4">
              Por que nos escolher
            </h2>
            <h3 className="text-2xl sm:text-3xl md:text-4xl font-black text-pinheirao-black">
              Nossos Diferenciais
            </h3>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {[
              "Madeira de lei certificada e de alta qualidade",
              "Equipe técnica especializada e experiente",
              "Projetos personalizados para cada cliente",
              "Financiamento facilitado e flexível",
              "Garantia estrutural em todas as construções",
              "Atendimento consultivo do início ao fim",
              "Presença em toda Curitiba e Região",
              "Mais de 20 anos de experiência no mercado",
            ].map((item, idx) => (
              <div
                key={idx}
                className="flex items-center gap-4 p-4 bg-pinheirao-concrete/5 rounded-lg"
              >
                <CheckCircle size={24} className="text-pinheirao-green shrink-0" />
                <span className="text-pinheirao-black font-medium">{item}</span>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  )
}
