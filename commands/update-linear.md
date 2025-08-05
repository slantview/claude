# Update Linear Status

Quick command to post progress updates to Linear with product/project focus.

## Communication Guidelines
**Linear is for Product/Project Updates:**
- Focus on user-facing features and business value
- Use stakeholder-friendly language
- Emphasize progress toward goals
- Highlight what users will experience
- Keep technical details minimal

**Save Technical Details for GitHub:**
- Implementation specifics
- Code architecture decisions
- Performance optimizations
- Technical debt discussions

## Usage
Call this command when you need to update Linear with progress, blockers, or status changes.

## Step 1: Determine Update Type
Ask which type of update:
1. Progress update
2. Blocker encountered
3. Status change
4. Question/clarification needed
5. Completion of subtask

## Step 2: Gather Information
Based on update type, collect:
- Current progress percentage
- Completed items
- Remaining items
- Any blockers or issues
- Time estimate updates

## Step 3: Format Update
Create well-formatted Linear comment:

### Progress Update Template (Product-Focused)
```
@linear create_comment <issue_id> "📊 Progress Update

Completed:
✅ User login flow improved
✅ Dashboard loading time reduced

In Progress:
🔄 Payment integration setup

Next:
📋 Email notification system

Progress: ██████░░░░ 60%

No blockers. Feature on track for release."
```

**NEVER mention**: Claude Code, AI assistance, agents, or orchestration

### Blocker Template (Business Impact Focus)
```
@linear create_comment <issue_id> "🚨 Blocker Encountered

Issue: Payment provider API unavailable
Impact: Cannot complete checkout flow
User impact: Orders cannot be processed

Workaround: Implementing fallback payment option
Resolution ETA: 2 hours

Will update when resolved."
```

### Status Change Template
```
@linear update_issue <issue_id> --state "[New State]"
@linear create_comment <issue_id> "📌 Status changed to [New State]

Reason: [Why the change]
Next steps: [What happens next]"
```

## Step 4: Add Context
Always include:
- Links to relevant PRs
- Screenshots if UI changes
- Error logs if debugging
- Performance metrics if relevant

## Step 5: Tag Stakeholders
If update requires attention:
- Tag relevant team members
- Set priority if urgent
- Add labels if needed

## Quick Updates (Product Language)
For common updates, use these product-focused phrases:
- "Feature development started"
- "User interface 50% complete"
- "Ready for user testing"
- "Integration delayed - exploring alternatives"
- "Feature ready for release"