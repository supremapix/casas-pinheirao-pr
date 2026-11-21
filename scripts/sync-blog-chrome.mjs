/** Render the shared static blog header/footer explicitly: node scripts/sync-blog-chrome.mjs */
import { readdir, readFile, writeFile } from 'node:fs/promises';
import { join } from 'node:path';

const logo = '/casas-pinheirao-logo-transparente.png';
const footerLogo = 'https://customer-assets.emergentagent.com/job_080d002f-6297-4f5e-a48d-6da71945e6dc/artifacts/rdj2t1qt_logo-rodape%20%282%29.png';
const whatsapp = 'https://api.whatsapp.com/send?phone=5541996301028';
const phone = 'tel:4136678015';
const maps = 'https://www.google.com/maps/dir//Av.+Jacob+Macanhan,+1369+-+Jardim+Claudia,+Pinhais+-+PR';
const items = [['Home','/'],['Empresa','/#/empresa'],['Modelos','/#/projetos'],['Envie seu Projeto','/#/envie-seu-projeto'],['Contato','/#/contato'],['Blog','/blog/']];
const phoneIcon = '<svg width="19" height="19" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="M22 16.9v3a2 2 0 0 1-2.2 2A19.8 19.8 0 0 1 3.1 5.2 2 2 0 0 1 5.1 3h3a2 2 0 0 1 2 1.7l.6 2.9a2 2 0 0 1-.6 2l-1.3 1.3a16 16 0 0 0 6.3 6.3l1.3-1.3a2 2 0 0 1 2-.6l2.9.6a2 2 0 0 1 1.7 2z"/></svg>';
const msgIcon = '<svg width="19" height="19" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="M21 11.5a8.4 8.4 0 0 1-.9 3.8 8.5 8.5 0 0 1-7.6 4.7 8.4 8.4 0 0 1-3.8-.9L3 21l1.9-5.7a8.4 8.4 0 0 1-.9-3.8 8.5 8.5 0 0 1 4.7-7.6 8.4 8.4 0 0 1 3.8-.9h.5a8.5 8.5 0 0 1 8 8z"/></svg>';
const menuIcon = '<svg width="25" height="25" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" aria-hidden="true"><path d="M4 6h16M4 12h16M4 18h16"/></svg>';
const links = (asList=false) => items.map(([label,url]) => {
  const a = `<a href="${url}"${label==='Blog' ? ' aria-current="location"' : ''}>${label}</a>`;
  return asList ? `<li>${a}</li>` : a;
}).join('');
const call = (prefix='') => `<a class="blog-call" href="${phone}">${phoneIcon} ${prefix}(41) 3667-8015</a>`;
const chat = (label='WhatsApp') => `<a class="blog-whatsapp" href="${whatsapp}">${msgIcon} ${label}</a>`;
const font = '<link data-blog-font href="https://fonts.googleapis.com/css2?family=Montserrat:wght@400;500;600;700;900&amp;display=swap" rel="stylesheet">';
const header = `<header class="blog-header"><div class="wrap blog-top">
  <a class="blog-brand" href="/"><img src="${logo}" alt="Casas Pinheirão"></a>
  <nav class="blog-desktop-nav" aria-label="Navegação principal">${links()}</nav>
  <div class="blog-desktop-contact">${call()}${chat()}</div>
  <details class="blog-mobile-nav"><summary>${menuIcon} Menu</summary><div class="blog-mobile-panel"><nav aria-label="Navegação principal para celular">${links()}</nav><div class="blog-mobile-contact">${call('Ligar: ')}${chat('Chamar no WhatsApp')}</div></div></details>
</div></header>`;
const footer = `<footer class="blog-footer"><div class="wrap">
  <div class="blog-footer-cols">
    <div><a class="blog-footer-brand" href="/"><img src="${footerLogo}" alt="Casas Pinheirão" loading="lazy"></a><p>Casas de madeira e alvenaria sob medida em Pinhais, Curitiba e região.</p><div class="blog-social"><a href="https://instagram.com/casas_pinheirao">Instagram</a><a href="https://facebook.com/casasprefabricadapinheirao">Facebook</a></div></div>
    <div><h2>Navegação</h2><ul>${links(true)}</ul></div>
    <div><h2>Atendimento direto</h2><address class="blog-contact-card"><a href="${maps}">Av. Jacob Macanhan, 1369<br>Jardim Cláudia · Pinhais/PR</a><a href="${phone}">${phoneIcon} (41) 3667-8015</a><a href="${whatsapp}">${msgIcon} (41) 99630-1028</a><a href="mailto:casaspinheirao@casaspinheirao.com.br">casaspinheirao@casaspinheirao.com.br</a></address></div>
    <div><h2>Horários da sede</h2><dl class="blog-schedule"><dt>Segunda a sexta</dt><dd>08:30 às 18:00</dd><dt>Sábado</dt><dd>09:00 às 13:00</dd></dl></div>
  </div>
  <div class="blog-legal"><p>© 2026 Casas Pinheirão · Todos os direitos reservados.</p><a href="/#/politica-de-privacidade">Política de Privacidade</a></div>
  <p class="blog-credit">Desenvolvido com <span aria-label="carinho">♥</span> por <a href="https://supremasite.com.br">Suprema Sites Express</a></p>
</div></footer>`;
for (const name of [join('public/blog','index.html'), ...(await readdir('public/blog',{withFileTypes:true})).filter(d=>d.isDirectory()).map(d=>join('public/blog',d.name,'index.html'))]) {
  const src = await readFile(name,'utf8');
  if (!/<header\b[\s\S]*?<\/header>/.test(src) || !/<footer\b[\s\S]*?<\/footer>/.test(src)) throw new Error('Missing site chrome: '+name);
  await writeFile(name,src.replace(/<link data-blog-font[^>]*>/,'').replace('</head>',font+'\n</head>').replace(/<header\b[\s\S]*?<\/header>/,header).replace(/<footer\b[\s\S]*?<\/footer>/,footer));
}
