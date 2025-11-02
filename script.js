// script for SKIINBOX: small interactions
document.addEventListener('DOMContentLoaded', function(){
  // reveal on scroll
  const io = new IntersectionObserver((entries) => {
    entries.forEach(e => { if(e.isIntersecting) e.target.classList.add('visible'); });
  }, { threshold: 0.12 });
  document.querySelectorAll('.section, .hero').forEach(el => io.observe(el));

  // subscribe form
  const subscribe = document.getElementById('subscribeForm');
  if (subscribe) subscribe.addEventListener('submit', function(e){
    e.preventDefault();
    alert('Gracias por suscribirte — revisa tu email.');
    e.target.reset();
  });

  // contact form
  const contact = document.getElementById('contactForm');
  if (contact) contact.addEventListener('submit', function(e){
    e.preventDefault();
    alert('Mensaje enviado. Responderemos en 24h.');
    e.target.reset();
  });

  // plan click to update recommended
  document.querySelectorAll('.plan').forEach(p => {
    p.addEventListener('click', () => {
      const id = p.dataset.id || 'standard';
      const titles = { basic: 'Básico', standard: 'Estándar', premium: 'Premium' };
      document.getElementById('recommended').textContent = 'Plan recomendado: ' + (titles[id] || 'Estándar');
      window.scrollTo({ top: 0, behavior: 'smooth' });
    });
  });
});
