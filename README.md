# Stellar Compliance & Regulatory Watchdog

[![License: MIT](https://img.shields.io/badge/License-MIT-blue.svg)](https://opensource.org/licenses/MIT)
[![Build Status](https://img.shields.io/badge/build-passing-brightgreen.svg)]()
[![Ecosystem: Stellar](https://img.shields.io/badge/Ecosystem-Stellar-purple.svg)](https://stellar.org)
[![Framework: NestJS](https://img.shields.io/badge/Backend-NestJS-E0234E.svg)](https://nestjs.com)
[![Framework: React](https://img.shields.io/badge/Frontend-React-61DAFB.svg)](https://react.dev)

An enterprise-grade, open-source RegTech and compliance intelligence platform designed for institutions, anchors, and fintech operators executing digital asset and stablecoin workflows within the Stellar ecosystem.

---

## 📋 Table of Contents
1. [Overview](#-overview)
2. [The Problem & The Solution](#-the-problem--the-solution)
3. [Key Features](#-key-features)
4. [Development Status & Roadmap](#-development-status--roadmap)
5. [Tech Stack](#-tech-stack)
6. [Architecture & Folder Structure](#-architecture--folder-structure)
7. [Installation & Setup Guide](#-installation--setup-guide)
8. [API Architecture](#-api-architecture)
9. [Design System & UI/UX Design Tokens](#-design-system--uiux-design-tokens)
10. [Contribution Guidelines](#-contribution-guidelines)
11. [Security Considerations](#-security-considerations)
12. [Deployment & Testing](#-deployment--testing)
13. [FAQ](#-faq)
14. [Maintainers & Contact](#-maintainers--contact)

---

## 🔍 Overview

The **Stellar Compliance & Regulatory Watchdog** serves as an institutional command center for decentralized financial operations. The platform aggregates, visualizes, and audits compliance metrics, multi-jurisdictional rulesets, and transaction risk profiles. 

By operating as an out-of-band monitoring matrix, it plugs into ecosystem endpoints (like the Stellar Horizon API) to evaluate operational data against regional compliance legal frameworks (such as EU-MiCA, FATF, and FinCEN) without requiring complex smart-contract structural modifications.

---

## ⚠️ The Problem & The Solution

### The Problem
Fintech institutions and asset issuers migrating onto decentralized networks face highly fragmented regulatory barriers. Navigating complex multi-jurisdictional compliance protocols—such as international anti-money laundering (AML) mandates, the FATF Travel Rule, and asset reserve audit trail logging—historically required building siloed, closed-source monitoring infrastructure. Operators frequently face a choice between bloated, expensive custom software configurations and over-simplified internal code bases that create legal vulnerabilities and data blind spots.

### The Solution
Stellar Watchdog delivers an asymmetric, highly visible command dashboard designed specifically for fintech operations desks. It bridges the gap between decentralized asset mechanics and structured regulatory constraints by organizing compliance procedures into centralized multi-column workspaces, data-dense KPI matrix grids, and immutable sequential audit timeline streams.

---

## 🛠️ Key Features

### Current Implemented Features
* **Stellar Transaction Compliance Analyzer:** dedicated RegTech engine where compliance officers can input any Stellar transaction hash. The NestJS backend fetches the ledger data via Horizon and runs it through a heuristic scoring algorithm to calculate a live Risk Score and flag potential violations (like missing Travel Rule memos or high-complexity operations).
* **Live Horizon Event Syncing:** The backend actively queries the Stellar Horizon Testnet to fetch real-time ledger telemetry and network health status, feeding live blockchain state directly to the compliance dashboard.
* **Asymmetric Command Center Layout:** Left-aligned dashboard workspace featuring high-density typography, expandable/collapsible sidebar navigation panels, and deep-space dark themes designed for prolonged operator monitoring sessions.
* **Freighter Wallet Authentication:** Ecosystem-native authentication allowing compliance operators to connect directly to the dashboard using their Stellar Freighter wallet via @stellar/freighter-api.
* **Asymmetric Command Center Layout:** Left-aligned dashboard workspace featuring high-density typography and deep-space dark themes designed for prolonged operator monitoring sessions.
* **Multi-Jurisdictional Tracker Matrix:** High-density requirement panels tracking live checklist rules across global regulatory domains (`EU-MiCA`, `FATF`, `US-SEC`, `US-OFAC`).
* **Dedicated Workflow Provisioning UI:** Full-page asynchronous entry wizard designed to provision new structural frameworks into the active validation evaluation engines, removing restrictive modal bottlenecks.


### Planned / Upcoming Features
* **Interactive Multi-Asset Data Visualizations:** Integrating responsive Recharts analytical graphs to map audit trends, historical compliance distributions, and cross-border risk maps.
* **Prisma Database Persistence Layer:** Migrating backend in-memory data mocks to a hardened local PostgreSQL relational database instance.
* **System Action Auditing Modules:** Tracking and logging structural status changes made by administrative operators, exporting certified files for institutional legal reviews.
* **Ecosystem Risk Heatmaps:** Visual matrices cross-referencing regional asset velocities against geo-fenced jurisdictional restriction lists.

---

## 🖼️ Media Placeholders

### Dashboard Interface View
```text
+------------------------------------------------------------------------------------+
| 🛡️ Stellar Watchdog   |  Console / Compliance Intelligence  [ API: Connected (●) ] |
+-----------------------+------------------------------------------------------------+
|                       |                                                            |
|  (●) Overview         |  Executive Command Center                                  |
|  (○) Frameworks       |  --------------------------------------------------------  |
|  (○) Analytics        |  [ Active: 5 ]  [ Scopes: 4 ]  [ Flags: 1 ⚠️ ] [ Rate: 100% ]|
|                       |  --------------------------------------------------------  |
|                       |  +-----------------------------------+ +----------------+  |
|                       |  |                                   | | Risk Feed      |  |
|                       |  |  Historical Compliance Trajectory | | -------------- |  |
|                       |  |  (Interactive Analytics Engine)   | | 09:30 SEC [⚠️] |  |
|                       |  |                                   | | 11:05 MiCA [✓] |  |
|                       |  +-----------------------------------+ +----------------+  |
+-----------------------+------------------------------------------------------------+

Live Demo Center
💡 Demo Environment Note: A public sandbox deployment link will be provisioned here following the close of the upcoming structural Wave sprint window.

🗛 Tech Stack
Frontend Core
Framework Engine: React 19 (TypeScript)

Build Bundler: Vite 6

Styling Architecture: Tailwind CSS v4 (Utility-first configuration)

Navigation Routing: React Router Dom v6

Interface Interactions: Framer Motion (Planned)

Backend Core
Framework Engine: NestJS v10 (Strict TypeScript Type-Safety)

Validation Pipeline: Class-Validator & Class-Transformer execution middleware

Data Object Mapping: Prisma ORM (Database connection ready)

Runtime Target: Node.js v18 / v20 LTS

🏗️ Architecture & Folder Structure
The project leverages an optimized npm workspaces Monorepo architecture, grouping structural domains into distinct feature packages while maintaining zero-overhead root-level dependency trees.

regulatory-watchdog/ (Monorepo Root)
├── apps/
│   ├── api/                   # NestJS Backend API Engine
│   │   ├── src/
│   │   │   ├── app.module.ts
│   │   │   ├── main.ts
│   │   │   ├── common/        # Shared global middleware / interceptors
│   │   │   └── compliance/    # Bounded domain feature module
│   │   │       ├── compliance.controller.ts
│   │   │       ├── compliance.module.ts
│   │   │       ├── compliance.service.ts
│   │   │       └── dto/       # Strict Class-Validator data models
│   │   └── test/              # End-to-End system validation suites
│   └── web/                   # React Single-Page Application (Frontend)
│       ├── public/            # Static high-density graphic assets
│       ├── src/
│       │   ├── App.tsx        # Router outlet container
│       │   ├── main.tsx       # Structural entry initialization
│       │   ├── index.css      # Core Tailwind directive stack
│       │   ├── app/           # Central client configuration routing maps
│       │   ├── components/    # Reusable atomic presentation UI elements
│       │   ├── layouts/       # Global application framework structures
│       │   └── features/      # Contextual domain modules
│       │       └── compliance/
│       │           ├── components/ # View layout subcomponents
│       │           └── pages/      # Route canvas page endpoints
├── package.json               # Root monorepo workspace configurations
└── README.md                  # System instruction set documentation

⚙️ Installation & Setup Guide
Prerequisites
Ensure your local environment configuration contains these engine builds:

Node.js: v18.x.x or v20.x.x (LTS versions highly recommended)

npm: v9.x.x or higher

Git: v2.x or higher

Step 1: Clone the Core Workspace
Clone the public repository to your machine and navigate to the directory root:

git clone [https://github.com/stellar-watchdog-hq/regulatory-watchdog.git](https://github.com/stellar-watchdog-hq/regulatory-watchdog.git)
cd regulatory-watchdog

Step 2: Establish Master Monorepo Dependencies
Execute an optimization install directly from the monorepo root. This automatically maps the workspaces, downloads shared dependencies, and structures top-level optimization symlinks:

npm install

Step 3: Configure Environment Context Settings
1. Navigate into the backend package workspace path:
cd apps/api
2. Create an operational environment configuration profile file:
cp .env.example .env
3. Set your target development database variables inside the file:
DATABASE_URL="postgresql://postgres:postgres@localhost:5432/watchdog_db?schema=public"
PORT=3000
4. Back out to the project root:
cd ../..

Step 4: Fire Up Your Development Workspace Servers
Launch the compilation loops for both apps simultaneously using the root workspace wrapper script actions:

# Launch the NestJS backend interface instance (Runs at http://localhost:3000)
npm run dev:api

# Open a separate terminal and run the React client loop (Runs at http://localhost:5173)
npm run dev:web

🎛️ API Architecture
The backend engine presents strict RESTful endpoints protected by automated class validation guards mapping onto standard HTTP status payloads.

Target Schema Specification Map

Endpoint Rule Method,Context Path Destination,Input Validation Schema,Expected HTTP Success Output
GET,/compliance,None,200 OK — Array of active framework structures.
GET,/compliance/:id,Param: string,200 OK — Targeted unique audit record details.
POST,/compliance,CreateChecklistDto,201 Created — Newly provisioned database model entity response.
PATCH,/compliance/:id/status,UpdateStatusDto,200 OK — Modified rule item status payload.

💎 Design System & UI/UX Design Tokens
The interface enforces strict, low-contrast visual grouping tokens designed for enterprise visibility density, inspired by professional operations tools.

Visual Tokens Matrix Mappings

Token Category,Value Paradigm Selector,Visual Output Design Effect
Workspace Base,#0B1220 (Primary deep-space fill),Reduces visual cognitive load over long monitoring blocks.
Shadow Mapping,"shadow-[0_12px_40px_rgba(0,0,0,0.35)]",Subtle physical separation without flat panel overlays.
Border Curvature,rounded-[20px] (Hardened bounding boxes),Modern presentation grouping consistency.
Typography Scale,Tracking text modifications (tracking-tight),High-legibility alphanumeric readability at compact scales.

🤝 Contribution Guidelines
We highly encourage contributions from the Stellar community! To maintain pristine code health, we require all incoming modifications to comply with these rules.

Standard Operating Developer Branching Strategy
1. Fork the Repository and branch your task off the active development staging track:

git checkout -b feature/your-amazing-improvement-name

2. Ensure any custom additions provide clean TypeScript type maps and enforce strict linting passing states.

3. Keep your commits clean and semantic:
feat(web): add tooltips to framework rows

fix(api): catch validation bounds anomalies inside checklist DTOs

Processing a Workspace Code Merge Request
File your Pull Request explicitly targeting the repository's develop branch.

Ensure your codebase passes formatting validation scripts before submission:
npm run format

Every incoming pull request must clear review audits by a core maintainer before it is merged into the main release track.

🔒 Security Considerations
Immutable Tracking: All framework modifications are captured through explicit status update controllers, preventing silent modifications to system data records.

Input Scrubber Middleware: NestJS endpoints execute strict validation pipelines to completely reject non-whitelisted payload inputs, protecting against malicious database cross-site injections.

Dependency Auditing: Automated dependency scans monitor upstream library security updates across all shared packages.

❓ FAQ
Do I need a live Stellar wallet or node connection to run the project locally?
No. By default, the application runs on standalone data profiles. This allows you to evaluate frontend interface controls and backend validation rules immediately without initializing an external Horizon ledger bridge connection.

How do I configure the frontend client to talk directly to my running local API?
Open apps/web/src/App.tsx and flip the master structural flag to false at the top of the file:

const USE_MOCK = false;

Once flipped, the frontend hooks will automatically route operations to your local NestJS backend at http://localhost:3000.

👥 Maintainers & Contact
Lead Architect: Kabiru Muhammed Nasiru

Core Ecosystem Space: Open-Source Repository Initiative

Ecosystem Platform: Stellar Wave Ecosystem Integration Modules

⚖️ License
This project is licensed under the terms of the open-source MIT License. See the repository's root LICENSE file for full terms and structural permissions.
