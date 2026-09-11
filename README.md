# Skills & Connectors — Hands-On Projects

Welcome to a 5-project hands-on journey that explores AI Skills, Connectors, portability, and security auditing. This repository documents a complete learning progression from building your first skill to auditing one created by someone else.

---

## What This Repository Demonstrates

### What Is an AI Skill?

A **skill** is a set of reusable instructions that teach Claude to perform a specific task consistently. Instead of typing the same detailed instructions every time, you create a skill once with clear trigger conditions and processing rules. Then Claude automatically applies those instructions when you ask for that task.

**Example:** The "weekly-study-notes" skill takes messy class notes and automatically transforms them into structured study materials with organized topics, key terms, and review questions.

### What Is a Connector?

A **connector** is a bridge between Claude and an external data source (like Google Drive, email, or calendar). It allows Claude to read or interact with information outside of Claude itself, without you having to build custom authentication or manage API keys.

**Example:** The Google Drive Connector lets Claude search and read files from your Google Drive securely, without needing you to set up OAuth or API keys manually.

### Why Skills and Connectors Are Useful Together

- **Skills** define *how* to process data (format, rules, structure)
- **Connectors** define *where* the data comes from (external sources)
- **Together**, they automate workflows: fetch data from an external source and transform it using consistent rules

Without combining them, you need to manually fetch data and then manually format it. Together, they solve both problems at once.

### Why Portability Matters

A well-designed skill isn't locked to one tool or platform. If a skill is portable, you can move it to a different tool or context and it will work identically. This means your effort creating the skill creates value that lasts, regardless of which tool you're using.

### Why Auditing a Skill Before Trusting It Matters

Skills can access your files, make network requests, and interact with external services. Before enabling a skill—especially one created by someone else—you should verify:
- What exactly does it do?
- Does it handle credentials or sensitive data?
- Does it make network requests to unexpected places?
- Is all its behavior documented transparently?

This project demonstrates how to audit a skill and decide whether it's safe to trust.

---

## Project End-to-End Workflow

The 5 projects build on each other in a logical progression:

1. **Project 1**: Learn to create a reusable skill from scratch
2. **Project 2**: Learn how to safely read data from external sources
3. **Project 3**: Combine a skill and a connector in one workflow
4. **Project 4**: Prove that your skill can travel to a completely different tool
5. **Project 5**: Audit a skill created by someone else to verify it's safe

This progression teaches you to **build skills, understand data sources, combine them, prove portability, and evaluate security**—a complete skill lifecycle.

---

## Project Breakdown

| Project | Name | What I Built / Learned |
|---------|------|------------------------|
| **Project 1** | Build Your First Real Skill | Created the **weekly-study-notes** skill in Claude.ai, which transforms messy class notes into structured study materials with organized topics, key terms, and review questions. Learned how trigger conditions work and tested the skill with multiple test cases. |
| **Project 2** | One App, Read-Only | Built a demonstration app showing read-only access patterns. Used sample data (not real Google Drive) to teach how to structure an application so it can search and read information safely without the ability to modify, delete, or upload files. |
| **Project 3** | Skill + Connector Together | Combined the **weekly-study-notes skill** with the **Google Drive Connector** inside Claude.ai. Enabled the connector, created a safe test document (Biology notes), and demonstrated how the connector fetches data while the skill transforms it into study-ready format. The test happened entirely within Claude.ai using its built-in Google Drive integration. |
| **Project 4** | Make It Portable | Took the exact skill definition from Project 1 (unchanged) and applied it in a second tool: **Claude Code**. Used the same Biology study notes and proved the skill works identically in a different context, with no code modifications required. |
| **Project 5** | Audit a Skill Before You Trust It | Installed the **PDF Viewer skill** from Claude.ai's Browse Skills section and audited its security. Found that it can fetch PDFs from HTTPS URLs and read local files (expected for a PDF viewer), but discovered no password handling, hidden telemetry, or undisclosed endpoints. Documented findings and determined it was safe to keep enabled. |

---

## Skills Used

### weekly-study-notes Skill
**Role**: Instruction layer for processing notes  
**Created in**: Project 1  
**Used in**: Projects 3 and 4  

This skill defines how to take raw study notes and structure them into revision-ready format. It specifies:
- How to identify topics
- How to extract key terms and write definitions (from notes only)
- How to generate exactly 3 review questions
- What format the output should use

### PDF Viewer Skill
**Role**: Tool for viewing and annotating PDFs  
**Installed in**: Project 5 (from Claude.ai Browse Skills)  
**Audited in**: Project 5  

This skill extends Claude's capabilities to open, navigate, annotate, and interact with PDF documents. It can fetch PDFs from HTTPS URLs and read local files.

---

## Key Concepts Learned

### Skill
A reusable set of instructions that teaches Claude to perform a consistent task. Skills have trigger conditions (when they should activate), processing rules (what they do), and output formats (how results are structured). Once created, they're available every time you need them.

### Connector
A secure bridge to an external data source (like Google Drive or email). Connectors handle authentication behind the scenes so Claude can safely read data without you managing API keys or OAuth flows.

### Read-Only Access
A pattern where an application or tool can read and search data but has no ability to modify, delete, create, or upload files. Read-only access protects your data by making destructive operations impossible.

### Skill Portability
The property of a well-designed skill that allows it to be moved to a different tool or context while maintaining identical behavior and output. Portability makes skills valuable beyond their original environment.

### Skill Security Audit
The process of examining a skill's instructions to verify:
- What it actually does
- Whether it handles credentials securely
- Whether it makes unexpected network requests
- Whether all features are transparently documented

### External Server / Network Access
When a tool or skill makes outbound requests to fetch data from the internet (e.g., via HTTPS URLs). This is often expected and necessary, but should always be documented and transparent.

### Credential Handling
How a tool stores, requests, or transmits passwords, API keys, authentication tokens, and other sensitive secrets. Safe credential handling is a critical security concern.

---

## Project Journey

Here's how the 5 projects build on each other:

**Project 1** taught me how to create a reusable skill. I built the weekly-study-notes skill with clear trigger conditions, processing rules, and output formats, then tested it to confirm it worked correctly.

**Project 2** taught me how an AI tool can safely read information from external sources without modifying them. I built a demonstration app using read-only access patterns and proved through testing that write operations were impossible.

**Project 3** brought these two concepts together. I enabled the Google Drive Connector in Claude.ai, created a safe test document, and demonstrated that the connector could fetch data while the skill transformed it into structured output. The test happened inside Claude.ai using its built-in integration.

**Project 4** proved my skill could travel. I took the exact skill definition from Project 1 (without any changes) and applied it in a completely different tool: Claude Code. The skill behaved identically, producing the same structured output format. This demonstrated that my skill was portable and tool-agnostic.

**Project 5** taught me to evaluate trust. I installed the PDF Viewer skill from Claude.ai and audited its security—checking what it actually does, whether it handles credentials, whether it has hidden telemetry, and whether all its features are documented. I found it was clean and safe to use, with the caveat that it can make network requests (expected for a PDF viewer).

Together, these 5 projects document a complete lifecycle: **build a skill, understand external data access, combine them, prove portability, and evaluate security**.

---

## How I Would Explain This Project in a GIAIC Interview

> "I completed a 5-project hands-on learning sequence focused on AI Skills and Connectors.
>
> **Project 1** was building my first skill: weekly-study-notes. This skill takes messy class notes and automatically organizes them into study materials with key terms and review questions. I tested it to confirm it worked correctly.
>
> **Project 2** taught me about safe data access. I built a demonstration app that could read and search data but had no ability to modify or delete files—I even proved this with automated tests.
>
> **Project 3** was combining both concepts. I enabled Google Drive Connector in Claude.ai, created a test document with biology notes, and showed how the connector could fetch the data while my skill formatted it into structured study notes.
>
> **Project 4** proved my skill was portable. I took the exact same skill definition and used it in a completely different tool—Claude Code—and it worked identically, without any code changes. This showed that good skills are tool-agnostic.
>
> **Project 5** was about security. I installed the PDF Viewer skill and audited it to verify what it actually does, whether it handles credentials safely, and whether it has any hidden telemetry. I found it was transparent and safe to use.
>
> The key insight across all 5 projects is that skills and connectors are powerful building blocks: skills define *how* to process data, connectors define *where* data comes from, and together they automate workflows. Understanding how to build them, use them together, make them portable, and evaluate their security is essential for working with AI tools responsibly."

---

## Repository Structure

```
skills-and-connectors-projects/
├── README.md                    (This file - overview of all projects)
├── 01-first-real-skill/         (Project 1: Build a Skill)
│   ├── README.md
│   ├── SKILL.md                 (The weekly-study-notes skill definition)
│   └── ...
├── 02-one-app-read-only/        (Project 2: Read-Only App)
│   ├── README.md
│   ├── app.js
│   ├── test-drive-access.js
│   └── ...
├── 03-skill-and-connector/      (Project 3: Skill + Connector)
│   ├── README.md
│   ├── TEST_CASES.md
│   └── ...
├── 04-make-it-portable/         (Project 4: Portable Skill)
│   ├── README.md
│   ├── SKILL.md                 (Copy from Project 1)
│   └── ...
└── 05-audit-a-skill/            (Project 5: Audit a Skill)
    ├── README.md
    ├── AUDIT_RESULT.md
    └── ...
```

Each project folder contains its own detailed documentation explaining what was built, how it works, and what was learned.

---

## Completion Status

| Project | Status |
|---------|--------|
| Project 1 — Build Your First Real Skill | ✅ Complete |
| Project 2 — One App, Read-Only | ✅ Complete |
| Project 3 — Skill + Connector Together | ✅ Complete |
| Project 4 — Make It Portable | ✅ Complete |
| Project 5 — Audit a Skill Before You Trust It | ✅ Complete |

**All five projects in the Skills & Connectors hands-on project sequence are complete.** Each project has been documented, tested, and validated. The skills and concepts learned across these 5 projects provide a solid foundation for understanding how AI Skills, Connectors, portability, and security auditing work together in practice.

---

## Next Steps

- **Start with Project 1** if you want to learn how to create your first skill
- **Read the Project README** in each folder for detailed explanations
- **Review SKILL.md** in Projects 1 and 4 to see the actual skill definition
- **Check COMPLETION_REPORT.md** in each project for test results and validation
- **Read AUDIT_RESULT.md** in Project 5 for detailed security findings

Each project is self-contained but builds on the concepts from earlier projects. Reading them in order provides the best learning experience.
