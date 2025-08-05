# Claude Orchestration System

A comprehensive orchestration system for managing specialized AI sub-agents with Linear task management integration.

## Installation

```bash
# Install dependencies
npm install

# Install agents and commands to ~/.claude
npm run install-all

# Or run development version
npm run dev
```

## Available Commands

After installation, these commands are available in Claude Code:

- `/cook` - Initialize new development task
- `/project:update-linear` - Post progress update to Linear
- `/project:complete-task` - Finalize and close task
- `/project:run-tests` - Execute test suite
- `/project:coverage` - Run code coverage analysis
- `/project:deploy` - Deploy to dev/prod environments

## CLI Options

```bash
# Install with options
npm run build && node dist/install.js install --help

# Available commands:
node dist/install.js install              # Full installation
node dist/install.js backup               # Create backup only
node dist/install.js list-backups         # List available backups
node dist/install.js restore <backup>     # Restore from backup
```

## Features

- ✅ Automatic Claude Code installation check
- ✅ Backup existing ~/.claude configuration
- ✅ Install 61+ specialized agents
- ✅ Install orchestration commands
- ✅ TypeScript with full type safety
- ✅ Backup and restore functionality
- ✅ Progress indicators and error handling

## Agent System

The system includes 61 specialized agents:

### Core Orchestration (6 agents)
- **orchestrator** - Master coordinator
- **frontend** - UI/UX development  
- **backend** - API development
- **github** - Repository management
- **qa** - Quality assurance
- **deployment** - Release management

### Critical Specialists (8 opus agents)
- **security-auditor** - Security review
- **performance-engineer** - Performance optimization
- **ai-engineer** - LLM applications
- **incident-responder** - Emergency response
- And 4 more critical specialists

### Development Specialists (47 sonnet agents)
Language specialists, infrastructure experts, testing specialists, and more.