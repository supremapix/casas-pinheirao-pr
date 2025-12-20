
import React, { useState, useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import { Send, Upload, Info, MessageSquare } from 'lucide-react';

export const SubmitProject: React.FC = () => {
  const location = useLocation();
  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState(false);
  
  // Pre-fill state
  const [formData, setFormData] = useState({
    name: '',
    whatsapp: '',
    type: '',
    size: '',
    location: '',
    notes: ''
  });

  useEffect(() => {
    const params = new URLSearchParams(location.search);
    const title = params.get('title');
    const type = params.get('type');
    
    if (title || type) {
      setFormData(prev => ({
        ...prev,
        type: type || '',
        notes: title ? `Interesse no modelo: ${title}` : ''
      }));
    }
  }, [location.search]);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    // Simulate API call
    setTimeout(() => {
      setLoading(false);
      setSuccess(true);
    }, 1500);
  };

  return (
    <div className="pt-20">
      {/* Header */}
      <section className="bg-pinheirao-concrete/30 py-16 md:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-xs font-black uppercase tracking-[0.4em] text-pinheirao-green mb-6">Orçamento Personalizado</h2>
          <h1 className="text-4xl md:text-5xl font-black text-pinheirao-black mb-6">Envie Seu Projeto</h1>
          <p className="text-pinheirao-gray max-w-2xl mx-auto text-lg font-medium">
            Já tem uma ideia ou planta em mãos? Envie para nós e faremos um orçamento detalhado sem compromisso.
          </p>
        </div>
      </section>

      <section className="py-24 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          {success ? (
            <div className="bg-pinheirao-concrete/10 border border-pinheirao-green/30 p-12 rounded-sm text-center">
              <div className="bg-pinheirao-green text-white p-6 rounded-full w-fit mx-auto mb-6 shadow-xl">
                <Send size={48} />
              </div>
              <h2 className="text-3xl font-black text-pinheirao-black mb-4 uppercase tracking-tighter">Projeto Enviado!</h2>
              <p className="text-pinheirao-gray mb-8 font-medium">Recebemos suas informações. Em até 48h um de nossos especialistas entrará em contato.</p>
              <button 
                onClick={() => setSuccess(false)}
                className="bg-pinheirao-green text-white px-12 py-4 rounded-sm font-black text-xs uppercase tracking-widest hover:bg-pinheirao-deep transition-all shadow-md"
              >
                Enviar Outro Projeto
              </button>
            </div>
          ) : (
            <div className="bg-white shadow-2xl rounded-sm border border-gray-100 overflow-hidden">
              <div className="bg-pinheirao-black p-10 text-white">
                <div className="flex items-center space-x-6">
                  <div className="bg-pinheirao-green p-4 rounded-sm shadow-lg">
                    <Info size={24} className="text-white" />
                  </div>
                  <div>
                    <h3 className="font-black text-xl uppercase tracking-widest">Preencha o Formulário</h3>
                    <p className="text-pinheirao-concrete/60 text-xs font-bold uppercase tracking-widest mt-1">Quanto mais detalhes, melhor será nosso orçamento.</p>
                  </div>
                </div>
              </div>
              
              <form onSubmit={handleSubmit} className="p-8 md:p-12 space-y-8">
                {/* Personal Data */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-[10px] font-black uppercase tracking-widest text-pinheirao-black mb-3">Seu Nome Completo *</label>
                    <input 
                      required 
                      name="name"
                      type="text" 
                      value={formData.name}
                      onChange={handleInputChange}
                      className="w-full px-5 py-4 bg-pinheirao-concrete/20 border border-gray-100 rounded-sm focus:outline-none focus:border-pinheirao-green font-medium transition-all" 
                      placeholder="Ex: João Silva" 
                    />
                  </div>
                  <div>
                    <label className="block text-[10px] font-black uppercase tracking-widest text-pinheirao-black mb-3">WhatsApp / Telefone *</label>
                    <input 
                      required 
                      name="whatsapp"
                      type="tel" 
                      value={formData.whatsapp}
                      onChange={handleInputChange}
                      className="w-full px-5 py-4 bg-pinheirao-concrete/20 border border-gray-100 rounded-sm focus:outline-none focus:border-pinheirao-green font-medium transition-all" 
                      placeholder="(41) 99999-9999" 
                    />
                  </div>
                </div>

                {/* Project Details */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-[10px] font-black uppercase tracking-widest text-pinheirao-black mb-3">Tipo de Construção *</label>
                    <select 
                      required 
                      name="type"
                      value={formData.type}
                      onChange={handleInputChange}
                      className="w-full px-5 py-4 bg-pinheirao-concrete/20 border border-gray-100 rounded-sm focus:outline-none focus:border-pinheirao-green font-medium transition-all appearance-none"
                    >
                      <option value="">Selecione...</option>
                      <option value="Casas de Madeira">Casa de Madeira</option>
                      <option value="Casas de Alvenaria">Casa de Alvenaria</option>
                      <option value="Sobrados">Sobrado</option>
                      <option value="Triplex">Triplex</option>
                    </select>
                  </div>
                  <div>
                    <label className="block text-[10px] font-black uppercase tracking-widest text-pinheirao-black mb-3">Metragem Aproximada (m²)</label>
                    <input 
                      name="size"
                      type="number" 
                      value={formData.size}
                      onChange={handleInputChange}
                      className="w-full px-5 py-4 bg-pinheirao-concrete/20 border border-gray-100 rounded-sm focus:outline-none focus:border-pinheirao-green font-medium transition-all" 
                      placeholder="Ex: 80" 
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-[10px] font-black uppercase tracking-widest text-pinheirao-black mb-3">Localização do Terreno (Cidade/Bairro) *</label>
                  <input 
                    required 
                    name="location"
                    type="text" 
                    value={formData.location}
                    onChange={handleInputChange}
                    className="w-full px-5 py-4 bg-pinheirao-concrete/20 border border-gray-100 rounded-sm focus:outline-none focus:border-pinheirao-green font-medium transition-all" 
                    placeholder="Ex: Pinhais - Centro" 
                  />
                </div>

                <div>
                  <label className="block text-[10px] font-black uppercase tracking-widest text-pinheirao-black mb-3">Upload de Referência (Opcional)</label>
                  <div className="border-2 border-dashed border-pinheirao-concrete rounded-sm p-10 text-center bg-pinheirao-concrete/5 hover:bg-pinheirao-concrete/20 transition-all cursor-pointer group">
                    <input type="file" className="hidden" id="file-upload" />
                    <label htmlFor="file-upload" className="cursor-pointer">
                      <Upload className="mx-auto text-pinheirao-green mb-4 group-hover:scale-110 transition-transform" size={32} />
                      <p className="text-pinheirao-black text-xs font-black uppercase tracking-widest">Arraste arquivos aqui ou clique para selecionar</p>
                      <p className="text-pinheirao-gray text-[9px] font-bold uppercase mt-2">PDF, JPG ou PNG (Máx 5MB)</p>
                    </label>
                  </div>
                </div>

                <div>
                  <label className="block text-[10px] font-black uppercase tracking-widest text-pinheirao-black mb-3">Observações Adicionais</label>
                  <textarea 
                    name="notes"
                    rows={4} 
                    value={formData.notes}
                    onChange={handleInputChange}
                    className="w-full px-5 py-4 bg-pinheirao-concrete/20 border border-gray-100 rounded-sm focus:outline-none focus:border-pinheirao-green font-medium transition-all" 
                    placeholder="Descreva detalhes como número de quartos, banheiros, etc."
                  ></textarea>
                </div>

                <div className="flex flex-col md:flex-row items-center gap-6 pt-6">
                  <button 
                    disabled={loading}
                    type="submit" 
                    className="w-full md:w-fit bg-pinheirao-green text-white px-14 py-5 rounded-sm font-black text-xs uppercase tracking-widest hover:bg-pinheirao-deep transition-all shadow-xl disabled:opacity-50 flex items-center justify-center"
                  >
                    {loading ? 'Enviando...' : 'Enviar Projeto'}
                    <Send size={16} className="ml-3" />
                  </button>
                  <a 
                    href="https://api.whatsapp.com/send?phone=5541996301028" 
                    className="w-full md:w-fit border-2 border-pinheirao-black text-pinheirao-black font-black text-xs uppercase tracking-widest px-14 py-5 rounded-sm hover:bg-pinheirao-black hover:text-white transition-all flex items-center justify-center"
                  >
                    Falar via WhatsApp
                    <MessageSquare size={16} className="ml-3" />
                  </a>
                </div>
              </form>
            </div>
          )}
        </div>
      </section>
    </div>
  );
};
