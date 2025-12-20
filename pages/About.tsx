
import React from 'react';
import { Award, Users, Shield, Target, Eye, Heart, LayoutTemplate, Briefcase, Boxes, Eye as EyeIcon } from 'lucide-react';

export const About: React.FC = () => {
  const ourServices = [
    {
      icon: <LayoutTemplate size={32} className="text-pinheirao-green" />,
      title: 'Design Personalizado',
      desc: 'Projetos sob medida criados por nossa equipe de arquitetura para atender suas necessidades exatas.'
    },
    {
      icon: <Briefcase size={32} className="text-pinheirao-green" />,
      title: 'Gestão de Projetos',
      desc: 'Cuidamos de toda a burocracia e cronograma, garantindo que sua obra flua sem preocupações.'
    },
    {
      icon: <Boxes size={32} className="text-pinheirao-green" />,
      title: 'Seleção de Materiais',
      desc: 'Utilizamos apenas madeiras de lei certificadas e materiais de primeira linha com garantia.'
    },
    {
      icon: <EyeIcon size={32} className="text-pinheirao-green" />,
      title: 'Supervisão Técnica',
      desc: 'Engenheiros qualificados acompanham cada etapa da construção para assegurar a perfeição estrutural.'
    }
  ];

  return (
    <div className="pt-20">
      {/* Page Header */}
      <section className="bg-pinheirao-concrete/30 py-16 md:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-xs font-black uppercase tracking-[0.4em] text-pinheirao-green mb-6">Quem Somos</h2>
          <h1 className="text-4xl md:text-5xl font-black text-pinheirao-black mb-6">Tradição em Pinhais</h1>
          <p className="text-pinheirao-gray max-w-2xl mx-auto text-lg leading-relaxed font-medium">
            Mais de duas décadas construindo lares e realizando sonhos em Curitiba e Região Metropolitana.
          </p>
        </div>
      </section>

      {/* History (About Us Section) */}
      <section className="py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div>
              <div className="bg-pinheirao-green text-white inline-block px-4 py-2 rounded-sm text-xs font-black uppercase tracking-widest mb-4">Nossa Jornada</div>
              <h2 className="text-3xl md:text-4xl font-black text-pinheirao-black mb-6">Uma história de confiança e qualidade</h2>
              <div className="space-y-6 text-pinheirao-gray leading-relaxed font-medium">
                <p>
                  A <strong className="text-pinheirao-black">Casas Pinheirão</strong> nasceu em Pinhais com o propósito de oferecer uma alternativa viável, segura e de alta qualidade para quem deseja construir a casa própria. Ao longo de mais de 20 anos, evoluímos nossos processos construtivos e expandimos nossa equipe para nos tornarmos referência no segmento.
                </p>
                <p>
                  Nossa expertise vai além da construção em si; nós entendemos as expectativas e os desafios de cada família. Por isso, oferecemos um atendimento consultivo que guia o cliente desde a escolha do modelo ideal até o acabamento final.
                </p>
                <p>
                  Hoje, com centenas de unidades entregues, nossa maior recompensa é a satisfação e o sorriso no rosto de cada novo morador.
                </p>
              </div>
            </div>
            <div className="grid grid-cols-2 gap-4 relative">
              <div className="absolute -inset-4 border-2 border-pinheirao-green/10 -z-10 rounded-2xl"></div>
              <img src="https://customer-assets.emergentagent.com/job_080d002f-6297-4f5e-a48d-6da71945e6dc/artifacts/z3k4qhra_empresa-1.png" alt="Obra Casas Pinheirão" className="rounded-sm shadow-lg mt-8" />
              <img src="https://customer-assets.emergentagent.com/job_080d002f-6297-4f5e-a48d-6da71945e6dc/artifacts/k9ar5mj9_empresa-2.png" alt="Equipe Casas Pinheirão" className="rounded-sm shadow-lg" />
            </div>
          </div>
        </div>
      </section>

      {/* Our Services Section */}
      <section className="py-24 bg-pinheirao-concrete/10 border-y border-pinheirao-concrete/20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-xs font-black uppercase tracking-[0.4em] text-pinheirao-green mb-4">Nossos Serviços</h2>
            <h3 className="text-4xl font-black text-pinheirao-black mb-6">Excelência em cada etapa da construção.</h3>
            <div className="w-20 h-1 bg-pinheirao-green mx-auto"></div>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {ourServices.map((service, idx) => (
              <div key={idx} className="bg-white p-10 rounded-sm shadow-sm hover:shadow-xl transition-all border border-gray-100 flex flex-col items-center text-center group">
                <div className="mb-6 p-4 bg-pinheirao-concrete/30 rounded-full group-hover:scale-110 transition-transform">
                  {service.icon}
                </div>
                <h4 className="text-lg font-black text-pinheirao-black mb-4 uppercase tracking-tighter">{service.title}</h4>
                <p className="text-sm text-pinheirao-gray font-medium leading-relaxed">
                  {service.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Mission Vision Values */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-white p-12 rounded-sm shadow-sm text-center border-b-4 border-pinheirao-green">
              <div className="bg-pinheirao-green/10 p-4 rounded-full w-fit mx-auto mb-6 text-pinheirao-green">
                <Target size={36} />
              </div>
              <h3 className="text-xl font-black mb-4 uppercase tracking-widest">Missão</h3>
              <p className="text-pinheirao-gray text-sm leading-relaxed font-medium">Construir casas de excelência com agilidade e preço justo, proporcionando segurança e bem-estar para nossos clientes.</p>
            </div>
            <div className="bg-white p-12 rounded-sm shadow-sm text-center border-b-4 border-pinheirao-black">
              <div className="bg-pinheirao-black/10 p-4 rounded-full w-fit mx-auto mb-6 text-pinheirao-black">
                <Eye size={36} />
              </div>
              <h3 className="text-xl font-black mb-4 uppercase tracking-widest">Visão</h3>
              <p className="text-pinheirao-gray text-sm leading-relaxed font-medium">Ser a empresa de casas pré-fabricadas mais admirada do Paraná, reconhecida pela inovação e transparência em todos os processos.</p>
            </div>
            <div className="bg-white p-12 rounded-sm shadow-sm text-center border-b-4 border-pinheirao-deep">
              <div className="bg-pinheirao-deep/10 p-4 rounded-full w-fit mx-auto mb-6 text-pinheirao-deep">
                <Heart size={36} />
              </div>
              <h3 className="text-xl font-black mb-4 uppercase tracking-widest">Valores</h3>
              <p className="text-pinheirao-gray text-sm leading-relaxed font-medium">Ética, comprometimento, respeito ao meio ambiente, foco no cliente e valorização das pessoas.</p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};
