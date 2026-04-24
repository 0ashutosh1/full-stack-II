# Deploy All Experiments Using Netlify

## What is deployable on Netlify in this repo

Frontend/static experiments:

- exp1
- exp2
- exp3
- exp4
- exp5
- exp6
- exp8
- exp10/frontend

Backend API experiments (Flask or Node API) are not directly hosted as full servers on Netlify static hosting:

- exp7
- exp9
- exp11
- exp13
- exp10/backend

Use Render/Railway/Fly for those backends, and connect frontend apps to their public API URLs.

## One-time setup

1. Install Node.js (if not installed)
2. Login to Netlify CLI:

```powershell
npx netlify-cli login
```

## Deploy all frontend experiments in one command

From repository root:

```powershell
.\deploy-netlify-all.ps1
```

The script will:

- Build all Vite apps
- Deploy each site to Netlify using production mode
- Deploy exp10 frontend static site

## Manual deploy command (single experiment)

Example for exp4:

```powershell
cd exp4
npm install
npm run build
npx netlify-cli deploy --prod --dir dist
```

Example for exp10 frontend:

```powershell
cd exp10\frontend
npx netlify-cli deploy --prod --dir .
```

## Notes for backend experiments

If you want every experiment to have a Netlify URL, create small frontend pages on Netlify that call backend APIs deployed on Render. Backend runtime itself should remain on a backend host.
