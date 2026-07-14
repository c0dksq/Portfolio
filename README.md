# How do i work this guide

A guide to remind myself how to work this thing

## Pages

- **`index.html`** — the homepage: hero, about, and contact.
- **`work.html`** — the full project archive. This is where the "See the work" button and the "Work" nav link both go. Every project you add to `PROJECTS` shows up here automatically, and clicking any project opens a quick-preview panel with its image and description.
- **`project-template.html`** — a blank case-study page you duplicate for each project that deserves a full write-up (see below).

## Creating a full case-study page

The quick-preview panel on `work.html` is good for a short blurb, but for real insight into a project — the brief, your process, extra images — duplicate the template into its own page.

1. **Copy `project-template.html`** in the same folder and rename it, e.g. `marea-coffee-rebrand.html`. Keep it lowercase with hyphens instead of spaces (this becomes part of the URL).
2. **Open the new file** and edit everything marked `EDIT:` in a comment — the title, category/year, hero image, the four detail rows (Client / Role / Year / Tools), the three write-up paragraphs, and the gallery images. Delete the gallery section entirely if you only have one image.
3. **Link to it from the project card.** In `script.js`, find that project's entry in `PROJECTS` and set its `link` field to the new filename:
   ```js
   {
     title: "Marea Coffee Rebrand",
     ...
     link: "marea-coffee-rebrand.html"
   }
   ```
   Once that's set, the "View project" button in the quick-preview panel takes people straight to the full case study. If you'd rather link out to an external case study (Behance, Notion, your own subdomain), just put that URL in `link` instead — case-study pages are entirely optional per project.
4. Repeat for any other project that deserves a full page. Projects without a case-study page just show the quick preview and no "View project" button (see the earlier note on the `link` field).

## How to customize

Everything you'll want to change day-to-day lives in **`script.js`**, at the top, in two places:

- **`SITE`** — your name, role, tagline, about text, quick facts, email, and social links.
- **`PROJECTS`** — an array of project objects. This is the one list that drives `work.html` — add, remove, or reorder objects here and the page updates automatically. To add a project, copy an existing object and edit it:
  ```js
  {
    title: "Project Name",
    category: "Branding",
    year: "2026",
    image: "images/my-project.jpg",   // or a placeholder URL
    description: "A short description of the project.",
    link: "https://your-project-link.com"
  }
  ```
  - `description` and `link` are what show up when someone clicks the project on `work.html` — write a couple of sentences of real insight into the project (the brief, your role, what you made), and point `link` at the live site, case study, or Behance/Dribbble post.
  - To remove a project, delete its object. To reorder, reorder the objects — order in the array is order on the page.

You don't need to touch `index.html` or `work.html` for normal content updates.

### Adding real images

Create a folder called `images/` in the repo, drop your photos in, and point each project's `image` field at it, e.g. `images/marea-01.jpg`. Aim for images around 800×1000px (portrait) so they crop consistently in the grid.

### Changing colors and fonts

At the very top of **`style.css`** is a `:root { ... }` block with named variables (`--paper`, `--ink`, `--accent`, `--stone`, and the three font variables). Change a value there and it updates everywhere it's used. The current look uses a bold black/white base with one loud accent color (`--accent`, hot pink by default) — swap that hex for any color to instantly re-theme the marquee, ticker, and hover states.

### Marquee & ticker speed

Two looping animations drive the bold feel: the giant name banner in the hero, and the colored ticker strip above the work section. Their speeds are set in `style.css` on `.hero__marquee-track` and `.ticker__track` (`animation: marquee 22s ...` / `animation: ticker 16s ...`) — lower the seconds to speed them up.

### Buttons, links, nav items

- Nav links live in the `<nav class="nav__links">` block at the top of both `index.html` and `work.html` — edit both if you rename a section.
- Social/contact buttons come from `SITE.social` in `script.js` — add or remove entries there.
