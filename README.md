# sshubhan.com

My personal portfolio site: a single-page React app that presents my background, skills, projects and experience, with a downloadable CV.

**Live site: [sshubhan.com](https://sshubhan.com)**

## Tech stack

- **Framework:** React 19, built with Vite 7
- **Styling:** Tailwind CSS v4 (through the official Vite plugin)
- **Animation:** Framer Motion
- **Icons:** Lucide and React Icons
- **Navigation:** `@makotot/ghostui` Scrollspy for tracking the active section
- **Tooling:** ESLint 9 with the React Hooks and React Refresh plugins

## Features

- One scrolling page with six sections: Home, About, Skills, Projects, Experience and Contact
- A sticky navbar whose highlight pill slides to the section currently on screen
- A light/dark theme toggle that remembers the visitor's choice
- A collapsible menu for mobile screens
- Animated icons on the landing section that orbit, bob and fade, and that scale down on small screens
- Project cards linking to each project's code and live demo

## Design decisions

- **Theme set before React loads.** A small inline script in `index.html` reads the saved theme from `localStorage` and applies it to `<html>` before the app renders. This avoids the flash of the wrong theme that happens if the theme is applied only after React mounts.
- **One source of truth for the theme.** The navbar writes the theme to a `data-theme` attribute on `<html>`. Components that style themselves in JavaScript, such as the orbiting icons, watch that attribute with a `MutationObserver` instead of passing theme state through props.
- **Scroll tracking that follows the navbar's real height.** The navbar measures its own height with a `ResizeObserver` and feeds it to the scroll-spy offset. The active section stays accurate when the navbar wraps or the mobile viewport resizes.
- **Vite and Tailwind v4 instead of Create React App.** CRA is no longer maintained. Vite gives fast hot reloading and small production builds, and Tailwind v4's Vite plugin removes the separate PostCSS setup.

## What I learned

- Moving from plain HTML to React gave me much more control over the site's structure, such as splitting it into a component per section and using `useState` and `useEffect` to build the mobile menu, theme toggle and expandable experience cards.
- Learned to return cleanup functions from `useEffect`, so listeners and observers are removed when they're no longer needed, such as the resize listener each orbiting icon uses to detect mobile screens.
- Learned to use `useCallback` to stop effects from re-running on every render, which keeps the navbar highlight from snapping back to "Home" when the theme changes or the mobile menu opens.
- Fixed a bug where the orbiting icons flashed and stayed visible instead of fading away, by stopping the animation loop on hover and restarting it cleanly afterwards.
- Making the site work on phones was a challenge, especially the navbar, which needed its own collapsible menu on small screens.
- Deployed the site with Vercel, which was my first time working with DNS.
- Spent a lot of time reworking the design because I didn't plan enough at the start. Next time I'd settle the layout and animations before writing any code.

## Running it locally

You need Node.js 20.19 or later (required by Vite 7).

```bash
git clone https://github.com/ksshubhan/sshubhan.com.git
cd sshubhan.com
npm install
npm run dev        # starts a dev server at http://localhost:5173
```

Other scripts:

| Command | What it does |
| --- | --- |
| `npm run build` | Builds the production site into `dist/` |
| `npm run preview` | Serves the production build locally |
| `npm run lint` | Runs ESLint |

## Project structure

```
src/
├── App.jsx           # Lays out the sections and holds their refs
├── Navbar.jsx        # Scroll-spy navigation, theme toggle, mobile menu, CV link
├── Home.jsx          # Landing section with the animated icons
├── About.jsx
├── Skills.jsx
├── Projects.jsx      # Project data and cards
├── Experience.jsx
├── Contact.jsx
├── OrbitIcon.jsx     # Icon placed on a circle that fades and bobs in a loop
└── FloatingIcon.jsx  # Simple bobbing icon bubble
```
