Design System: Gold Standard Modular IDE
Mission
To provide a high-performance, scalable, and professional-grade development environment (IDE) using a modular multi-section architecture. This system prioritizes developer experience (DX), performance, and accessibility.

Brand & Aesthetic
Product: Coding Starter Pack PRO (Gold Standard)

Visual Style: Cyber-Minimalist / Apple-inspired.

Surface: Glassmorphism with deep black backgrounds (#000000) and electric blue (#3e6ae1) accents.

Architecture: Modular Multi-Section
To ensure scalability and ease of maintenance, the IDE is divided into five primary logical compartments:

1. Metadata & Global Resources (The Brain)
Security: CSP implementation to mitigate XSS during user script execution.

Performance: Preloading Universal Sans Text and using dns-prefetch.

Accessibility: Modern viewport standards and high-contrast meta tags.

2. Utility Navigation Bar (The Command Center)
Sticky Header: Persistent access to core tools.

Control Groups: File management (New, Save), Engine controls (Run, Reset), and System settings.

3. The Workspace (The Engine Room)
Utilizes CSS Grid for a responsive, multi-pane layout:

Activity Bar: Narrow vertical strip for context switching (Explorer, Search).

Explorer Pane: Side drawer for file tree management.

Editor Stack: Central hub with tabbed navigation and syntax highlighting.

Preview Pane: Iframe with hot-reload capabilities and responsive toggles.

4. Status Bar (The Intelligence Hub)
Real-time Metrics: Line/Column count, sync status, and active language.

Compliance: Live WCAG 2.2 AA accessibility badge.

5. Offline AI Intelligence Layer (The Sovereign Engine)
Sistem ini direka untuk beroperasi sepenuhnya tanpa internet menggunakan model bahasa lokal.

Architecture:

Backend: Ollama (Running on WSL Ubuntu).

Model: CodeLlama-7b or DeepSeek-Coder-1.3b (Lightweight for 8GB RAM).

Communication: Local Fetch API (Port 11434) with CORS enabled.

AI Features:

Smart Auto-Correct: Menganalisa ralat sintaks secara senyap.

Code Generation: Menjana komponen UI melalui arahan komen (Ctrl + Space).

Sovereign Privacy: Data kod tidak keluar dari mesin lokal.

Directory Structure
Plaintext
/project-root
├── index.html          # Structural Skeleton
├── /css
│   ├── main.css        # Global Layout & Design Tokens
│   ├── glass.css       # Visual Effects (Glassmorphism)
│   └── syntax.css      # Code Theming
├── /js
│   ├── app.js          # Main Init & Orchestrator
│   ├── editor.js       # Input Logic & Metrics
│   ├── compiler.js     # Rendering Engine (Iframe Logic)
│   ├── oracle.js       # AI Bridge (Ollama Integration)
│   └── ui-effects.js   # Animations & Micro-interactions
└── /assets             # Icons, Fonts & Static Assets
Technical Specifications
Grid Layout: grid-template-columns: var(--activity-bar-width) var(--explorer-width) 1fr 1fr;

Glassmorphism: backdrop-filter: blur(20px) saturate(180%);

AI Call: fetch('http://localhost:11434/api/generate') via PowerShell/WSL bridge.
