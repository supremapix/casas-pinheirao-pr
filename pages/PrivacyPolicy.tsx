import React from 'react';
import { EnhancedSEO } from '../components/EnhancedSEO';
import { Shield, Lock, Eye, FileText, Mail, Phone, MapPin } from 'lucide-react';

export const PrivacyPolicy: React.FC = () => {
  return (
    <div className="pt-20">
      <EnhancedSEO
        title="Politica de Privacidade - Casas Pinheirao"
        description="Politica de Privacidade da Casas Pinheirao. Saiba como coletamos, usamos e protegemos suas informacoes pessoais."
        canonical="/politica-de-privacidade"
        keywords="politica de privacidade, LGPD, protecao de dados, Casas Pinheirao"
      />

      {/* Page Header */}
      <section className="bg-pinheirao-concrete/30 py-16 md:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="flex justify-center mb-6">
            <div className="bg-pinheirao-green/10 p-4 rounded-full">
              <Shield size={48} className="text-pinheirao-green" />
            </div>
          </div>
          <h2 className="text-xs font-black uppercase tracking-[0.4em] text-pinheirao-green mb-6">Transparencia e Seguranca</h2>
          <h1 className="text-4xl md:text-5xl font-black text-pinheirao-black mb-6">Politica de Privacidade</h1>
          <p className="text-pinheirao-gray max-w-2xl mx-auto text-lg leading-relaxed font-medium">
            Sua privacidade e importante para nos. Conheca como tratamos seus dados pessoais.
          </p>
        </div>
      </section>

      {/* Content Section */}
      <section className="py-16 md:py-24 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          
          {/* Introduction */}
          <div className="mb-12">
            <p className="text-pinheirao-gray text-lg leading-relaxed font-medium">
              A <strong className="text-pinheirao-black">Casas Pinheirao</strong> esta comprometida com a protecao da privacidade e dos dados pessoais de seus clientes, 
              parceiros e visitantes do site. Esta Politica de Privacidade descreve como coletamos, usamos, armazenamos e protegemos suas informacoes, 
              em conformidade com a Lei Geral de Protecao de Dados (LGPD - Lei n 13.709/2018).
            </p>
          </div>

          {/* Section 1 */}
          <div className="mb-12">
            <div className="flex items-center gap-4 mb-6">
              <div className="bg-pinheirao-green/10 p-3 rounded-full">
                <FileText size={24} className="text-pinheirao-green" />
              </div>
              <h2 className="text-2xl font-black text-pinheirao-black uppercase tracking-tight">1. Dados Coletados</h2>
            </div>
            <div className="pl-14 space-y-4 text-pinheirao-gray leading-relaxed font-medium">
              <p>Podemos coletar os seguintes tipos de dados pessoais:</p>
              <ul className="list-disc pl-6 space-y-2">
                <li><strong className="text-pinheirao-black">Dados de identificacao:</strong> nome completo, CPF, RG, data de nascimento;</li>
                <li><strong className="text-pinheirao-black">Dados de contato:</strong> endereco, telefone, e-mail;</li>
                <li><strong className="text-pinheirao-black">Dados de navegacao:</strong> endereco IP, tipo de navegador, paginas visitadas, tempo de permanencia;</li>
                <li><strong className="text-pinheirao-black">Dados do projeto:</strong> informacoes sobre o terreno, preferencias de construcao, orcamentos solicitados;</li>
                <li><strong className="text-pinheirao-black">Dados financeiros:</strong> quando necessario para analise de credito ou financiamento.</li>
              </ul>
            </div>
          </div>

          {/* Section 2 */}
          <div className="mb-12">
            <div className="flex items-center gap-4 mb-6">
              <div className="bg-pinheirao-green/10 p-3 rounded-full">
                <Eye size={24} className="text-pinheirao-green" />
              </div>
              <h2 className="text-2xl font-black text-pinheirao-black uppercase tracking-tight">2. Finalidade do Tratamento</h2>
            </div>
            <div className="pl-14 space-y-4 text-pinheirao-gray leading-relaxed font-medium">
              <p>Utilizamos seus dados pessoais para:</p>
              <ul className="list-disc pl-6 space-y-2">
                <li>Atender solicitacoes de orcamento e informacoes sobre nossos projetos;</li>
                <li>Elaborar propostas comerciais personalizadas;</li>
                <li>Executar contratos de construcao e prestacao de servicos;</li>
                <li>Enviar comunicacoes sobre o andamento de projetos;</li>
                <li>Realizar analises de credito quando aplicavel;</li>
                <li>Enviar novidades, promocoes e conteudos relevantes (mediante consentimento);</li>
                <li>Melhorar nossos servicos e a experiencia de navegacao no site;</li>
                <li>Cumprir obrigacoes legais e regulatorias.</li>
              </ul>
            </div>
          </div>

          {/* Section 3 */}
          <div className="mb-12">
            <div className="flex items-center gap-4 mb-6">
              <div className="bg-pinheirao-green/10 p-3 rounded-full">
                <Lock size={24} className="text-pinheirao-green" />
              </div>
              <h2 className="text-2xl font-black text-pinheirao-black uppercase tracking-tight">3. Compartilhamento de Dados</h2>
            </div>
            <div className="pl-14 space-y-4 text-pinheirao-gray leading-relaxed font-medium">
              <p>Seus dados podem ser compartilhados com:</p>
              <ul className="list-disc pl-6 space-y-2">
                <li><strong className="text-pinheirao-black">Parceiros de financiamento:</strong> instituicoes financeiras para analise de credito;</li>
                <li><strong className="text-pinheirao-black">Fornecedores e prestadores de servicos:</strong> que auxiliam na execucao dos projetos;</li>
                <li><strong className="text-pinheirao-black">Autoridades publicas:</strong> quando exigido por lei ou ordem judicial;</li>
                <li><strong className="text-pinheirao-black">Plataformas de marketing:</strong> para envio de comunicacoes (com seu consentimento).</li>
              </ul>
              <p className="mt-4">
                <strong className="text-pinheirao-black">Importante:</strong> Nunca vendemos ou alugamos seus dados pessoais para terceiros.
              </p>
            </div>
          </div>

          {/* Section 4 */}
          <div className="mb-12">
            <div className="flex items-center gap-4 mb-6">
              <div className="bg-pinheirao-green/10 p-3 rounded-full">
                <Shield size={24} className="text-pinheirao-green" />
              </div>
              <h2 className="text-2xl font-black text-pinheirao-black uppercase tracking-tight">4. Seguranca dos Dados</h2>
            </div>
            <div className="pl-14 space-y-4 text-pinheirao-gray leading-relaxed font-medium">
              <p>
                Adotamos medidas tecnicas e organizacionais para proteger seus dados pessoais contra acesso nao autorizado, 
                perda, alteracao ou destruicao, incluindo:
              </p>
              <ul className="list-disc pl-6 space-y-2">
                <li>Criptografia de dados sensiveis;</li>
                <li>Controle de acesso restrito a informacoes;</li>
                <li>Treinamento de colaboradores sobre protecao de dados;</li>
                <li>Monitoramento e auditoria de sistemas.</li>
              </ul>
            </div>
          </div>

          {/* Section 5 */}
          <div className="mb-12">
            <div className="flex items-center gap-4 mb-6">
              <div className="bg-pinheirao-green/10 p-3 rounded-full">
                <FileText size={24} className="text-pinheirao-green" />
              </div>
              <h2 className="text-2xl font-black text-pinheirao-black uppercase tracking-tight">5. Seus Direitos</h2>
            </div>
            <div className="pl-14 space-y-4 text-pinheirao-gray leading-relaxed font-medium">
              <p>De acordo com a LGPD, voce tem direito a:</p>
              <ul className="list-disc pl-6 space-y-2">
                <li>Confirmar a existencia de tratamento de seus dados;</li>
                <li>Acessar seus dados pessoais;</li>
                <li>Corrigir dados incompletos, inexatos ou desatualizados;</li>
                <li>Solicitar a anonimizacao, bloqueio ou eliminacao de dados desnecessarios;</li>
                <li>Solicitar a portabilidade dos dados;</li>
                <li>Revogar o consentimento a qualquer momento;</li>
                <li>Obter informacoes sobre entidades com as quais compartilhamos seus dados.</li>
              </ul>
            </div>
          </div>

          {/* Section 6 */}
          <div className="mb-12">
            <div className="flex items-center gap-4 mb-6">
              <div className="bg-pinheirao-green/10 p-3 rounded-full">
                <Eye size={24} className="text-pinheirao-green" />
              </div>
              <h2 className="text-2xl font-black text-pinheirao-black uppercase tracking-tight">6. Cookies e Tecnologias</h2>
            </div>
            <div className="pl-14 space-y-4 text-pinheirao-gray leading-relaxed font-medium">
              <p>
                Nosso site utiliza cookies e tecnologias semelhantes para melhorar sua experiencia de navegacao, 
                analisar o trafego e personalizar conteudo. Voce pode gerenciar suas preferencias de cookies 
                atraves das configuracoes do seu navegador.
              </p>
              <p>Tipos de cookies utilizados:</p>
              <ul className="list-disc pl-6 space-y-2">
                <li><strong className="text-pinheirao-black">Cookies essenciais:</strong> necessarios para o funcionamento do site;</li>
                <li><strong className="text-pinheirao-black">Cookies de desempenho:</strong> coletam informacoes sobre como voce usa o site;</li>
                <li><strong className="text-pinheirao-black">Cookies de marketing:</strong> utilizados para exibir anuncios relevantes.</li>
              </ul>
            </div>
          </div>

          {/* Section 7 */}
          <div className="mb-12">
            <div className="flex items-center gap-4 mb-6">
              <div className="bg-pinheirao-green/10 p-3 rounded-full">
                <FileText size={24} className="text-pinheirao-green" />
              </div>
              <h2 className="text-2xl font-black text-pinheirao-black uppercase tracking-tight">7. Retencao de Dados</h2>
            </div>
            <div className="pl-14 space-y-4 text-pinheirao-gray leading-relaxed font-medium">
              <p>
                Mantemos seus dados pessoais pelo tempo necessario para cumprir as finalidades para as quais foram coletados, 
                incluindo obrigacoes legais, contratuais e regulatorias. Apos esse periodo, os dados serao eliminados ou anonimizados.
              </p>
            </div>
          </div>

          {/* Section 8 */}
          <div className="mb-12">
            <div className="flex items-center gap-4 mb-6">
              <div className="bg-pinheirao-green/10 p-3 rounded-full">
                <FileText size={24} className="text-pinheirao-green" />
              </div>
              <h2 className="text-2xl font-black text-pinheirao-black uppercase tracking-tight">8. Alteracoes nesta Politica</h2>
            </div>
            <div className="pl-14 space-y-4 text-pinheirao-gray leading-relaxed font-medium">
              <p>
                Esta Politica de Privacidade pode ser atualizada periodicamente. Recomendamos que voce a consulte regularmente. 
                Alteracoes significativas serao comunicadas atraves de nossos canais oficiais.
              </p>
              <p className="mt-4">
                <strong className="text-pinheirao-black">Ultima atualizacao:</strong> Janeiro de 2025
              </p>
            </div>
          </div>

          {/* Contact Section */}
          <div className="bg-pinheirao-concrete/20 rounded-lg p-8 mt-16">
            <h2 className="text-2xl font-black text-pinheirao-black uppercase tracking-tight mb-6 text-center">Fale Conosco</h2>
            <p className="text-pinheirao-gray text-center mb-8 font-medium">
              Para exercer seus direitos ou esclarecer duvidas sobre esta Politica de Privacidade, entre em contato:
            </p>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <div className="flex items-center gap-4">
                <div className="bg-pinheirao-green/10 p-3 rounded-full">
                  <Mail size={20} className="text-pinheirao-green" />
                </div>
                <div>
                  <p className="text-xs font-black uppercase tracking-widest text-pinheirao-green mb-1">E-mail</p>
                  <p className="text-sm text-pinheirao-gray font-medium">casaspinheirao@casaspinheirao.com.br</p>
                </div>
              </div>
              <div className="flex items-center gap-4">
                <div className="bg-pinheirao-green/10 p-3 rounded-full">
                  <Phone size={20} className="text-pinheirao-green" />
                </div>
                <div>
                  <p className="text-xs font-black uppercase tracking-widest text-pinheirao-green mb-1">Telefone</p>
                  <p className="text-sm text-pinheirao-gray font-medium">(41) 3667-8015</p>
                </div>
              </div>
              <div className="flex items-center gap-4">
                <div className="bg-pinheirao-green/10 p-3 rounded-full">
                  <MapPin size={20} className="text-pinheirao-green" />
                </div>
                <div>
                  <p className="text-xs font-black uppercase tracking-widest text-pinheirao-green mb-1">Endereco</p>
                  <p className="text-sm text-pinheirao-gray font-medium">Av. Jacob Macanhan, 1369 - Pinhais/PR</p>
                </div>
              </div>
            </div>
          </div>

        </div>
      </section>
    </div>
  );
};
