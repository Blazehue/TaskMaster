# 📝 TaskMaster
A lightweight, fast **task management web app** built with **React + TypeScript** and **Vite**, styled with **Tailwind CSS**. Includes **Drizzle ORM** scaffolding for typed, migration-first database workflows and deployable on **Vercel**.

---

<p align="center">
  <a href="https://reactjs.org/"><img src="https://img.shields.io/badge/React-20232A?style=for-the-badge&logo=react&logoColor=61DAFB" alt="React" /></a>
  <a href="https://www.typescriptlang.org/"><img src="https://img.shields.io/badge/TypeScript-007ACC?style=for-the-badge&logo=typescript&logoColor=white" alt="TypeScript" /></a>
  <a href="https://vitejs.dev/"><img src="https://img.shields.io/badge/Vite-646CFF?style=for-the-badge&logo=vite&logoColor=white" alt="Vite" /></a>
  <a href="https://tailwindcss.com/"><img src="https://img.shields.io/badge/TailwindCSS-38B2AC?style=for-the-badge&logo=tailwind-css&logoColor=white" alt="Tailwind CSS" /></a>
  <a href="https://orm.drizzle.team/"><img src="https://img.shields.io/badge/Drizzle-FFBE2E?style=for-the-badge&logo=drizzle&logoColor=black" alt="Drizzle" /></a>
  <a href="https://vercel.com/"><img src="https://img.shields.io/badge/Vercel-000000?style=for-the-badge&logo=vercel&logoColor=white" alt="Vercel" /></a>
  <a href="LICENSE"><img src="https://img.shields.io/badge/License-MIT-green.svg?style=for-the-badge" alt="License: MIT" /></a>
</p>

---

🔗 **Live Demo:** [TaskMaster](https://task-master-v1-seven.vercel.app)

---

## ✨ Features

- ⚡ Lightning-fast dev/build with **Vite**
- 🧩 Strictly typed components with **TypeScript**
- 🎨 Beautiful UI with **Tailwind CSS**
- 🗃️ Optional **Drizzle ORM** setup for database + migrations
- 🚀 Ready-to-deploy on **Vercel**

---

## 🧱 Tech Stack

- **Frontend:** React, TypeScript, Vite  
- **Styling:** Tailwind CSS  
- **ORM (Optional):** Drizzle ORM  
- **Deployment:** Vercel  

## 📁 Project Structure

```bash
TaskMasterV1/
├── dist/                  # Production build output (generated after build)
├── drizzle/               # Drizzle ORM migrations & schema files
├── public/                # Static assets (served as-is)
├── src/                   # Application source code
│   ├── components/        # Reusable React components
│   ├── pages/             # Page-level components
│   ├── hooks/             # Custom React hooks
│   ├── styles/            # Tailwind / global styles
│   ├── utils/             # Helper functions
│   └── main.tsx           # App entry point
│
├── .gitignore             # Git ignored files
├── drizzle.config.ts      # Drizzle ORM configuration
├── env.example            # Example environment variables
├── index.html             # Vite entry HTML
├── package.json           # Project metadata & scripts
├── postcss.config.mjs     # PostCSS configuration
├── tailwind.config.js     # TailwindCSS configuration
├── tsconfig.json          # TypeScript configuration
├── tsconfig.node.json     # TS config for Node tooling
└── vite.config.ts         # Vite build configuration

```

## ⚙️ Prerequisites

- **Node.js** ≥ 18  
- **Package Manager:** npm / pnpm / yarn / bun  
  _(a `bun.lock` exists → Bun is supported)_  

---

## 🚀 Getting Started

### 1. Clone and Install
```bash
git clone https://github.com/Blazehue/TaskMasterV1.git
cd TaskMasterV1

# choose one
npm install
# pnpm install
# yarn install
# bun install
``` 
2. Run Development Server
``` bash
Copy code
npm run dev
````

3. Build & Preview
```bash
Copy code
npm run build
npm run preview
```
---

### 🔐 Environment Variables
Copy .env.example → .env.local

```bash
Copy code
cp env.example .env.local
Fill in values (e.g., DATABASE_URL, etc.).
```

---

### 🗄️ Database (Drizzle ORM)
If using Drizzle:

```bash
Copy code
# Generate migrations
npx drizzle-kit generate

# Push migrations
npx drizzle-kit push

# Open studio
npx drizzle-kit studio
```

---

### 🧪 Linting & Formatting

```bash
Copy code
npm run lint
npm run format
```
---

### 📝 License

This project is licensed under the [MIT License](!LICENSE).
