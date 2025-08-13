# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project Overview

61-agent orchestration system for managing development workflows with Linear task management integration.

## Directory Structure

```
claude/
├── agents/                    # 61 specialized agent specifications
├── commands/                  # 16 orchestration command definitions  
├── src/                       # TypeScript source code
│   └── install.ts            # Installation orchestrator
├── dist/                     # Compiled JavaScript output
└── package.json              # Node.js project configuration
```

## Commands

### Building and Installation
```bash
npm run build                  # Compile TypeScript to dist/
npm run install-all            # Build and install agents/commands to ~/.claude
npm run backup                 # Backup existing ~/.claude configuration
npm run dev                    # Development mode with ts-node
```

### Core Workflow Commands (16 total)
```bash
/cook                         # Initialize development task with Linear ticket
/project:run-tests            # Execute comprehensive test suite
/project:deploy               # Deploy to development/production
/project:update-linear        # Post progress to Linear
/project:complete-task        # Finalize task with PR and Linear closure
/project:coverage             # Detailed code coverage analysis
/project:coverage-quick       # Fast coverage validation
/project:security             # Security audit and vulnerability scan
/project:refactor            # Systematic code improvement
/project:analyze-figma       # Extract design specifications
/project:interactive-review  # Collaborative code review session
/project:review-orchestrator # System-wide orchestration analysis
/project:fix-git-identity    # Ensure proper git configuration
/project:setup-gitignore     # Configure security ignores
/project:gitlog              # Analyze git history
/project:test                # Quick test runner
```

### Git Identity Verification (CRITICAL)
```bash
# MUST verify before any commits
git config user.name          # Should show real developer name
git config user.email         # Should show real developer email

# Fix if showing AI identity
git config --global user.name "Developer Real Name"
git config --global user.email "developer@company.com"
```

## Architecture

### Agent Hierarchy (61 Total)

#### Core Orchestration (6)
- `agents/orchestrator.md` - Master coordinator and Linear integration
- `agents/frontend.md` - UI/UX implementation specialist
- `agents/backend.md` - API and business logic development
- `agents/github.md` - Repository and PR management
- `agents/qa.md` - Comprehensive testing and validation
- `agents/deployment.md` - Release management and monitoring

#### Critical Specialists (8 - Opus Model)
- `agents/security-auditor.md` - Security reviews and OWASP compliance
- `agents/performance-engineer.md` - Performance optimization and load testing
- `agents/ai-engineer.md` - LLM applications and ML pipelines
- `agents/incident-responder.md` - Production debugging and recovery
- `agents/cloud-architect.md` - Infrastructure and Terraform IaC
- `agents/pr-reviewer.md` - Interactive code reviews
- `agents/api-designer.md` - API design and OpenAPI specifications
- `agents/performance-optimizer.md` - Tactical performance improvements

#### Development Specialists (47 - Sonnet Model)

**Language Specialists (12):**
- python-specialist, typescript-specialist, golang-pro, rust-pro
- java-pro, csharp-pro, sql-pro, javascript-pro
- c-pro, cpp-pro, elixir-pro, php-pro

**Infrastructure & DevOps (5):**
- devops-troubleshooter, database-admin, terraform-specialist
- network-engineer, database-optimizer

**Quality & Testing (6):**
- test-specialist, test-writer, code-reviewer
- test-automator, debugger, error-detective

**Mobile & Games (3):**
- mobile-developer, ios-developer, unity-developer

**Data & Analytics (5):**
- data-scientist, quant-analyst, ml-engineer
- mlops-engineer, data-engineer

**Business & Content (5):**
- business-analyst, content-marketer, customer-support
- legal-advisor, risk-manager

**Architecture & Design (6):**
- graphql-architect, docs-architect, search-specialist
- ui-ux-designer, authentication-specialist, context-manager

**Specialized Tools (5):**
- api-documenter, tutorial-engineer, payment-integration
- legacy-modernizer, prompt-engineer

### Agent File Structure
Each agent in `agents/` follows this format:
```yaml
---
name: agent-name
description: Agent capabilities and use cases
model: sonnet|opus  # Opus for critical specialists
tools: Tool1, Tool2, Tool3
---

[Agent prompt and detailed instructions]
```

### Linear Integration Protocol
- Milestone-based updates only (no time estimates)
- Technical details in GitHub, business value in Linear
- Branch naming: `<username>/<ticket-id>` format
- All commits include Linear ticket IDs

## Critical Security Requirements

### Git Workflow
- Never commit with AI identity (no "Claude", "Assistant", etc.)
- All changes via PR process (main branch protected)
- Secret scanning before every commit
- Environment-specific secret management

### Pre-Commit Verification
```bash
# Scan for secrets
git diff --cached --name-only | grep -E "(secret|password|token|key)"
git secrets --scan  # If installed
```

## MCP Integration Requirements

### Context7 (MANDATORY for library lookups)
Always use Context7 MCP for:
- Version verification before adding dependencies
- Current API documentation and patterns
- Breaking changes between versions
- Framework feature updates

Pattern:
1. `resolve-library-id` - Convert to Context7 ID
2. `get-library-docs` - Fetch documentation with examples

### Available MCP Servers
- `@linear` - Task management
- `@notion` - Documentation
- `@exa` - Web research
- `@figma` - Design extraction (desktop required)
- `@context7` - Library documentation (mandatory)

## Development Workflow

1. **Initialize**: `/cook` → Get Linear ticket, verify git identity
2. **Plan**: Orchestrator allocates agents based on complexity
3. **Implement**: Domain agents execute with handoffs
4. **Test**: `/project:run-tests` → QA gates before deployment
5. **Deploy**: `/project:deploy` → Environment-specific release
6. **Complete**: `/project:complete-task` → PR creation and Linear closure

## Installation System

The `src/install.ts` TypeScript file manages the installation process:
- Detects Claude Code installation at `~/.claude`
- Creates timestamped backups before modifications
- Copies all agents from `agents/` to `~/.claude/agents/`
- Copies all commands from `commands/` to `~/.claude/commands/`
- Provides restore functionality from backups

## Anti-Patterns

- Time estimates (use milestone percentages)
- AI references in public communication
- Generic commit messages without context
- Direct commits to main branch
- Library docs without Context7 verification
- References to non-existent `incoming/` directory