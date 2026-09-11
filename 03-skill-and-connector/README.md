# Project 3: Skill + Connector Together

## Overview

**Project 3** demonstrates how a Claude **Connector** and a Claude **Skill** work together to automate a real-world workflow. Instead of working with just local files (Project 1) or just Claude's built-in features (Project 2), this project shows how Claude can:

1. Use a **Connector** to access external data sources (in this case, Google Drive)
2. Use a **Skill** to apply specialized formatting and processing rules
3. Combine both to produce a useful final output

This project bridges the gap between Project 1 and Project 2 by showing how different Claude capabilities collaborate.

---

## What Is a Connector?

A **Connector** is a bridge between Claude and an external service or data source. It allows Claude to read or interact with information outside of Claude itself, without you having to build a custom API or manage authentication directly.

**In this project:**
- The **Google Drive Connector** allows Claude to find and read files stored in Google Drive
- You enable the connector in Claude.ai
- Claude can then search for files by name and read their contents
- The connector handles authentication securely behind the scenes

**Important:** The Google Drive Connector in Claude.ai is a built-in feature provided by Anthropic. It is NOT a custom OAuth implementation. It is NOT a local application connecting to Google Drive.

---

## What Is a Skill?

A **Skill** is a set of instructions that teach Claude how to perform a specific task in a consistent, reliable way. Skills define:
- What the task is
- What format the output should have
- What rules or constraints to follow

**In this project:**
- The **weekly-study-notes** skill provides instructions for turning raw notes into structured study materials
- The skill defines the exact format: key terms, definitions, structured notes, and review questions
- When you ask Claude to use this skill, Claude follows these instructions every time

**Key point:** A skill is instructions, not code. Claude learns what you want from the skill's description and applies it to new input.

---

## Why Use Them Together?

Connectors and Skills solve different problems:

| | Connector | Skill |
|---|---|---|
| **Purpose** | Get data from outside | Format and process data |
| **Handles** | Authentication, file access | Instructions, formatting, consistency |
| **Example** | Reads the Biology notes from Google Drive | Turns those notes into study-ready format |

When combined:
- The **Connector** brings data in
- The **Skill** transforms that data into something useful
- The result is automated, consistent, and powerful

---

## How This Test Works: Complete Flow

### The Data Journey

```
Google Drive
   ↓
   └─→ Google Drive Connector (reads file)
         ↓
         └─→ Claude AI
               ↓
               └─→ weekly-study-notes Skill (formats content)
                     ↓
                     └─→ Study Notes Output
```

### Step-by-Step Flow

**Step 1: Test Document Created**
- A safe Google Doc was created in Google Drive
- File name: `Weekly Study Notes Test - Biology`
- Contains: Raw biology notes about photosynthesis and cellular respiration
- Purpose: Safe test data that poses no privacy risk

**Step 2: Connector Enabled in Claude.ai**
- Google Drive Connector is enabled in Claude.ai settings
- This gives Claude permission to search and read your Google Drive files
- You remain in control: Claude can only do what you ask

**Step 3: Prompt Sent to Claude.ai**
- Exact prompt used:
  ```
  Find the Google Drive file named "Weekly Study Notes Test - Biology", 
  read its contents, and turn the notes into revision-ready study notes 
  using my weekly-study-notes skill.
  
  Do not modify, delete, upload, or create anything in Google Drive.
  Use only the information contained in the file.
  ```

**Step 4: Connector Retrieves File**
- Claude searches Google Drive for the file name
- Claude reads the file contents (read-only, no changes to Google Drive)
- The Connector returns the raw text to Claude

**Step 5: Skill Formats Output**
- Claude applies the weekly-study-notes skill instructions
- Output includes:
  - Key terms with definitions
  - Structured notes
  - Exactly THREE review questions
  - Ready-to-study format

**Step 6: Output Delivered**
- Claude returns the formatted study notes to Claude.ai
- User can copy, save, or refine as needed

---

## Why a Safe Test Document?

We used a test document instead of a real personal document because:

1. **Privacy:** No personal or sensitive information is exposed
2. **Reproducibility:** The test is consistent and can be run again
3. **Clarity:** It's easy to verify that the connector and skill worked correctly
4. **Safety:** There's no risk of accidentally modifying your actual files

The Biology topic was chosen because it's educational, clear, and non-sensitive.

---

## What "Read-Only" Means in This Test

When the connector reads the Google Drive file:

✅ **What happens:**
- Claude can see the file name and its contents
- Claude can read the text

❌ **What does NOT happen:**
- The file is not modified
- The file is not deleted
- New files are not created in Google Drive
- File permissions are not changed
- The file stays exactly as it was

The prompt explicitly instructed Claude not to modify Google Drive in any way. The test verified that this instruction was followed.

---

## What Was NOT Implemented

**Important clarifications:**

- ❌ No custom Google Drive API integration was built
- ❌ No OAuth flow was implemented locally
- ❌ No local application connects directly to Google Drive
- ❌ No server-side authentication code was written
- ❌ No environment variables or API keys are stored in this project

**Why?** Those tasks are complex and already handled by Claude.ai's built-in Google Drive Connector. This project focuses on *using* the connector, not building one.

---

## Limitations of This Project

1. **Test-Only Data:** The test uses a safe, non-sensitive Google Doc. It does not test with real personal documents.

2. **Read-Only Operation:** The test only reads files. It does not test file creation, modification, or deletion.

3. **Single Skill:** Only the weekly-study-notes skill is demonstrated. Other skills could also be combined with connectors.

4. **Manual Triggering:** The test is manually triggered by sending a prompt to Claude.ai. It is not automated (e.g., no scheduled runs or API calls).

5. **Claude.ai Only:** The connector integration happens inside Claude.ai. This is not a local application.

6. **No Custom Code:** This project contains documentation only. It does not include custom Python, JavaScript, or other code to connect to Google Drive.

---

## How This Project Connects Project 1 and Project 2

### Project 1: "Build First Real Skill"
- Created the **weekly-study-notes skill**
- Defined how Claude should format study materials
- Skill exists in Claude.ai

### Project 2: "One App Read Only"
- Demonstrated reading data from Google Drive via the connector
- Showed that Claude can access external data sources
- Connector exists in Claude.ai

### Project 3: "Skill + Connector Together"
- Takes the **skill** from Project 1
- Takes the **connector** from Project 2
- Combines them in one workflow
- Shows real-world automation: data source → processing → output

**The progression:**
- Project 1: Learn to create skills
- Project 2: Learn to use connectors
- Project 3: Use them together for practical results

---

## How I Would Explain This in a GIAIC Interview

**(45–60 second explanation)**

"I built a project that demonstrates how Claude Connectors and Skills work together. Here's what I did:

First, I created a skill called weekly-study-notes that teaches Claude how to format raw notes into structured study material with key terms, definitions, and review questions.

Then, I enabled Google Drive Connector in Claude.ai, which securely connects Claude to my Google Drive.

For the test, I created a safe Google Doc with biology notes. I sent Claude a prompt asking it to find that file using the connector, read it, and format the content using my skill.

What happened: The connector found and read the file without modifying anything. Then the skill formatted the raw notes into structured study notes with three review questions—exactly as the skill was designed to do.

The key insight is that connectors solve the 'where does the data come from?' problem, while skills solve the 'how should Claude process it?' problem. Together, they automate workflows that would be tedious to do manually.

This bridges my two earlier projects: Project 1 where I built the skill, and Project 2 where I learned to use connectors. Project 3 shows them working together."

---

## Project Files

```
03-skill-and-connector/
├── README.md                 (This file - explanation and documentation)
├── TEST_CASES.md            (The actual test that was performed)
├── COMPLETION_REPORT.md     (Summary of project completion)
└── .gitignore               (Git configuration for this project)
```

---

## How to Review This Project

1. **Start here:** Read this README to understand what connectors and skills are
2. **Test details:** Read TEST_CASES.md to see exactly what was tested
3. **Completion status:** Read COMPLETION_REPORT.md for a project summary
4. **Interview ready:** Use the GIAIC interview explanation above when discussing this project

---

## Key Takeaways

✅ **Connectors** bring data from external sources into Claude  
✅ **Skills** teach Claude how to process data consistently  
✅ **Together** they automate real workflows  
✅ **Safe testing** uses non-sensitive test data  
✅ **Read-only access** protects your actual files  
✅ **No custom code needed** — Claude.ai handles the infrastructure  

---

**Project 3 Status:** ✅ Complete

Test performed: Successfully combined Google Drive Connector + weekly-study-notes Skill to transform raw biology notes into structured study material.
