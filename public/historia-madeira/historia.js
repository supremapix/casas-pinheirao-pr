(() => {
  if (!('IntersectionObserver' in window) || window.matchMedia('(prefers-reduced-motion: reduce)').matches) return;
  const observer = new IntersectionObserver(items => {
    for (const item of items) if (item.isIntersecting) {
      item.target.classList.add('ph-appear');
      observer.unobserve(item.target);
    }
  }, { threshold: .15 });
  for (const card of document.querySelectorAll('[data-ph-animate]')) observer.observe(card);
})();
