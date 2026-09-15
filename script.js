/* ================================================================
   EDIT ME — this is the only file you need to touch to update
   your name, bio, links, and projects. Everything below renders
   automatically from this data.
   ================================================================ */

const SITE = {
  name: "c0d Design",
  role: "Graphic Designer",
  tagline: "All Of My Work :smile: ",

  about: "I'm a 17 Year Old Graphic Designer based in England. I curently study Graphic Design Level 3 at my local College, in which I am hoping to take further and study at a University",

  facts: [
    { label: "Based in", value: "England, UK" },
    { label: "Experience", value: "3 years" },
    { label: "Focus", value: "Graphic Design" }
  ],

  email: "contact@c0ddesign.co.uk",

  social: [
    { label: "Instagram", url: "https://www.instagram.com/c0dgd/" },
    { label: "TikTok", url: "https://www.tiktok.com/@c0dgd" }
  ]
};

/* Add a new project by copying one of these objects.
   `image` can be a local path (e.g. "images/project1.jpg")
   once you add real photos to an /images folder, or leave
   the placeholder URL for now.
   `link` should be the URL to the live project, case study,
   or Behance/Dribbble post. Leave it as "#" and the "View
   project" button will just stay hidden until you add a real one. */
const PROJECTS = [
  {
    title: "Isle Of Wight Gin",
    category: "Advertising",
    year: "2026",
    image: "image/IOWGIN.jpg",
    description: "I had the oppurtunity to create unique bus stop design's to be used by Isle Of Wight Gin",
    link: "iowgin.html"
  },
  {
    title: "People Watching: Album Cover",
    category: "Album Cover",
    year: "2025",
    image: "image/sfvf1.jpg",
    description: "This was part of my first term college project, in which I created a album cover based on Sam Fenders Album.",
    link: "pwac.html"
  },
  {
    title: "Volkswagen: Poster",
    category: "Advertising",
    year: "2025",
    image: "image/beetleland.jpg",
    description: "This was part of my first term college project, in which I created a poster for car brand Volkswagen.",
    link: "caradvert.html"
  },
  {
    title: "Matchday Posters: Man City",
    category: "Social Media",
    year: "2026-27",
    image: "image/matchday26/matchdaybanner.jpg",
    description: "I have Challenged myself to create a poster for every single match Manchester City Play in the 26-27 football season",
    link: "everymatchday.html"
  },
  {
    title: "Jurassic Park - Book Cover",
    category: "Book Cover",
    year: "2025",
    image: "image/book/FInalllev2v2v2v2v22.jpg",
    description: "This was the first project I completed for A1 Skills on my college course. In which I had to create a book cover that used a heavy mix of traditional and digital methods.",
    link: "jurassicbook.html"
  },
  {
    title: "National History Museum",
    category: "Advertisement",
    year: "2026",
    image: "image/nhm/Final_Ocean.png",
    description: "This was my big project as part of my A2 project at the end of year, in which I had to create advertisment posters for The Natural History Museum.",
    link: "nhm.html"
  },
  {
    title: "COMING SOON",
    category: "...",
    year: "...",
    image: "image/nhm/Final_Ocean.png",
    description: "This was my big project as part of my A2 project at the end of year, in which I had to create advertisment posters for The Natural History Museum.",
    link: "nhm.html"
  }
];

/* ================================================================
   RENDERING — you shouldn't need to edit below this line.
   ================================================================ */

function pad(n) { return String(n).padStart(2, "0"); }

function renderHeroMarquee() {
  const track = document.getElementById("heroMarqueeTrack");
  if (!track) return; // only present on index.html

  const repeated = Array(8).fill(`<span>${SITE.name}</span>`).join("");
  track.innerHTML = repeated + repeated; // doubled for seamless loop

  const roleEl = document.getElementById("heroRole");
  const taglineEl = document.getElementById("heroTagline");
  if (roleEl) roleEl.textContent = SITE.role;
  if (taglineEl) taglineEl.textContent = SITE.tagline;
}

function renderFooter() {
  const footerEl = document.getElementById("footerName");
  if (footerEl) footerEl.textContent = `© ${new Date().getFullYear()} ${SITE.name}`;
}

function renderTicker() {
  const tickerTrack = document.getElementById("tickerTrack");
  if (!tickerTrack) return;

  const categories = [...new Set(PROJECTS.map(p => p.category))];
  const tickerText = categories.length ? categories.join(" ✺ ") : "Selected Work";
  const tickerRepeated = Array(6).fill(`<span>${tickerText} ✺</span>`).join("");
  tickerTrack.innerHTML = tickerRepeated + tickerRepeated;
}

function renderAbout() {
  const textEl = document.getElementById("aboutText");
  if (!textEl) return; // only present on index.html

  textEl.textContent = SITE.about;
  const list = document.getElementById("aboutFacts");
  list.innerHTML = SITE.facts.map(f => `
    <li><span>${f.label}</span><span>${f.value}</span></li>
  `).join("");
}

function renderContact() {
  const emailEl = document.getElementById("contactEmail");
  if (!emailEl) return; // only present on index.html

  emailEl.textContent = SITE.email;
  emailEl.href = `mailto:${SITE.email}`;

  const socialEl = document.getElementById("contactSocial");
  socialEl.innerHTML = SITE.social.map(s => `
    <a href="${s.url}" target="_blank" rel="noopener">${s.label}</a>
  `).join("");
}

function renderGrid() {
  const stack = document.getElementById("projectStack");
  if (!stack) return; // only present on work.html

  stack.innerHTML = PROJECTS.map((p, i) => `
    <div class="project" data-index="${i}">
      <div class="project__meta">
        <span class="project__index">${pad(i + 1)}</span>
        <h3 class="project__title">${p.title}</h3>
        <span class="project__tag">${p.category} — ${p.year}</span>
      </div>
      <div class="project__frame">
        <img src="${p.image}" alt="${p.title}" loading="lazy">
      </div>
    </div>
  `).join("");

  stack.querySelectorAll(".project").forEach(el => {
    el.addEventListener("click", () => openModal(Number(el.dataset.index)));
  });

  const countEl = document.getElementById("workCount");
  if (countEl) countEl.textContent = `${pad(PROJECTS.length)} Projects`;
}

/* Modal — only present on work.html */
const modal = document.getElementById("modal");

function openModal(index) {
  const p = PROJECTS[index];
  document.getElementById("modalImage").src = p.image;
  document.getElementById("modalImage").alt = p.title;
  document.getElementById("modalCategory").textContent = `${p.category} — ${p.year}`;
  document.getElementById("modalTitle").textContent = p.title;
  document.getElementById("modalDescription").textContent = p.description;

  // If a real URL hasn't been set yet, hide the link instead of
  // pointing it at "#" (which just jumps to the top of the page).
  const linkEl = document.getElementById("modalLink");
  const hasRealLink = p.link && p.link !== "#";
  if (hasRealLink) {
    linkEl.href = p.link;
    linkEl.style.display = "";
    linkEl.textContent = "View project →";
  } else {
    linkEl.style.display = "none";
  }

  modal.hidden = false;
  document.body.style.overflow = "hidden";
}

function closeModal() {
  modal.hidden = true;
  document.body.style.overflow = "";
}

if (modal) {
  document.getElementById("modalClose").addEventListener("click", closeModal);
  modal.addEventListener("click", (e) => { if (e.target === modal) closeModal(); });
  document.addEventListener("keydown", (e) => { if (e.key === "Escape") closeModal(); });
}

/* Mobile nav toggle */
const navToggle = document.getElementById("navToggle");
const navLinks = document.querySelector(".nav__links");
navToggle.addEventListener("click", () => {
  const isOpen = navLinks.classList.toggle("is-open");
  navToggle.setAttribute("aria-expanded", String(isOpen));
});
navLinks.querySelectorAll("a").forEach(a => {
  a.addEventListener("click", () => navLinks.classList.remove("is-open"));
});

/* Init — each function checks for its own elements,
   so this same file works on both index.html and work.html */
renderHeroMarquee();
renderFooter();
renderTicker();
renderAbout();
renderContact();
renderGrid();
