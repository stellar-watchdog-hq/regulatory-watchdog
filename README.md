# Stellar Compliance & Regulatory Watchdog

An open-source compliance tracking, regulatory risk profiling, and operational auditing dashboard designed for institutions and fintech platforms building on the Stellar Network.

## 🚀 Overview
The Stellar Compliance Watchdog simplifies global fintech regulatory tracking. It enables operations teams to evaluate operational readiness, log internal audit checklists, monitor compliance workflow statuses, and verify regulatory requirements across regional jurisdictions without writing native blockchain smart contracts.

## 🎛️ Tech Stack
- **Frontend:** React, TypeScript, Tailwind CSS, Vite
- **Backend:** NestJS, TypeScript, PostgreSQL (via Prisma / TypeORM)
- **Architecture:** Monorepo using npm workspaces

## 📁 Repository Structure
- `apps/web`: React-based visual administrative compliance dashboard.
- `apps/api`: NestJS RESTful API handling checklist management, risk flagging pipelines, and compliance audit log states.

## 🛠️ Local Development

### Prerequisites
- Node.js (v18 or higher)
- npm (v9 or higher)

### Installation
1. Clone the repository:
   ```bash
   git clone https://github.com/stellar-watchdog-hq/regulatory-watchdog.git
   cd regulatory-watchdog

2.  Install dependencies for all workspaces:
    npm install

3.  Run the development environment:
   - Frontend: `npm run dev:web`
   - Backend: `npm run dev:api`

4.  