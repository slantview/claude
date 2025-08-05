# Universal Code Coverage Command

Run code coverage analysis for any repository type automatically.

## Usage
Run `/project:coverage` in any project directory to automatically detect and execute coverage tests.

## Step 1: Detect Project Type
The command automatically detects your project based on:
- `package.json` → Node.js/JavaScript
- `requirements.txt` or `setup.py` → Python
- `go.mod` → Go
- `pom.xml` → Java (Maven)
- `build.gradle` → Java (Gradle)
- `Gemfile` → Ruby
- `composer.json` → PHP
- `Cargo.toml` → Rust
- `.csproj` → C#/.NET

## Step 2: Run Coverage Tests

### JavaScript/TypeScript (Node.js)
```bash
# Check for test script with coverage
if grep -q "coverage" package.json; then
    npm run coverage
elif grep -q "test:coverage" package.json; then
    npm run test:coverage
elif grep -q "jest" package.json; then
    npx jest --coverage
elif grep -q "vitest" package.json; then
    npx vitest run --coverage
elif grep -q "mocha" package.json; then
    npx nyc mocha
else
    # Default with npm test
    npx nyc npm test
fi
```

### Python
```bash
# Check for pytest or unittest
if [ -f "pytest.ini" ] || [ -f "setup.cfg" ] || grep -q "pytest" requirements.txt; then
    pytest --cov=. --cov-report=html --cov-report=term
elif [ -f ".coveragerc" ]; then
    coverage run -m pytest
    coverage report
    coverage html
else
    # Try with unittest
    python -m coverage run -m unittest discover
    python -m coverage report
    python -m coverage html
fi
```

### Go
```bash
# Go built-in coverage
go test -coverprofile=coverage.out ./...
go tool cover -html=coverage.out -o coverage.html
go tool cover -func=coverage.out
```

### Java (Maven)
```bash
# JaCoCo with Maven
mvn clean test jacoco:report
# Report at: target/site/jacoco/index.html
```

### Java (Gradle)
```bash
# JaCoCo with Gradle
./gradlew test jacocoTestReport
# Report at: build/reports/jacoco/test/html/index.html
```

### Ruby
```bash
# SimpleCov
bundle exec rspec --format documentation
# or
bundle exec rake test
# Report at: coverage/index.html
```

### PHP
```bash
# PHPUnit with coverage
./vendor/bin/phpunit --coverage-html coverage
# or with Xdebug
php -dxdebug.mode=coverage ./vendor/bin/phpunit --coverage-html coverage
```

### Rust
```bash
# Tarpaulin
cargo tarpaulin --out Html
# or with llvm-cov
cargo llvm-cov --html
```

### C#/.NET
```bash
# dotnet test with coverage
dotnet test /p:CollectCoverage=true /p:CoverletOutputFormat=opencover
# or
dotnet test --collect:"XPlat Code Coverage"
```

## Step 3: Display Results

After running coverage, the command will:
1. Show coverage summary in terminal
2. Generate HTML report (if available)
3. Display key metrics:
   - Line coverage %
   - Branch coverage %
   - Function coverage %
   - Uncovered files

## Step 4: Coverage Thresholds

Check if project has coverage requirements:
```bash
# Look for coverage threshold in config
# package.json (Jest)
"jest": {
  "coverageThreshold": {
    "global": {
      "branches": 80,
      "functions": 80,
      "lines": 80,
      "statements": 80
    }
  }
}
```

## Step 5: Update Linear

Post coverage results:
```
@linear create_comment <issue_id> "📊 Code Coverage Report

Overall Coverage: XX%
- Lines: XX%
- Branches: XX%
- Functions: XX%

✅ Meets project threshold of 80%

Uncovered areas:
- [List any significant gaps]

Full report: coverage/index.html"
```

## Step 6: GitHub Integration

If in a PR, add coverage comment:
```bash
# Extract coverage summary
COVERAGE=$(cat coverage/coverage-summary.txt)

# Post to PR
gh pr comment --body "## Coverage Report
${COVERAGE}

View full report in artifacts."
```

## Quick Commands by Language

### Force specific coverage tool:
- `/project:coverage jest` - Force Jest
- `/project:coverage pytest` - Force pytest
- `/project:coverage go` - Force Go coverage
- `/project:coverage maven` - Force Maven/JaCoCo
- `/project:coverage nyc` - Force nyc

## Coverage Configuration Files

The command looks for these config files:
- `.coveragerc` (Python)
- `jest.config.js` (JavaScript)
- `.nycrc` (JavaScript)
- `codecov.yml` (General)
- `sonar-project.properties` (SonarQube)

## Common Issues

### No tests found
- Ensure test files follow naming convention
- Check test directory location
- Verify test runner installed

### Coverage tool not installed
```bash
# JavaScript
npm install --save-dev nyc jest @vitest/coverage-c8

# Python
pip install pytest pytest-cov coverage

# Go (built-in, no install needed)

# Java - add to pom.xml or build.gradle
```

### Low coverage areas
Focus testing on:
- Error handling paths
- Edge cases
- Conditional branches
- Async operations

## Integration with CI/CD

Add to GitHub Actions:
```yaml
- name: Run Coverage
  run: |
    npm run coverage
    
- name: Upload Coverage
  uses: codecov/codecov-action@v3
  with:
    file: ./coverage/lcov.info
```

## Best Practices
1. **Aim for 80%+ coverage** on critical code
2. **Don't chase 100%** - focus on meaningful tests
3. **Cover edge cases** not just happy paths
4. **Update tests** when adding features
5. **Monitor trends** not just absolute numbers

## Example Output
```
=============================== Coverage summary ===============================
Statements   : 87.5% ( 140/160 )
Branches     : 82.3% ( 51/62 )
Functions    : 90.2% ( 37/41 )
Lines        : 87.5% ( 140/160 )
================================================================================

Uncovered files:
- src/utils/helpers.js (45%)
- src/api/auth.js (72%)

HTML report generated at: coverage/index.html
```

## Notes
- Coverage ≠ Quality (high coverage can still miss bugs)
- Focus on critical business logic
- Use coverage to find untested code
- Combine with other quality metrics