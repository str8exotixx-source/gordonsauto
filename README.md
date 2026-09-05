# Gordons AutoTraders 🚗💨

> Premium Classic Cars Cape Town

Welcome to the official repository for **Gordons AutoTraders**, a premium classic car listing website based in Cape Town. This modern web application displays high-end automotive collections, providing an elegant browsing experience for classic car enthusiasts and prospective buyers.

🌐 **Live Website:** [gordonsauto.pages.dev](https://gordonsauto.pages.dev/)

---

## 🛠️ Tech Stack

This project leverages modern web development tools for high performance, modular architecture, and excellent developer experience:

*   **Framework:** [React](https://react.dev/) + [Vite](https://vite.dev/) (Fast builds and Hot Module Replacement)
*   **Language:** [TypeScript](https://www.typescriptlang.org/) (Type safety and clean auto-completion)
*   **Styling:** [Tailwind CSS](https://tailwindcss.com/) (Utility-first responsive design)
*   **Testing:** [Vitest](https://vitest.dev/) (Blazing fast unit testing framework)
*   **Component Management:** [shadcn/ui](https://ui.shadcn.com/) (configured via `components.json`)
*   **Linting/Formatting:** [ESLint](https://eslint.org/) (Strict code styling enforcement)

---

## 📁 Repository Structure

The project setup follows a modular structural convention optimized for React applications:

```text
gordonsauto-car-listing-website/
├── dist/                  # Compiled production build outputs
├── public/                # Static assets (images, icons, fonts)
├── src/                   # Main application source code
│   ├── components/        # Reusable UI components
│   ├── assets/            # App-specific images and graphics
│   └── ...               # Core application logic and pages
├── components.json        # shadcn/ui configuration file
├── eslint.config.js       # ESLint rules and style configuration
├── index.html             # Main HTML page entry point
├── package.json           # Project dependencies and script shortcuts
├── postcss.config.js      # PostCSS configurations for Tailwind CSS
├── tailwind.config.ts     # Tailwind design system configurations
├── tsconfig.json          # Core TypeScript rules
├── tsconfig.app.json      # Client-specific TypeScript configs
├── tsconfig.node.json     # Node environment TypeScript configs
├── vite.config.ts         # Vite build configuration tool
└── vitest.config.ts       # Vitest unit testing configurations
```

---

## 🚀 Getting Started

Follow these instructions to set up the project locally on your machine.

### Prerequisites

Ensure you have **Node.js** and **npm** installed on your system.

### 1. Clone the Repository

```bash
git clone https://github.com/str8exotixx-source/gordonsauto-car-listing-website.git
cd gordonsauto-car-listing-website
```

### 2. Install Dependencies

```bash
npm install
```

### 3. Start the Local Development Server

```bash
npm run dev
```
The application will be running locally at `http://localhost:5173/`.

### 4. Running Unit Tests

Execute the testing suite via Vitest:

```bash
npm run test
```

### 5. Build for Production

Compile code into highly optimized static assets inside the `/dist` folder:

```bash
npm run build
```

---

## 📄 License

Copyright © 2026. All rights reserved. 

The software license and ownership of this codebase belong exclusively to the repository owner. Unauthorized copying, modification, or distribution of these files via any medium is strictly prohibited.
