# Project 5: Completion Report

## Project Information

| Field | Value |
|-------|-------|
| **Project Name** | Project 5: Audit a Skill Before You Trust It |
| **Project Series** | Skills & Connectors Hands-On Project Guide |
| **Series Position** | Project 5 of 6 |
| **Status** | ✓ COMPLETE |

---

## Objective

Document a security audit of a skill that was not created by me, performed using Claude.ai. The objective is to demonstrate:
1. How to evaluate a skill for security risks
2. The difference between what a skill *can* do and what's *actually* malicious
3. How to make an informed decision about whether to trust a skill

---

## Skill Audited

| Detail | Value |
|--------|-------|
| **Skill Name** | PDF Viewer |
| **Provider** | Anthropic |
| **Installation Source** | Claude.ai → Customize → Skills → Browse Skills |
| **Audit Performed In** | Claude.ai (separate chat, not Claude Code) |

---

## Audit Prompt (Exact)

> "Read the skill I just installed and tell me, in plain language, exactly what it instructs you to do. Then flag anything in it that contacts an external server, handles passwords or credentials, or could send my data somewhere I didn't intend. If it's clean, say so plainly."

---

## Actual Findings

### What the Skill Does

The PDF Viewer skill instructs Claude to:
- Open PDFs in an interactive viewer
- Navigate pages, search, and zoom
- Extract text from PDFs
- Annotate with highlights, underlines, notes, shapes, and stamps
- Fill PDF form fields
- Add signature/initials images to PDFs
- Accept HTTPS URLs to fetch remote PDFs
- Accept local file paths to read PDFs from the filesystem

### Security Findings (6 Total)

1. **External URL Fetching**: The skill accepts HTTPS URLs and will fetch PDFs from remote servers. This is expected behavior for a PDF viewer—not a security flaw.

2. **Local Filesystem Access**: The skill can read PDF files from exposed directories. This is normal file-reading behavior—no unexpected access was detected.

3. **No Credential Handling**: ✓ CLEAN. No instructions to request, store, or transmit passwords, API keys, or authentication tokens.

4. **No Undisclosed Telemetry**: ✓ CLEAN. No hidden third-party endpoints or secret data exfiltration found in the skill files.

5. **Documentation Issue (Minor)**: The skill references `CONNECTORS.md` but that file is missing. This is a documentation completeness issue, not a security problem.

6. **Signature Feature Clarity**: ✓ TRANSPARENT. The skill clearly states that its "signature" feature is an image placed on a PDF, not a certified digital signature.

---

## Verdict

### Claude.ai's Assessment

**"It's clean."**

### Audit Conclusion

The PDF Viewer skill is acceptable to use. It:
- ✓ Does exactly what it claims
- ✓ Has no hidden malicious behavior
- ✓ Does not steal credentials
- ✓ Does not contain undisclosed telemetry
- ✓ All capabilities are documented and transparent

### Important Caveat

The skill can make outbound HTTPS requests (to fetch remote PDFs) and read local files (that you explicitly reference). These are documented features, not hidden risks—but they're worth being aware of.

---

## Decision

**Status**: Keep Enabled

The PDF Viewer skill has been kept enabled because:
1. No malicious or hidden behavior was found
2. All network access is documented and intentional
3. No credential or telemetry theft mechanisms exist
4. The skill is from a trusted provider (Anthropic)

**Usage guidance**: Use the skill with PDFs from trusted sources. Avoid accidentally referencing directories with confidential documents.

---

## Audit Limitations

This audit:
- ✓ Read and analyzed the skill's instructions
- ✓ Checked for credential handling and telemetry
- ✓ Verified documentation accuracy
- ✗ Did NOT reverse-engineer the PDF rendering engine
- ✗ Did NOT test with actual sensitive documents
- ✗ Did NOT verify cryptographic details or cloud logging practices
- ✗ Did NOT test every edge case

**For production use with highly sensitive documents**, consider:
- Contacting Anthropic with specific data-handling questions
- Testing the skill with non-sensitive content first
- Understanding Anthropic's general logging and data retention policies

---

## Documentation Created

Four files have been created to document Project 5:

1. **README.md** — Beginner-friendly overview explaining:
   - What Project 5 is and why auditing matters
   - What a skill is
   - Audit methodology and findings
   - Capabilities vs. observed behavior
   - Connection to Projects 1–4
   - Interview-ready explanation

2. **AUDIT_RESULT.md** — Detailed technical findings including:
   - Skill information and audit methodology
   - Complete list of capabilities
   - Six security findings (with explanations)
   - Distinction between capabilities and threats
   - Audit limitations and conclusion

3. **COMPLETION_REPORT.md** — This file, summarizing:
   - Project objective and status
   - Audit details and findings
   - Verdict and decision
   - Limitations and next steps

4. **.gitignore** — Git configuration for the project folder

---

## Verification Checklist

- ✓ Only four files created (README.md, AUDIT_RESULT.md, COMPLETION_REPORT.md, .gitignore)
- ✓ No additional files created
- ✓ No modifications to Projects 1–4
- ✓ No Project 6 started
- ✓ Documentation records only the actual audit findings
- ✓ No invented tests or exaggerated results
- ✓ Clear distinction between capabilities and threats
- ✓ Audit venue (Claude.ai) clearly documented
- ✓ Audit prompt documented exactly as used
- ✓ Final verdict clearly stated
- ✓ Important caveats (HTTPS/network access) included

---

## Project 5 Status

### Completion: ✓ COMPLETE

All objectives for Project 5 have been met:
- [x] Audit a real skill not created by me
- [x] Document the audit methodology
- [x] Report actual findings (no invented tests)
- [x] Distinguish capabilities from security threats
- [x] Provide clear verdict and decision
- [x] Create beginner-friendly documentation
- [x] Ready to commit and move to Project 6

---

## Next Steps

Project 5 is complete and ready to commit. The documentation clearly demonstrates:
1. How to evaluate a tool before trusting it
2. The importance of understanding what a tool *can* do vs. what's *actually* malicious
3. How to make informed security decisions about third-party tools

This project complements Projects 1–4 by shifting focus from **building and deploying** skills to **evaluating and trusting** skills—a critical skill for any engineer working with third-party code or tools.

Project 6 can now be started when ready.
