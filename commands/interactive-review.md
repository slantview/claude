# Interactive Code Review

Comprehensive interactive code review with Linear integration for open PRs.

## Usage
```bash
@run interactive-review [repo-path]
```

## Features
- Discovers and lists all open PRs
- Interactive walkthrough of changes
- Smart grouping by component/risk
- Contextual analysis (architecture, security, performance)
- Automatic Linear summary generation
- Learning from your review patterns

## Step 1: Initialize Review Session
1. Detect repository and VCS type
2. Fetch open PRs using GitHub API
3. Load PR metadata (author, CI status, linked Linear issues)
4. Present PR summary menu

```bash
@github list_pull_requests --state open
```

## Step 2: PR Selection & Analysis
Show interactive menu:
```
Found 3 open PRs:
1. [#456] feat: Add user authentication (12 files, +450/-23) ⚡ High Impact
   - Linear: ENG-1234 - User Auth Implementation
   - Author: @teammate | CI: ✅ Passing
   
2. [#457] fix: Memory leak in processor (3 files, +34/-45) 🐛 Bug Fix
   - Linear: BUG-5678 - Memory Usage Spike
   - Author: @developer | CI: ⚠️ Running

Which PR would you like to review? (1-3, or 'a' for all):
```

## Step 3: Smart Contextual Loading
```python
# Load context based on PR type
context = {
    "changed_files": pr.files,
    "test_coverage": analyze_test_changes(),
    "dependencies": check_package_changes(),
    "api_changes": detect_interface_changes(),
    "similar_prs": find_historical_context(),
    "linked_issues": get_linear_issues()
}
```

## Step 4: Interactive Review Flow

### Component Grouping
```
Analyzing PR #456... Grouping related changes:

📁 Authentication Module (5 files)
  ├── Critical: auth/jwt-handler.js
  ├── High: middleware/auth.js
  └── Medium: utils/token.js

📁 Database Changes (2 files)
  ├── Migration: add_user_sessions.sql
  └── Model: models/user.js

📁 Tests (5 files)
  └── Coverage: 87% (+12%)

Start with: [A]uth module, [D]atabase, [T]ests, or [O]verview?
```

### Deep Dive Analysis
For each component, leverage specialized agents:

```
🔍 Reviewing: auth/jwt-handler.js

ARCHITECTURE IMPACT:
- Introduces new JWT signing pattern
- Affects 3 downstream services
- Consider: Token rotation strategy

SPECIALIST ANALYSIS:
🔒 Security-auditor: OWASP compliance check, JWT best practices
⚡ Performance-engineer: Token generation optimization analysis  
🏗️ Code-reviewer: Configuration security and production reliability
🛠️ Language-specialist: Language-specific optimizations (e.g., javascript-pro)

AUTOMATED CHECKS:
✅ Uses secure randomness
✅ Proper key management
⚠️  Consider: Rate limiting on token generation

PERFORMANCE METRICS:
- Token generation: ~50ms (acceptable)
- Validation: ~5ms (good)

Available commands:
- 's' - Deep security review with security-auditor
- 'p' - Performance analysis with performance-engineer  
- 'l' - Language-specific review (auto-detected)
- 'c' - Configuration review with code-reviewer
- Enter - Continue to next component

Your choice:
```

## Step 5: Interactive Commands During Review

```
Available commands:
:explain <line>     - Deep explanation of specific code
:suggest           - Get alternative implementation ideas
:compare           - Show diff with main branch
:impact            - Show all affected files
:sketch <idea>     - Help implement your suggestion
:flag <issue>      - Mark for Linear summary
:next              - Continue to next file
:summary           - Generate current review summary
```

## Step 6: Capture Key Insights

Track only high-value findings:
```python
review_session = {
    "findings": [],
    "decisions": [],
    "action_items": [],
    "time_spent": 0,
    "files_reviewed": [],
    "overall_assessment": ""
}

# Only track significant items
if importance >= THRESHOLD:
    review_session["findings"].append({
        "type": "security|performance|architecture",
        "severity": "high|medium|low",
        "summary": "Brief description",
        "suggestion": "Proposed fix"
    })
```

## Step 7: Linear Integration

### Automatic Issue Detection
```python
# Find linked Linear issues
linear_refs = extract_linear_refs(pr.body, pr.title, branch_name)
if not linear_refs:
    # Try to match by title/description
    linear_issues = search_linear_issues(pr.title)
```

### Smart Summary Generation
Generate concise, valuable summaries:

```python
def generate_linear_summary(session, pr_type):
    if pr_type == "feature":
        return f"""
✨ Code Review Complete - {pr.title}

**Duration**: {session.time_spent} minutes
**Assessment**: {session.overall_assessment}

Key Findings:
{format_top_findings(session.findings, max=3)}

Decisions:
{format_decisions(session.decisions)}

Action Items:
{format_action_items(session.action_items)}

PR Status: {get_pr_status_emoji()} Ready to merge after minor updates
        """
```

### Post to Linear
```python
# Use Linear MCP server
@linear create_comment {issue_id} "{summary}"

# Smart threading - update existing review thread if present
existing_comments = @linear list_comments {issue_id}
if has_review_thread(existing_comments):
    @linear create_comment {issue_id} "{summary}" --parent {thread_id}
```

## Step 8: Review Memory & Learning

Save preferences for future reviews:
```json
{
  "review_preferences": {
    "focus_areas": ["security", "performance"],
    "skip_patterns": ["*.test.js", "*.md"],
    "notification_triggers": ["breaking_change", "security_issue"],
    "summary_style": "concise"
  }
}
```

## Configuration

Create `.claude-review.yml` in your repo:
```yaml
review:
  group_by: "component"  # or "risk", "type"
  focus_areas:
    - security
    - performance
    - architecture
  
linear:
  auto_detect: true
  summary_style: "concise"
  notify_on:
    - blockers
    - security_issues
  
  templates:
    feature: "feature_review.md"
    bugfix: "bugfix_review.md"
    hotfix: "hotfix_review.md"
```

## Example Review Session

```
You: @run interactive-review

Agent: Found 2 open PRs in this repository:

1. [#456] feat: Add real-time notifications (8 files) 
   Linear: ENG-1234 | Author: @sarah | CI: ✅

2. [#457] fix: Race condition in data sync (3 files)
   Linear: BUG-5678 | Author: @mike | CI: ✅

Which would you like to review? > 1

Loading PR #456... Analyzing changes...

This PR introduces WebSocket support for real-time notifications. 
I've grouped the changes into 3 logical components:

1. WebSocket Server (3 files) - Critical infrastructure
2. Client Integration (2 files) - UI components  
3. Tests (3 files) - Good coverage added

Let's start with the critical WebSocket server. Here's what I found:

🔍 websocket/server.js
- Clean separation of concerns ✅
- Proper error handling ✅
- ⚠️ Missing rate limiting - could allow DoS

Would you like me to suggest a rate limiting implementation? (y/n): y

[Shows rate limiting code suggestion]

You: That looks good, let's flag this for the author. Any security concerns?

Agent: Let me check the authentication flow...

[Continues interactive review...]

=== Review Complete ===

Posting summary to Linear issue ENG-1234...

✅ Summary posted successfully!
```

## Quick Commands

For rapid reviews:
```bash
@run interactive-review --quick    # Skip detailed analysis
@run interactive-review --security # Focus on security only
@run interactive-review --no-linear # Skip Linear updates
```