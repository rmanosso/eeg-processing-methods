# Quartz Setup Guide

Step-by-step instructions to publish this vault as an interactive website using Quartz v4 and GitHub Pages.

---

## Prerequisites

- Node.js 18+ installed locally ([nodejs.org](https://nodejs.org))
- Git configured with your GitHub account
- Repository already pushed to `github.com/rmanosso/eeg-processing-methods`

---

## Step 1 — Enable GitHub Pages

1. Go to your repository on GitHub
2. **Settings** → **Pages** (left sidebar)
3. Under **Source**, select **GitHub Actions**
4. Save

---

## Step 2 — Add the workflow file

In your local repository folder, create the directory and copy the workflow:

```bash
mkdir -p .github/workflows
cp deploy.yml .github/workflows/deploy.yml
cp quartz.config.ts quartz.config.ts   # place at repo root
```

Your repo structure should look like:

```
eeg-processing-methods/
├── .github/
│   └── workflows/
│       └── deploy.yml        ← GitHub Actions workflow
├── .gitignore
├── 01_Aquisicao/
├── 02_Pre-processamento/
│   ...
├── MOC/
├── quartz.config.ts          ← Quartz configuration (repo root)
├── README.md
├── TEMPLATE.md
└── CONTRIBUTING.md
```

---

## Step 3 — Commit and push

```bash
git add .github/workflows/deploy.yml quartz.config.ts
git commit -m "ci: add Quartz deploy workflow and config"
git push origin main
```

The GitHub Action will trigger automatically. You can watch it at:
`https://github.com/rmanosso/eeg-processing-methods/actions`

Build takes about **2–3 minutes** on the first run.

---

## Step 4 — Access your site

Once the action completes, your site will be live at:

```
https://rmanosso.github.io/eeg-processing-methods
```

> You can also add this URL to your repository's **About** section on GitHub
> (gear icon next to "About" on the repo homepage) so it appears as the official website.

---

## Local preview (optional)

To preview the site locally before pushing:

```bash
# Clone Quartz alongside your vault
git clone https://github.com/jackyzha0/quartz.git
cd quartz
npm install

# Copy your vault content into Quartz
rsync -av \
  --exclude='.git' \
  --exclude='.obsidian' \
  --exclude='.github' \
  ../eeg-processing-methods/ content/

# Copy the config
cp ../eeg-processing-methods/quartz.config.ts quartz.config.ts

# Run local server
npx quartz build --serve
# → open http://localhost:8080
```

---

## Keeping the site updated

Every `git push` to `main` triggers a rebuild automatically — no manual steps needed after the initial setup.

---

## Troubleshooting

| Problem | Solution |
|---------|----------|
| Action fails on "pages not enabled" | Go to Settings → Pages → Source → GitHub Actions |
| Broken internal links | Check that `[[note name]]` matches the exact filename (case-sensitive on Linux) |
| Missing notes on site | Verify the note doesn't have `draft: true` in frontmatter |
| Site shows 404 | Wait 2–3 min after first deploy; check `baseUrl` in `quartz.config.ts` |
