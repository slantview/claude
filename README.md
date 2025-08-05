# Multi-Agent Development Orchestration System

A comprehensive orchestration system for managing specialized AI agents with Linear task management integration. This system coordinates 61 domain-specific agents to execute complex development workflows with professional engineering practices.

## 🚀 Quick Start

```bash
# Install dependencies
npm install

# Install agents and commands to ~/.claude
npm run install-all

# Initialize new development task
/cook

# Run comprehensive tests
/project:run-tests

# Deploy to development
/project:deploy

# Update Linear with progress
/project:update-linear
```

## 📋 System Overview

This orchestration system implements a sophisticated multi-agent pattern designed for enterprise software development:

- **61 Specialized Agents** - Domain experts for every aspect of development
- **Linear Integration** - Automated task management and progress tracking
- **GitHub Workflows** - Repository management with PR automation
- **Security First** - Built-in security scanning and compliance
- **Professional Communication** - Senior engineer-style updates across platforms

## 🏗️ Architecture

### Agent Hierarchy

```
Orchestration Layer (6 Core Agents)
├── orchestrator    - Master coordinator and Linear integration
├── frontend        - UI/UX implementation specialist
├── backend         - API and business logic development
├── github          - Repository and PR management
├── qa              - Comprehensive testing and validation
└── deployment      - Release management and monitoring

Critical Specialists (8 Opus Model Agents)
├── security-auditor      - Security reviews and OWASP compliance
├── performance-engineer  - Performance optimization and load testing
├── ai-engineer          - LLM applications and ML pipelines
├── incident-responder   - Production debugging and recovery
├── cloud-architect      - Infrastructure and Terraform IaC
├── pr-reviewer          - Interactive code reviews
├── api-designer         - API design and OpenAPI specifications
└── performance-optimizer - Tactical performance improvements

Development Specialists (47 Sonnet Model Agents)
├── Language Experts (12) - python-specialist, typescript-specialist, etc.
├── Infrastructure (5)    - devops-troubleshooter, terraform-specialist, etc.
├── Quality & Testing (6) - test-specialist, debugger, etc.
├── Mobile & Games (3)    - mobile-developer, ios-developer, unity-developer
├── Data & Analytics (5)  - data-scientist, ml-engineer, etc.
├── Business (5)          - business-analyst, legal-advisor, etc.
├── Architecture (6)      - graphql-architect, ui-ux-designer, etc.
└── Specialized Tools (5) - payment-integration, legacy-modernizer, etc.
```

## 🎯 Core Orchestration Agents (6)

### orchestrator
**Master coordinator for all development workflows**
- Task decomposition and agent allocation
- Timeline management without time estimates
- Risk assessment and mitigation
- Communication coordination across platforms
- Quality assurance oversight
- Security checkpoint enforcement

### frontend
**UI/UX implementation specialist**
- React/Vue/Angular component development
- Figma design integration and implementation
- Responsive design and mobile-first development
- Accessibility (WCAG 2.1 AA) compliance
- Performance optimization and Core Web Vitals
- State management and API integration

### backend
**API development and business logic specialist**
- RESTful and GraphQL API design and implementation
- Database schema design and optimization
- Authentication/authorization systems (JWT, OAuth2)
- Microservices architecture and inter-service communication
- Performance optimization and caching strategies
- Integration with external services and APIs

### github
**Repository management specialist**
- Branch management with Linear ticket integration
- Pull request creation and coordination
- Commit message standardization
- Code review facilitation
- Repository security and integrity
- Integration with development workflows

### qa
**Quality assurance and testing specialist**
- Test planning and execution across all layers
- Bug detection, reproduction, and validation
- Performance and security testing
- Accessibility compliance verification
- Quality gates and release criteria
- Test automation and CI/CD integration

### deployment
**Release management and environment orchestration**
- GitHub Actions workflow management
- Environment strategy (dev automatic, prod approval-gated)
- Health monitoring and rollback procedures
- Release notes and version coordination
- Production monitoring and stability verification

## ⚡ Critical Specialists (8 - Opus Model)

### security-auditor
Security review, vulnerability assessment, OWASP compliance, authentication systems implementation and audit.

### performance-engineer
Performance optimization, load testing, caching strategies, scalability analysis, and system performance architecture.

### ai-engineer
LLM applications, RAG systems, vector databases, AI pipeline optimization, and machine learning integrations.

### incident-responder
Production incident response, emergency debugging, rapid system recovery, and critical issue resolution.

### cloud-architect
AWS/Azure/GCP infrastructure, Terraform IaC, cost optimization, multi-cloud strategies, and scalable system design.

### pr-reviewer
Interactive PR reviews with GitHub and Linear integration, comprehensive code analysis, and collaborative review sessions.

### api-designer
API design with OpenAPI 3.0+ specifications, comprehensive implementation, integration architecture, and API governance.

### performance-optimizer
Tactical performance optimization for databases, queries, system bottlenecks, and specific code optimizations.

## 🛠️ Development Specialists (47 - Sonnet Model)

### Language Specialists (12)
- **python-specialist** - Advanced Python development with enterprise patterns
- **typescript-specialist** - TypeScript with advanced typing and strict safety
- **golang-pro** - Idiomatic Go with goroutines and performance optimization
- **rust-pro** - Memory-safe Rust with ownership patterns and lifetimes
- **java-pro** - Modern Java with streams, concurrency, and JVM optimization
- **csharp-pro** - Modern C# with records, async/await, and .NET optimization
- **sql-pro** - Complex SQL queries, execution plan optimization, schema design
- **javascript-pro** - Modern ES6+ JavaScript with async patterns and Node.js
- **c-pro** - Efficient C with memory management and system programming
- **cpp-pro** - Modern C++ with RAII, smart pointers, and template metaprogramming
- **elixir-pro** - Functional Elixir with OTP patterns and fault-tolerant systems
- **php-pro** - Modern PHP with frameworks, OOP design, and performance optimization

### Infrastructure & DevOps (5)
- **devops-troubleshooter** - Production debugging, log analysis, system outages
- **database-admin** - Database operations, backup, replication, monitoring
- **terraform-specialist** - Advanced Terraform modules, state management, IaC best practices
- **network-engineer** - Network connectivity, load balancers, DNS, SSL/TLS configuration
- **database-optimizer** - SQL query optimization, indexing, execution plan analysis

### Quality & Testing (6)
- **test-specialist** - Comprehensive testing strategies and quality assurance implementation
- **test-writer** - Robust unit, integration, and end-to-end test suite creation
- **code-reviewer** - Expert code review with security and reliability focus
- **test-automator** - Test automation, CI pipelines, coverage analysis
- **debugger** - Error analysis, test failures, production issue investigation
- **error-detective** - Log analysis, error pattern detection, root cause analysis

### Mobile & Games (3)
- **mobile-developer** - React Native/Flutter with native integrations
- **ios-developer** - Native iOS development with Swift/SwiftUI
- **unity-developer** - Unity game development with optimized C# and cross-platform builds

### Data & Analytics (5)
- **data-scientist** - Data analysis, statistical modeling, ML pipelines
- **quant-analyst** - Financial modeling, algorithmic trading, risk metrics
- **ml-engineer** - ML pipeline implementation, model serving, production deployment
- **mlops-engineer** - ML infrastructure, experiment tracking, model registries
- **data-engineer** - ETL pipelines, data warehouses, streaming architectures

### Business & Content (5)
- **business-analyst** - Metrics analysis, KPI tracking, growth projections
- **content-marketer** - Blog posts, social media, SEO optimization
- **customer-support** - Support documentation, FAQ systems, troubleshooting guides
- **legal-advisor** - Compliance, privacy laws, licensing, regulatory guidance
- **risk-manager** - Project risk assessment, security vulnerabilities, business continuity

### Architecture & Design (6)
- **graphql-architect** - GraphQL schema design, federation, query optimization
- **docs-architect** - Technical documentation, architecture guides, system manuals
- **search-specialist** - Advanced search implementation, information retrieval
- **ui-ux-designer** - User experience design, interface development, design systems
- **authentication-specialist** - Enterprise authentication, OAuth 2.1, WebAuthn/FIDO2
- **context-manager** - Project state management, knowledge continuity

### Specialized Tools (5)
- **api-documenter** - OpenAPI specifications, SDK generation, developer documentation
- **tutorial-engineer** - Step-by-step tutorials, educational content, onboarding guides
- **payment-integration** - Stripe, PayPal integration, checkout flows, PCI compliance
- **legacy-modernizer** - Legacy system updates, framework migrations, technical debt
- **prompt-engineer** - LLM prompt optimization, AI system performance tuning

## 🎮 Orchestration Commands (16)

### Core Workflow Commands

#### `/cook`
**Initialize Development Run**
Complete task initialization workflow including git identity verification, Linear ticket analysis, security setup, design extraction, and comprehensive planning.

#### `/project:complete-task`
**Complete Task Workflow**
Execute task completion including integration tests, QA verification, PR creation, deployment coordination, and Linear closure.

#### `/project:deploy`
**Deploy Command**
Execute deployment workflow to development or production environments with comprehensive monitoring and rollback procedures.

#### `/project:run-tests`
**Run Tests Command**
Execute comprehensive test suite including unit, integration, E2E, performance, accessibility, and security testing.

#### `/project:update-linear`
**Update Linear Status**
Post progress updates to Linear with product/project focus, stakeholder communication, and business value emphasis.

### Quality & Analysis Commands

#### `/project:coverage`
**Coverage Analysis**
Detailed code coverage analysis with reports, gap identification, and quality metrics.

#### `/project:coverage-quick`
**Quick Coverage Check**
Fast coverage validation for immediate feedback during development.

#### `/project:security`
**Security Audit**
Comprehensive security scanning including dependency audit, secret detection, and vulnerability assessment.

#### `/project:refactor`
**Code Refactoring**
Systematic code improvement with quality enhancement and technical debt reduction.

### Specialized Commands

#### `/project:analyze-figma`
**Figma Design Analysis**
Extract design specifications from Figma files for implementation planning.

#### `/project:interactive-review`
**Interactive Review Session**
Collaborative code review with real-time feedback and improvement suggestions.

#### `/project:review-orchestrator`
**Orchestrator Review**
System-wide orchestration analysis and workflow optimization.

### Utility Commands

#### `/project:fix-git-identity`
**Fix Git Identity**
Ensure proper git configuration with real developer identity (never AI names).

#### `/project:setup-gitignore`
**Setup Gitignore**
Configure comprehensive .gitignore for security and clean repository management.

#### `/project:gitlog`
**Git Log Analysis**
Analyze git history, commit patterns, and repository health.

#### `/project:test`
**Quick Test Runner**
Fast test execution for immediate development feedback.

## 🔐 Security & Identity Management

### Critical Security Protocols

#### Git Identity Verification (MANDATORY)
```bash
# Check current git configuration
git config user.name
git config user.email

# Must use real developer identity, never AI names
git config --global user.name "Developer Real Name"
git config --global user.email "developer@company.com"
```

#### Secret Management
- Use GitHub Secrets, K8s Secrets, or cloud KMS
- Never commit credentials or API keys
- Automated secret scanning before commits
- Environment-specific secret separation

#### Security Best Practices
- Input validation and sanitization
- SQL injection prevention
- Rate limiting and DDoS protection
- CORS configuration
- Audit logging for sensitive operations

## 🔄 Communication Protocols

### Platform-Specific Communication

#### Linear (Business/Product Focus)
- Progress toward business goals
- Feature completion status
- User-facing improvements
- Blockers affecting delivery
- Stakeholder-friendly language

#### GitHub (Technical Focus)
- Implementation details
- Architecture decisions
- Performance optimizations
- Technical debt discussions
- Code review feedback

### Communication Standards
- **Terse Professional** - Senior engineer communication style
- **No AI References** - Never mention automation or AI assistance
- **Platform Appropriate** - Technical details in GitHub, business value in Linear
- **Milestone-Based** - Progress indicators, not time estimates

## 🚀 Workflow Integration

### Development Workflow
1. **Task Initialization** (`/cook`) - Orchestrator analyzes requirements
2. **Resource Planning** - Determines complexity and allocates agents
3. **Implementation** - Specialized agents execute their domains
4. **Quality Gates** - QA approval required before deployment
5. **Integration** - GitHub agent manages repository interactions
6. **Deployment** - Automated release management with monitoring

### Branch Management
- **Naming Convention**: `<username>/<issue-id>` (e.g., `steve/ENG-123`)
- **No Direct Commits** - All changes via PR process
- **Linear Integration** - Ticket IDs in all branch names and commits
- **Protected Main** - Main branch requires PR and reviews

## 📊 Quality Standards

### Testing Requirements
- **Unit Tests**: >90% coverage
- **Integration Tests**: All API endpoints covered
- **E2E Tests**: Critical user paths validated
- **Performance**: <200ms API response times
- **Security**: No high-severity vulnerabilities
- **Accessibility**: WCAG 2.1 AA compliant

### Code Quality Gates
- All tests passing
- Code coverage above thresholds
- Security scan clean
- Performance benchmarks met
- Accessibility validated
- Documentation complete

## 🛡️ Anti-Patterns to Avoid

- **Time Estimates** - Use milestone completion percentages
- **AI References** - Never mention Claude Code, agents, or AI tools publicly
- **Over-Commenting** - Make meaningful updates, not excessive progress reports
- **Secret Exposure** - No API keys, tokens, or sensitive data in commits
- **Generic Commits** - Avoid "fix", "update", "changes" without context
- **Direct Main Commits** - All changes must go through PR process

## 🔧 Installation & Setup

```bash
# Install dependencies
npm install

# Build the installer
npm run build

# Install agents and commands to ~/.claude
npm run install-all

# CLI Options
node dist/install.js install              # Full installation
node dist/install.js backup               # Create backup only
node dist/install.js list-backups         # List available backups
node dist/install.js restore <backup>     # Restore from backup
```

## 📈 Features

- ✅ Automatic Claude Code installation check
- ✅ Backup existing ~/.claude configuration
- ✅ Install 61+ specialized agents
- ✅ Install orchestration commands
- ✅ TypeScript with full type safety
- ✅ Backup and restore functionality
- ✅ Progress indicators and error handling

## 🛠️ MCP Server Integration

Available MCP servers for enhanced functionality:
- **@linear** - Task management and updates
- **@notion** - Knowledge management and documentation
- **@exa** - Advanced web search and research
- **@figma** - Design extraction (requires desktop app)

Additional tool integrations:
- **gh CLI** - GitHub repository management
- **AWS CLI** - Cloud infrastructure management
- **kubectl** - Kubernetes cluster operations

## 📈 Error Recovery

### System Recovery Protocols
- **Linear Connection** - Retry with `/mcp` authentication
- **Figma Unavailable** - Note in Linear, use screenshots as fallback
- **Test Failures** - Create Linear subtask for fixes, don't proceed
- **Security Issues** - Immediate stop, create urgent Linear ticket
- **Git Identity Issues** - Must fix before any commits

## 🎯 Getting Started

1. **Set Up Identity**
   ```bash
   /project:fix-git-identity
   ```

2. **Initialize Task**
   ```bash
   /cook
   ```

3. **Monitor Progress**
   ```bash
   /project:update-linear
   ```

4. **Quality Assurance**
   ```bash
   /project:run-tests
   /project:coverage
   /project:security
   ```

5. **Deploy**
   ```bash
   /project:deploy
   ```

6. **Complete**
   ```bash
   /project:complete-task
   ```

This orchestration system emphasizes professional engineering practices, security-first development, and clear separation between technical implementation (GitHub) and business value communication (Linear).