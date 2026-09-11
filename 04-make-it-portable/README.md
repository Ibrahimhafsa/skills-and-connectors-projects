# Project 4: Make It Portable (PATH B - Travel to a Second Tool)

## What Project 4 Is

Project 4 demonstrates **skill portability**—the ability to move and reuse a skill created in one context (Claude Code) in a completely different tool or environment. This project proves that skills are **tool-agnostic**: the logic, rules, and behavior defined in the original skill work identically when moved to a second tool, without modification.

## Why Portability Matters

Portability is fundamental to skill design:
- **Skills should travel**: A well-designed skill is not locked to one tool or platform
- **Consistency across tools**: The same skill should produce the same results regardless of where it runs
- **Reusability**: Skills created in one context can be leveraged in many others
- **Longevity**: Portable skills remain valuable even as tools change or new tools emerge

## What Path B Means

**PATH B: Travel it to a second tool**

This path tests whether the **weekly-study-notes** skill created in Project 1 can be moved outside the original Claude Code environment and still function identically. Instead of building a new integration (PATH A), we are proving that the skill itself is portable.

## How the Project 1 SKILL.md Was Moved to the Second Tool

1. **Copied without modification**: The exact SKILL.md from Project 1 (../01-first-real-skill/SKILL.md) was copied to the Project 4 folder
2. **No rewrites or redesigns**: The skill definition remains unchanged
3. **Same behavior, same rules**: All trigger conditions, processing steps, output formats, and limitations remain identical
4. **Tested in a new context**: The skill was applied to new input (Biology study notes) using the exact same logic

## What "Same Skill, Different Tool" Means

The **weekly-study-notes** skill is defined by:
- Clear trigger conditions (e.g., "organize these class notes")
- Specific processing steps (identify topics, extract key terms, generate exactly 3 questions)
- Consistent output format (markdown with headings, key terms, and review questions)
- Behavior rules (what it does and doesn't do)

When this skill is moved to a second tool:
- The trigger conditions still apply
- The processing steps are still followed
- The output format is still respected
- The behavior rules are still enforced

**Result**: Identical skill behavior in a completely different environment.

## The Exact Test Instruction

**Instruction:**
> Use this skill to make study notes from:

**Test Input (Biology Study Notes):**
```
Photosynthesis happens in chloroplasts. Light reactions occur in the thylakoid. The Calvin cycle occurs in the stroma. ATP and NADPH made during the light reactions are used in the Calvin cycle.

Cellular respiration happens in mitochondria. Glycolysis occurs in the cytoplasm. The Krebs cycle occurs in the mitochondrial matrix. The electron transport chain produces ATP.
```

## Test Input

The Biology study notes provided above contain:
- Two main topics: Photosynthesis and Cellular Respiration
- Key terms specific to each topic
- Direct relationships between concepts
- No outside facts added—only the information provided

## What Successful Portability Looks Like

A successful portability test demonstrates:

1. **Identical trigger activation**: The skill recognizes the request as a valid study-notes organizing task
2. **Correct topic identification**: The skill identifies the two main topics (Photosynthesis, Cellular Respiration)
3. **Accurate key term extraction**: All important terms from the notes are extracted
4. **Definitions from notes only**: Key terms are defined using only information present in the input
5. **Exact review question count**: Exactly THREE review questions are generated
6. **Preserved information**: The original content and meaning are maintained, not summarized or condensed
7. **Proper formatting**: Output follows the markdown format specified in SKILL.md

## Limitations

This portability test is specific and limited in scope:

- **Single test case**: Only one set of input notes is tested; a full suite would include multiple variations
- **Manual execution**: The skill is manually applied; a production system would automate this
- **No external verification**: The test output is not validated against a separate gold-standard
- **Tool context varies**: The second tool may have different capabilities or constraints than the original Claude Code environment
- **Definition sourcing**: Key terms are defined only from provided notes, which may be incomplete for complex topics
- **Binary outcomes**: Review questions must be answerable from the notes alone

## Connection to Project 1, Project 2, and Project 3

**Project 1 (Build First Real Skill)**: Created the **weekly-study-notes** skill—defined its triggers, behavior, output format, and limitations.

**Project 2 (One App Read Only)**: Integrated the skill into a real application (Project 1 skill + Google Drive). The skill remained unchanged; only the integration point changed.

**Project 3 (Skill and Connector Together)**: Combined the skill with a connector (Google Drive) to create a full workflow—skill definition remained constant.

**Project 4 (Make It Portable)**: Proves the skill definition from Project 1 is **portable**. The same SKILL.md file, unmodified, works identically when moved to a completely different context. This is the payoff: the skill's value transcends its original environment.

## How I Would Explain This in a GIAIC Interview

**45–60 second explanation:**

"In Project 4, I took the study notes skill I created in Project 1 and proved it could travel to a completely different tool—without any code changes or rewrites. This matters because it shows the skill isn't just clever Claude behavior; it's a repeatable, portable definition of *what* the skill does and *how* it works.

I copied the exact skill definition from Project 1, applied it to new Biology notes, and got the same structured output: organized topics, key terms defined from the notes, and exactly three review questions. The skill recognized the task, followed all its processing rules, and produced output in the exact format specified. That's portability—the skill works the same way everywhere because I designed it to be tool-agnostic from the start. By the time you get to Project 4, you've proven your skill is valuable enough to be useful beyond its original context."

---

**Key Takeaway:** Skills are powerful because they can **travel**. Project 4 proves this by moving the same skill definition across tools and contexts while maintaining identical behavior and output.
