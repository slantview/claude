# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project Overview

This repository contains a comprehensive orchestration system for managing specialized AI sub-agents with Linear task management integration. The system coordinates multiple domain-specific agents (orchestrator, frontend, backend, GitHub, QA, deployment) to execute complex development workflows.

## Directory Structure

```
claude/
├── agents/                    # 61 comprehensive agent specifications
├── commands/                  # 14 orchestration command definitions
├── incoming/
│   ├── current/              # Active agent specifications
│   │   ├── orchestrator.md   # Master coordination agent
│   │   ├── frontend.md       # UI/UX implementation
│   │   ├── backend.md        # API and business logic
│   │   ├── github.md         # Repository management
│   │   ├── qa.md            # Quality assurance
│   │   ├── deployment.md    # Release management
│   │   └── *.json           # Additional agent configurations
│   └── wshobson/            # Extended agent library (56 specialized agents)
```

## Core Architecture

### Multi-Agent Orchestration System

This project implements a sophisticated orchestration pattern with these key agents:

1. **Orchestrator** (`incoming/current/orchestrator.md`) - Master coordinator that manages all sub-agents, workflow timing, and project coherence
2. **Frontend** (`incoming/current/frontend.md`) - React/Vue/Angular implementation with Figma design integration
3. **Backend** (`incoming/current/backend.md`) - API endpoints, business logic, database operations
4. **GitHub** (`incoming/current/github.md`) - Repository management, PR creation, branch coordination
5. **QA** (`incoming/current/qa.md`) - Comprehensive testing, validation, and quality gates
6. **Deployment** (`incoming/current/deployment.md`) - GitHub Actions workflow management and releases

### Agent Communication Protocol

- **Linear Integration**: All agents update Linear tickets at major milestones only
- **Platform-Specific Communication**: 
  - GitHub: Technical implementation details
  - Linear: Product/business value focus
- **Professional Tone**: Senior engineer communication style, no enthusiasm or AI references
- **Security First**: Never commit secrets, use proper identity management

### Git Workflow Standards

- **Branch Naming**: Always `<username>/<issue-id>` format (e.g., `steve/ENG-123`)
- **No Direct Commits**: All changes via PR process, main branch protected
- **Conventional Commits**: Include Linear ticket IDs in commit messages
- **Real Identity**: Git must use developer's real name/email, never AI names

## Development Commands

This project manages agent specifications and workflows rather than traditional application code. Key operations:

### Agent Management
```bash
# View comprehensive 61-agent system
ls agents/                     # 61 total agents
cat agents/orchestrator.md     # Master coordination agent
cat agents/frontend.md         # UI/UX implementation specialist
cat agents/backend.md          # API and business logic specialist

# Core orchestration agents (6)
ls agents/{orchestrator,frontend,backend,github,qa,deployment}.md

# Critical specialists (8 - opus model)
ls agents/{security-auditor,performance-engineer,ai-engineer,incident-responder,cloud-architect,pr-reviewer,api-designer,performance-optimizer}.md

# Development specialists (47 - sonnet model)  
ls agents/*-specialist.md agents/*-pro.md

# Check agent capabilities by model
grep -l "model: opus" agents/*.md     # 8 critical capability agents
grep -l "model: sonnet" agents/*.md   # 53 standard development agents
```

### Workflow Commands
```bash
# Initialize new development task
/cook

# Project management commands (via orchestrator)
/project:update-linear         # Post progress update to Linear
/project:complete-task         # Finalize and close task
/project:run-tests            # Execute test suite
/project:coverage             # Run code coverage analysis
/project:deploy               # Deploy to dev/prod environments
```

### Security & Identity Commands
```bash
# Git identity verification (critical before any commits)
git config user.name          # Verify current identity
git config user.email         # Verify current email
git config --global user.name "Developer Real Name"   # Set real name
git config --global user.email "developer@company.com" # Set real email

# Identity validation (must not contain AI references)
if [[ $(git config user.name) == *"claude"* ]]; then
    echo "ERROR: Fix git identity before proceeding"
fi

# Secret scanning before commits
git secrets --scan            # Scan for committed secrets
trufflehog git file://.      # Alternative scanning tool
git diff --cached --name-only | grep -E "(secret|password|token|key)" # Check staged files
```

## Key Patterns & Best Practices

### Orchestration Flow
1. **Task Initialization**: Orchestrator analyzes requirements and allocates agents
2. **Resource Planning**: Determines complexity (Simple/Medium/Complex/Critical)
3. **Agent Coordination**: Assigns specific roles with clear handoff protocols
4. **Progress Tracking**: Milestone-based progress without time estimates
5. **Quality Gates**: QA approval required before deployment
6. **Integration**: GitHub agent manages all repository interactions

### Communication Standards
- **Terse Professional**: Direct, concise updates like senior engineers
- **No AI References**: Never mention Claude Code, agents, or AI assistance in public
- **Platform Appropriate**: Technical details in GitHub, business value in Linear
- **Minimal Updates**: Major milestones only, avoid progress cheerleading

### Security Requirements
- **Secret Management**: Use GitHub Secrets, K8s Secrets, or cloud KMS
- **Git Identity**: Real developer identity, never AI names
- **Data Masking**: Sensitive information never in logs or comments
- **Separation**: Different secrets per environment

### Agent-Specific Guidelines

#### Orchestrator Agent
- **Pre-deployment**: Git identity verification mandatory
- **Daily Updates**: Aggregate status across all agents
- **Risk Management**: Early blocker identification and mitigation
- **Integration**: Coordinates handoffs between specialized agents

#### GitHub Agent  
- **Branch Management**: Linear ticket ID integration for all branches
- **PR Creation**: Developer-focused technical content
- **Commit Strategy**: Logical, atomic commits with meaningful messages
- **Merge Coordination**: Squash strategy with proper Linear linking

#### QA Agent
- **Test Categories**: Unit, integration, E2E, performance, security, accessibility
- **Coverage Requirements**: Minimum 80% code coverage
- **Sign-off Criteria**: All tests passing, no critical/high bugs
- **Performance Gates**: Benchmarks must be met before approval

#### Deployment Agent
- **Environment Strategy**: Dev (automatic), Prod (approval-gated)
- **Health Monitoring**: 15min dev, 1hr production monitoring windows
- **Rollback Plans**: Immediate rollback capability for issues
- **Release Notes**: GitHub releases with Linear ticket integration

## Comprehensive 61-Agent Architecture

The `agents/` directory contains a complete orchestration system with 61 specialized agents:

### Core Orchestration Agents (6 agents)
- **orchestrator** (sonnet) - Master coordinator for multi-agent workflows and Linear integration
- **frontend** (sonnet) - UI/UX development with React/Vue/Angular and Figma integration  
- **backend** (sonnet) - API development, database design, and business logic implementation
- **github** (sonnet) - Repository management, PR creation, and git workflow coordination
- **qa** (sonnet) - Comprehensive testing, quality gates, and validation processes
- **deployment** (sonnet) - Release management, GitHub Actions, and environment orchestration

### Critical Specialists (8 agents - Opus model)
- **security-auditor** - Security review, vulnerability assessment, OWASP compliance, authentication systems
- **performance-engineer** - Performance optimization, load testing, caching strategies, scalability analysis
- **ai-engineer** - LLM applications, RAG systems, vector databases, AI pipeline optimization
- **incident-responder** - Production incident response, emergency debugging, rapid system recovery
- **cloud-architect** - AWS/Azure/GCP infrastructure, Terraform IaC, cost optimization, multi-cloud strategies
- **pr-reviewer** - Interactive PR reviews with GitHub and Linear integration
- **api-designer** - API design with OpenAPI 3.0+ specifications and comprehensive implementation
- **performance-optimizer** - Tactical performance optimization for databases, queries, and system bottlenecks

### Development Specialists (47 agents - Sonnet model)
**Language Specialists (12):** python-specialist, typescript-specialist, golang-pro, rust-pro, java-pro, csharp-pro, sql-pro, javascript-pro, c-pro, cpp-pro, elixir-pro, php-pro

**Infrastructure & DevOps (5):** devops-troubleshooter, database-admin, terraform-specialist, network-engineer, database-optimizer

**Quality & Testing (6):** test-specialist, test-writer, code-reviewer, test-automator, debugger, error-detective

**Mobile & Games (3):** mobile-developer, ios-developer, unity-developer

**Data & Analytics (5):** data-scientist, quant-analyst, ml-engineer, mlops-engineer, data-engineer

**Business & Content (5):** business-analyst, content-marketer, customer-support, legal-advisor, risk-manager

**Architecture & Design (6):** graphql-architect, docs-architect, search-specialist, ui-ux-designer, authentication-specialist, context-manager

**Specialized Tools (5):** api-documenter, tutorial-engineer, payment-integration, legacy-modernizer

## MCP Server Integration

Available MCP servers for enhanced functionality:
- `@linear` - Task management and updates
- `@notion` - Knowledge management and documentation  
- `@exa` - Advanced web search and research
- `@figma` - Design extraction (requires desktop app)

Additional tool integrations:
- `gh CLI` - GitHub repository management
- `aws CLI` - AWS cloud infrastructure
- `kubectl` - Kubernetes cluster management

## Anti-Patterns to Avoid

- **Time Estimates**: Use milestone completion percentages instead
- **AI References**: Never mention Claude Code, agents, or AI tools publicly
- **Over-Commenting**: Make meaningful updates, not excessive progress reports
- **Secret Exposure**: No API keys, tokens, or sensitive data in commits/comments
- **Generic Commits**: Avoid "fix", "update", "changes" without specific context
- **Direct Main Commits**: All changes must go through PR process

## Error Recovery

- **Linear Connection**: Retry with `/mcp` authentication
- **Figma Unavailable**: Note in Linear, use screenshots as fallback
- **Test Failures**: Create Linear subtask for fixes, don't proceed
- **Security Issues**: Immediate stop, create urgent Linear ticket
- **Git Identity Issues**: Must fix before any commits

## Agent Integration Patterns

### Agent Coordination Patterns
The 61-agent system follows structured coordination:

**Core Workflow (6 agents always available):**
1. **orchestrator** → master coordination, Linear integration, security enforcement
2. **frontend/backend** → domain-specific implementation with PR coordination
3. **github** → repository management, branch naming with Linear ticket IDs
4. **qa** → comprehensive testing, deployment gates
5. **deployment** → release management, production monitoring

**Critical Specialists (8 opus agents for complex tasks):**
- **security-auditor, performance-engineer** → security reviews, performance optimization
- **ai-engineer, cloud-architect** → specialized architecture and implementation
- **pr-reviewer, api-designer** → collaborative reviews and design
- **incident-responder, performance-optimizer** → emergency response and tactical optimization

**Development Specialists (47 sonnet agents auto-selected by context):**
- Language experts for specific technology stacks
- Infrastructure specialists for DevOps and database operations
- Quality specialists for comprehensive testing strategies
- Business specialists for requirements and compliance
- Architecture specialists for system design patterns

This orchestration system emphasizes professional engineering practices, security-first development, and clear separation between technical implementation (GitHub) and business value communication (Linear).