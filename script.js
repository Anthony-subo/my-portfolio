document.addEventListener("DOMContentLoaded", () => {
  // Scroll fade-in animation
  const faders = document.querySelectorAll(".fade-in");

  const appear = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add("visible");
      }
    });
  }, {
    threshold: 0.2,
  });

  faders.forEach(fader => appear.observe(fader));
});

// Lightbox gallery logic
const images = {
  about: [
    'images/about1.jpg',
    'images/about2.jpg',
    'images/about3.jpg',
    'images/about4.jpg'
  ],
  projects: [
    'images/project1.jpg',
    'images/project2.jpg'
  ]
};

let currentGroup = 'about';
let currentIndex = 0;

function openLightbox(group, index) {
  currentGroup = group;
  currentIndex = index;
  document.getElementById('lightbox-image').src = images[group][index];
  document.getElementById('lightbox-modal').style.display = 'flex';
}

function closeLightbox() {
  document.getElementById('lightbox-modal').style.display = 'none';
}

function changeSlide(direction) {
  currentIndex += direction;
  const groupImages = images[currentGroup];
  if (currentIndex < 0) currentIndex = groupImages.length - 1;
  if (currentIndex >= groupImages.length) currentIndex = 0;
  document.getElementById('lightbox-image').src = groupImages[currentIndex];
}

document.addEventListener('keydown', (e) => {
  const modal = document.getElementById('lightbox-modal');
  if (modal.style.display === 'flex') {
    if (e.key === 'ArrowRight') changeSlide(1);
    if (e.key === 'ArrowLeft') changeSlide(-1);
    if (e.key === 'Escape') closeLightbox();
  }
});
