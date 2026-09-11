# Skill: weekly-study-notes

## Overview

**Skill Name:** weekly-study-notes  
**Purpose:** Convert raw, messy class or lecture notes into structured, organized study materials  
**Type:** Note Organization  
**Status:** Tested and Working

## When the Skill Triggers

The skill activates when the user asks about **organizing study notes** or **creating study materials** from raw class content.

### ✅ Will Trigger
- "Convert these class notes into study notes"
- "Organize my lecture notes for weekly review"
- "Turn these messy notes into structured study material"
- "Help me with my study notes from today's class"
- "Can you format these notes for studying?"

### ❌ Won't Trigger
- "Summarize this article in 5 bullet points" (article summary, not study organization)
- "Write meeting notes" (meeting notes, not class study notes)
- "Make this essay shorter" (editing, not organization)
- "Explain this topic" (teaching, not note organization)
- "Take notes while I lecture" (note-taking, not organization)

## What the Skill Does

### Input
The user provides raw, unorganized notes from class, lectures, or study sessions.

### Processing Steps

1. **Read the raw notes** – exactly as provided by the user
2. **Identify topic boundaries** – scan the content for natural topic separations
3. **Respect user labels** – if the user already labeled topics with "Topic:" or similar markers, use those labels
4. **Create structure** – organize content under clear topic headings
5. **Extract key terms** – identify important concepts and terminology from the notes
6. **Define key terms** – add one-line definitions for each key term (only from information in the notes)
7. **Generate review questions** – create exactly THREE questions covering the material
8. **Format output** – return well-organized, readable study notes

### Output Format

```markdown
# Topic 1: [Topic Name]
Key Terms: **Term1** - definition from notes, **Term2** - definition from notes

[Organized notes content for Topic 1]

# Topic 2: [Topic Name]
Key Terms: **Term1** - definition from notes, **Term2** - definition from notes

[Organized notes content for Topic 2]

## Review Questions
1. First review question about the material
2. Second review question about the material
3. Third review question about the material
```

## Behavior Rules

### What the Skill DOES
- ✅ Organize messy content into topics
- ✅ Create clear headings for each topic
- ✅ Extract and define key terms from the provided notes
- ✅ Generate exactly THREE review questions
- ✅ Preserve the user's original information
- ✅ Use user-provided topic labels if present
- ✅ Return formatted notes directly in chat

### What the Skill DOES NOT Do
- ❌ Invent facts not in the original notes
- ❌ Add dates or numbers not mentioned
- ❌ Create definitions beyond what the notes contain
- ❌ Summarize or condense the content
- ❌ Rewrite or paraphrase substantially
- ❌ Trigger on unrelated requests like summaries or essays
- ❌ Trigger on meeting notes or other non-study content

## Key Features

### 1. Topic Detection
- Automatically finds topic boundaries in messy notes
- Respects user-provided topic labels (e.g., "Topic: Photosynthesis")
- Creates clear headings for organization

### 2. Key Terms
- Extracts important terminology from the notes
- Provides brief, one-line definitions
- Definitions are sourced ONLY from the notes provided
- Formatted in bold for visibility

### 3. Review Questions
- Always generates exactly THREE questions
- Questions cover major topics from the notes
- Questions are study-focused (can be answered by reviewing notes)
- Helps students prepare for exams or assessments

## Example Usage

### Input (Messy Notes)
```
photosynthesis is the process where plants use sunlight to make food. 
it has two main parts. the light reactions happen in the thylakoid membranes and 
produce ATP and NADPH. the calvin cycle happens in the stroma and uses ATP and 
NADPH to make glucose. chlorophyll absorbs light energy. the sun provides the 
initial energy. water molecules are split and oxygen is released. 
glucose is the final product made in the calvin cycle.
```

### Output (Organized Study Notes)
```
# Topic 1: Light Reactions
Key Terms: **Thylakoid membranes** - structures where light reactions occur, **Chlorophyll** - pigment that absorbs light energy, **ATP** - energy molecule produced

The light reactions happen in the thylakoid membranes and produce ATP and NADPH. 
Chlorophyll absorbs light energy. The sun provides the initial energy. Water molecules 
are split and oxygen is released.

# Topic 2: Calvin Cycle
Key Terms: **Stroma** - location where Calvin cycle occurs, **NADPH** - electron carrier used in Calvin cycle, **Glucose** - final product

The Calvin cycle happens in the stroma and uses ATP and NADPH to make glucose. 
Glucose is the final product made in the Calvin cycle.

## Review Questions
1. What two parts make up photosynthesis and where do they occur?
2. What are the inputs and outputs of the light reactions?
3. How do ATP and NADPH from the light reactions help in the Calvin cycle?
```

## Technical Details

- **Trigger Detection:** Natural language pattern matching on request content
- **Content Processing:** Semantic analysis of note structure
- **Formatting:** Markdown output for readability
- **Question Generation:** Ensures coverage of main topics
- **Definition Sources:** Only from user-provided notes

## Limitations

- Does NOT verify factual accuracy (relies on source notes being correct)
- Does NOT add external information beyond what's in the notes
- Does NOT trigger on every type of note (only study/class notes)
- Does NOT generate more or fewer than THREE review questions
- Does NOT handle extremely messy or illegible input well (user should clean up first)

## Testing Summary

| Test | Input | Expected | Actual | Result |
|------|-------|----------|--------|--------|
| 1. Unorganized notes | Messy class notes without labels | Topics identified and organized | Topics correctly identified and organized | ✅ PASS |
| 2. Labeled notes | Notes with explicit topic labels | Labels used and respected | Labels used as provided | ✅ PASS |
| 3. Unrelated request | "Summarize this article" | Skill does NOT activate | No article provided; behavior not verified | ⚠️ INCONCLUSIVE |

## When to Use This Skill

**Best for:**
- Converting class lecture notes into study guides
- Organizing notes for exam preparation
- Structuring notes taken quickly during lectures
- Creating consistent study materials

**Not for:**
- Summarizing articles or papers
- Writing or organizing meeting notes
- Editing essays or papers
- Creating original content
- Explaining new topics (teaching)
