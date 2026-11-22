(() => {
  if (typeof HTMLDialogElement === 'undefined' || !HTMLDialogElement.prototype.showModal) return;
  let dialog;
  let openedBy;
  const close = () => { if (dialog?.open) dialog.close(); };
  function build() {
    dialog = document.createElement('dialog');
    dialog.className = 'pin-plan-dialog';
    dialog.setAttribute('aria-labelledby', 'pin-plan-dialog-title');
    dialog.setAttribute('aria-describedby', 'pin-plan-dialog-note');
    dialog.innerHTML = '<div class="pin-plan-dialog__heading"><h2 id="pin-plan-dialog-title">Exemplo ilustrativo de planta baixa</h2><button type="button" autofocus>Fechar imagem</button></div><p id="pin-plan-dialog-note">As medidas são apenas ilustrativas. A imagem não representa um modelo do catálogo nem substitui o projeto técnico.</p><img alt="" width="1290" height="1602" decoding="async">';
    dialog.querySelector('button').addEventListener('click', close);
    dialog.addEventListener('close', () => {
      if (openedBy?.isConnected) openedBy.focus({ preventScroll: true });
      openedBy = null;
    });
    document.body.append(dialog);
    return dialog;
  }
  document.addEventListener('click', event => {
    const trigger=event.target.closest?.('.pin-plan-open');
    if (!trigger || event.defaultPrevented || event.button !== 0 || event.metaKey || event.ctrlKey || event.shiftKey || event.altKey) return;
    const active=dialog ?? build(), img=active.querySelector('img');
    openedBy=trigger;
    const furnished=trigger.dataset.kind==='furnished';
    active.querySelector('h2').textContent=furnished?'Vista mobiliada ilustrativa':'Marcação ilustrativa no terreno';
    img.width=furnished?1080:1290;
    img.height=furnished?1350:1602;
    img.alt=trigger.closest('figure').querySelector('img').alt;
    if (img.getAttribute('src')!==trigger.getAttribute('href')) img.src=trigger.getAttribute('href');
    try { active.showModal(); event.preventDefault(); }
    catch { openedBy=null; }
  });
  window.addEventListener('popstate',close);
  window.addEventListener('hashchange',close);
})();
