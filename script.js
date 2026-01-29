document.addEventListener('DOMContentLoaded', () => {
  // --- 1. Tilt Effect for Cards (Index Page) ---
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
    });
  });

  // --- 2. Showcase Logic (Showcase Page Only) ---
  const params = new URLSearchParams(window.location.search);
  const projectId = params.get('project');
  
  // Only run if we are actually on a page with the hero display
  const heroDisplay = document.getElementById('hero-display');
  
  if (heroDisplay && projectId) {
    const project = projectData[projectId];

    if (project) {
      document.getElementById('hero-title').innerText = project.title;
      document.getElementById('hero-category').innerText = project.category;
      document.getElementById('hero-desc').innerText = project.desc;
      
      const heroImg = document.getElementById('hero-img');
      heroImg.src = project.gif || project.image;

      const techContainer = document.getElementById('hero-tech');
      techContainer.innerHTML = '';
      project.tech.forEach(t => {
        const pill = document.createElement('span');
        pill.className = 'pill'; // This picks up the CSS fix above
        pill.innerHTML = `<span class="dot"></span>${t}`;
        techContainer.appendChild(pill);
      });
    } else {
      heroDisplay.innerHTML = `<div style="text-align:center; padding: 50px;"><h2 class="intro-title">Project Not Found</h2><a href="index.html" class="glass-pill-btn">Return to Gallery</a></div>`;
    }
  }
});

const projectData = {
  "loading-screen": {
    title: "Liquid Glass Loading Screen",
    category: "Glassmorphism UI",
    desc: "A high-fidelity interface experiment inspired by the ethereal aesthetics of Final Fantasy X. This project explores liquid-style progress bars, backdrop-filter blurring, and high-frequency glow effects to create a premium, futuristic user experience.",
    tech: ["JavaScript", "CSS", "Animation"],
    image: "./assets/images/besaid_showcase.jpg",
    gif: "./assets/gifs/ffx_showcase.gif"
  },
  "mangata": {
    title: "Mangata & Gallo",
    category: "Web App",
    desc: "A comprehensive brand identity and responsive web application for a luxury jewelry boutique. The focus was on translating the 'weight' and 'shine' of jewelry into a digital format using minimalist layouts and elegant transitions.",
    tech: ["HTML", "CSS", "UI Design"],
    image: "./assets/images/mangata_gallo.jpg",
    gif: "./assets/gifs/mangata_gallo.gif"
  }
};