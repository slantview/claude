# Initialize Development Run

Execute this complete initialization workflow:

## Step 0: Configure Git Identity (CRITICAL)
```bash
# Check current git configuration
echo "Current git user: $(git config user.name)"
echo "Current git email: $(git config user.email)"

# If it shows "claude" or any AI-related name, STOP!
if [[ $(git config user.name) == *"claude"* ]]; then
    echo "❌ CRITICAL ERROR: Git is using AI identity!"
    echo "You MUST set your real identity:"
    echo "git config --global user.name 'Your Real Name'"
    echo "git config --global user.email 'your.email@company.com'"
    exit 1
fi

# Set correct identity if needed
# git config user.name "Steve Rude"
# git config user.email "steve@company.com"
```

## Step 1: Gather Information
Ask me for the Linear ticket URL or ID, then fetch complete details:
- Use @linear to get issue details
- List all comments to understand context
- Extract any linked resources (Figma, docs, etc.)

## Step 2: Update Documentation
1. Scan local /docs folder using @filesystem
2. Check @google-drive for any referenced API docs
3. Create a `docs/current-task.md` summary

## Step 3: Security Setup
Before any development:
1. Execute `/project:setup-gitignore` to configure security
2. Verify no secrets in repository
3. Set up environment variables
4. Configure secret management approach
5. Brief all agents on security requirements

## Step 4: Analyze Design Resources
If Figma links found:
- Extract design URL from Linear ticket
- Use @figma to get design specifications
- Generate component list and styling requirements
- Create `docs/design-specs.md`

## Step 5: Research & Planning
Based on ticket requirements:
1. Search for similar past implementations
2. Identify required technologies
3. List potential challenges
4. Research best practices

## Step 6: Verify Understanding
Present a comprehensive summary:
- Task objectives
- Technical requirements  
- Design specifications
- Acceptance criteria
- Security considerations
- Potential risks

Wait for confirmation before proceeding.

## Step 7: Generate Task Breakdown
Create detailed TODO list with:
- Feature breakdown (frontend/backend/infra)
- Complexity assessment (simple/medium/complex)
- Dependencies between tasks
- Testing requirements
- Security checkpoints

NOTE: Avoid time estimates - focus on milestones

## Step 8: Update Linear & Create Branch
```
# Extract Linear ticket ID (e.g., ENG-123)
# Get username for branch
USERNAME=$(git config user.name | tr ' ' '-' | tr '[:upper:]' '[:lower:]')
# Create branch
@github create_branch "${USERNAME}/<LINEAR-ID>"

@linear update_issue <issue_id> --state "In Progress"
@linear create_comment <issue_id> "🚀 Development run initiated

GitHub Branch: ${USERNAME}/<LINEAR-ID>

Task Summary:
[Insert summary]

Task Breakdown:
[Insert breakdown]

Work allocation:
- Frontend: [Components needed]
- Backend: [APIs needed]
- Testing: [Test scenarios]
- Deployment: Release coordination

Progress tracking: Milestone-based"
```

**IMPORTANT**: Never mention Claude Code, AI tools, or "agents" in comments

## Step 9: Initialize Sub-Agents
Based on task complexity, create specifications for:

## Core Orchestration Agents (6 - Always Available)
- **orchestrator**: Master coordination and Linear integration (always required)
- **frontend**: UI/UX work, React/Vue/Angular, design implementation (if UI work needed)
- **backend**: API development, business logic, database operations (if API work needed)  
- **github**: Repository management, PR creation, branch coordination (always required)
- **qa**: Comprehensive testing, quality gates, validation (always required)
- **deployment**: Release management, GitHub Actions, environment orchestration (for releases)

## Critical Specialists (8 - Opus Model for Complex Tasks)
**Security & Performance**: security-auditor, performance-engineer, performance-optimizer, incident-responder
**Architecture & Design**: cloud-architect, ai-engineer, api-designer, pr-reviewer

## Development Specialists (47 - Sonnet Model - Auto-Selected by Context)
**Language Specialists**: python-specialist, typescript-specialist, golang-pro, rust-pro, java-pro, csharp-pro, sql-pro, javascript-pro, c-pro, cpp-pro, elixir-pro, php-pro
**Infrastructure & DevOps**: devops-troubleshooter, database-admin, terraform-specialist, network-engineer
**Quality & Testing**: test-specialist, test-writer, code-reviewer, test-automator, debugger, error-detective
**Mobile & Games**: mobile-developer, ios-developer, unity-developer
**Data & Analytics**: data-scientist, quant-analyst, ml-engineer, mlops-engineer, data-engineer
**Business & Content**: business-analyst, content-marketer, customer-support, legal-advisor, risk-manager
**Architecture & Tools**: graphql-architect, docs-architect, search-specialist, ui-ux-designer, authentication-specialist
**Specialized Utilities**: api-documenter, tutorial-engineer, context-manager, payment-integration, legacy-modernizer, database-optimizer

## Step 10: Setup Tracking
1. Create `orchestrator/task-status.md`
2. Initialize progress tracking
3. Set up error logging
4. Configure notification thresholds

## Step 11: Handoff to Orchestrator
Provide orchestrator with:
- Task specifications
- Sub-agent assignments
- Resource links
- Success criteria
- Security requirements
- Milestone checkpoints