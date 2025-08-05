# Create .gitignore for Orchestration

Set up proper .gitignore to protect sensitive files and secrets.

## Step 1: Create Project .gitignore
Create or update `.gitignore` in project root:

```gitignore
# Environment variables
.env
.env.*
!.env.example

# Secrets and credentials
*.pem
*.key
*.cert
*.pfx
secrets/
credentials/
config/secrets.yml
config/database.yml

# Orchestration files with potential sensitive data
orchestrator/status.md
orchestrator/*.log
.claude/projects/*
.claude/todos/*
.claude/shell-snapshots/*

# Local configuration
.vscode/settings.json
.idea/
*.local

# Test coverage and reports
coverage/
test-results/
*.lcov

# Build artifacts
dist/
build/
*.log

# OS files
.DS_Store
Thumbs.db

# Temporary files
*.tmp
*.temp
*.swp
*~

# API keys and tokens
*_api_key*
*_token*
*_secret*

# Never commit these
id_rsa*
id_dsa*
id_ecdsa*
id_ed25519*
```

## Step 2: Create .env.example
Template for environment variables (safe to commit):

```bash
# Google OAuth (get from Google Cloud Console)
GOOGLE_CLIENT_ID=your-client-id-here
GOOGLE_CLIENT_SECRET=your-client-secret-here

# GitHub (create personal access token)
GITHUB_TOKEN=your-github-token-here

# Linear (if using API key instead of OAuth)
LINEAR_API_KEY=your-linear-key-here

# Application secrets (generate strong random values)
JWT_SECRET=generate-strong-secret
DATABASE_URL=postgresql://user:password@localhost/dbname

# External services
SENTRY_DSN=your-sentry-dsn
SLACK_WEBHOOK_URL=your-webhook-url

# Cloud services
AWS_ACCESS_KEY_ID=your-access-key
AWS_SECRET_ACCESS_KEY=your-secret-key
```

## Step 3: Verify Git Configuration
```bash
# Check current git status
git status

# Ensure secrets aren't staged
git ls-files | grep -E "(secret|password|token|key)"

# Remove any accidentally committed secrets
git rm --cached <file-with-secrets>

# Update git history if secrets were committed
# WARNING: This rewrites history
git filter-branch --force --index-filter \
  "git rm --cached --ignore-unmatch <path-to-secret-file>" \
  --prune-empty --tag-name-filter cat -- --all
```

## Step 4: Set Up Secret Management

### GitHub Secrets (for CI/CD)
```bash
# Add secret to repository
gh secret set SECRET_NAME

# List secrets (names only, not values)
gh secret list
```

### Kubernetes Secrets
```yaml
apiVersion: v1
kind: Secret
metadata:
  name: app-secrets
type: Opaque
data:
  database-url: <base64-encoded-value>
  jwt-secret: <base64-encoded-value>
```

### AWS Secrets Manager / KMS
```bash
# Create secret
aws secretsmanager create-secret \
  --name MyAppSecrets \
  --secret-string file://secrets.json

# Retrieve in application
aws secretsmanager get-secret-value \
  --secret-id MyAppSecrets
```

## Step 5: Update Linear
Post security setup confirmation:
```
@linear create_comment <issue_id> "🔒 Security Setup Complete
- .gitignore configured
- Environment template created
- Secrets management verified
- No hardcoded credentials
- All sensitive data masked

Ready for secure development."
```

## IMPORTANT Reminders
- NEVER commit real secrets, even temporarily
- ALWAYS use environment variables
- ROTATE secrets regularly
- MASK sensitive data in all logs
- USE different secrets for each environment
- AUDIT secret access regularly

## Common Mistakes to Avoid
1. Committing .env files
2. Hardcoding API keys "just for testing"
3. Logging passwords or tokens
4. Sharing secrets via Linear/Slack/Email
5. Using production secrets in development
6. Forgetting to rotate compromised secrets