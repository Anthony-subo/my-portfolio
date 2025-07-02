document.addEventListener("DOMContentLoaded", () => {
  /* ─────────  Scroll fade-in  ───────── */
  const faders = document.querySelectorAll(".fade-in");

  const appear = new IntersectionObserver(
    entries => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add("visible");
        }
      });
    },
    { threshold: 0.2 }
  );

  faders.forEach(fader => appear.observe(fader));
});

/* ─────────  Lightbox gallery  ───────── */
const images = {
  about: [
    "images/profile.jpg",
    "images/profile2.jpg",
    "images/profile3.jpg",
    "images/profile1.jpg"
  ],
  project1: [
    "images/bursary7.png",
    "images/bursary1.png",
    "images/bursary6.png",
    "images/bursary3.png",
    "images/bursary4.png",
    "images/bursary5.png"
  ],
  project2: [
    "images/assaino.jpg",
    "images/assaino3.jpg",
    "images/assaino2.jpg" 
  ],
   project3: [
    "images/profle.jpg",
    "images/profil2.jpg",
    "images/profil3.jpg",
    "images/profil1.jpg"
  ],
  project4: [
    "images/assaino1.jpg",
    "images/assain3.jpg",
    "images/assain2.jpg"
  ]
};

let currentGroup = "about";
let currentIndex = 0;

function openLightbox(group, index) {
  currentGroup = group;
  currentIndex = index;
  document.getElementById("lightbox-image").src = images[group][index];
  document.getElementById("lightbox-modal").style.display = "flex";
}

function closeLightbox() {
  document.getElementById("lightbox-modal").style.display = "none";
}

function changeSlide(direction) {
  const groupImages = images[currentGroup];
  currentIndex = (currentIndex + direction + groupImages.length) % groupImages.length;
  document.getElementById("lightbox-image").src = groupImages[currentIndex];
}

/* ─────────  Keyboard navigation  ───────── */
document.addEventListener("keydown", e => {
  const modalVisible =
    document.getElementById("lightbox-modal").style.display === "flex";

  if (!modalVisible) return;

  switch (e.key) {
    case "ArrowRight":
      changeSlide(1);
      break;
    case "ArrowLeft":
      changeSlide(-1);
      break;
    case "Escape":
      closeLightbox();
      break;
    default:
      break;
  }
});
