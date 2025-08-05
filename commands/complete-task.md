# Complete Task Workflow

Execute the task completion and verification workflow:

```bash
# Get task completion start timestamp
COMPLETE_TASK_START=$(date)
echo "✅ /project:complete-task started: $COMPLETE_TASK_START"
```

## Step 1: Gather Results
Collect outputs from all sub-agents:
- Frontend deliverables
- Backend implementations
- Infrastructure changes
- Documentation updates

## Step 2: Run Integration Tests
Execute comprehensive test suite:
```bash
# Run unit tests
npm test

# Run integration tests
npm run test:integration

# Run E2E tests
npm run test:e2e

# Generate coverage report
npm run test:coverage
```

## Step 3: QA Verification
Trigger QA agent to:
- Verify all acceptance criteria
- Check responsive design
- Test error scenarios
- Validate accessibility
- Performance benchmarks

## Step 4: Documentation Check
Ensure all documentation is updated:
- API documentation
- Component documentation
- Setup instructions
- Deployment guide
- Changelog

## Step 5: Code Review Checklist
Verify:
- [ ] Code follows project standards
- [ ] No console.logs or debug code
- [ ] Error handling implemented
- [ ] Tests written and passing
- [ ] Code coverage >80% (run `/project:coverage`)
- [ ] Documentation complete
- [ ] Performance optimized
- [ ] Security best practices

## Step 6: Create PR
Using @github:
```
# Get current branch (should be username/issue-id)
CURRENT_BRANCH=$(git branch --show-current)

# Commit all changes  
git add .
git commit -m "feat: <description> [LINEAR-<ticket-id>]"

# Push and create PR
gh pr create --title "<title>" --body "<description>"
```

## Step 7: Update Linear - Ready for Review
```
@linear update_issue <issue_id> --state "In Review"
@linear create_comment <issue_id> "✅ Development complete

PR: [Link to PR]

Completed:
- All acceptance criteria met
- Tests passing (coverage: X%)
- Documentation updated
- Code review checklist complete

Ready for review by: @reviewer"
```

**NEVER mention**: Claude Code, AI assistance, or development tools used

## Step 8: Deploy to Staging
If automated deployment configured:
- Trigger staging deployment
- Run smoke tests
- Update Linear with staging URL

## Step 9: Deploy to Production
After approval and merge:
1. Trigger deployment agent
2. Execute `/project:deploy` for production
3. Monitor deployment success
4. Verify production health

## Step 10: Final Closure
Only after successful production deployment:
```
@linear update_issue <issue_id> --state "Done"
@linear create_comment <issue_id> "🎉 Task completed and deployed

Production URL: [URL]
GitHub PR: [PR Link]
Release Version: [v.X.X.X]
Documentation: [Link]
Release notes: [Link]

All sub-issues resolved."
```

## Step 11: Retrospective
Create brief retrospective:
- What went well
- Challenges faced  
- Lessons learned
- Improvements for next time

Save to `docs/retrospectives/LINEAR-<ticket-id>.md`

## Branch Cleanup
After merge:
```bash
# Delete local branch
git branch -d username/issue-id

# Remote cleanup happens automatically on PR merge
```