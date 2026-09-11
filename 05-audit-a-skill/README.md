# Project 5: Audit a Skill Before You Trust It

## What Is This Project?

Project 5 documents a **security audit** of a real skill that I did not create myself. The goal is to show why it's important to check what a skill actually does before using it—especially when a skill can interact with your files, make network requests, or handle sensitive information.

## Why Audit a Skill?

Skills are powerful. They extend what Claude can do. But a skill might:
- Fetch files from the internet
- Read files from your computer
- Send data to external servers
- Request passwords or API keys
- Have hidden permissions you didn't notice

Before trusting a skill, **ask yourself**: *What exactly will this do? Where will my data go? Could it leak something I don't want shared?*

This project demonstrates how to audit a skill and decide whether it's safe to keep enabled.

---

## What Is a Skill?

A **skill** is a tool that extends Claude's capabilities. You can install skills from Claude.ai → Customize → Skills → Browse Skills. Skills let Claude:
- Work with PDFs, images, or documents
- Connect to external services (APIs, databases)
- Automate tasks on your computer or in the cloud
- Read files or make network requests

Each skill has instructions (usually code or configuration) that tell Claude exactly what it can do.

---

## The Skill I Audited

| Detail | Value |
|--------|-------|
| **Skill Name** | PDF Viewer |
| **Provider** | Anthropic |
| **Where I Got It** | Claude.ai → Customize → Skills → Browse Skills |
| **Status** | Enabled |
| **Audit Tool** | Claude.ai (in a separate chat) |
| **Audit Date** | During Project 5 completion |

---

## The Audit Process

### The Exact Prompt I Used

I asked Claude (in Claude.ai) to read the installed PDF Viewer skill and report:

> "Read the skill I just installed and tell me, in plain language, exactly what it instructs you to do. Then flag anything in it that contacts an external server, handles passwords or credentials, or could send my data somewhere I didn't intend. If it's clean, say so plainly."

### What the Audit Checked

- **Capability**: What does the skill instruct Claude to do?
- **External Requests**: Does it make outbound calls to fetch data?
- **Credentials**: Does it ask for, store, or transmit passwords or API keys?
- **Hidden Behavior**: Is there undisclosed telemetry or third-party endpoints?
- **Documentation**: Are all features clearly documented?

---

## What the Skill Does (Capabilities)

According to the audit, the PDF Viewer skill can:

1. **Open a PDF** in an interactive viewer
2. **Navigate PDFs**: flip pages, search, zoom, extract text
3. **Annotate PDFs**: highlights, underlines, strikethroughs, sticky notes, shapes, stamps
4. **Fill form fields** in PDF forms
5. **Add signatures/initials** as an image on the PDF (not a certified digital signature)
6. **Handle screenshots** as part of workflows for visual confirmation
7. **Work with URLs**: accept HTTPS URLs to fetch and display remote PDFs
8. **Work with local files**: access PDFs in directories exposed to the tool

---

## Actual Security Findings

### Finding 1: External URL Fetching (Network Access)
The skill accepts HTTPS URLs for PDFs. If you give it a URL, it will make an outbound request to fetch that PDF. This is expected behavior for a PDF viewer, but it means the skill can initiate network connections.

### Finding 2: Local Filesystem Access
The skill can read PDF files from directories that are exposed to the tool. This is normal—it needs to read files to display them. No unexpected file access was found.

### Finding 3: No Password or Credential Handling ✓
The audit found **no instructions** for the skill to request, store, or transmit passwords, API keys, or authentication tokens. This is good.

### Finding 4: No Hidden Telemetry ✓
The audit found **no undisclosed third-party endpoints** or hidden telemetry in the skill files.

### Finding 5: Documentation Issue (Minor)
The skill references a file called `CONNECTORS.md`, but that file was not found in the installed skill folder. This is a documentation completeness issue, not a security problem.

### Finding 6: Signature Feature Clarity ✓
The skill clearly explains that the "signature" feature is just an image placed on a PDF—not a legally binding certified digital signature. This is transparent and accurate.

---

## Capabilities vs. Observed Behavior

**Important distinction:**

- **Capabilities**: What the skill *can* do according to its instructions (e.g., fetch from HTTPS URLs)
- **Observed Behavior**: What the skill *actually did* during the audit

The audit **did not** open, edit, or send any real PDFs. It only read the skill's instructions and checked them for security issues. The audit found that the skill *is capable* of fetching from URLs and reading local files, but this is normal and expected for a PDF viewer.

---

## The Verdict: It's Clean ✓

Claude's verdict: **"It's clean."**

The PDF Viewer skill is acceptable to use. It has no hidden malicious behavior, doesn't steal credentials, and isn't trying to exfiltrate data.

**Key caveat**: The skill *can* make outbound requests if given an HTTPS URL, and it *can* read local files exposed to it. These are documented features, not hidden risks—but they're worth knowing about.

---

## Why This Skill Is Acceptable to Keep Enabled

1. **Transparent behavior**: All capabilities are clearly documented
2. **No credential theft**: No hidden password/API key handling
3. **No telemetry**: No unexpected external connections
4. **Intended use**: URL fetching and local file reading are normal for a PDF viewer
5. **Minor documentation issue**: Easily fixable, not a security flaw

The skill does exactly what you'd expect a PDF viewer to do, with no surprises.

---

## Limitations of This Audit

This audit:
- ✓ Read the skill's instructions to understand what it does
- ✓ Checked for credential handling and hidden telemetry
- ✓ Verified that network requests are intentional and documented
- ✗ Did NOT open, edit, or send actual PDF files
- ✗ Did NOT test every possible edge case
- ✗ Did NOT reverse-engineer the underlying PDF rendering engine
- ✗ Did NOT verify that external PDF URLs cannot be tracked/logged by Anthropic

**For production use**, if you're handling sensitive documents, you might want to:
- Avoid using it with URLs to documents hosted on untrusted servers
- Only fetch PDFs from sources you control
- Be aware that your PDF Viewer usage is logged by Anthropic (as with all skills)

---

## Connection to Projects 1–4

| Project | What It Demonstrated |
|---------|----------------------|
| **Project 1** | Built a skill from scratch (a first real skill) |
| **Project 2** | Created a read-only application using skills |
| **Project 3** | Combined skills and connectors in one app |
| **Project 4** | Made the app portable across machines |
| **Project 5** | **Audited a pre-built skill before trusting it** |

Projects 1–4 were about **building and deploying** skills. Project 5 is about **safety and trust**: before you use someone else's skill (or even your own in production), you should know exactly what it does and verify it's not doing anything malicious or unexpected.

---

## How I Would Explain This in a GIAIC Interview

**Prompt**: "Describe your process for evaluating the security of a tool before using it."

**45–60 Second Response**:

> "In Project 5, I audited a skill called PDF Viewer that I installed but didn't create myself. My process was: first, I asked Claude to read the skill's instructions and tell me exactly what it does in plain language. Then I asked it to flag anything suspicious—like network requests, password handling, or hidden telemetry.
>
> The audit found that PDF Viewer can fetch PDFs from URLs and read local files, which is normal for a PDF viewer. But there was no password handling, no hidden telemetry, and all features were documented. So my verdict was: it's safe to keep enabled, as long as I'm aware it can make network requests.
>
> The key insight is the difference between what a tool *can* do and what's *actually* suspicious. URL fetching for a PDF viewer is fine. Hidden telemetry would not be. I documented all findings and made an informed decision rather than assuming the skill was safe or dangerous."

---

## Files in This Project

- **README.md** (this file): Beginner-friendly overview
- **AUDIT_RESULT.md**: Detailed audit findings and verdict
- **COMPLETION_REPORT.md**: Project completion summary
- **.gitignore**: Git ignore rules

See **AUDIT_RESULT.md** for the full technical audit details.
