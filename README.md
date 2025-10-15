# 📝 TaskMaster

[![React](https://img.shields.io/badge/React-20232A?style=for-the-badge&logo=react&logoColor=61DAFB)](https://reactjs.org/)
[![TypeScript](https://img.shields.io/badge/TypeScript-007ACC?style=for-the-badge&logo=typescript&logoColor=white)](https://www.typescriptlang.org/)
[![Vite](https://img.shields.io/badge/Vite-646CFF?style=for-the-badge&logo=vite&logoColor=white)](https://vitejs.dev/)
[![TailwindCSS](https://img.shields.io/badge/TailwindCSS-38B2AC?style=for-the-badge&logo=tailwind-css&logoColor=white)](https://tailwindcss.com/)
[![Drizzle](https://img.shields.io/badge/Drizzle-FFBE2E?style=for-the-badge&logo=drizzle&logoColor=black)](https://orm.drizzle.team/)
[![Vercel](https://img.shields.io/badge/Vercel-000000?style=for-the-badge&logo=vercel&logoColor=white)](https://vercel.com/)
[![License: MIT](https://img.shields.io/badge/License-MIT-green.svg?style=for-the-badge)](LICENSE)

A lightweight, fast **task management web app** built with **React + TypeScript** and **Vite**, styled with **Tailwind CSS**. Includes **Drizzle ORM** scaffolding for typed, migration-first database workflows and deployable on **Vercel**.

## 🌐 Live Demo

[TaskMaster](https://task-master-v1-seven.vercel.app)

## 📋 Overview

TaskMaster is a modern task management application designed for efficiency and ease of use. Built with cutting-edge web technologies, it provides a seamless experience for organizing your daily tasks and projects.

## ✨ Features

### Core Functionality
- ⚡ **Lightning-fast Performance**: Optimized with Vite for rapid development and build times
- 🧩 **Type Safety**: Strictly typed components with TypeScript for enhanced reliability
- 🎨 **Beautiful UI**: Modern, responsive interface styled with Tailwind CSS
- 🗃️ **Database Integration**: Optional Drizzle ORM setup for database operations and migrations
- 🚀 **Easy Deployment**: Ready-to-deploy on Vercel with minimal configuration

### Technical Features
- **Component-based Architecture**: Modular design for maintainability
- **Environment Configuration**: Flexible environment variable support
- **Code Quality Tools**: Integrated linting and formatting utilities
- **Production Ready**: Optimized build process for production deployment

## 🛠️ Technology Stack

### Frontend
- **React**: JavaScript library for building user interfaces
- **TypeScript**: Typed superset of JavaScript for enhanced development experience
- **Vite**: Next-generation frontend tooling for fast development
- **Tailwind CSS**: Utility-first CSS framework for rapid UI development

### Backend & Database
- **Drizzle ORM**: TypeScript ORM for database operations (optional)
- **Vercel**: Cloud platform for deployment and hosting

## 📁 Project Structure

```
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

## 📋 Prerequisites

- **Node.js** ≥ 18
- **Package Manager**: npm / pnpm / yarn / bun
  _(a `bun.lock` exists → Bun is supported)_

## 🚀 Getting Started

### 1. Clone and Install
```bash
git clone https://github.com/Blazehue/TaskMasterV1.git
cd TaskMasterV1

# Choose your preferred package manager
npm install
# pnpm install
# yarn install
# bun install
```

### 2. Run Development Server
```bash
npm run dev
```

### 3. Build & Preview
```bash
npm run build
npm run preview
```

## 🔐 Environment Variables

Copy [.env.example](env.example) → `.env.local`

```bash
cp env.example .env.local
```

Fill in values (e.g., DATABASE_URL, etc.).

## 🗄️ Database (Drizzle ORM)

If using Drizzle:

```bash
# Generate migrations
npx drizzle-kit generate

# Push migrations
npx drizzle-kit push

# Open studio
npx drizzle-kit studio
```

## 🧪 Linting & Formatting

```bash
npm run lint
npm run format
```

## 🤝 Contributing

Contributions are welcome! Please follow these steps:

1. Fork the repository
2. Create a new branch for your feature or bug fix
3. Make your changes and commit them with descriptive commit messages
4. Push your changes to your fork
5. Submit a pull request to the `main` branch of the original repository

## 📄 License

This project is licensed under the [MIT License](LICENSE).

---

<p align="center">
  Made with ❤️ by <a href="https://github.com/Blazehue">Blazehue</a>
</p>