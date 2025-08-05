# Run Code Coverage

Automatically detect project type and run appropriate coverage tests.

## Quick Usage
Just run: `/project:coverage`

## Auto-Detection & Execution

### 1. Check Project Type & Run Coverage

```bash
# JavaScript/TypeScript Projects
if [ -f "package.json" ]; then
    echo "📦 JavaScript/TypeScript project detected"
    
    # Check for existing coverage scripts
    if grep -q '"coverage"' package.json; then
        npm run coverage
    elif grep -q '"test:coverage"' package.json; then
        npm run test:coverage
    elif grep -q "jest" package.json; then
        npx jest --coverage --watchAll=false
    elif grep -q "vitest" package.json; then
        npx vitest run --coverage
    elif grep -q "mocha" package.json; then
        npx nyc npm test
    else
        echo "⚠️ No coverage script found. Attempting with nyc..."
        npx nyc npm test
    fi
    
    echo "📊 Coverage report: coverage/lcov-report/index.html"

# Python Projects
elif [ -f "requirements.txt" ] || [ -f "setup.py" ] || [ -f "pyproject.toml" ]; then
    echo "🐍 Python project detected"
    
    if command -v pytest &> /dev/null; then
        pytest --cov=. --cov-report=html --cov-report=term-missing
    else
        python -m coverage run -m pytest || python -m coverage run -m unittest discover
        python -m coverage report
        python -m coverage html
    fi
    
    echo "📊 Coverage report: htmlcov/index.html"

# Go Projects
elif [ -f "go.mod" ]; then
    echo "🐹 Go project detected"
    go test -coverprofile=coverage.out ./...
    go tool cover -html=coverage.out -o coverage.html
    go tool cover -func=coverage.out | grep total
    echo "📊 Coverage report: coverage.html"

# Java Maven Projects
elif [ -f "pom.xml" ]; then
    echo "☕ Java Maven project detected"
    mvn clean test jacoco:report
    echo "📊 Coverage report: target/site/jacoco/index.html"

# Java Gradle Projects
elif [ -f "build.gradle" ] || [ -f "build.gradle.kts" ]; then
    echo "☕ Java Gradle project detected"
    ./gradlew test jacocoTestReport
    echo "📊 Coverage report: build/reports/jacoco/test/html/index.html"

# Ruby Projects
elif [ -f "Gemfile" ]; then
    echo "💎 Ruby project detected"
    bundle exec rspec --format documentation
    echo "📊 Coverage report: coverage/index.html"

# Rust Projects
elif [ -f "Cargo.toml" ]; then
    echo "🦀 Rust project detected"
    cargo test
    cargo tarpaulin --out Html || cargo llvm-cov --html
    echo "📊 Coverage report: tarpaulin-report.html"

# .NET Projects
elif ls *.csproj 1> /dev/null 2>&1; then
    echo "🔷 .NET project detected"
    dotnet test /p:CollectCoverage=true /p:CoverletOutputFormat=cobertura
    echo "📊 Coverage report: coverage.cobertura.xml"

# PHP Projects
elif [ -f "composer.json" ]; then
    echo "🐘 PHP project detected"
    ./vendor/bin/phpunit --coverage-html coverage
    echo "📊 Coverage report: coverage/index.html"

else
    echo "❓ Unknown project type. Please run coverage manually."
fi
```

### 2. Parse & Display Results

After running coverage, extract key metrics:

```bash
# For JavaScript (Jest/NYC)
if [ -f "coverage/coverage-summary.json" ]; then
    cat coverage/coverage-summary.json | grep -E '"pct":|"total":'
fi

# For Python
if command -v coverage &> /dev/null; then
    coverage report | tail -5
fi

# For Go
if [ -f "coverage.out" ]; then
    go tool cover -func=coverage.out | grep total | awk '{print "Total Coverage: " $3}'
fi
```

### 3. Quick Summary Output

```
🎯 Coverage Summary
━━━━━━━━━━━━━━━━━
Statements : 87.5%
Branches   : 82.3%
Functions  : 90.2%
Lines      : 87.5%
━━━━━━━━━━━━━━━━━

✅ Meets threshold (80%)
📊 Full report: coverage/index.html
```

### 4. Update Linear Automatically

```
@linear create_comment <issue_id> "🎯 Coverage Report

Total: 87.5% ✅
- Statements: 87.5%
- Branches: 82.3%
- Functions: 90.2%

Threshold: 80% ✅ PASS"
```

## Common Coverage Commands

### JavaScript
- `npm run coverage` - If defined in package.json
- `npx jest --coverage` - Jest
- `npx vitest run --coverage` - Vitest
- `npx nyc npm test` - NYC with any test runner

### Python
- `pytest --cov=.` - Pytest with coverage
- `coverage run -m pytest` - Coverage.py

### Go
- `go test -cover ./...` - Basic coverage
- `go test -coverprofile=coverage.out ./...` - Detailed

### Java
- `mvn jacoco:report` - Maven
- `./gradlew jacocoTestReport` - Gradle

## Quick Options

Use with options:
- `/project:coverage --watch` - Run in watch mode (JS)
- `/project:coverage --min 90` - Fail if below 90%
- `/project:coverage --html` - Open HTML report after
- `/project:coverage --ci` - CI mode (no watch, fail on threshold)

## Troubleshooting

**No coverage tool installed?**
```bash
# JavaScript
npm install --save-dev nyc @vitest/coverage-v8

# Python  
pip install pytest-cov coverage

# Ruby
bundle add simplecov --group test
```

**Tests not found?**
- Check test file patterns (*.test.js, *_test.py, etc.)
- Verify test directory (test/, tests/, spec/)
- Ensure test runner configured correctly

## Tips
1. Run coverage before PRs
2. Add coverage to CI/CD pipeline
3. Focus on untested business logic
4. Don't test implementation details
5. Aim for quality over quantity