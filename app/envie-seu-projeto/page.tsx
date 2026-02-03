"use client"

import { useState } from "react"
import { Send, CheckCircle, MessageSquare } from "lucide-react"

export default function EnvieSeuProjetoPage() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    city: "",
    projectType: "",
    area: "",
    message: "",
  })
  const [submitted, setSubmitted] = useState(false)

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    // Build WhatsApp message
    const message = `Olá! Gostaria de solicitar um orçamento.

*Nome:* ${formData.name}
*E-mail:* ${formData.email}
*Telefone:* ${formData.phone}
*Cidade:* ${formData.city}
*Tipo de Projeto:* ${formData.projectType}
*Área aproximada:* ${formData.area}
*Mensagem:* ${formData.message}`

    const whatsappUrl = `https://api.whatsapp.com/send?phone=5541996301028&text=${encodeURIComponent(message)}`
    window.open(whatsappUrl, "_blank")
    setSubmitted(true)
  }

  const projectTypes = [
    "Casa de Madeira",
    "Casa de Alvenaria",
    "Sobrado",
    "Triplex",
    "Outro",
  ]

  if (submitted) {
    return (
      <div className="pt-24 pb-16 min-h-screen flex items-center justify-center bg-pinheirao-concrete/5">
        <div className="text-center max-w-md mx-auto px-4">
          <CheckCircle size={64} className="text-pinheirao-green mx-auto mb-6" />
          <h2 className="text-2xl font-black text-pinheirao-black mb-4">
            Obrigado pelo contato!
          </h2>
          <p className="text-pinheirao-gray mb-6">
            Sua solicitação foi enviada via WhatsApp. Nossa equipe entrará em
            contato em breve.
          </p>
          <button
            onClick={() => setSubmitted(false)}
            className="bg-pinheirao-green text-white px-6 py-3 rounded-sm font-black text-xs uppercase tracking-widest hover:bg-pinheirao-deep transition-all"
          >
            Enviar outro projeto
          </button>
        </div>
      </div>
    )
  }

  return (
    <div className="pt-24 pb-16">
      {/* Header */}
      <section className="bg-pinheirao-black text-white py-16 sm:py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-black mb-4">
            Envie seu Projeto
          </h1>
          <p className="text-white/70 max-w-2xl mx-auto">
            Preencha o formulário abaixo e receba um orçamento personalizado
            para o seu projeto.
          </p>
        </div>
      </section>

      {/* Form */}
      <section className="py-16 sm:py-20 bg-white">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <form onSubmit={handleSubmit} className="space-y-6">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              <div>
                <label className="block text-xs font-black uppercase tracking-widest text-pinheirao-black mb-2">
                  Nome completo *
                </label>
                <input
                  type="text"
                  required
                  value={formData.name}
                  onChange={(e) =>
                    setFormData({ ...formData, name: e.target.value })
                  }
                  className="w-full px-4 py-3 border border-pinheirao-concrete/30 rounded-sm focus:outline-none focus:border-pinheirao-green transition-colors"
                  placeholder="Seu nome"
                />
              </div>
              <div>
                <label className="block text-xs font-black uppercase tracking-widest text-pinheirao-black mb-2">
                  E-mail *
                </label>
                <input
                  type="email"
                  required
                  value={formData.email}
                  onChange={(e) =>
                    setFormData({ ...formData, email: e.target.value })
                  }
                  className="w-full px-4 py-3 border border-pinheirao-concrete/30 rounded-sm focus:outline-none focus:border-pinheirao-green transition-colors"
                  placeholder="seu@email.com"
                />
              </div>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              <div>
                <label className="block text-xs font-black uppercase tracking-widest text-pinheirao-black mb-2">
                  Telefone/WhatsApp *
                </label>
                <input
                  type="tel"
                  required
                  value={formData.phone}
                  onChange={(e) =>
                    setFormData({ ...formData, phone: e.target.value })
                  }
                  className="w-full px-4 py-3 border border-pinheirao-concrete/30 rounded-sm focus:outline-none focus:border-pinheirao-green transition-colors"
                  placeholder="(41) 99999-9999"
                />
              </div>
              <div>
                <label className="block text-xs font-black uppercase tracking-widest text-pinheirao-black mb-2">
                  Cidade *
                </label>
                <input
                  type="text"
                  required
                  value={formData.city}
                  onChange={(e) =>
                    setFormData({ ...formData, city: e.target.value })
                  }
                  className="w-full px-4 py-3 border border-pinheirao-concrete/30 rounded-sm focus:outline-none focus:border-pinheirao-green transition-colors"
                  placeholder="Sua cidade"
                />
              </div>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              <div>
                <label className="block text-xs font-black uppercase tracking-widest text-pinheirao-black mb-2">
                  Tipo de Projeto *
                </label>
                <select
                  required
                  value={formData.projectType}
                  onChange={(e) =>
                    setFormData({ ...formData, projectType: e.target.value })
                  }
                  className="w-full px-4 py-3 border border-pinheirao-concrete/30 rounded-sm focus:outline-none focus:border-pinheirao-green transition-colors bg-white"
                >
                  <option value="">Selecione...</option>
                  {projectTypes.map((type) => (
                    <option key={type} value={type}>
                      {type}
                    </option>
                  ))}
                </select>
              </div>
              <div>
                <label className="block text-xs font-black uppercase tracking-widest text-pinheirao-black mb-2">
                  Área aproximada
                </label>
                <input
                  type="text"
                  value={formData.area}
                  onChange={(e) =>
                    setFormData({ ...formData, area: e.target.value })
                  }
                  className="w-full px-4 py-3 border border-pinheirao-concrete/30 rounded-sm focus:outline-none focus:border-pinheirao-green transition-colors"
                  placeholder="Ex: 60m², 80m², 100m²"
                />
              </div>
            </div>

            <div>
              <label className="block text-xs font-black uppercase tracking-widest text-pinheirao-black mb-2">
                Mensagem / Detalhes do projeto
              </label>
              <textarea
                value={formData.message}
                onChange={(e) =>
                  setFormData({ ...formData, message: e.target.value })
                }
                rows={5}
                className="w-full px-4 py-3 border border-pinheirao-concrete/30 rounded-sm focus:outline-none focus:border-pinheirao-green transition-colors resize-none"
                placeholder="Conte-nos mais sobre o projeto dos seus sonhos..."
              ></textarea>
            </div>

            <div className="flex flex-col sm:flex-row gap-4">
              <button
                type="submit"
                className="flex-1 bg-pinheirao-green text-white px-8 py-4 rounded-sm font-black text-xs uppercase tracking-widest hover:bg-pinheirao-deep transition-all flex items-center justify-center"
              >
                <Send size={18} className="mr-2" />
                Enviar via WhatsApp
              </button>
              <a
                href="https://api.whatsapp.com/send?phone=5541996301028"
                className="flex-1 bg-green-500 text-white px-8 py-4 rounded-sm font-black text-xs uppercase tracking-widest hover:bg-green-600 transition-all flex items-center justify-center"
              >
                <MessageSquare size={18} className="mr-2" />
                Falar Direto
              </a>
            </div>
          </form>
        </div>
      </section>
    </div>
  )
}
