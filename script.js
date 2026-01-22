document.addEventListener('DOMContentLoaded', () => {
  const cards = document.querySelectorAll('.glass-card');

  cards.forEach((card) => {
    card.addEventListener('mousemove', (e) => {
      const rect = card.getBoundingClientRect();
      const x = e.clientX - rect.left;
      const y = e.clientY - rect.top;

      const centerX = rect.width / 2;
      const centerY = rect.height / 2;

      const rotateX = (y - centerY) / 22;
      const rotateY = (centerX - x) / 22;

      card.style.transform = `rotateX(${rotateX}deg) rotateY(${rotateY}deg) translateY(-4px)`;
    });

    card.addEventListener('mouseleave', () => {
      card.style.transition = "transform 0.5s ease";
      card.style.transform = `rotateX(0deg) rotateY(0deg) translateY(0px)`;

      window.setTimeout(() => {
        card.style.transition = "";
      }, 500);
    });

    card.addEventListener('mouseenter', () => {
      card.style.transition = "none";
    });
  });
});
