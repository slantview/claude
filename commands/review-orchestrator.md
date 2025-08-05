# Code Review Orchestrator

Advanced orchestration for managing multiple PR reviews with team coordination.

## Usage
```bash
@orchestrate review-sprint [options]
```

## Features
- Batch review multiple PRs efficiently
- Coordinate reviews across team members
- Track review progress in Linear
- Generate team review metrics

## Workflow

### 1. Review Sprint Planning
```bash
@github list_pull_requests --state open
@linear list_issues --team "Engineering" --state "In Review"
```

Orchestrator creates review plan:
```
📋 Review Sprint Plan
━━━━━━━━━━━━━━━━━
Total PRs: 5
Estimated Time: 2.5 hours

Priority Order:
1. 🚨 #459 - Hotfix: Payment processing (CRITICAL)
2. 🔒 #456 - Security: Add authentication (HIGH) 
3. ⚡ #458 - Performance: Optimize queries (MEDIUM)
4. ✨ #457 - Feature: Dashboard v2 (LOW)
5. 🧹 #460 - Refactor: Clean up utils (LOW)

Suggested batching:
- Morning: Critical + Security (45 min)
- Afternoon: Performance + Features (90 min)
```

### 2. Smart Review Assignment
Based on:
- File ownership (git blame)
- Domain expertise 
- Previous review history
- Current workload

```
Review Assignments:
- #456 Auth → @security-expert (primary) + @backend-lead (secondary)
- #458 Performance → @database-expert
- #457 Dashboard → @frontend-lead + @ux-reviewer
```

### 3. Cross-PR Analysis
Identify:
- Conflicting changes
- Dependency order
- Shared components
- Integration risks

```
⚠️ Integration Risks Detected:
- PR #456 and #457 both modify UserService
- PR #458 depends on migrations from #456
- Recommended merge order: #456 → #458 → #457
```

### 4. Parallel Review Coordination
```python
# Orchestrator manages multiple review sessions
review_sessions = {
    "pr_456": {
        "status": "in_progress",
        "reviewer": "current_user",
        "findings": [],
        "start_time": "10:00"
    },
    "pr_458": {
        "status": "queued",
        "reviewer": "teammate",
        "estimated_start": "10:30"
    }
}
```

### 5. Real-time Progress Tracking
```
Review Progress Dashboard
━━━━━━━━━━━━━━━━━━━━━━
[████████░░] PR #456 - 80% (You)
[████░░░░░░] PR #458 - 40% (@teammate)
[░░░░░░░░░░] PR #457 - Queued

Time Spent: 45 min / 2.5 hours estimated
Findings: 3 critical, 5 suggestions
```

### 6. Consolidated Linear Updates

Instead of individual PR updates, create sprint summary:

```markdown
📊 Code Review Sprint Summary - Oct 30

**Reviewed**: 5 PRs across 3 projects
**Total Time**: 2.5 hours
**Team Involved**: @user, @teammate, @expert

## Critical Findings
1. 🔒 Authentication: Fixed JWT vulnerability in PR #456
2. ⚡ Performance: Identified N+1 query in dashboard (PR #457)
3. 🏗️ Architecture: Suggested service layer refactor (PR #460)

## Merge Queue
Ready for merge (in order):
1. ✅ #456 - Authentication (after JWT fix)
2. ✅ #458 - Performance optimization
3. ⏳ #457 - Dashboard (pending N+1 fix)

## Team Metrics
- Average review time: 30 min/PR
- Critical issues caught: 3
- Code quality score: 8.5/10 ⬆️

Next sprint scheduled: Tomorrow 10 AM
```

### 7. Review Handoffs

For long review sessions or team collaboration:

```python
def handoff_review(pr_id, to_reviewer, context):
    """
    Seamless review handoff with context preservation
    """
    handoff_package = {
        "pr_id": pr_id,
        "progress": "Reviewed auth module, security looks good",
        "remaining": ["Database changes", "Tests"],
        "concerns": ["Check migration rollback strategy"],
        "time_spent": "25 min",
        "next_focus": "Database transaction handling"
    }
    
    # Post to Linear and notify teammate
    @linear create_comment issue_id f"""
    🤝 Review Handoff - PR #{pr_id}
    
    From: @{current_reviewer}
    To: @{to_reviewer}
    
    Progress: {handoff_package['progress']}
    Remaining: {', '.join(handoff_package['remaining'])}
    
    Note: {handoff_package['concerns'][0]}
    
    Context preserved in review session.
    """
```

## Configuration

`.claude-review-orchestrator.yml`:
```yaml
orchestrator:
  # Review sprint settings
  sprint:
    max_duration_hours: 4
    break_after_minutes: 45
    batch_size: 5
  
  # Auto-assignment rules
  assignment:
    by_ownership: true
    by_expertise: true
    load_balance: true
    max_per_reviewer: 3
  
  # Progress tracking
  tracking:
    update_interval_minutes: 15
    dashboard_format: "compact"
    linear_updates: "consolidated"
  
  # Team coordination
  coordination:
    notify_on_handoff: true
    share_findings: true
    daily_summary: true
    
  # Quality gates
  quality:
    require_two_reviewers:
      - "security"
      - "breaking_changes" 
    block_merge_on:
      - "critical_findings"
      - "failing_tests"
```

## Advanced Commands

```bash
# Start review sprint with options
@orchestrate review-sprint --focus security --max-time 2h

# Review with specific teammate
@orchestrate pair-review #456 --with @teammate

# Generate team review metrics
@orchestrate review-metrics --period week

# Schedule review session
@orchestrate schedule-review --tomorrow 10am --prs #456,#457
```

## Team Review Patterns

### Security Review Squad
```bash
@orchestrate security-sweep --reviewers @security-team
```

### Feature Review Party
```bash
@orchestrate feature-review --broadcast #team-channel
```

### Hotfix Rapid Response
```bash
@orchestrate emergency-review #459 --notify @on-call
```

## Metrics & Insights

Track and improve:
- Average review time per PR type
- Common issue patterns
- Review coverage by component
- Team knowledge gaps
- Review quality scores

Generated weekly report:
```
📊 Team Review Metrics - Week 43

Top Reviewers:
1. @expert - 12 PRs, 3 critical catches
2. @senior - 8 PRs, 5 architecture improvements

Common Issues:
- Missing error handling (found in 40% of PRs)
- Inadequate test coverage (found in 30% of PRs)

Recommendations:
- Schedule error handling workshop
- Update PR template with test checklist
```