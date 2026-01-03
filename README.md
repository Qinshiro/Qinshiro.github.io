# GitHub Pages — Mid Bot Developer (JavaScript)

This is a dynamic personal landing page for GitHub Pages (github.io).
Features:
- Typewriter headline
- Scroll reveal animation
- Project filtering + search
- Project details modal
- Light/Dark mode toggle (saved via localStorage)
- WIB clock (Asia/Jakarta)
- Responsive layout + mobile drawer menu

## Setup
1. Create a repository:
   - For User Pages: `USERNAME.github.io`
2. Put these files in the repository root:
   - `_config.yml`, `index.html`, `style.css`, `script.js`
3. Add your background image:
   - `myTheme/V1/Assets/background.png`
   - If your filename differs, update `--bg-image` in `style.css`.

## Configure
Edit `_config.yml`:
- `title`, `description`
- `url: "https://USERNAME.github.io"`
- `social` links (Instagram, Discord Server, GitHub, Email)

## Enable GitHub Pages
Repo → Settings → Pages:
- Source: `Deploy from a branch`
- Branch: `main` (root)

Then open:
`https://USERNAME.github.io`

## Customize content
- Update section text directly in `index.html`
- Add more project cards in `#projectGrid` and add matching modal entry in `script.js`

## Notes
- This site works with GitHub Pages + Jekyll (Liquid variables in HTML).
- If you want purely static HTML, replace `{{ ... }}` with plain text.
