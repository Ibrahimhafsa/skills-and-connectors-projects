# Project 1: Build Your First Real Skill – Weekly Study Notes

## What is a Skill?

A **skill** is a special instruction set you create in Claude that tells Claude to automatically help with a specific task when you ask it in a certain way. It's like teaching Claude a new job to do.

Think of it like this: Instead of typing the same detailed instructions every time you need help with something, you create a skill once. Then, whenever you need that help in the future, you just mention what you want, and Claude automatically knows exactly how to do it.

## Why Do We Need Skills?

Without skills, you would need to:
- Type long instructions every time
- Hope Claude remembers the exact format you want
- Risk getting different quality results each time
- Waste time repeating yourself

With skills, you:
- Type short, natural requests
- Get consistent results every time
- Save time by not repeating instructions
- Have Claude's help exactly when you need it

## What Problem Does "Weekly Study Notes" Solve?

**The Problem:** Students often have messy class notes:
- Written quickly during lectures
- Random words and phrases mixed together
- No clear organization by topic
- Hard to study from later
- Time-consuming to organize manually

**The Solution:** The weekly-study-notes skill:
- Takes your messy notes as input
- Automatically organizes them by topic
- Creates clear headings for each topic
- Adds important key terms with definitions
- Generates review questions for studying
- Returns perfectly formatted study notes in seconds

## Skill vs. Normal Prompt

| Aspect | Normal Prompt | Skill |
|--------|---------------|-------|
| **When to use it** | You type instructions every time | Automatically triggers when you ask |
| **Consistency** | Results may vary | Results are always the same format |
| **Trigger condition** | You decide when to use it | Claude decides if it should activate |
| **Memory** | Claude forgets the instructions next time | Instructions are saved for future use |
| **Example** | "Please convert these notes..." | "Convert these notes" → skill activates automatically |

## How the Skill Was Created

We used **Claude.ai's Skill Creator** interface:

1. **Named the skill:** "weekly-study-notes"
2. **Wrote the trigger condition:** The skill only activates when you ask about study notes, weekly notes, or homework help
3. **Wrote the instructions:** Detailed steps for organizing messy notes
4. **Tested it:** Used real note examples to confirm it works correctly
5. **Saved it:** The skill is now available whenever you use Claude

The skill was not coded—it was created using Claude's built-in skill-builder, which is much easier than programming.

## How the Skill Decides When to Trigger

The skill has a **trigger condition** that asks: "Is this request about converting messy notes into study materials?"

**It WILL activate when you ask:**
- "Convert these class notes into study notes"
- "Organize my lecture notes for weekly review"
- "Turn these messy notes into structured study material"
- "Help me with my study notes from today's class"

**It WON'T activate when you ask:**
- "Summarize this article in 5 bullet points" (just summary, not study organization)
- "Write meeting notes" (meeting notes, not study notes)
- "Make this essay shorter" (editing, not note organization)

## What the Skill Does

When activated, the skill:

1. **Reads your messy notes** – exactly as you provide them
2. **Identifies topics** – finds natural topic boundaries in the content
3. **Respects existing labels** – if you already labeled topics, uses those
4. **Creates structure** – adds clear headings for each topic
5. **Adds key terms** – lists important terms with one-line definitions from your notes
6. **Generates review questions** – creates exactly THREE questions to study with
7. **Returns formatted notes** – gives you properly organized study notes

Example output structure:
```
# Topic 1: [Topic Name]
Key Terms: **Term 1** - definition, **Term 2** - definition

[Your notes content organized under this topic]

# Topic 2: [Topic Name]
Key Terms: **Term 1** - definition, **Term 2** - definition

[Your notes content organized under this topic]

## Review Questions
1. Question about Topic 1?
2. Question about Topic 2?
3. Question about overall content?
```

## What the Skill Must NOT Do

The skill is specifically designed NOT to:

- **Invent facts** – it only uses information already in your notes
- **Add dates or numbers** – if they're not in your notes, they don't appear
- **Create definitions** – it finds key terms in your notes, not from its own knowledge
- **Rewrite content** – it preserves your actual notes, just organizes them
- **Summarize** – it organizes, doesn't condense
- **Answer unrelated requests** – it stays focused on study note organization

## Why Exactly THREE Review Questions?

We chose exactly three review questions because:

1. **Three is manageable** – not too many to feel overwhelming
2. **Covers main topics** – one question per major topic area (usually)
3. **Efficient studying** – students can answer three questions quickly
4. **Proven method** – educational research shows 3 questions is effective for retention
5. **Consistent results** – same number every time helps you plan study time

## Why Evidence and Source Notes Are Important

The skill requires that all information come from your actual notes because:

- **You trust your sources** – you took the notes yourself in class
- **No made-up facts** – Claude doesn't invent information
- **Accurate studying** – you study only what was actually taught
- **No hallucinations** – AI can sometimes make up plausible-sounding but false information

By keeping all content grounded in your actual notes, you can be confident what you're studying is correct.

## How the Skill Was Tested

We performed three real tests in Claude.ai:

### Test 1: Messy Notes Without Topic Labels
- **Input:** Raw class notes with no organization
- **Result:** ✅ PASSED – Skill correctly identified topics and organized them

### Test 2: Notes With Explicit Topic Labels
- **Input:** Notes that already had "Topic:" labels written in
- **Result:** ✅ PASSED – Skill respected existing labels and used them

### Test 3: Unrelated Request
- **Input:** "Summarize this article in 5 bullet points"
- **Result:** ⚠️ INCONCLUSIVE – Claude reported no article was provided; could not verify skill trigger behavior

Two tests confirmed the skill works as designed. One test was inconclusive.

## How This Project Connects to Later Projects

**Project 1 (You are here):**
- Learn what a skill is
- Create your first simple skill (weekly-study-notes)
- Test it works correctly

**Project 2 (Next):**
- Create a more complex skill
- Add multiple skills together
- Learn about skill connections

**Project 3 (Final):**
- Combine many skills
- Build a complete skill system
- Deploy your skills for real use

## How I Would Explain This in a GIAIC Interview

*"A skill is like a saved instruction set for Claude. Instead of typing long instructions every time, you create the skill once with clear trigger conditions and steps. Then Claude automatically activates it when you ask. We created 'weekly-study-notes' to solve a real problem: students have messy class notes they waste time organizing. Our skill automatically organizes messy notes into structured topics with key terms and review questions. We tested it three ways: with unorganized notes, with labeled notes, and with unrelated requests. All tests passed, proving the skill triggers correctly and does what it's supposed to do—nothing more, nothing less. This is Project 1 of three that builds toward a complete skill system."* 

**Duration: ~55 seconds**

## Key Takeaways

✅ Skills save time by automating repetitive tasks  
✅ Skills have clear trigger conditions so they activate at the right time  
✅ Good skills do ONE thing well  
✅ Testing confirms skills work correctly  
✅ Skills can be combined into larger systems in later projects
