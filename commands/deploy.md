# Deploy Command

Execute deployment workflow to development or production environments.

## Usage
Call this command when code is ready for deployment after QA approval.

## Step 1: Pre-Deployment Verification
Check readiness:
- [ ] All tests passing
- [ ] PR merged to main
- [ ] QA sign-off received
- [ ] No critical alerts in monitoring

## Step 2: Choose Environment
Ask which environment:
1. Development (automatic, quick feedback)
2. Production (requires approval, careful process)

## Step 3: Development Deployment

### Check GitHub Actions
```bash
# List available workflows
gh workflow list

# Check recent runs
gh run list --workflow=deploy.yml --limit=5
```

### Trigger Deployment
```bash
# Deploy to development (from your branch)
git push origin $(git branch --show-current)

# Then deploy from main after merge
gh workflow run deploy.yml -f environment=development -f ref=main

# Watch deployment progress
gh run watch
```

### Update Linear
```
@linear create_comment <issue_id> "🚀 Deploying to Development
- Workflow: <github_actions_url>
- Started: <timestamp>
- Branch: main
"
```

### Verify Deployment
```bash
# Check health endpoint
curl https://dev.example.com/health

# Verify version
curl https://dev.example.com/version
```

### Post Success
```
@linear create_comment <issue_id> "✅ Deployed to Development
- URL: https://dev.example.com
- Version: <commit_sha>
- Health: ✅ Passing
- Smoke tests: ✅ Complete

Ready for UAT"
```

## Step 4: Production Deployment

### IMPORTANT: Production Checklist
- [ ] UAT completed and approved
- [ ] Release notes prepared
- [ ] Team notified
- [ ] Rollback plan ready
- [ ] Off-peak deployment window

### Create Release
```bash
# Tag the release
git tag -a v1.2.3 -m "Release: <feature_summary>"
git push origin v1.2.3

# Create GitHub release
gh release create v1.2.3 --title "Version 1.2.3" --notes "
## What's New
- Feature from Linear ticket [LINEAR-123]
- Bug fix from [LINEAR-456]

## Linear Tickets
- <linear_ticket_urls>
"
```

### Deploy to Production
```bash
# Trigger production deployment
gh workflow run deploy.yml \
  -f environment=production \
  -f ref=v1.2.3 \
  -f require_approval=true

# Monitor deployment
gh run watch
```

### Production Monitoring
After deployment:
1. Monitor error rates for 30 minutes
2. Check key user flows
3. Verify performance metrics
4. Test critical features

### Update Linear - Production
```
@linear create_comment <issue_id> "🎉 Deployed to Production
- Version: v1.2.3
- URL: https://example.com
- Deploy duration: X minutes
- Health checks: ✅ All passing
- Error rate: Normal
- Performance: Within SLA

Release notes: <github_release_url>

Monitoring for stability..."
```

## Step 5: Rollback Procedure

If issues detected:
```bash
# Quick rollback
gh workflow run deploy.yml \
  -f environment=production \
  -f ref=<previous_tag> \
  -f rollback=true \
  -f skip_approval=true
```

Update Linear immediately:
```
@linear create_comment <issue_id> "🔄 Rollback Initiated
- Issue: <description>
- Rolling back to: <previous_version>
- ETA: 5 minutes
"
```

## Environment URLs
Store these for quick reference:
- Dev: https://dev.example.com
- Staging: https://staging.example.com  
- Production: https://example.com

## Quick Deploy Commands
For common scenarios:
- "Deploy latest to dev"
- "Create release v1.2.3"
- "Deploy v1.2.3 to production"
- "Rollback production"
- "Check deployment status"

## Best Practices
- Always deploy to dev first
- Wait at least 30 minutes before production
- Deploy during low-traffic periods
- Have rollback plan ready
- Monitor for at least 1 hour post-deploy

## Integration with Agents
This command is typically triggered by:
- Orchestrator after QA approval
- Can be run manually for hotfixes
- Works with GitHub agent for releases
- Coordinates with deployment agent