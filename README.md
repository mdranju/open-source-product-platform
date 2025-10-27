# Open Source Product Platform

[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)
[![Next.js](https://img.shields.io/badge/Next.js-14.x-black.svg?logo=next.js&logoColor=white)](https://nextjs.org/)
[![TypeScript](https://img.shields.io/badge/TypeScript-5.x-orange.svg)](https://www.typescriptlang.org/)
[![Tailwind CSS](https://img.shields.io/badge/Tailwind_CSS-3.x-blue.svg?logo=tailwind-css&logoColor=white)](https://tailwindcss.com/)

A comprehensive, open-source platform designed to empower developers, companies, and communities by providing tools to discover, showcase, manage, and collaborate on open-source products. From project listings and analytics to contribution workflows and monetization options, this platform fosters innovation in the OSS ecosystem.

## Table of Contents

- [Features](#features)
- [Tech Stack](#tech-stack)
- [Installation](#installation)
- [Usage](#usage)
- [Deployment](#deployment)
- [Screenshots](#screenshots)
- [Contributing](#contributing)
- [License](#license)
- [Contact](#contact)

## Features

- **Product Discovery**: Advanced search and filtering for open-source projects by category, language, stars, or contributors.
- **Project Management**: Dashboards for maintainers to track issues, releases, and community engagement.
- **Collaboration Hub**: Integrated tools for forking, pull requests, and real-time discussions.
- **Analytics & Insights**: Built-in metrics on downloads, usage trends, and contributor activity.
- **Monetization Tools**: Support for sponsorships, donations, and premium listings.
- **API Access**: RESTful API for integrating OSS data into other tools or apps.
- **Responsive & Accessible**: Mobile-first design with WCAG compliance for global accessibility.
- **Multi-Language Support**: i18n ready for international communities.

## Tech Stack

| Category       | Technology                  |
|----------------|-----------------------------|
| **Frontend**   | Next.js 14, React 18, TypeScript 5 |
| **Styling**    | Tailwind CSS, Headless UI  |
| **Backend**    | Next.js API Routes, Prisma ORM |
| **Database**   | PostgreSQL (with SQLite for dev) |
| **State Management** | Zustand, React Query     |
| **Authentication** | NextAuth.js, OAuth providers |
| **Deployment** | Vercel, Docker             |
| **Testing**    | Jest, Playwright           |
| **Other**      | ESLint, Prettier, Husky    |

## Installation

1. **Clone the Repository**
   ```bash
   git clone https://github.com/mdranju/open-source-product-platform.git
   cd open-source-product-platform
   ```

2. **Install Dependencies**
   ```bash
   npm install
   # or
   yarn install
   # or
   pnpm install
   ```

3. **Set Up Environment Variables**
   Create a `.env.local` file in the root directory and add required variables:
   ```
   DATABASE_URL="postgresql://username:password@localhost:5432/oss_platform"
   NEXTAUTH_SECRET="your-nextauth-secret"
   NEXTAUTH_URL="http://localhost:3000"
   GITHUB_CLIENT_ID="your-github-client-id"
   GITHUB_CLIENT_SECRET="your-github-client-secret"
   ```

4. **Database Setup**
   ```bash
   npx prisma generate
   npx prisma db push  # For development schema migration
   ```

5. **Run the Development Server**
   ```bash
   npm run dev
   # or
   yarn dev
   ```
   The app will be available at `http://localhost:3000`.

## Usage

- **Browse Products**: Explore the homepage for trending OSS projects or use the search bar.
- **Manage Your Product**: Sign in with GitHub, create a new listing, and add details like repo URL, description, and tags.
- **Contribute**: Fork projects directly from the platform and submit PRs.
- **Admin Dashboard**: Accessible to maintainers for analytics and moderation.
- For seeding sample data:
  ```bash
  npm run db:seed
  ```

## Deployment

- **Vercel (Recommended)**: Connect your GitHub repo to Vercel for automatic deploys. Set env vars in the dashboard.
- **Docker**: Build and run with:
  ```bash
  docker-compose up -d
  ```
- **Self-Hosted**: Use PM2 or similar for production Node.js server.

Ensure database and auth secrets are securely configured.

## Contributing

Contributions are welcome! Please follow these steps:

1. Fork the repository.
2. Create a feature branch (`git checkout -b feature/new-oss-category`).
3. Commit your changes (`git commit -m 'feat: add new OSS category filter'`).
4. Push to the branch (`git push origin feature/new-oss-category`).
5. Open a Pull Request.

See [CONTRIBUTING.md](CONTRIBUTING.md) for detailed guidelines, including code style and testing requirements.

## License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## Contact

- **Author**: Anju MD ([@mdranju](https://github.com/mdranju))
- **Email**: your-email@example.com
- **Issues**: Report bugs or request features [here](https://github.com/mdranju/open-source-product-platform/issues)

---

*Empowering the open-source revolution, one product at a time. 🌐 Let's build the future of collaboration together!*
