// script for SKIINBOX: small interactions
document.addEventListener('DOMContentLoaded',function(){
  // reveal on scroll
  const io = new IntersectionObserver((entries)=>{entries.forEach(e=>{if(e.isIntersecting){e.target.classList.add('visible')}})},{threshold:0.12});
  document.querySelectorAll('.section, .hero').forEach(el=>io.observe(el));
  // subscribe form
  document.getElementById('subscribeForm')?.addEventListener('submit',function(e){e.preventDefault();alert('Gracias por suscribirte — revisa tu email.');e.target.reset();});
  // contact form
  document.getElementById('contactForm')?.addEventListener('submit',function(e){e.preventDefault();alert('Mensaje enviado. Responderemos en 24h.');e.target.reset();});
});