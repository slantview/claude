# Fix Git Identity

Quick command to ensure git commits use your real identity, not AI-related names.

## The Problem
Your commits are showing as authored by "claude Claude" which:
- Exposes AI tool usage publicly
- Violates privacy guidelines
- Creates confusion about who did the work
- Cannot be easily fixed after pushing

## Quick Fix

### Step 1: Check Current Configuration
```bash
# See what git is currently using
git config user.name
git config user.email

# If you see "claude", "Claude", or anything AI-related - FIX NOW!
```

### Step 2: Set Your Real Identity

**Option A: Set Globally (Recommended)**
```bash
git config --global user.name "Your Real Name"
git config --global user.email "your.email@company.com"
```

**Option B: Set for Current Repository Only**
```bash
git config user.name "Your Real Name"
git config user.email "your.email@company.com"
```

### Step 3: Verify the Fix
```bash
# Check it worked
git config user.name  # Should show your real name
git config user.email # Should show your real email

# Test with a commit
git commit --allow-empty -m "test: verify correct author"
git log -1 --pretty=format:"%an <%ae>"  # Should show your name
```

### Step 4: Fix Recent Commits (if needed)

**Fix Last Commit:**
```bash
git commit --amend --author="Your Name <your.email@company.com>" --no-edit
```

**Fix Multiple Commits:**
```bash
# Interactive rebase for last 3 commits
git rebase -i HEAD~3

# Change 'pick' to 'edit' for commits with wrong author
# Then for each commit:
git commit --amend --author="Your Name <your.email@company.com>" --no-edit
git rebase --continue
```

### Step 5: Prevent Future Issues

**Add Pre-commit Hook:**
```bash
cat > .git/hooks/pre-commit << 'EOF'
#!/bin/bash
if [[ $(git config user.name) == *"claude"* ]]; then
    echo "❌ ERROR: Cannot commit with AI identity!"
    echo "Fix: git config user.name 'Your Real Name'"
    exit 1
fi
EOF

chmod +x .git/hooks/pre-commit
```

## Environment Variables (Optional)
Add to your `~/.zshrc` or `~/.bashrc`:
```bash
export GIT_AUTHOR_NAME="Your Real Name"
export GIT_AUTHOR_EMAIL="your.email@company.com"
export GIT_COMMITTER_NAME="Your Real Name"
export GIT_COMMITTER_EMAIL="your.email@company.com"
```

## Emergency: Already Pushed?

If you've already pushed commits with "claude" as author:

1. **For Your Own Branch:**
   ```bash
   # Force push after fixing (coordinate with team!)
   git push --force-with-lease origin your-branch
   ```

2. **For Protected Branches:**
   - Contact repository admin immediately
   - May need history rewrite (requires coordination)
   - Learn from this - add pre-commit hooks!

## Verification Checklist
- [ ] `git config user.name` shows your real name
- [ ] `git config user.email` shows your real email
- [ ] Recent commits show correct author
- [ ] Pre-commit hook installed
- [ ] No "claude" visible in `git log`

## Remember
- Git commits are PUBLIC and PERMANENT
- Author info appears in GitHub forever
- This reveals AI tool usage
- Fix BEFORE committing, not after!