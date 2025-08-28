# LUMI Terminal — Vite

A glassy cyberpunk trading cockpit built with **React + TypeScript + Vite**.  
Ready to integrate **Orderly Network** trading APIs.

## 📦 Project Structure

```
lumi-terminal-vite/
├── package.json
├── vite.config.ts
├── tsconfig.json
├── index.html
├── README.md
├── .env.example
├── vercel.json
├── .github/workflows/deploy-vercel.yml
└── src/
    ├── polyfills.ts
    ├── main.tsx
    ├── App.tsx
    └── pages/
        └── Trade.tsx
```

## ⚙️ Environment Variables

Add to `.env.local` (or your CI/CD environment):

```env
VITE_BROKER_ID=your_broker_id
VITE_NETWORK_ID=your_network_id
VITE_WALLETCONNECT_PROJECT_ID=your_walletconnect_id
```

## 🚀 Local Dev

```bash
npm install
npm run dev
```

## 🏗️ Build & Preview

```bash
npm run build
npm run preview
```

## ☁️ Deploy to Vercel (recommended)

**Option A — Vercel Git Integration (no workflow needed)**
1. Push this folder to a GitHub repo.
2. On Vercel → **New Project** → Import your repo.
3. Framework preset: **Vite** (auto-detected).
4. Build Command: `npm run build`
5. Output Directory: `dist`
6. Add environment variables from `.env.example`.
7. Deploy.

**Custom Domain (lumiterminal.com via GoDaddy)**
- In Vercel: Project → **Settings → Domains** → Add `lumiterminal.com`
- Choose **Vercel Nameservers** (recommended) or **Add DNS records** on GoDaddy:
  - If keeping GoDaddy DNS, create the following:
    - `A` record @ → Vercel IPv4 (find in Vercel DNS panel)
    - `AAAA` record @ → Vercel IPv6 (optional but recommended)
    - `CNAME` record `www` → `cname.vercel-dns.com`
- Wait for DNS to propagate, then set `www` to redirect to apex or vice versa.

**Option B — GitHub Actions (this repo includes a workflow)**  
You can deploy via CI with the **Vercel CLI** using these secrets on your GitHub repo:
- `VERCEL_TOKEN`
- `VERCEL_ORG_ID`
- `VERCEL_PROJECT_ID`

Steps:
1. In Vercel: Project → Settings → **Tokens** → Create token → copy as `VERCEL_TOKEN` (GitHub Secrets).
2. In Vercel: Get your **ORG_ID** and **PROJECT_ID** from the project settings → add as GitHub Secrets.
3. (Optional) Add your env vars in GitHub → Settings → Secrets → Actions (prefix with `VITE_…` as in `.env.example`).

The included workflow (`.github/workflows/deploy-vercel.yml`) will:
- Build on every push.
- Deploy **Preview** for non-`main` branches.
- Deploy **Production** on pushes to `main`.

## 🔐 Swapping in Orderly Components

This scaffold includes placeholders for **chart**, **orderbook**, **positions**, and an **order ticket**.
Replace those sections with components/hooks from `@orderly.network/react-app` and `@orderly.network/trading` once your keys are set.
