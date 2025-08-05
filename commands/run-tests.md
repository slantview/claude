# Run Tests Command

Execute comprehensive test suite and report results:

## Step 1: Pre-Test Setup
```bash
# Get test execution start timestamp
TEST_CMD_START=$(date)
echo "🧪 /project:run-tests started: $TEST_CMD_START"
```

1. Ensure clean test environment
2. Check test dependencies
3. Clear test cache if needed

## Step 2: Unit Tests
```bash
# Run unit tests with coverage
npm run test:unit -- --coverage

# Run specific test file if needed
npm test <path/to/test>
```

## Step 3: Integration Tests
```bash
# Start test database
docker-compose -f docker-compose.test.yml up -d

# Run integration tests
npm run test:integration

# Clean up
docker-compose -f docker-compose.test.yml down
```

## Step 4: E2E Tests
```bash
# Start application in test mode
npm run start:test &

# Run E2E tests
npm run test:e2e

# Optional: Run in headed mode for debugging
npm run test:e2e:headed
```

## Step 5: Performance Tests
If performance critical:
```bash
# Run performance benchmarks
npm run test:performance

# Compare with baseline
npm run test:performance:compare
```

## Step 6: Accessibility Tests
```bash
# Run a11y tests
npm run test:a11y

# Generate accessibility report
npm run test:a11y:report
```

## Step 7: Security Audit
```bash
# Check for vulnerabilities
npm audit

# Run security tests
npm run test:security
```

## Step 8: Generate Reports
1. Coverage report: `coverage/lcov-report/index.html`
2. Test summary: `test-results/summary.json`
3. Performance metrics: `test-results/performance.json`

💡 **For detailed coverage**: Use `/project:coverage` instead

## Step 9: Update Linear
Post test results to Linear:
```
@linear create_comment <issue_id> "🧪 Test Results

✅ Unit Tests: X/X passing (XX% coverage)
✅ Integration Tests: X/X passing
✅ E2E Tests: X/X passing
✅ Performance: All benchmarks met
✅ Accessibility: No violations
✅ Security: No vulnerabilities

Full report: [Link to CI/CD]"
```

## Step 10: Handle Failures
If any tests fail:
1. Create detailed failure report
2. Post to Linear with error details
3. Create subtasks for fixes
4. Tag relevant team members

## Quick Test Commands
- `/test:unit` - Run only unit tests
- `/test:integration` - Run only integration tests
- `/test:e2e` - Run only E2E tests
- `/test:quick` - Run fast tests only
- `/test:all` - Run complete suite
- `/project:coverage` - Run with coverage analysis