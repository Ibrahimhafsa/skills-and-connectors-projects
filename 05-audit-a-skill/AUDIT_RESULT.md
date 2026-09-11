# Security Audit Result: PDF Viewer Skill

## Skill Information

| Field | Value |
|-------|-------|
| **Skill Name** | PDF Viewer |
| **Provider** | Anthropic |
| **Installation Source** | Claude.ai → Customize → Skills → Browse Skills |
| **Status** | Enabled |
| **Audit Tool Used** | Claude.ai (separate chat) |
| **Audit Date** | During Project 5 completion |

---

## Audit Methodology

**Audit Prompt** (exactly as used):

> "Read the skill I just installed and tell me, in plain language, exactly what it instructs you to do. Then flag anything in it that contacts an external server, handles passwords or credentials, or could send my data somewhere I didn't intend. If it's clean, say so plainly."

**Scope of Audit**:
- Read the skill's instruction files
- Identify all declared capabilities
- Check for external server communication
- Check for credential/password handling
- Check for undisclosed telemetry
- Verify documentation completeness

---

## What the Skill Instructs Claude to Do

The PDF Viewer skill instructs Claude to:

1. **Open a PDF in a live interactive viewer** for browsing and interaction
2. **Navigate PDFs**: move between pages, search content, zoom in/out
3. **Extract text** from PDF pages
4. **Annotate PDFs** with:
   - Highlights
   - Underlines
   - Strikethroughs
   - Sticky notes (inline comments)
   - Visible text overlays
   - Shapes (rectangles, circles, etc.)
   - Stamps
5. **Fill PDF form fields** with user-provided data
6. **Add a signature or initials** as an image placed on the PDF
7. **Include screenshots** in workflows for visual confirmation
8. **Accept HTTPS URLs** to fetch remote PDFs
9. **Accept local file paths** to read PDFs from the filesystem

All of these operations happen within Claude's interface using the skill's viewer and annotation tools.

---

## Security & Privacy Findings

### Finding 1: External URL Fetching (Capability Verified)

**What was found**: The skill accepts HTTPS URLs for PDFs.

**What happens**: If you provide a URL, the skill makes an outbound request to fetch that PDF from the specified server.

**Is this a problem?** No—this is expected behavior for a PDF viewer. It's a documented capability.

**What to be aware of**: If you use this skill with a URL, the server hosting that PDF will receive a request from Anthropic's infrastructure. The skill does not hide or anonymize these requests.

---

### Finding 2: Local Filesystem Access (Capability Verified)

**What was found**: The skill can read PDF files from directories exposed to the tool.

**What happens**: When you reference a local file path, the skill reads that file from your filesystem.

**Is this a problem?** No—this is how file-reading tools work. The skill only accesses files you explicitly reference.

**What to be aware of**: Make sure you only reference PDF files you intend to share with Claude. Do not accidentally point the skill at directories containing sensitive or confidential documents.

---

### Finding 3: Password & Credential Handling ✓ CLEAN

**What was found**: No password or credential handling.

**Specifically**: The audit found **no instructions** for the skill to:
- Request passwords from the user
- Store API keys or authentication tokens
- Transmit credentials to external services
- Cache or log sensitive information

**Verdict**: ✓ Clean. No credential theft mechanism detected.

---

### Finding 4: Undisclosed Telemetry & Third-Party Endpoints ✓ CLEAN

**What was found**: No hidden telemetry or undisclosed third-party endpoints.

**Specifically**: The skill's instructions do not contain:
- Secret URLs that report back to unknown servers
- Telemetry collection code
- Analytics pings
- Data exfiltration mechanisms

**Verdict**: ✓ Clean. The skill does not covertly send data anywhere.

---

### Finding 5: Documentation Issue (Minor)

**What was found**: The skill's instructions reference a file called `CONNECTORS.md`.

**What happened**: That file was not found in the installed skill folder.

**Is this a problem?** No, this is not a security issue. It's a documentation completeness issue—the referenced file is missing, but this doesn't create a security hole.

**Verdict**: Minor issue, easily fixable by the provider, but not a security concern.

---

### Finding 6: Signature Feature Clarity ✓ TRANSPARENT

**What was found**: The skill clearly documents its signature/initials feature.

**What it says**: The signature/initials feature places an image on a PDF. It is **not** a legally binding certified digital signature (which would require cryptographic signing).

**Is this a problem?** No—this is transparent and accurate. The feature does what it claims, no more.

**Verdict**: ✓ Clear and honest documentation.

---

## Capabilities vs. Observed Behavior

**Important**: This audit examined what the skill *can* do, not what it *actually did* with real documents.

| Aspect | Details |
|--------|---------|
| **Observed Behavior** | The audit read the skill's instructions and checked them for security issues. |
| **What was NOT tested** | No actual PDF files were opened, edited, or transmitted. This is a code/documentation audit, not a live test. |
| **Capabilities** | The skill is *capable* of fetching URLs and reading local files. These are intentional, documented features. |
| **Threats** | No malicious behavior, hidden exfiltration, or credential theft mechanisms were found. |

---

## Final Audit Verdict

### Claude.ai's Conclusion:

**"It's clean."**

The PDF Viewer skill:
- ✓ Does exactly what it claims to do
- ✓ Has no hidden malicious code
- ✓ Does not steal passwords or credentials
- ✓ Does not contain undisclosed telemetry
- ✓ All capabilities are documented and transparent

---

## Final Decision: KEEP ENABLED

**Status**: The PDF Viewer skill is acceptable to use and has been kept enabled.

**Important Caveat**: Be aware that the skill can:
1. **Make outbound HTTPS requests** to fetch remote PDFs
2. **Read local filesystem** files you explicitly reference

These are features, not flaws. But you should:
- Only fetch PDFs from URLs you trust
- Only reference local files you intend to share with Claude
- Assume all skill usage is logged by Anthropic (as with all Claude features)

---

## Audit Limitations

This audit:
- ✓ Examined the skill's instructions and capabilities
- ✓ Checked for credential handling and telemetry
- ✓ Verified documentation accuracy
- ✗ Did NOT reverse-engineer the PDF rendering engine
- ✗ Did NOT test with actual sensitive documents
- ✗ Did NOT verify if PDF URLs or content are tracked/logged beyond standard Anthropic logging
- ✗ Did NOT test every possible edge case or error condition

For additional assurance, you could:
- Review the skill's source code directly (if available from the provider)
- Contact Anthropic with questions about data handling
- Test the skill with non-sensitive PDFs first
- Avoid using it with highly confidential documents until you're fully comfortable

---

## Conclusion

The PDF Viewer skill from Anthropic has been audited and found to be safe, transparent, and free of malicious or hidden behavior. It can be trusted for normal PDF viewing, annotation, and form-filling tasks, with awareness of its network access and file-reading capabilities.
